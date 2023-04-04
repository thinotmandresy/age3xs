import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver';

const constantCompletionItem = (
  label: string,
  detail: string,
  documentation: string,
  insertText: string = ""
): CompletionItem => {
  insertText = insertText === "" ? label : insertText;

  return {
    label,
    kind: CompletionItemKind.Constant,
    documentation: {
      kind: "markdown",
      value: documentation,
    },
    detail,
    insertText,
    insertTextFormat: InsertTextFormat.Snippet,
  };
};

const constants: CompletionItem[] = [
  {
    label: "void",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "rule",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "bool",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "int",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "string",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "vector",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "extern",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "static",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "const",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "mutable",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "active",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "inactive",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "runImmediately",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "highFrequency",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "priority",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "minInterval",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "maxInterval",
    kind: CompletionItemKind.Keyword,
  },
  {
    label: "group",
    kind: CompletionItemKind.Keyword,
  },
  constantCompletionItem(
    "cInvalidVector",
    "cInvalidVector",
    "A position outside the map: (-1, -1, -1)."
  ),
  constantCompletionItem(
    "cOriginVector",
    "cOriginVector",
    "The bottommost corner of the map: (0, 0, 0)."
  ),
  constantCompletionItem("cFilename", "cFilename", "No description (yet)."),
  constantCompletionItem("cMyID", "cMyID", "ID of the default context player."),
  constantCompletionItem(
    "cMyCulture",
    "cMyCulture",
    "Culture ID of the default context player."
  ),
  constantCompletionItem(
    "cMyCiv",
    "cMyCiv",
    "Civ ID of the default context player."
  ),
  constantCompletionItem(
    "cMyTeam",
    "cMyTeam",
    "Team ID of the default context player."
  ),
  constantCompletionItem(
    "cRandomMapName",
    "cRandomMapName",
    "Filename of the current random map."
  ),
  constantCompletionItem(
    "cNumberPlayers",
    "cNumberPlayers",
    "Number of players in the current game, including Mother Nature."
  ),
  constantCompletionItem(
    "cGameTypeCurrent",
    "cGameTypeCurrent",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cUnitStanceAggressive",
    "cUnitStanceAggressive",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cUnitStanceDefensive",
    "cUnitStanceDefensive",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cUnitStancePassive",
    "cUnitStancePassive",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cUnitStanceStandGround",
    "cUnitStanceStandGround",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameModeSupremacy",
    "cGameModeSupremacy",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameModeConquest",
    "cGameModeConquest",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameModeLightning",
    "cGameModeLightning",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameModeDeathmatch",
    "cGameModeDeathmatch",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameModeTwoTown",
    "cGameModeTwoTown",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameModeEmpireWars",
    "cGameModeEmpireWars",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameModeEconomyMode",
    "cGameModeEconomyMode",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameModeCurrent",
    "cGameModeCurrent",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameStartingResourcesStandard",
    "cGameStartingResourcesStandard",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameStartingResourcesMedium",
    "cGameStartingResourcesMedium",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameStartingResourcesHigh",
    "cGameStartingResourcesHigh",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameStartingResourcesUltra",
    "cGameStartingResourcesUltra",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameStartingResourcesInfinite",
    "cGameStartingResourcesInfinite",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGameStartingResourcesRandom",
    "cGameStartingResourcesRandom",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDifficultySandbox",
    "cDifficultySandbox",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDifficultyEasy",
    "cDifficultyEasy",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDifficultyModerate",
    "cDifficultyModerate",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDifficultyHard",
    "cDifficultyHard",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDifficultyExpert",
    "cDifficultyExpert",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDifficultyExtreme",
    "cDifficultyExtreme",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDifficultyCurrent",
    "cDifficultyCurrent",
    "No description (yet)."
  ),
  constantCompletionItem("cAge1", "cAge1", "No description (yet)."),
  constantCompletionItem("cAge2", "cAge2", "No description (yet)."),
  constantCompletionItem("cAge3", "cAge3", "No description (yet)."),
  constantCompletionItem("cAge4", "cAge4", "No description (yet)."),
  constantCompletionItem("cAge5", "cAge5", "No description (yet)."),
  constantCompletionItem(
    "cPlayerRelationAny",
    "cPlayerRelationAny",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerRelationSelf",
    "cPlayerRelationSelf",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerRelationEnemy",
    "cPlayerRelationEnemy",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerRelationAlly",
    "cPlayerRelationAlly",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerRelationEnemyNotGaia",
    "cPlayerRelationEnemyNotGaia",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerRelationAllyExcludingSelf",
    "cPlayerRelationAllyExcludingSelf",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardTypeEcon",
    "cHCCardTypeEcon",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardTypeMilitary",
    "cHCCardTypeMilitary",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardTypeWagon",
    "cHCCardTypeWagon",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardTypeTeam",
    "cHCCardTypeTeam",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagWater",
    "cHCCardFlagWater",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagUnit",
    "cHCCardFlagUnit",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagUnitUpgrade",
    "cHCCardFlagUnitUpgrade",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagTeam",
    "cHCCardFlagTeam",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagMilitary",
    "cHCCardFlagMilitary",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagVillager",
    "cHCCardFlagVillager",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagResourceCrate",
    "cHCCardFlagResourceCrate",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagWagon",
    "cHCCardFlagWagon",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagMercenary",
    "cHCCardFlagMercenary",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagTrickleGold",
    "cHCCardFlagTrickleGold",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagTrickleWood",
    "cHCCardFlagTrickleWood",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagTrickleFood",
    "cHCCardFlagTrickleFood",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagTrickleXP",
    "cHCCardFlagTrickleXP",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagTrickleTrade",
    "cHCCardFlagTrickleTrade",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagGatherRate",
    "cHCCardFlagGatherRate",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHCCardFlagTrainPoints",
    "cHCCardFlagTrainPoints",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cRGPScript",
    "cRGPScript",
    "Use for script-side gatherer allocation."
  ),
  constantCompletionItem(
    "cRGPCost",
    "cRGPCost",
    "Use game-side gatherer allocation."
  ),
  constantCompletionItem(
    "cRGPActual",
    "cRGPActual",
    "Actual gatherer allocation after cRGPScript and cRGPCost are weighted."
  ),
  constantCompletionItem(
    "cNuggetTypeAdjustResource",
    "cNuggetTypeAdjustResource",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetTypeSpawnUnit",
    "cNuggetTypeSpawnUnit",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetTypeGiveLOS",
    "cNuggetTypeGiveLOS",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetTypeAdjustSpeed",
    "cNuggetTypeAdjustSpeed",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetTypeAdjustHP",
    "cNuggetTypeAdjustHP",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetTypeConvertUnit",
    "cNuggetTypeConvertUnit",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetTypeGiveTech",
    "cNuggetTypeGiveTech",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAIResourceSubTypeEasy",
    "cAIResourceSubTypeEasy",
    "Berry Bush, Tree, Mine."
  ),
  constantCompletionItem(
    "cAIResourceSubTypeHerdable",
    "cAIResourceSubTypeHerdable",
    "Sheep, Cow, etc... Does not seem to work."
  ),
  constantCompletionItem(
    "cAIResourceSubTypeHunt",
    "cAIResourceSubTypeHunt",
    "Deer, Bison, Elk, etc..."
  ),
  constantCompletionItem(
    "cAIResourceSubTypeHuntAggressive",
    "cAIResourceSubTypeHuntAggressive",
    "Untested. Probably huntable resources that fight back."
  ),
  constantCompletionItem(
    "cAIResourceSubTypeFarm",
    "cAIResourceSubTypeFarm",
    "Mill, Rice Paddy, etc."
  ),
  constantCompletionItem(
    "cAIResourceSubTypeFish",
    "cAIResourceSubTypeFish",
    "Untested."
  ),
  constantCompletionItem(
    "cAIResourceSubTypeTrade",
    "cAIResourceSubTypeTrade",
    "Untested."
  ),
  constantCompletionItem(
    "cMaxSettlersPerMine",
    "cMaxSettlersPerMine",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMaxSettlersPerMill",
    "cMaxSettlersPerMill",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTSFactorDistance",
    "cTSFactorDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTSFactorPoint",
    "cTSFactorPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTSFactorTimeToDone",
    "cTSFactorTimeToDone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTSFactorBase",
    "cTSFactorBase",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTSFactorDanger",
    "cTSFactorDanger",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTSFactorDistanceToEdge",
    "cTSFactorDistanceToEdge",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cRootEscrowID",
    "cRootEscrowID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cEconomyEscrowID",
    "cEconomyEscrowID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMilitaryEscrowID",
    "cMilitaryEscrowID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cEmergencyEscrowID",
    "cEmergencyEscrowID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMicroPrioritizeTargets",
    "cMicroPrioritizeTargets",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMicroBackHerding",
    "cMicroBackHerding",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMicroKiting",
    "cMicroKiting",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMicroTacticSwitching",
    "cMicroTacticSwitching",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMicroEnableAbilities",
    "cMicroEnableAbilities",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMicroDodging",
    "cMicroDodging",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMicroLevelNone",
    "cMicroLevelNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMicroLevelNormal",
    "cMicroLevelNormal",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMicroLevelHigh",
    "cMicroLevelHigh",
    "No description (yet)."
  ),
  constantCompletionItem("cPlanMove", "cPlanMove", "Untested."),
  constantCompletionItem(
    "cPlanAttack",
    "cPlanAttack",
    "Deprecated. Use cPlanCombat instead. Plan to initiate an attack."
  ),
  constantCompletionItem(
    "cPlanBuild",
    "cPlanBuild",
    "Plan to build a Building (requires the `Build` action in the `.tactics` file)."
  ),
  constantCompletionItem(
    "cPlanTrain",
    "cPlanTrain",
    "Plan to train or maintain a Unit."
  ),
  constantCompletionItem(
    "cPlanResearch",
    "cPlanResearch",
    "Plan to research a Tech."
  ),
  constantCompletionItem("cPlanWork", "cPlanWork", "Untested."),
  constantCompletionItem(
    "cPlanGather",
    "cPlanGather",
    "Plan to gather a Resource. Can conflict with ResourceBreakdown, which also generates a cPlanGather."
  ),
  constantCompletionItem(
    "cPlanExplore",
    "cPlanExplore",
    "Plan to explore the map. Will generate a cPlanGatherNuggets if an explorer is added."
  ),
  constantCompletionItem(
    "cPlanData",
    "cPlanData",
    "Use to store `bool`, `int`, `float`, `string` or `vector`."
  ),
  constantCompletionItem(
    "cPlanProgression",
    "cPlanProgression",
    `Creates all the necessary plans to obtain a Building, a Unit or a Tech.
    For example, assuming that we are currently in Age1, the tech \`VeteranHussars\` requires the sequence
    "Age2 (cPlanResearch) -> Age3 (cPlanResearch) -> Stable (cPlanBuild) -> VeteranHussars (cPlanResearch)".
    One single cPlanProgression can be used to obtain all of these plans.`
  ),
  constantCompletionItem("cPlanFarm", "cPlanFarm", "Untested."),
  constantCompletionItem("cPlanHunt", "cPlanHunt", "Untested."),
  constantCompletionItem(
    "cPlanHuntAggressive",
    "cPlanHuntAggressive",
    "Untested."
  ),
  constantCompletionItem("cPlanFish", "cPlanFish", "Untested."),
  constantCompletionItem(
    "cPlanHerd",
    "cPlanHerd",
    "Plan to herd and optionally feed Herdables."
  ),
  constantCompletionItem(
    "cPlanTransport",
    "cPlanTransport",
    "Plan to garrison, optionally transport, then ungarrison Units."
  ),
  constantCompletionItem(
    "cPlanAttackStrategy",
    "cPlanAttackStrategy",
    "Untested."
  ),
  constantCompletionItem(
    "cPlanRemoved1",
    "cPlanRemoved1",
    "Untested. Seems to show up occasionally in the debugger after a plan dies."
  ),
  constantCompletionItem(
    "cPlanDefend",
    "cPlanDefend",
    "Deprecated. Use cPlanCombat instead. Use to defend a location."
  ),
  constantCompletionItem(
    "cPlanReserve",
    "cPlanReserve",
    "Prevents the assigned units from being assigned to another plan."
  ),
  constantCompletionItem("cPlanGoal", "cPlanGoal", "No description (yet)."),
  constantCompletionItem(
    "cPlanGatherGoal",
    "cPlanGatherGoal",
    "Used for storing values related to resource gathering."
  ),
  constantCompletionItem("cPlanTrade", "cPlanTrade", "Untested."),
  constantCompletionItem(
    "cPlanGatherNuggets",
    "cPlanGatherNuggets",
    "Plan to attack treasure guardians and claim treasures."
  ),
  constantCompletionItem(
    "cPlanMission",
    "cPlanMission",
    "Auto-generated by cPlanGoal to initiate attacks and defenses (and probably other plans)."
  ),
  constantCompletionItem(
    "cPlanBuildWall",
    "cPlanBuildWall",
    "Plan to build a wall as a ring, as a line or as a square."
  ),
  constantCompletionItem(
    "cPlanTownBell",
    "cPlanTownBell",
    "Plan to send `AffectedByTownBell` units to hide in a building."
  ),
  constantCompletionItem("cPlanTower", "cPlanTower", "No description (yet)."),
  constantCompletionItem(
    "cPlanNativeResearch",
    "cPlanNativeResearch",
    "Plan to send villagers to the Community Plaza or any other Unit or Building."
  ),
  constantCompletionItem(
    "cPlanRepair",
    "cPlanRepair",
    "Plan for a repair a building"
  ),
  constantCompletionItem(
    "cPlanCombat",
    "cPlanCombat",
    "Plan for a combat (attack or defense)."
  ),
  constantCompletionItem(
    "cOpportunitySourceAutoGenerated",
    "cOpportunitySourceAutoGenerated",
    "Means that we created the opportunity ourselves. This is the default value."
  ),
  constantCompletionItem(
    "cOpportunitySourceAllyRequest",
    "cOpportunitySourceAllyRequest",
    "Means that the opportunity was created by an ally. This has a higher priority than cOpportunitySourceAutoGenerated."
  ),
  constantCompletionItem(
    "cOpportunitySourceTrigger",
    "cOpportunitySourceTrigger",
    "Means that the opportunity was created by a trigger. This has the highest priority."
  ),
  constantCompletionItem(
    "cOpportunityTypeDestroy",
    "cOpportunityTypeDestroy",
    "Means that we should initiate an attack."
  ),
  constantCompletionItem(
    "cOpportunityTypeClaim",
    "cOpportunityTypeClaim",
    "Means that we should build a Trading Post."
  ),
  constantCompletionItem(
    "cOpportunityTypeRaid",
    "cOpportunityTypeRaid",
    "Means that we should initiate a small attack."
  ),
  constantCompletionItem(
    "cOpportunityTypeDefend",
    "cOpportunityTypeDefend",
    "Means that we should defend a location."
  ),
  constantCompletionItem(
    "cOpportunityTypeRescueExplorer",
    "cOpportunityTypeRescueExplorer",
    "Means that we should send a scout to rescue an explorer."
  ),
  constantCompletionItem(
    "cOpportunityTargetTypeBase",
    "cOpportunityTargetTypeBase",
    'Means that we should attack a base (in the "AI" meaning of the word, i.e. kbBase stuff).'
  ),
  constantCompletionItem(
    "cOpportunityTargetTypeVPSite",
    "cOpportunityTargetTypeVPSite",
    "Means that we should target a socket."
  ),
  constantCompletionItem(
    "cOpportunityTargetTypeResource",
    "cOpportunityTargetTypeResource",
    "Self-explanatory."
  ),
  constantCompletionItem(
    "cOpportunityTargetTypePointRadius",
    "cOpportunityTargetTypePointRadius",
    "Means that we should target a certain area."
  ),
  constantCompletionItem(
    "cOpportunityTargetTypeUnitList",
    "cOpportunityTargetTypeUnitList",
    "Means that we should target a list of units."
  ),
  constantCompletionItem(
    "cMissionTypeNone",
    "cMissionTypeNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionTypeAttack",
    "cMissionTypeAttack",
    "Auto-generated by a cPlanGoal after a cOpportunityTypeDestroy obtained a high enough score."
  ),
  constantCompletionItem(
    "cMissionTypeDefend",
    "cMissionTypeDefend",
    "Auto-generated by a cPlanGoal after a cOpportunityTypeDefend obtained a high enough score."
  ),
  constantCompletionItem(
    "cMissionTypeClaim",
    "cMissionTypeClaim",
    "Auto-generated by a cPlanGoal after a cOpportunityTypeClaim obtained a high enough score."
  ),
  constantCompletionItem(
    "cMissionTypeRaid",
    "cMissionTypeRaid",
    "Auto-generated by a cPlanGoal after a cOpportunityTypeRaid obtained a high enough score."
  ),
  constantCompletionItem(
    "cPlanStateNone",
    "cPlanStateNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateDone",
    "cPlanStateDone",
    "The plan was completed successfully."
  ),
  constantCompletionItem(
    "cPlanStateFailed",
    "cPlanStateFailed",
    "The plan failed."
  ),
  constantCompletionItem(
    "cPlanStateBuild",
    "cPlanStateBuild",
    "The construction is currently progressing."
  ),
  constantCompletionItem(
    "cPlanStateGather",
    "cPlanStateGather",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStatePlace",
    "cPlanStatePlace",
    "The plan is unable to find a suitable location for the building."
  ),
  constantCompletionItem(
    "cPlanStateExplore",
    "cPlanStateExplore",
    "The plan is currently exploring."
  ),
  constantCompletionItem(
    "cPlanStateTrain",
    "cPlanStateTrain",
    "The plan is currently training units."
  ),
  constantCompletionItem(
    "cPlanStateResearch",
    "cPlanStateResearch",
    "The plan is currently researching."
  ),
  constantCompletionItem(
    "cPlanStateAttack",
    "cPlanStateAttack",
    "The plan is currently in a fight."
  ),
  constantCompletionItem(
    "cPlanStateGoto",
    "cPlanStateGoto",
    "The plan is currently trying to reach a certain location."
  ),
  constantCompletionItem(
    "cPlanStateEmpower",
    "cPlanStateEmpower",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateEnter",
    "cPlanStateEnter",
    "The units assigned to the plan are currently queuing up to enter a building/ship/unit."
  ),
  constantCompletionItem(
    "cPlanStateExit",
    "cPlanStateExit",
    "The plan is currently trying to eject units from a building/ship/unit."
  ),
  constantCompletionItem(
    "cPlanStateEvaluate",
    "cPlanStateEvaluate",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStatePatrol",
    "cPlanStatePatrol",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateRetreat",
    "cPlanStateRetreat",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateWorking",
    "cPlanStateWorking",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateTransport",
    "cPlanStateTransport",
    "The plan is currently transporting units."
  ),
  constantCompletionItem(
    "cPlanStateDualPlace",
    "cPlanStateDualPlace",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateWait",
    "cPlanStateWait",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateCast",
    "cPlanStateCast",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateVillagerAttack",
    "cPlanStateVillagerAttack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateClaimNugget",
    "cPlanStateClaimNugget",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateGatherResources",
    "cPlanStateGatherResources",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanStateIdle",
    "cPlanStateIdle",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanEventDone",
    "cPlanEventDone",
    "Event emitted when a plan is completed successfully."
  ),
  constantCompletionItem(
    "cPlanEventFailed",
    "cPlanEventFailed",
    "Event emitted when a plan fails."
  ),
  constantCompletionItem(
    "cPlanEventPoll",
    "cPlanEventPoll",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanEventIdle",
    "cPlanEventIdle",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlanEventStateChange",
    "cPlanEventStateChange",
    "Event emitted when the state of a plan changes."
  ),
  constantCompletionItem(
    "cGatherPlanKBResourceID",
    "cGatherPlanKBResourceID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherPlanResourceID",
    "cGatherPlanResourceID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherPlanResourceType",
    "cGatherPlanResourceType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherPlanResourceSubType",
    "cGatherPlanResourceSubType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherPlanBreakDownID",
    "cGatherPlanBreakDownID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherPlanResourceUnitTypeFilter",
    "cGatherPlanResourceUnitTypeFilter",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherPlanFindNewResourceTimeOut",
    "cGatherPlanFindNewResourceTimeOut",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherPlanQuitWhenResourceIsInvalid",
    "cGatherPlanQuitWhenResourceIsInvalid",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanBuildingPlacementID",
    "cBuildPlanBuildingPlacementID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanBuildingTypeID",
    "cBuildPlanBuildingTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceUnitTypeID",
    "cBuildPlanInfluenceUnitTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceUnitDistance",
    "cBuildPlanInfluenceUnitDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceUnitValue",
    "cBuildPlanInfluenceUnitValue",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceUnitFalloff",
    "cBuildPlanInfluenceUnitFalloff",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanAreaID",
    "cBuildPlanAreaID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanCenterPosition",
    "cBuildPlanCenterPosition",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanCenterPositionDistance",
    "cBuildPlanCenterPositionDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanVPSiteID",
    "cBuildPlanVPSiteID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanSocketID",
    "cBuildPlanSocketID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanBuildUnitID",
    "cBuildPlanBuildUnitID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanFoundationID",
    "cBuildPlanFoundationID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluencePosition",
    "cBuildPlanInfluencePosition",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluencePositionDistance",
    "cBuildPlanInfluencePositionDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluencePositionValue",
    "cBuildPlanInfluencePositionValue",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluencePositionFalloff",
    "cBuildPlanInfluencePositionFalloff",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanDockPlacementPoint",
    "cBuildPlanDockPlacementPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanNumAreaBorderLayers",
    "cBuildPlanNumAreaBorderLayers",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanBuildingBufferSpace",
    "cBuildPlanBuildingBufferSpace",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanFailOnUnaffordable",
    "cBuildPlanFailOnUnaffordable",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceKBResourceID",
    "cBuildPlanInfluenceKBResourceID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanRandomBPValue",
    "cBuildPlanRandomBPValue",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceAtBuilderPosition",
    "cBuildPlanInfluenceAtBuilderPosition",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceBuilderPositionValue",
    "cBuildPlanInfluenceBuilderPositionValue",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceBuilderPositionDistance",
    "cBuildPlanInfluenceBuilderPositionDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceBuilderPositionFalloff",
    "cBuildPlanInfluenceBuilderPositionFalloff",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanRetries",
    "cBuildPlanRetries",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanMaxRetries",
    "cBuildPlanMaxRetries",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanPendingCommands",
    "cBuildPlanPendingCommands",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanFailureCause",
    "cBuildPlanFailureCause",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanFailureCauseFloat",
    "cBuildPlanFailureCauseFloat",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanMaxCanPaths",
    "cBuildPlanMaxCanPaths",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanCanPathStartIndex",
    "cBuildPlanCanPathStartIndex",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceVPSiteType",
    "cBuildPlanInfluenceVPSiteType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceVPSiteTypeValue",
    "cBuildPlanInfluenceVPSiteTypeValue",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceVPSiteTypeDistance",
    "cBuildPlanInfluenceVPSiteTypeDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanInfluenceVPSiteTypeFalloff",
    "cBuildPlanInfluenceVPSiteTypeFalloff",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanLocationPreference",
    "cBuildPlanLocationPreference",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanCenterPositionStep",
    "cBuildPlanCenterPositionStep",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanDoneWhenFoundationPlaced",
    "cBuildPlanDoneWhenFoundationPlaced",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanNoUnitTimer",
    "cBuildPlanNoUnitTimer",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildPlanNoUnitTimeout",
    "cBuildPlanNoUnitTimeout",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanBuildingID",
    "cTrainPlanBuildingID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanIntoArmyID",
    "cTrainPlanIntoArmyID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanIntoPlanID",
    "cTrainPlanIntoPlanID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanIntoBaseID",
    "cTrainPlanIntoBaseID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanNumberToTrain",
    "cTrainPlanNumberToTrain",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanNumberToMaintain",
    "cTrainPlanNumberToMaintain",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanNumberTrained",
    "cTrainPlanNumberTrained",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanUnitType",
    "cTrainPlanUnitType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanBuildFromType",
    "cTrainPlanBuildFromType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanTrainedUnitID",
    "cTrainPlanTrainedUnitID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanFrequency",
    "cTrainPlanFrequency",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanUseMultipleBuildings",
    "cTrainPlanUseMultipleBuildings",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanGatherPoint",
    "cTrainPlanGatherPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanGatherTargetID",
    "cTrainPlanGatherTargetID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanMaintainBaseID",
    "cTrainPlanMaintainBaseID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanMaintainAreaID",
    "cTrainPlanMaintainAreaID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanBatchSize",
    "cTrainPlanBatchSize",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTrainPlanMaxQueueSize",
    "cTrainPlanMaxQueueSize",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanLOSMultiplier",
    "cExplorePlanLOSMultiplier",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanDoLoops",
    "cExplorePlanDoLoops",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanDoneLoops",
    "cExplorePlanDoneLoops",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanNumberOfLoops",
    "cExplorePlanNumberOfLoops",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanPointsInLoop",
    "cExplorePlanPointsInLoop",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanAvoidingAttackedAreas",
    "cExplorePlanAvoidingAttackedAreas",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanReExploreAreas",
    "cExplorePlanReExploreAreas",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanLOSProtoUnitID",
    "cExplorePlanLOSProtoUnitID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanBuildPosition",
    "cExplorePlanBuildPosition",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanBuilderUnitType",
    "cExplorePlanBuilderUnitType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanCanBuildLOSProto",
    "cExplorePlanCanBuildLOSProto",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanHandleDamageTime",
    "cExplorePlanHandleDamageTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanHandleDamageFrequency",
    "cExplorePlanHandleDamageFrequency",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanQuitWhenPointIsVisible",
    "cExplorePlanQuitWhenPointIsVisible",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanQuitWhenPointIsVisiblePt",
    "cExplorePlanQuitWhenPointIsVisiblePt",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanCurrentNuggetID",
    "cExplorePlanCurrentNuggetID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanNuggetsToGather",
    "cExplorePlanNuggetsToGather",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cExplorePlanOkToGatherNuggets",
    "cExplorePlanOkToGatherNuggets",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResearchPlanBuildingID",
    "cResearchPlanBuildingID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResearchPlanBuildingTypeID",
    "cResearchPlanBuildingTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResearchPlanTechID",
    "cResearchPlanTechID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResearchPlanBuildingAbstractTypeID",
    "cResearchPlanBuildingAbstractTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResearchPlanDestroyWhenBuildingIsGone",
    "cResearchPlanDestroyWhenBuildingIsGone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResearchPlanProtoUnitCommandID",
    "cResearchPlanProtoUnitCommandID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanPlayerID",
    "cAttackPlanPlayerID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanSpecificTargetID",
    "cAttackPlanSpecificTargetID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanTargetTypeID",
    "cAttackPlanTargetTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanQueryID",
    "cAttackPlanQueryID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAttackRouteID",
    "cAttackPlanAttackRouteID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAttackRoutePattern",
    "cAttackPlanAttackRoutePattern",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanGatherPoint",
    "cAttackPlanGatherPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanGatherDistance",
    "cAttackPlanGatherDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanTargetID",
    "cAttackPlanTargetID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanMoveAttack",
    "cAttackPlanMoveAttack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanNumberAttacks",
    "cAttackPlanNumberAttacks",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanRefreshFrequency",
    "cAttackPlanRefreshFrequency",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanLastRefreshTime",
    "cAttackPlanLastRefreshTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanHandleDamageTime",
    "cAttackPlanHandleDamageTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanHandleDamageFrequency",
    "cAttackPlanHandleDamageFrequency",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackMode",
    "cAttackPlanBaseAttackMode",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanPathID",
    "cAttackPlanPathID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanFromGoalID",
    "cAttackPlanFromGoalID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanRetreatMode",
    "cAttackPlanRetreatMode",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanTargetAreaGroups",
    "cAttackPlanTargetAreaGroups",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanTeleportLocation",
    "cAttackPlanTeleportLocation",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAutoUseGPs",
    "cAttackPlanAutoUseGPs",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanPowerID",
    "cAttackPlanPowerID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanGatherStartTime",
    "cAttackPlanGatherStartTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanTargetResourceType",
    "cAttackPlanTargetResourceType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAttackPoint",
    "cAttackPlanAttackPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAttackPointEngageRange",
    "cAttackPlanAttackPointEngageRange",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAttackExplicitBaseID",
    "cAttackPlanAttackExplicitBaseID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanGatherWaitTime",
    "cAttackPlanGatherWaitTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanRefreshAttackRoute",
    "cAttackPlanRefreshAttackRoute",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanLastEncounterTime",
    "cAttackPlanLastEncounterTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanLastEvaluateTime",
    "cAttackPlanLastEvaluateTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanLastEvaluateResult",
    "cAttackPlanLastEvaluateResult",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAllowMoreUnitsDuringAttack",
    "cAttackPlanAllowMoreUnitsDuringAttack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAttackRoutePatternLRU",
    "cAttackPlanAttackRoutePatternLRU",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAttackRoutePatternMRU",
    "cAttackPlanAttackRoutePatternMRU",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAttackRoutePatternRandom",
    "cAttackPlanAttackRoutePatternRandom",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanAttackRoutePatternBest",
    "cAttackPlanAttackRoutePatternBest",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackModeNone",
    "cAttackPlanBaseAttackModeNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackModeWeakest",
    "cAttackPlanBaseAttackModeWeakest",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackModeStrongest",
    "cAttackPlanBaseAttackModeStrongest",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackModeLRU",
    "cAttackPlanBaseAttackModeLRU",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackModeMRU",
    "cAttackPlanBaseAttackModeMRU",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackModeRandom",
    "cAttackPlanBaseAttackModeRandom",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackModeClosest",
    "cAttackPlanBaseAttackModeClosest",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackModeFarthest",
    "cAttackPlanBaseAttackModeFarthest",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanBaseAttackModeExplicit",
    "cAttackPlanBaseAttackModeExplicit",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanRetreatModeNone",
    "cAttackPlanRetreatModeNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanRetreatModeOutnumbered",
    "cAttackPlanRetreatModeOutnumbered",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackPlanRetreatModeOpportunistic",
    "cAttackPlanRetreatModeOpportunistic",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanPollingTime",
    "cProgressionPlanPollingTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanProgressionID",
    "cProgressionPlanProgressionID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanTrainUnitAtEnd",
    "cProgressionPlanTrainUnitAtEnd",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanNumGoalUnitsToBuild",
    "cProgressionPlanNumGoalUnitsToBuild",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanGoalUnitID",
    "cProgressionPlanGoalUnitID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanGoalTechID",
    "cProgressionPlanGoalTechID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanBuildAreaID",
    "cProgressionPlanBuildAreaID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanCurrentGoalID",
    "cProgressionPlanCurrentGoalID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanCurrentGoalType",
    "cProgressionPlanCurrentGoalType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanCurrentStep",
    "cProgressionPlanCurrentStep",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanCurrentStepPlanID",
    "cProgressionPlanCurrentStepPlanID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanPaused",
    "cProgressionPlanPaused",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanAdvanceOneStep",
    "cProgressionPlanAdvanceOneStep",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanRunInParallel",
    "cProgressionPlanRunInParallel",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanChildProgressions",
    "cProgressionPlanChildProgressions",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cProgressionPlanBuildingPref",
    "cProgressionPlanBuildingPref",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHerdPlanBuildingID",
    "cHerdPlanBuildingID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHerdPlanBuildingTypeID",
    "cHerdPlanBuildingTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHerdPlanDistance",
    "cHerdPlanDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cHerdPlanUseMultipleBuildings",
    "cHerdPlanUseMultipleBuildings",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanLandPoint",
    "cFishPlanLandPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanWaterPoint",
    "cFishPlanWaterPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanLandGroupID",
    "cFishPlanLandGroupID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanWaterGroupID",
    "cFishPlanWaterGroupID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanAutoTrainBoats",
    "cFishPlanAutoTrainBoats",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanNumberInTraining",
    "cFishPlanNumberInTraining",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanDockID",
    "cFishPlanDockID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanMaximumDockDist",
    "cFishPlanMaximumDockDist",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanPlaceRetries",
    "cFishPlanPlaceRetries",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanMaxPlaceRetries",
    "cFishPlanMaxPlaceRetries",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanBuildDock",
    "cFishPlanBuildDock",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanResourceType",
    "cFishPlanResourceType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanResourceSubType",
    "cFishPlanResourceSubType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanKBResourceID",
    "cFishPlanKBResourceID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanBreakDownID",
    "cFishPlanBreakDownID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanRetreatDockID",
    "cFishPlanRetreatDockID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanQuitWhenResourceIsInvalid",
    "cFishPlanQuitWhenResourceIsInvalid",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cFishPlanRetreatTime",
    "cFishPlanRetreatTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanTransportID",
    "cTransportPlanTransportID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanTransportTypeID",
    "cTransportPlanTransportTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanGatherPoint",
    "cTransportPlanGatherPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanTargetPoint",
    "cTransportPlanTargetPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanGatherAreaGroup",
    "cTransportPlanGatherAreaGroup",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanTargetAreaGroup",
    "cTransportPlanTargetAreaGroup",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanGatherArea",
    "cTransportPlanGatherArea",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanTargetArea",
    "cTransportPlanTargetArea",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanPathType",
    "cTransportPlanPathType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanPathPlanned",
    "cTransportPlanPathPlanned",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanReturnWhenDone",
    "cTransportPlanReturnWhenDone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanMaximizeXportMovement",
    "cTransportPlanMaximizeXportMovement",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanUnitsMoved",
    "cTransportPlanUnitsMoved",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanIgnoreAreaIDs",
    "cTransportPlanIgnoreAreaIDs",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanBestDangerArea",
    "cTransportPlanBestDangerArea",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanBestDangerValue",
    "cTransportPlanBestDangerValue",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanDropOffPoint",
    "cTransportPlanDropOffPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanPersistent",
    "cTransportPlanPersistent",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanMiddleAreaGroups",
    "cTransportPlanMiddleAreaGroups",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPlanTakeMoreUnits",
    "cTransportPlanTakeMoreUnits",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTradePlanTargetUnitTypeID",
    "cTradePlanTargetUnitTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTradePlanTargetUnitID",
    "cTradePlanTargetUnitID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTradePlanStartPosition",
    "cTradePlanStartPosition",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTradePlanTradeUnitType",
    "cTradePlanTradeUnitType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTradePlanTradeUnitTypeMax",
    "cTradePlanTradeUnitTypeMax",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTradePlanMarketID",
    "cTradePlanMarketID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanCenterLocation",
    "cTowerPlanCenterLocation",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanAreaID",
    "cTowerPlanAreaID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanDistanceFromCenter",
    "cTowerPlanDistanceFromCenter",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanMaximizeLOS",
    "cTowerPlanMaximizeLOS",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanMaximizeAttack",
    "cTowerPlanMaximizeAttack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanNumberToBuild",
    "cTowerPlanNumberToBuild",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanBuildLocations",
    "cTowerPlanBuildLocations",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanProtoIDToBuild",
    "cTowerPlanProtoIDToBuild",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanAttackLOSModifier",
    "cTowerPlanAttackLOSModifier",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTowerPlanLOSModifier",
    "cTowerPlanLOSModifier",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackStrategyPlanPlayerID",
    "cAttackStrategyPlanPlayerID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackStrategyPlanNumberTotalAttacks",
    "cAttackStrategyPlanNumberTotalAttacks",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanDefendTargetID",
    "cDefendPlanDefendTargetID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanDefendAreaID",
    "cDefendPlanDefendAreaID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanDefendBaseID",
    "cDefendPlanDefendBaseID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanDefendPoint",
    "cDefendPlanDefendPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanEngageRange",
    "cDefendPlanEngageRange",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanPatrol",
    "cDefendPlanPatrol",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanPatrolWaypoint",
    "cDefendPlanPatrolWaypoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanCurrentWaypoint",
    "cDefendPlanCurrentWaypoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanTargetID",
    "cDefendPlanTargetID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanGatherDistance",
    "cDefendPlanGatherDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanRefreshFrequency",
    "cDefendPlanRefreshFrequency",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanLastRefreshTime",
    "cDefendPlanLastRefreshTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanAttackTypeID",
    "cDefendPlanAttackTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanGatherPercentage",
    "cDefendPlanGatherPercentage",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanNoTargetTimeout",
    "cDefendPlanNoTargetTimeout",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanNoTargetTimer",
    "cDefendPlanNoTargetTimer",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanStopTakingUnits",
    "cDefendPlanStopTakingUnits",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cDefendPlanStopTakingUnitTime",
    "cDefendPlanStopTakingUnitTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetPlanGatherDistance",
    "cNuggetPlanGatherDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetPlanGatherPercentage",
    "cNuggetPlanGatherPercentage",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetPlanMaxGuardianStrength",
    "cNuggetPlanMaxGuardianStrength",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetPlanTargetNuggetID",
    "cNuggetPlanTargetNuggetID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNuggetPlanTargetGatherPosition",
    "cNuggetPlanTargetGatherPosition",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cReservePlanPlanType",
    "cReservePlanPlanType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalType",
    "cGoalPlanGoalType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalSubType",
    "cGoalPlanGoalSubType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanMinTime",
    "cGoalPlanMinTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanMaxTime",
    "cGoalPlanMaxTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanMinAge",
    "cGoalPlanMinAge",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanMaxAge",
    "cGoalPlanMaxAge",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanRepeat",
    "cGoalPlanRepeat",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanExecuteCount",
    "cGoalPlanExecuteCount",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanDoneGoal",
    "cGoalPlanDoneGoal",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanFailGoal",
    "cGoalPlanFailGoal",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanExecuteGoal",
    "cGoalPlanExecuteGoal",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanAutoUpdateState",
    "cGoalPlanAutoUpdateState",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanAutoUpdateBase",
    "cGoalPlanAutoUpdateBase",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanAutoUpdateAttackPlayerID",
    "cGoalPlanAutoUpdateAttackPlayerID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetType",
    "cGoalPlanTargetType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTarget",
    "cGoalPlanTarget",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetPoint",
    "cGoalPlanTargetPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetNumber",
    "cGoalPlanTargetNumber",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanMinUnitNumber",
    "cGoalPlanMinUnitNumber",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanMaxUnitNumber",
    "cGoalPlanMaxUnitNumber",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanUnitPickerID",
    "cGoalPlanUnitPickerID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanUnitPickerFrequency",
    "cGoalPlanUnitPickerFrequency",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanUnitPickerTime",
    "cGoalPlanUnitPickerTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanAttackPlayerID",
    "cGoalPlanAttackPlayerID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanAttackStartFrequency",
    "cGoalPlanAttackStartFrequency",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanAttackStartTime",
    "cGoalPlanAttackStartTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanUnitTypeID",
    "cGoalPlanUnitTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanBaseID",
    "cGoalPlanBaseID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanAllowRetreat",
    "cGoalPlanAllowRetreat",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanUpgradeBuilding",
    "cGoalPlanUpgradeBuilding",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanSetAreaGroups",
    "cGoalPlanSetAreaGroups",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanIdleAttack",
    "cGoalPlanIdleAttack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanAreaGroupID",
    "cGoalPlanAreaGroupID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanFunctionID",
    "cGoalPlanFunctionID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanFunctionParm",
    "cGoalPlanFunctionParm",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanBuildingTypeID",
    "cGoalPlanBuildingTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanBuildingPlacementID",
    "cGoalPlanBuildingPlacementID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanBuildingSearchID",
    "cGoalPlanBuildingSearchID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanActiveHealthTypeID",
    "cGoalPlanActiveHealthTypeID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanActiveHealth",
    "cGoalPlanActiveHealth",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanAttackRoutePatternType",
    "cGoalPlanAttackRoutePatternType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanUpgradeFilterType",
    "cGoalPlanUpgradeFilterType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanReservePlanID",
    "cGoalPlanReservePlanID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanFindBestOpp",
    "cGoalPlanFindBestOpp",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanMinOppScoreForGo",
    "cGoalPlanMinOppScoreForGo",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanOppScoreStep",
    "cGoalPlanOppScoreStep",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanOppScoreTimeout",
    "cGoalPlanOppScoreTimeout",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeForwardBase",
    "cGoalPlanGoalTypeForwardBase",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeCreateBase",
    "cGoalPlanGoalTypeCreateBase",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeMainBase",
    "cGoalPlanGoalTypeMainBase",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeAttack",
    "cGoalPlanGoalTypeAttack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeDefend",
    "cGoalPlanGoalTypeDefend",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeTrain",
    "cGoalPlanGoalTypeTrain",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeMaintain",
    "cGoalPlanGoalTypeMaintain",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeResearch",
    "cGoalPlanGoalTypeResearch",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeAge",
    "cGoalPlanGoalTypeAge",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeCallback",
    "cGoalPlanGoalTypeCallback",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalTypeBuilding",
    "cGoalPlanGoalTypeBuilding",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalSubTypeEmpty1",
    "cGoalPlanGoalSubTypeEmpty1",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanGoalSubTypeEmpty2",
    "cGoalPlanGoalSubTypeEmpty2",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetTypeArea",
    "cGoalPlanTargetTypeArea",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetTypeAreaGroup",
    "cGoalPlanTargetTypeAreaGroup",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetTypePoint",
    "cGoalPlanTargetTypePoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetTypeUnitType",
    "cGoalPlanTargetTypeUnitType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetTypeUnit",
    "cGoalPlanTargetTypeUnit",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetTypePlayer",
    "cGoalPlanTargetTypePlayer",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetTypePlayerRelation",
    "cGoalPlanTargetTypePlayerRelation",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGoalPlanTargetTypeTech",
    "cGoalPlanTargetTypeTech",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanScriptRPGPct",
    "cGatherGoalPlanScriptRPGPct",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanCostRPGPct",
    "cGatherGoalPlanCostRPGPct",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanGathererPct",
    "cGatherGoalPlanGathererPct",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanNumFoodPlans",
    "cGatherGoalPlanNumFoodPlans",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanNumWoodPlans",
    "cGatherGoalPlanNumWoodPlans",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanNumGoldPlans",
    "cGatherGoalPlanNumGoldPlans",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanMinResourceAmt",
    "cGatherGoalPlanMinResourceAmt",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanResourceCostWeight",
    "cGatherGoalPlanResourceCostWeight",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanFarmLimitPerPlan",
    "cGatherGoalPlanFarmLimitPerPlan",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanMaxFarmLimit",
    "cGatherGoalPlanMaxFarmLimit",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cGatherGoalPlanResourceSkew",
    "cGatherGoalPlanResourceSkew",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanWallType",
    "cBuildWallPlanWallType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanWallStart",
    "cBuildWallPlanWallStart",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanWallEnd",
    "cBuildWallPlanWallEnd",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanWallRingCenterPoint",
    "cBuildWallPlanWallRingCenterPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanWallRingRadius",
    "cBuildWallPlanWallRingRadius",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanNumberOfGates",
    "cBuildWallPlanNumberOfGates",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanAreaIDs",
    "cBuildWallPlanAreaIDs",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanFoundationID",
    "cBuildWallPlanFoundationID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanGateIndices",
    "cBuildWallPlanGateIndices",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanGateProtoIDs",
    "cBuildWallPlanGateProtoIDs",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanEdgeOfMapBuffer",
    "cBuildWallPlanEdgeOfMapBuffer",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanPieces",
    "cBuildWallPlanPieces",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanPiecePositions",
    "cBuildWallPlanPiecePositions",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanPieceRotations",
    "cBuildWallPlanPieceRotations",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanEnRoute",
    "cBuildWallPlanEnRoute",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanWallTypeStraight",
    "cBuildWallPlanWallTypeStraight",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanWallTypeRing",
    "cBuildWallPlanWallTypeRing",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildWallPlanWallTypeArea",
    "cBuildWallPlanWallTypeArea",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionPlanPlanID",
    "cMissionPlanPlanID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionPlanType",
    "cMissionPlanType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionPlanStartTime",
    "cMissionPlanStartTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionPlanTarget",
    "cMissionPlanTarget",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionPlanVector1",
    "cMissionPlanVector1",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionPlanVector2",
    "cMissionPlanVector2",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionPlanFloat1",
    "cMissionPlanFloat1",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionPlanFloat2",
    "cMissionPlanFloat2",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMissionPlanOpportunityID",
    "cMissionPlanOpportunityID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPathTypePoints",
    "cTransportPathTypePoints",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTransportPathTypeAreas",
    "cTransportPathTypeAreas",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNativeResearchPlanBuildingID",
    "cNativeResearchPlanBuildingID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cNativeResearchPlanTacticID",
    "cNativeResearchPlanTacticID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cRepairPlanTargetID",
    "cRepairPlanTargetID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cRepairPlanPersistent",
    "cRepairPlanPersistent",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanCombatType",
    "cCombatPlanCombatType",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanAttackRouteID",
    "cCombatPlanAttackRouteID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanAttackRoutePattern",
    "cCombatPlanAttackRoutePattern",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanAttackPathID",
    "cCombatPlanAttackPathID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanTargetMode",
    "cCombatPlanTargetMode",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanTargetPlayerID",
    "cCombatPlanTargetPlayerID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanTargetBaseID",
    "cCombatPlanTargetBaseID",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanTargetPoint",
    "cCombatPlanTargetPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanGatherPoint",
    "cCombatPlanGatherPoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanGatherDistance",
    "cCombatPlanGatherDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanGatherStartTime",
    "cCombatPlanGatherStartTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanGatherWaitTime",
    "cCombatPlanGatherWaitTime",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanGatherUnitMaxDistance",
    "cCombatPlanGatherUnitMaxDistance",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanGatherWaitForAllUnits",
    "cCombatPlanGatherWaitForAllUnits",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanRetreatMode",
    "cCombatPlanRetreatMode",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanAllowMoreUnitsDuringAttack",
    "cCombatPlanAllowMoreUnitsDuringAttack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanDoneMode",
    "cCombatPlanDoneMode",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanNoTargetTimer",
    "cCombatPlanNoTargetTimer",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanNoTargetTimeout",
    "cCombatPlanNoTargetTimeout",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanTargetEngageRange",
    "cCombatPlanTargetEngageRange",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanRefreshFrequency",
    "cCombatPlanRefreshFrequency",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanInCombat",
    "cCombatPlanInCombat",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanCombatTypeAttack",
    "cCombatPlanCombatTypeAttack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanCombatTypeDefend",
    "cCombatPlanCombatTypeDefend",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanTargetModeBase",
    "cCombatPlanTargetModeBase",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanTargetModePoint",
    "cCombatPlanTargetModePoint",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanAttackRoutePatternLRU",
    "cCombatPlanAttackRoutePatternLRU",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanAttackRoutePatternMRU",
    "cCombatPlanAttackRoutePatternMRU",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanAttackRoutePatternRandom",
    "cCombatPlanAttackRoutePatternRandom",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanAttackRoutePatternBest",
    "cCombatPlanAttackRoutePatternBest",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanRetreatModeNone",
    "cCombatPlanRetreatModeNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanRetreatModeOutnumbered",
    "cCombatPlanRetreatModeOutnumbered",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanRetreatModeOpportunistic",
    "cCombatPlanRetreatModeOpportunistic",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanDoneModeRetreat",
    "cCombatPlanDoneModeRetreat",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanDoneModeNoTarget",
    "cCombatPlanDoneModeNoTarget",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanDoneModeNoUnits",
    "cCombatPlanDoneModeNoUnits",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCombatPlanDoneModeBaseGone",
    "cCombatPlanDoneModeBaseGone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResignGatherers",
    "cResignGatherers",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResignTeammates",
    "cResignTeammates",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResignMilitaryPop",
    "cResignMilitaryPop",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMovementTypeNone",
    "cMovementTypeNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMovementTypeLand",
    "cMovementTypeLand",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMovementTypeWater",
    "cMovementTypeWater",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMovementTypeAir",
    "cMovementTypeAir",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cMovementTypeNonSolid",
    "cMovementTypeNonSolid",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cUnitStateNone",
    "cUnitStateNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cUnitStateBuilding",
    "cUnitStateBuilding",
    "Building under construction."
  ),
  constantCompletionItem(
    "cUnitStateAlive",
    "cUnitStateAlive",
    "Alive. Trees that have already been hit by villagers don't count, even if they haven't fallen yet."
  ),
  constantCompletionItem(
    "cUnitStateDead",
    "cUnitStateDead",
    "Dead (current hitpoints 0). "
  ),
  constantCompletionItem(
    "cUnitStateQueued",
    "cUnitStateQueued",
    "Unit being trained. Does not work with kbUnitQuery"
  ),
  constantCompletionItem(
    "cUnitStateAny",
    "cUnitStateAny",
    "None, Building, Alive, Dead, Queued."
  ),
  constantCompletionItem(
    "cUnitStateABQ",
    "cUnitStateABQ",
    "Alive, Building, Queued."
  ),
  constantCompletionItem(
    "cBuildingPlacementEventDone",
    "cBuildingPlacementEventDone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildingPlacementEventFailed",
    "cBuildingPlacementEventFailed",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cUnitQueryNoArmy",
    "cUnitQueryNoArmy",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cUnitQueryInvalidArmy",
    "cUnitQueryInvalidArmy",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildingPlacementPreferenceNone",
    "cBuildingPlacementPreferenceNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildingPlacementPreferenceBack",
    "cBuildingPlacementPreferenceBack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildingPlacementPreferenceFront",
    "cBuildingPlacementPreferenceFront",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildingPlacementPreferenceLeft",
    "cBuildingPlacementPreferenceLeft",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBuildingPlacementPreferenceRight",
    "cBuildingPlacementPreferenceRight",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBPIFalloffLinear",
    "cBPIFalloffLinear",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBPIFalloffNone",
    "cBPIFalloffNone",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cBPIFalloffLinearInverse",
    "cBPIFalloffLinearInverse",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cCiv",
    "cCiv",
    "Contains the civilization's ID, which is its position in `Game\\Data\\civs.xml`.",
    "cCiv${1:Nature}"
  ),
  constantCompletionItem(
    "cCulture",
    "cCulture",
    "Contains the culture's ID, which is its position in `Game\\Data\\cultures.xml`",
    "cCulture${1:Nature}"
  ),
  constantCompletionItem(
    "cResourceGold",
    "cResourceGold",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResourceWood",
    "cResourceWood",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResourceFood",
    "cResourceFood",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResourceFame",
    "cResourceFame",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResourceSkillPoints",
    "cResourceSkillPoints",
    "No description (yet)."
  ),
  constantCompletionItem("cResourceXP", "cResourceXP", "No description (yet)."),
  constantCompletionItem(
    "cResourceShips",
    "cResourceShips",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResourceTrade",
    "cResourceTrade",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cResourceInfluence",
    "cResourceInfluence",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAllResources",
    "cAllResources",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTechStatusUnobtainable",
    "cTechStatusUnobtainable",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTechStatusObtainable",
    "cTechStatusObtainable",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cTechStatusActive",
    "cTechStatusActive",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackRouteFrontRight",
    "cAttackRouteFrontRight",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackRouteRightFront",
    "cAttackRouteRightFront",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackRouteRightBack",
    "cAttackRouteRightBack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackRouteBackRight",
    "cAttackRouteBackRight",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackRouteBackLeft",
    "cAttackRouteBackLeft",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackRouteLeftBack",
    "cAttackRouteLeftBack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackRouteLeftFront",
    "cAttackRouteLeftFront",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAttackRouteFrontLeft",
    "cAttackRouteFrontLeft",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAreaTypeForest",
    "cAreaTypeForest",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAreaTypeWater",
    "cAreaTypeWater",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAreaTypeImpassableLand",
    "cAreaTypeImpassableLand",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAreaTypeVPSite",
    "cAreaTypeVPSite",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAreaGroupTypeLand",
    "cAreaGroupTypeLand",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAreaGroupTypeWater",
    "cAreaGroupTypeWater",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAreaGroupTypeImpassableLand",
    "cAreaGroupTypeImpassableLand",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSAgeHandler",
    "cXSAgeHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSPowerHandler",
    "cXSPowerHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSRetreatHandler",
    "cXSRetreatHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSResignHandler",
    "cXSResignHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSBuildHandler",
    "cXSBuildHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSHomeCityTransportArriveHandler",
    "cXSHomeCityTransportArriveHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSHomeCityTransportReturnHandler",
    "cXSHomeCityTransportReturnHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSHomeCityLevelUpHandler",
    "cXSHomeCityLevelUpHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSTreatyBrokenHandler",
    "cXSTreatyBrokenHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSShipResourceGranted",
    "cXSShipResourceGranted",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSAutoCreatePlanHandler",
    "cXSAutoCreatePlanHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSNuggetHandler",
    "cXSNuggetHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSPlayerAgeHandler",
    "cXSPlayerAgeHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSScoreOppHandler",
    "cXSScoreOppHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSMissionStartHandler",
    "cXSMissionStartHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSMissionEndHandler",
    "cXSMissionEndHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSGameOverHandler",
    "cXSGameOverHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSMonopolyStartHandler",
    "cXSMonopolyStartHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSMonopolyEndHandler",
    "cXSMonopolyEndHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSWonderVictoryStartHandler",
    "cXSWonderVictoryStartHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSWonderVictoryEndHandler",
    "cXSWonderVictoryEndHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSRelicVictoryStartHandler",
    "cXSRelicVictoryStartHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSRelicVictoryEndHandler",
    "cXSRelicVictoryEndHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSKOTHVictoryStartHandler",
    "cXSKOTHVictoryStartHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSKOTHVictoryEndHandler",
    "cXSKOTHVictoryEndHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSAutoCreateBuildPlanHandler_DEPRECATED",
    "cXSAutoCreateBuildPlanHandler_DEPRECATED",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSRevoltedHandler",
    "cXSRevoltedHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cXSBuildingPlacementFailedHandler",
    "cXSBuildingPlacementFailedHandler",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatVerbInvalid",
    "cPlayerChatVerbInvalid",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatVerbAttack",
    "cPlayerChatVerbAttack",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatVerbDefend",
    "cPlayerChatVerbDefend",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatVerbTribute",
    "cPlayerChatVerbTribute",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatVerbFeed",
    "cPlayerChatVerbFeed",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatVerbCancel",
    "cPlayerChatVerbCancel",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatVerbClaim",
    "cPlayerChatVerbClaim",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatVerbTrain",
    "cPlayerChatVerbTrain",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatVerbStrategy",
    "cPlayerChatVerbStrategy",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetTypeInvalid",
    "cPlayerChatTargetTypeInvalid",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetTypePlayers",
    "cPlayerChatTargetTypePlayers",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetTypeUnits",
    "cPlayerChatTargetTypeUnits",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetTypeUnitTypes",
    "cPlayerChatTargetTypeUnitTypes",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetTypeResource",
    "cPlayerChatTargetTypeResource",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetTypeLocation",
    "cPlayerChatTargetTypeLocation",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetStrategyInvalid",
    "cPlayerChatTargetStrategyInvalid",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetStrategyRush",
    "cPlayerChatTargetStrategyRush",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetStrategyBoom",
    "cPlayerChatTargetStrategyBoom",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatTargetStrategyTurtle",
    "cPlayerChatTargetStrategyTurtle",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatResponseTypeYes",
    "cPlayerChatResponseTypeYes",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cPlayerChatResponseTypeNo",
    "cPlayerChatResponseTypeNo",
    "No description (yet)."
  ),
  constantCompletionItem(
    "cAICommPromptToAllyWhenIGatherNugget",
    "cAICommPromptToAllyWhenIGatherNugget",
    "No description (yet)."
  )
];

export default constants;
