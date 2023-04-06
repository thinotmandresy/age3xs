/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
  createConnection,
  TextDocuments,
  Range,
  ProposedFeatures,
  InitializeParams,
  CompletionItem,
  CompletionItemKind,
  InsertTextFormat,
  SemanticTokens,
  SemanticTokensBuilder,
  TextDocumentPositionParams,
  TextDocumentSyncKind,
  InitializeResult,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import constants from "./constants";
import functions from "./functions";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// List of global variables
const globalVariables: { [key: string]: Range } = {};

connection.onInitialize((params: InitializeParams) => {
  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      // Tell the client that this server supports code completion.
      completionProvider: {
        resolveProvider: true,
      },
    },
  };

  return result;
});

connection.onDidChangeConfiguration((change) => {
  // Revalidate all open text documents
  documents.all().forEach(() => {
    // Perform some validation
  });
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
  //
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
  (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    // The insertText is a snippet, so we need to make sure we have the
    // correct tab stops.
    return parseFunctionString(functions);
  }
);

function parseFunctionString(functionString: string): CompletionItem[] {
  const functionRegex = /\/\/\s(.+)\n(\w+)\s+(\w+)\((.*)\);/g;
  let match = functionRegex.exec(functionString);
  const completionItems: CompletionItem[] = [];
  const keywords = ["if", "else", "switch", "while", "for", "label", "case", "default", "goto", "continue", "break", "breakpoint", "return"];

  keywords.forEach((item) => {
    completionItems.push({
      label: item,
      kind: CompletionItemKind.Keyword,
    });
  });

  constants.forEach((item) => {
    completionItems.push(item);
  });

  while (match !== null) {
    const [, documentation, returnType, label, paramList] = match;
    const parameters = paramList.split(", ");
    let snippet = `${label}(`;
    let snippetIndex = 1;
    parameters.forEach((param) => {
      const [paramType, paramLabel] = param.split(" ");
      const label = paramLabel ? paramLabel : "";
      if (snippetIndex === 1) {
        snippet = snippet + `\${${snippetIndex}:${label}}`;
      } else {
        snippet = snippet + `, \${${snippetIndex}:${label}}`;
      }
      snippetIndex++;
    });
    snippet = snippet + ")";

    completionItems.push({
      label,
      kind: CompletionItemKind.Function,
      documentation: {
        kind: "markdown",
        value: documentation,
      },
      detail: `${returnType} ${label}(${parameters});`,
      insertText: snippet,
      insertTextFormat: InsertTextFormat.Snippet,
    });
    match = functionRegex.exec(functionString);
  }

  return completionItems;
}

connection.onCompletionResolve((item: CompletionItem) => {
  return item;
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
