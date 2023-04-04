const functions: string = `
// CP AI echo.
void aiEcho(string echoString);
// CP AI error.
void aiErrorMessage(string errorString);
// CP AI error.
void aiErrorMessageId(int id);
// Sets the seed of the random number generator.
void aiRandSetSeed(int seed);
// Returns a random number (mod'ed by max if provided).
int aiRandInt(int max);
// Returns a random number in the range.
float aiRandFloat(float min, float max);
// Returns a random location guaranteed to be on the map.
vector aiRandLocation(void);
// Sets playerID's AI to the given filename.
void aiSet(string filename, int playerID);
// Sets a breakpoint.
void aiBreakpointSet(int playerID, string filename, int lineNumber, bool on);
// Restart XS execution after the current breakpoint.
void aiBreakpointGo(int playerID);
// Gets the player's personality.
string aiGetPersonality(void);
// Returns the rush boom scale for this ai.
float aiPersonalityGetRushBoom(void);
// Returns the number of player's in the Personality's history.
int aiPersonalityGetNumberPlayerHistories(void);
// Creates are player history for the given playername.
int aiPersonalityCreatePlayerHistory(void);
// Resets the given player history.
bool aiPersonalityResetPlayerHistory(int playerHistoryIndex);
// Returns the name of the index'th player in the Personality's history.
string aiPersonalityGetPlayerHistoryName(int index);
// Returns a playerHistoryIndex if this personality has played searchPlayerName before.
int aiPersonalityGetPlayerHistoryIndex(string searchPlayerName);
// Returns the user value, given the playerHistoryIndex and the userVarName.
float aiPersonalityGetPlayerUserVar(int playerHistoryIndex, string userVarName);
// sets the value, given the playerHistoryIndex, userVarName (max 255 chars), and value.
bool aiPersonalitySetPlayerUserVar(int playerHistoryIndex, string userVarName, float val);
// Returns the number of games played against/with the given the playerHistoryIndex.
int aiPersonalityGetPlayerGamesPlayed(int playerHistoryIndex, int playerRelation);
// Returns the given resource from the gameIndex game. If gameIndex is -1, this will return the avg of all games played.
float aiPersonalityGetGameResource(int playerHistoryIndex, int gameIndex, int resourceID);
// Returns true if the last game played against the given playerHistoryIndex was won by this player.
bool aiPersonalityGetDidIWinLastGameVS(int playerHistoryIndex);
// Returns the unit count from the gameIndex game. If gameIndex is -1, this will return the avg of all games played.
int aiPersonalityGetGameUnitCount(int playerHistoryIndex, int gameIndex, int unitType);
// Returns the 1st attacktime from the gameIndex game.
int aiPersonalityGetGameFirstAttackTime(int playerHistoryIndex, int gameIndex);
// Returns the total games the given player has won against this AI
int aiPersonalityGetTotalGameWins(int playerHistoryIndex, int playerRelation);
// Returns the script-defined most hated player ID for this player.
int aiGetMostHatedPlayerID(void);
// Returns the playerID for the player the AI thinks it should be attacking.
int aiCalculateMostHatedPlayerID(int comparePlayerID);
// Sets the script-defined most hated player ID for this player.
void aiSetMostHatedPlayerID(int v);
// Returns the available economy pop for this player.
int aiGetAvailableEconomyPop(void);
// Returns the current economy pop for this player.
int aiGetCurrentEconomyPop(void);
// Returns the script-defined economy pop for this player.
int aiGetEconomyPop(void);
// Set the script-defined economy pop for this player.
void aiSetEconomyPop(int v);
// Returns the script-defined military pop for this player.
int aiGetAvailableMilitaryPop(void);
// Returns the script-defined military pop for this player.
int aiGetMilitaryPop(void);
// Set the script-defined military pop for this player.
void aiSetMilitaryPop(int v);
// Returns the economy priority percentage.
float aiGetEconomyPercentage(void);
// Set the economy priority percentage.
void aiSetEconomyPercentage(float v);
// Returns the militarypriority percentage.
float aiGetMilitaryPercentage(void);
// Set the military priority percentage.
void aiSetMilitaryPercentage(float v);
// Returns the attack response distance.
float aiGetAttackResponseDistance(void);
// Set the attack response distance.
void aiSetAttackResponseDistance(float v);
// Returns the number of matching goals.
int aiGoalGetNumber(int goalType, int goalState, bool active);
// Returns the ID of matching goal.
int aiGoalGetIDByIndex(int goalType, int goalState, bool active, int index);
// Returns the number of matching plans.
int aiPlanGetNumber(int planType, int planState, bool active);
// Returns the ID of matching plan.
int aiPlanGetIDByIndex(int planType, int planState, bool active, int index);
// Creates a plan of the given name and type.
int aiPlanCreate(string planName, int typeName, int parentPlanID);
// Destroys the given plan.
bool aiPlanDestroy(int planID);
// Destroys the plan of the given name.
bool aiPlanDestroyByName(string name);
// Returns the ID of the plan with the given name.
int aiPlanGetID(string name);
// Returns the ID of the first plan containing the given string in its name.
int aiPlanGetIDSubStr(string searchStr);
// Returns the ID of the plan with the given parms.
int aiPlanGetIDByTypeAndVariableType(int planType, int varType, int varID, bool active);
// Returns number of plans with the given parms.
int aiPlanGetNumberByTypeAndVariableType(int planType, int varType, int varID, bool active);
// Returns the ID of the plan with the given active index.
int aiPlanGetIDByActiveIndex(int activeIndex);
// Returns the name of the given plan.
string aiPlanGetName(int planID);
// Returns the type of the given plan.
int aiPlanGetType(int planID);
// Returns the state of the given plan.
int aiPlanGetState(int planID);
// Returns the priority of the given plan.
int aiPlanGetActualPriority(int planID);
// Returns the priority of the given plan.
int aiPlanGetDesiredPriority(int planID);
// Sets the priority of the given plan.
bool aiPlanSetDesiredPriority(int planID, int priority);
// Returns the priority of the given plan.
int aiPlanGetActualResourcePriority(int planID);
// Returns the priority of the given plan.
int aiPlanGetDesiredResourcePriority(int planID);
// Sets the priority of the given plan.
bool aiPlanSetDesiredResourcePriority(int planID, int priority);
// Sets the parent plan of the given plan.
bool aiPlanSetParentID(int planID, int parentPlanID);
// Adds a unit type to the plan.
bool aiPlanAddUnitType(int planID, int unitTypeID, int numberNeed, int numberWant, int numberMax, bool absolute, bool popImmediately);
// Returns the number of needed units.
int aiPlanGetNumberNeededUnits(int planID, int unitTypeID);
// Returns the number of wanted units.
int aiPlanGetNumberWantedUnits(int planID, int unitTypeID);
// Returns the number of max units.
int aiPlanGetNumberMaxUnits(int planID, int unitTypeID);
// Returns the number of units currently assigned in the given plan.
int aiPlanGetNumberUnits(int planID, int unitTypeID, bool countLoans);
// Adds a unit to the plan.
bool aiPlanAddUnit(int planID, int unitID);
// Removes an unit from the plan.
bool aiPlanRemoveUnit(int planID, int unitID);
// Gets the unit at the index of the given plan.
int aiPlanGetUnitByIndex(int planID, int index);
// Returns the location for this plan.
vector aiPlanGetLocation(int planID);
// Returns the initial positon that was set for this plan.
vector aiPlanGetInitialPosition(int planID);
// Sets the initial positon for this plan.
void aiPlanSetInitialPosition(int planID, vector initialPosition);
// Sets the waypoints of the given plan to the waypoints of the given path.
bool aiPlanSetWaypoints(int planID, int pathID);
// Adds the waypoint to the given plan.
bool aiPlanAddWaypoint(int planID, vector waypoint);
// Returns the number of values for this variable index.
int aiPlanGetNumberVariableValues(int planID, int planVariableIndex);
// Sets the number of values for this variable.
bool aiPlanSetNumberVariableValues(int planID, int planVariableIndex, int numberValues, bool clearCurrentValues);
// Removes the index-th value of the variable.
bool aiPlanRemoveVariableValue(int planID, int planVariableIndex, int variableIndex);
// Sets the given variable of the given plan.
bool aiPlanSetVariableInt(int planID, int planVariableIndex, int valueIndex, int value);
// Gets the given variable of the given plan.
int aiPlanGetVariableInt(int planID, int planVariableIndex, int valueIndex);
// Sets the given variable of the given plan.
bool aiPlanSetVariableFloat(int planID, int planVariableIndex, int valueIndex, float value);
// Gets the given variable of the given plan.
float aiPlanGetVariableFloat(int planID, int planVariableIndex, int valueIndex);
// Sets the given variable of the given plan.
bool aiPlanSetVariableVector(int planID, int planVariableIndex, int valueIndex, vector value);
// Gets the given variable of the given plan.
vector aiPlanGetVariableVector(int planID, int planVariableIndex, int valueIndex);
// Sets the given variable of the given plan.
bool aiPlanSetVariableBool(int planID, int planVariableIndex, int valueIndex, bool value);
// Gets the given variable of the given plan.
bool aiPlanGetVariableBool(int planID, int planVariableIndex, int valueIndex);
// Sets the given variable of the given plan.
bool aiPlanSetVariableString(int planID, int planVariableIndex, int valueIndex, string value);
// Gets the given variable of the given plan.
string aiPlanGetVariableString(int planID, int planVariableIndex);
// Returns the number of values for this variable index.
int aiPlanGetNumberUserVariableValues(int planID, int planVariableIndex);
// Sets the number of values for this variable.
bool aiPlanSetNumberUserVariableValues(int planID, int planVariableIndex, int numberValues, bool clearCurrentValues);
// Removes all of the user variables from the given plan.
bool aiPlanRemoveUserVariables(int planID);
// Removes the user variable.
bool aiPlanRemoveUserVariable(int planID, int planVariableIndex);
// Removes the index-th value of the user variable.
bool aiPlanRemoveUserVariableValue(int planID, int planVariableIndex, int variableIndex);
// Adds the variable to the given plan.
bool aiPlanAddUserVariableInt(int planID, int planVariableIndex, string name, int numberValues);
// Sets the given variable of the given plan.
bool aiPlanSetUserVariableInt(int planID, int planVariableIndex, int valueIndex, int value);
// Gets the given variable of the given plan.
int aiPlanGetUserVariableInt(int planID, int planVariableIndex, int valueIndex);
// Adds the variable to the given plan.
bool aiPlanAddUserVariableFloat(int planID, int planVariableIndex, string name, int numberValues);
// Sets the given variable of the given plan.
bool aiPlanSetUserVariableFloat(int planID, int planVariableIndex, int valueIndex, float value);
// Gets the given variable of the given plan.
float aiPlanGetUserVariableFloat(int planID, int planVariableIndex, int valueIndex);
// Adds the variable to the given plan.
bool aiPlanAddUserVariableVector(int planID, int planVariableIndex, string name, int numberValues);
// Sets the given variable of the given plan.
bool aiPlanSetUserVariableVector(int planID, int planVariableIndex, int valueIndex, vector value);
// Gets the given variable of the given plan.
vector aiPlanGetUserVariableVector(int planID, int planVariableIndex, int valueIndex);
// Adds the variable to the given plan.
bool aiPlanAddUserVariableBool(int planID, int planVariableIndex, string name, int numberValues);
// Sets the given variable of the given plan.
bool aiPlanSetUserVariableBool(int planID, int planVariableIndex, int valueIndex, bool value);
// Gets the given variable of the given plan.
bool aiPlanGetUserVariableBool(int planID, int planVariableIndex, int valueIndex);
// Adds the variable to the given plan.
bool aiPlanAddUserVariableString(int planID, int planVariableIndex, string name, int numberValues);
// Sets the given variable of the given plan.
bool aiPlanSetUserVariableString(int planID, int planVariableIndex, int valueIndex, string value);
// Gets the given variable of the given plan.
string aiPlanGetUserVariableString(int planID, int planVariableIndex, int valueIndex);
// Gets the active-ness of the given plan.
bool aiPlanGetActive(int planID);
// Sets active on/off for the given plan.
bool aiPlanSetActive(int planID, bool active);
// Gets the noMoreUnits-ness of the given plan.
bool aiPlanGetNoMoreUnits(int planID);
// Sets noMoreUnits on/off for the given plan.
bool aiPlanSetNoMoreUnits(int planID, bool v);
// Gets the orphan-ness of the given plan.
bool aiPlanGetOrphan(int planID);
// Sets orphan on/off for the given plan.
bool aiPlanSetOrphan(int planID, bool orphan);
// Gets the UA response-ness of the given plan.
bool aiPlanGetAllowUnderAttackResponse(int planID);
// Sets under attack response on/off for the given plan.
bool aiPlanSetAllowUnderAttackResponse(int planID, bool uAR);
// Gets the unit stance of the given plan.
int aiPlanGetUnitStance(int planID);
// Sets unit stance for the given plan.
bool aiPlanSetUnitStance(int planID, int stance);
// Returns a count of the active plans.
int aiPlanGetActiveCount(void);
// Sets 'requiresAllNeedUnits' on/off for the given plan.
bool aiPlanSetRequiresAllNeedUnits(int planID, bool rANU);
// Sets event handler function for the given plan and event.
bool aiPlanSetEventHandler(int planID, int eventType, string handlerName);
// Sets the escrow for the plan.
bool aiPlanSetEscrowID(int planID, int escrowID);
// Gets the escrow for the plan.
int aiPlanGetEscrowID(int planID);
// Gets the economy flag of the given plan.
bool aiPlanGetEconomy(int planID);
// Sets economy on/off for the given plan.
bool aiPlanSetEconomy(int planID, bool v);
// Gets the military flag of the given plan.
bool aiPlanGetMilitary(int planID);
// Sets military on/off for the given plan.
bool aiPlanSetMilitary(int planID, bool v);
// Gets the attack flag of the given plan.
bool aiPlanGetAttack(int planID);
// Sets attack flag on/off for the given plan.
bool aiPlanSetAttack(int planID, bool v);
// sets the plan's base id.
bool aiPlanSetBaseID(int planID, int baseID);
// gets the plan's base id.
int aiPlanGetBaseID(int planID);
// Gets the of idle plans of the given type.
int aiGetNumberIdlePlans(int planType);
// gets total aiCost of plan's units, weighted for HP if requested.
float aiPlanGetUnitCost(int planID, bool considerHitPoints);
// returns the future cost of the plan on the given resource.
float aiPlanGetFutureNeedsCostPerResource(int planID, int resourceID);
// returns the parent of the plan.
int aiPlanGetParentID(int planID);
// enables or disables the chats from this ai player.
void aiCommsAllowChat(bool flag);
// Sends a statement to the designated player.
int aiCommsSendStatement(int targetPlayerID, int promptType);
// Sends a statement to the designated player. Adds a location flare.
int aiCommsSendStatementWithVector(int targetPlayerID, int promptType, vector v);
// Sets the handler for the communications system (invalid name unsets the handler).
bool aiCommsSetEventHandler(string handlerFunctionName);
// get sending player for specified sentence.
long aiCommsGetSendingPlayer(int sentenceID);
// get chat verb for specified sentence.
long aiCommsGetChatVerb(int sentenceID);
// get target type for specified sentence.
long aiCommsGetChatTargetType(int sentenceID);
// get number of items in target list for specified sentence.
long aiCommsGetTargetListCount(int sentenceID);
// get index item from specified sentence.
long aiCommsGetTargetListItem(int sentenceID, int index);
// get target location from specified sentence.
vector aiCommsGetTargetLocation(int sentenceID);
// send a reply to a sentence.
void aiCommsSendReply(int sentenceID, int responseID);
// Get the prompt type of a given statement.
long aiCommsGetStatementPromptType(int id);
// Get the player ID of a given statement.
long aiCommsGetStatementPlayerID(int id);
// Get the position of a given statement.
vector aiCommsGetStatementPosition(int id);
// Sets the handler for given type of event.
bool aiSetHandler(string handlerFunctionName, int type);
// Does a lightweight (no plan) move tasking of the given unit to the given location.
bool aiTaskUnitMove(int unitID, vector position, bool queue);
// Does a lightweight (no plan) work tasking of the given unit on the given target unit.
bool aiTaskUnitWork(int unitID, int targetUnitID, bool queue);
// Does a lightweight (no plan) build tasking of the given unit to build the given building.
bool aiTaskUnitBuild(int unitID, int buildingTypeID, vector position, bool queue);
// Does a lightweight (no plan) train tasking of the given unit for the given target unit type.
bool aiTaskUnitTrain(int unitID, int unitTypeID);
// Does a lightweight (no plan) research tasking of the given unit for the given tech ID.
bool aiTaskUnitResearch(int unitID, int techID);
// Does a lightweight (no plan) research tasking of the given unit for the given special power.
bool aiTaskUnitSpecialPower(int unitID, int powerID, long targetID, vector position);
// Deletes the given unit.
bool aiTaskUnitDelete(int unitID);
// Does a lightweight (no plan) enter tasking of the given unit for the given target ID.
bool aiTaskUnitEnter(int unitID, int targetID);
// Does a lightweight (no plan) eject tasking of the given unit for the given position.
bool aiTaskUnitEject(int unitID, vector position);
// Does a lightweight (no plan) cancel tasking of the given unit for the given position.
bool aiTaskUnitCancel(int unitID, int actionID);
// Tributes the given player.
bool aiTribute(int playerID, int resourceID, float amount);
// sells (+100) the given resource.
bool aiSellResourceOnMarket(int resourceID);
// buys (+100) the given resource.
bool aiBuyResourceOnMarket(int resourceID);
// Returns the amount required to buy 100 units of the given resource.
float aiGetMarketBuyCost(int resourceID);
// Returns the amount received for selling 100 units of the given resource.
float aiGetMarketSellCost(int resourceID);
// Returns the RGP weight.
float aiGetResourceGathererPercentageWeight(int rgpIndex);
// Sets the RGP weight.
void aiSetResourceGathererPercentageWeight(int rgpIndex, float weight);
// Normalizes all of the resource gatherer percentages weights to 1.0.
void aiNormalizeResourceGathererPercentageWeights(void);
// Returns the resource gatherer percentage for the given resource.
float aiGetResourceGathererPercentage(int resourceID, int rgpIndex);
// Sets the resource gatherer percentage for the given resource (if normalized is true, the percentages will be normalized to 1.0).
void aiSetResourceGathererPercentage(int resourceID, float value, bool normalize, int rgpIndex);
// Normalizes all of the resource gatherer percentages to 1.0.
void aiNormalizeResourceGathererPercentages(int rgpIndex);
// Returns the resource percentage for the given resource.
float aiGetResourcePercentage(int resourceID);
// Returns the actual resource percentage for the given resource.
float aiGetActualResourcePercentage(int resourceID);
// Sets the resource percentage for the given resource (if normalized is true, the percentages will be normalized to 1.0).
void aiSetResourcePercentage(int resourceID, bool normalize, float value);
// Normalizes all of the resource percentages to 1.0.
void aiNormalizeResourcePercentages();
// Returns the reserved gather rate for the given resource.
float aiGetReservedGatherRate(int resourceID);
// Returns the actual reserved gather rate for the given resource.
float aiGetActualReservedGatherRate(int resourceID);
// Returns the actual gather rate for the given resource.
float aiGetActualGatherRate(int resourceID);
// Reserves a portion of gather rate for the given resource.
void aiSetReservedGatherRate(int resourceID, float rate);
// Returns the number of gatherers for the given resource.
int aiGetNumberGatherers(int unitPUID, int resourceID, int resourceSubType, int resourcePUID);
// Calculates number of wanted gatherers for each resource.
bool aiCalculateNumberDesiredGatherers(int gathererPUID, bool enableHunt, bool enableBerry, bool enableFarm, int farmPUID, bool enableWood, bool enableMine, bool enablePlant, int plantPUID);
// Returns the number of desired gatherer for the given resource.
int aiGetNumberDesiredGatherers(int resourceID);
// Gets the number of plans for the given breakdown.
int aiGetResourceBreakdownNumberPlans(int resourceTypeID, int resourceSubTypeID, int baseID);
// Gets the priority of the plans for the given breakdown.
int aiGetResourceBreakdownPlanPriority(int resourceTypeID, int resourceSubTypeID, int baseID);
// Gets the percentage for the given breakdown.
float aiGetResourceBreakdownPercentage(int resourceTypeID, int resourceSubTypeID, int baseID);
// Sets a subtype breakdown for a resource.
bool aiSetResourceBreakdown(int resourceTypeID, int resourceSubTypeID, int numberPlans, int planPriority, float percentage, int baseID, float distance);
// Removes the given breakdown.
bool aiRemoveResourceBreakdown(int resourceTypeID, int resourceSubTypeID, int baseID);
// Returns the auto gather escrow ID.
int aiGetAutoGatherEscrowID(void);
// Sets the auto gather escrow ID.
void aiSetAutoGatherEscrowID(int escrowID);
// Returns the auto Farm escrow ID.
int aiGetAutoFarmEscrowID(void);
// Sets the auto Farm escrow ID.
void aiSetAutoFarmEscrowID(int escrowID);
// Returns the per plan farm build limit.
int aiGetFarmLimit(void);
// Sets the per plan farm build limit.
void aiSetFarmLimit(int limit);
// Returns allow buildings on/off.
bool aiGetAllowBuildings(void);
// Sets allow buildings on/off.
void aiSetAllowBuildings(bool v);
// CP AI chat to playerID.
void aiChat(int playerID, string chatString);
// CP AI chat to everyone.
void aiSendChatToEveryone(string chatString);
// CP AI chat to allies.
void aiSendChatToAllies(string chatString);
// CP AI chat to enemies.
void aiSendChatToEnemies(string chatString);
// Shows debug messages as chat.
void aiDebugMessage(string chatString);
// Returns the number of unassigned units of the given type.
int aiNumberUnassignedUnits(int typeID);
// Returns the number of unassigned units based on the goal's unit type(s).
int aiNumberUnassignedUnitsByGoal(int goalID);
// adds an opportunity to the list and returns the id.
long aiCreateOpportunity(int type, int targettype, int targetID, int targetPlayerID, int source);
// activates or deactivates an opportunity on the player's opp list.
long aiActivateOpportunity(int opportunityID, bool flag);
// remove an opportunity on the player's opp list.
long aiDestroyOpportunity(int opportunityID);
// finds the best currently scored opp.
void aiFindBestOpportunity();
// gets the source id from this opportunity
long aiGetOpportunitySourceID(int opportunityID);
// gets the source type from this opportunity
long aiGetOpportunitySourceType(int opportunityID);
// gets the radius from this opportunity
float aiGetOpportunityRadius(int opportunityID);
// gets the target playerID from this opportunity
long aiGetOpportunityTargetPlayerID(int opportunityID);
// gets the target type from this opportunity
long aiGetOpportunityTargetType(int opportunityID);
// gets the type from this opportunity
long aiGetOpportunityType(int opportunityID);
// gets the location from this opportunity
vector aiGetOpportunityLocation(int opportunityID);
// gets the target id from this opportunity
long aiGetOpportunityTargetID(int opportunityID);
// sets the target type for this opp.
void aiSetOpportunityTargetType(int opportunityID, int targetType);
// sets the target id for this opp.
void aiSetOpportunityTargetID(int opportunityID, int targetType);
// sets the radius for this opp.
void aiSetOpportunityRadius(int opportunityID, float radius);
// sets the location for this opp.
void aiSetOpportunityLocation(int opportunityID, vector location);
// sets the score for this opp.
bool aiSetOpportunityScore(long oppID, long permission, float affordable, float classscore, float instance, float total);
// Casts the given God power tech, at the specified position.
bool aiCastGodPowerAtPosition(int godPowerTechID, vector pos);
// Casts the given God power tech, at the specified unit.
bool aiCastGodPowerAtUnit(int godPowerTechID, int unitID);
// Get the god power tech id from the given slot.
int aiGetGodPowerTechIDForSlot(int slotID);
// translate a granted tech id into a protopower id
int aiGetGodPowerProtoIDForTechID(int techID);
// get the type for a ProtoPower
int aiGetGodPowerType(int protoPowerID);
// find a valid god power plan to attach to an attack plan
int aiFindBestAttackGodPowerPlan(void);
// find a valid god power plan to use for town defense
int aiFindBestTownDefenseGodPowerPlan(void);
// Returns the world difficulty level.
int aiGetWorldDifficulty(void);
// Sets the world difficulty level.
void aiSetWorldDifficulty(int v);
// Returns the name of the level.
string aiGetWorldDifficultyName(int level);
// Returns the game's mode.
int aiGetGameMode(void);
// Returns the game's starting resource.
int aiGetGameStartingResources(void);
// Returns the ending age.
int aiGetMaxAge(void);
// Returns the captain for the given player's team.
int aiGetCaptainPlayerID(int playerID);
// Saves the auto, debugging savegames (THIS DOESN'T REALLY DO ANYTHING).
void aiAutoSavegame(string filename);
// returns whether or not its cool to turn ai autosaves on.
bool aiGetAutosaveOn();
// returns the current resource need for the given resource.
void aiGetCurrentResourceNeed(int resourceID);
// Turns auto gathering of military units at bases on/off.
bool aiSetAutoGatherMilitaryUnits(bool v);
// sets the ai's Explore Danger Threshold value.
bool aiSetExploreDangerThreshold(float value);
// gets the ai's Explore Danger Threshold value.
float aiGetExploreDangerThreshold();
// Sets the RM bool in the AI.
void aiSetRandomMap(bool v);
// sets the pause all age upgrades flag in the AI.
void aiSetPauseAllAgeUpgrades(bool v);
// gets the pause all age upgrades flag from the AI.
bool aiGetPauseAllAgeUpgrades();
// sets the min number of units in an attack army.
void aiSetMinArmySize(long v);
// sets the min number of needed units to gather aggressive animals.
void aiSetMinNumberNeedForGatheringAggressvies(long v);
// gets the min number of needed units to gather aggressive animals.
int aiGetMinNumberNeedForGatheringAggressives();
// sets the min number of wanted units to gather aggressive animals.
void aiSetMinNumberWantForGatheringAggressives(long v);
// gets the min number of wanted units to gather aggressive animals.
int aiGetMinNumberWantForGatheringAggressives();
// reigns the current player..
void aiResign();
// asks the player if its ok to resign
void aiAttemptResign();
// sets the limit for how many LOS Protounits the AI can build
void aiSetMaxLOSProtoUnitLimit(int limit);
// gets the limit for how many LOS Protounits the AI can build
int aiGetMaxLOSProtoUnitLimit();
// gets the current Pop needs of all the plans.
int aiGetPopNeeds();
// switch the newBaseID to be the main base.
void aiSwitchMainBase(int newBaseID, bool force);
// Sets your default stance for all of your units.
void aiSetDefaultStance(int defaultStance);
// Tells the AI if this is a water map or not.
void aiSetWaterMap(bool v);
// Tells us if the AI thinks this is a water map or not.
bool aiGetWaterMap();
//Is this a certain maptype or not. (AIFishingUseful, AITransportRequired, AITransportUseful)
bool aiIsMapType(string mapType);
// Returns the number of cards in the Current HC.
long aiHCCardsGetTotal();
// Has the cardindex been bought yet?
bool aiHCCardsIsCardBought(int cardIndex);
// Can I buy this card now?
bool aiHCCardsCanIBuyThisCard(int deckIndex, int cardIndex);
// Buy this card now
bool aiHCCardsBuyCard(int cardIndex);
// For this cardIndex, get the age prereq.
long aiHCCardsGetCardAgePrereq(int cardIndex);
// For this cardIndex, get the age prereq.
long aiHCCardsGetCardLevel(int cardIndex);
// For this cardIndex, get the TechID.
long aiHCCardsGetCardTechID();
// For this cardIndex, get the UnitType.
long aiHCCardsGetCardUnitType();
// For this cardIndex, get the UnitCount.
long aiHCCardsGetCardUnitCount();
// For this cardIndex, get the CardCount, -1 is Infinite.
long aiHCCardsGetCardCount();
// For this cardIndex, get the Flags.
long aiHCCardsGetCardFlags(int cardIndex);
// For this cardIndex, get the value per resource.
float aiHCCardsGetCardValuePerResource(int cardIndex, int resourceID);
// Get the best card using the optional cardtype and optional resourcePreference
long aiHCCardsFindBestCard(int cardType, int levelPref, int resourcePref);
// Returns the number of decks in the Current HC.
long aiHCGetNumberDecks();
// Create a new HC Deck with the given name.
int aiHCDeckCreate(string);
// Return extended deck index.
int aiHCGetExtendedDeck();
// Makes the deckIndex the current active HC deck.
bool aiHCDeckActivate(long deckIndex);
// Adds the card given to the givenHC Deck.
long aiHCDeckAddCardToDeck(long deckIndex, long cardIndex);
// Returns the number of cards in the Current HC Deck.
long aiHCDeckGetNumberCards(long deckIndex);
// play this card.
bool aiHCDeckPlayCard(long cardIndex, bool extendedDeck);
// For this card, get the age prereq
long aiHCDeckGetCardAgePrereq(long deckIndex, long cardIndex);
// For this card, get the level
long aiHCDeckGetCardLevel(long deckIndex, long cardIndex);
// For this card, get the techID
long aiHCDeckGetCardTechID(long deckIndex, long cardIndex);
// For this card, get the unitType
long aiHCDeckGetCardUnitType(long deckIndex, long cardIndex);
// For this cardIndex, get the CardCount, -1 is Infinite.
long aiHCDeckGetCardCount(int deckIndex, int cardIndex);
// For this card, get the unit Count
long aiHCDeckGetCardUnitCount(long deckIndex, long cardIndex);
// For this cardIndex, get the Flags.
long aiHCCardsGetCardFlags(int deckIndex, int cardIndex);
// For this cardIndex, get the value per resource.
float aiHCDeckGetCardValuePerResource(int deckIndex, int cardIndex, int resourceID);
// Can we play this card from the given deck?
bool aiHCDeckCanPlayCard(long cardIndex, bool extendedDeck);
// Gets how many cards of this type we can send. -1 mean infinite.
bool aiHCDeckCardGetCardCount(long deskIndex, long cardIndex);
// Gets the number of pre made decks.
int aiHCPreMadeDeckGetNumber(void);
// Gets the pre made deck index with the given name.
int aiHCPreMadeDeckGetIndex(string name);
// Gets the number of cards of the pre made deck.
int aiHCPreMadeDeckGetNumberCards(int deckIndex);
// Gets card tech ID of the card from the pre made deck.
int aiHCPreMadeDeckGetCardTechID(int deckIndex, int cardIndex);
// Returns the HCGP.
vector aiGetHCGatherPoint(void);
// Sets the HCGP.
bool aiSetHCGatherPoint(vector point);
// Returns the HCGU.
vector aiGetHCGatherUnit(void);
// Sets the HCGU.
bool aiSetHCGatherUnit(long unitID);
// Gets number of cards of currently being sent from HC.
int aiHCGetNumberSendingCards();
// Gets homecity card index of the sending card.
int aiHCGetSendingCardIndex(int index);
// returns the score for the given player.
long aiGetScore(int playerID);
// returns the number of teams in the game.
long aiGetNumberTeams();
// Queues the auto savegame.
void aiQueueAutoSavegame(int saveNumber);
// returns true, if this is a multiplayer game.
bool aiIsMultiplayer();
// returns the ID of the fallen explorer; if there isn't one, returns -1
int aiGetFallenExplorerID();
// ransoms the specified explorer using funds from the specified escrow account and spawns it from the specified building.
bool aiRansomExplorer(int explorerID, int escrowID, int sourceBuildingID);
// builds walls around the specified building's colony using the specified escrow.
bool aiBuildWall(int buildingID, int escrowID);
// returns whether it is allowed to build a wall around the specified building's colony, and whether the player can afford it from the specified escrow.
bool aiCanBuildWall(int buildingID, int escrowID);
// returns the wall radius for the specified building's colony.
bool aiGetWallRadius(int buildingID);
// returns whether a wall exists around the specified building's colony.
bool aiDoesWallExist(int buildingID);
// returns the current game type (e.g., cGameTypeScenario, cGameTypeRandom, etc).
int aiGetGameType();
// sets the specified tactic on the specified unit.
bool aiUnitSetTactic(int unitID, int tacticID);
// gets the specified unit's current tactic.
int aiUnitGetTactic(int unitID);
// Prevent a resource from being spent by the AI.
void aiResourceLock(int resourceID);
// Allow a resource to be spent by the AI.
void aiResourceUnlock(int resourceID);
// Is this Escrow resource locked.
bool aiResourceIsLocked(int resourceID);
// breaks the treaty using funds from the given escrow.
bool aiBreakTreaty(int escrowID);
// checks whether the given player has a treaty.
bool aiTreatyActive();
// gets the end time of treaty.
int aiTreatyGetEnd();
// Sets the scripts choice for the AgeX Politician.
void aiSetPoliticianChoice(int age, int puid);
// Gets the scripts choice for the AgeX Politician.
int aiGetPoliticianChoice(int age);
// Call this to make the AI fill out what Politicians are available.
bool aiPopulatePoliticianList();
// Gets the number of Politicans avaiable for AgeX.
int aiGetPoliticianListCount(int age);
// Gets the index'th Politicans avaiable for AgeX.
int aiGetPoliticianListByIndex(int age, int index);
// Gets the last collected nugget's type
int aiGetLastCollectedNuggetType(int playerID);
// Gets the last collected nugget's effect
int aiGetLastCollectedNuggetEffect(int playerID);
// Gets the number of tradeposts controlled by this team (for monopoly victory).
int aiGetNumberTradePostsControlled(int teamID);
// Gets the number of tradeposts needed to make a monopoly win possible.
int aiGetNumberTradePostsNeededForMonopoly();
// Returns true if the monopoly command can be given now. Does not check cost.
bool aiReadyForTradeMonopoly();
// Executes a trade monopoly command, returns false if it fails.
bool aiDoTradeMonopoly();
// Returns true if a trade monopoly is possible in this game type.
bool aiIsMonopolyAllowed();
// Gets the number of relics controlled by this team (for relic victory).
int aiGetNumberRelicsControlled(int teamID);
// Gets the number of relics needed to make a relic win possible.
int aiGetNumberRelicsNeededForVictory();
// Returns true if a relic capture victory is possible in this game type.
bool aiIsRelicCaptureAllowed();
// Returns true if a King of the Hill victory is possible in this game type.
bool aiIsKOTHAllowed();
// Gets the team that is king of the hill.
int aiGetKOTHController();
// Returns true if this team is king of the hill.
int aiIsTeamKOTH(int teamID);
// Gets the team that has the lead for economy victory.
int aiGetEconomyController();
// Returns true if this team has the lead for economy victory.
int aiIsTeamEconomy(int teamID);
// Sets micro management flags.
void aiSetMicroFlags(int flags);
// Turns escrow system on/off.
void aiSetEscrowsDisabled(bool v);
// Turns distributing gatherers by resource percentage on/off.
void aiSetDistributeGatherersByResourcePercentage(bool v);
// Turns distributing gatherers by closest resource on/off.
void aiSetDistributeGatherersByClosestResource(bool v);
// Turns plan resource priority on/off.
void aiSetPlanResourcePriorityEnabled(bool v);
// Checks whether an unit can use the ability associated with the proto power.
bool aiCanUseAbility(int unitID, int protoPowerID);
// Sets the trading post unit type.
bool aiSetTradingPostUnitType(int tradingPostID, int puid);
// Add or remove gatherer type.
void aiAddGathererType(long type, bool remove);
// Gets the livestock sell amount.
float aiLivestockGetSellAmount(int resourceID, int unitID);
// Gets livestock exchange rate.
float aiLivestockGetExchangeRate(int resourceID);
// Gets livestock maximum exchange rate.
float aiLivestockGetMaximumRate();
// Sells the livestock for the given resource.
bool aiLivestockSell(int resourceID, int unitID);
// Turns tactic farm on/off.
bool aiSetTacticFarm(bool v);
// KB dump for player2's units from player1's perspective.
void kbDump(int player1, int player2);
// KB dump for player2's units of the given type from player1's perspective.
void kbDumpType(int player1, int player2, string typeName);
// Cheats and looks at all of the units on the map. This will format your harddrive if you're not authorized to use it.
void kbLookAtAllUnitsOnMap(void);
// Returns the current population for the player.
int kbGetPop(void);
// Returns the current population cap for the player.
int kbGetPopCap(void);
// Returns the maximum population for the player.
int kbGetPopCap(void);
// Returns the current age for the current player.
int kbGetAge(void);
// Returns the current age for the player specified.
int kbGetAgeForPlayer(int id);
// Returns the culture for the player.
int kbGetCulture(void);
// Returns the culture for the given player.
int kbGetCultureForPlayer(void);
// Returns the culture name for the given culture.
string kbGetCulture(int cultureID);
// Returns the civilization for the player.
int kbGetCiv(void);
// Returns the civ for the given player.
int kbGetCivForPlayer(void);
// Returns the civ name for the given civ.
string kbGetCivName(int civID);
// Creates a unit query, returns the query ID.
int kbUnitQueryCreate(string name);
// Resets the given unit query data AND results.
bool kbUnitQueryResetData(long queryID);
// Resets the given unit query results.
bool kbUnitQueryResetResults(long queryID);
// Destroys the given unit query.
bool kbUnitQueryDestroy(long queryID);
// Returns the number of results in the current query.
int kbUnitQueryNumberResults(long queryID);
// Returns the UnitID of the index-th result in the current query.
int kbUnitQueryGetResult(long queryID, int index);
// Sets query data.
bool kbUnitQuerySetPlayerID(long queryID, int playerID, bool resetQueryData);
// Sets query data.
bool kbUnitQuerySetPlayerRelation(long queryID, int playerRelation);
// Sets query data.
bool kbUnitQuerySetUnitType(long queryID, int unitTypeID);
// Sets query data.
bool kbUnitQuerySetActionType(long queryID, int actionTypeID);
// Sets query data.
bool kbUnitQuerySetState(long queryID, int state);
// Sets query data.
bool kbUnitQuerySetPosition(long queryID, vector v);
// Sets query data.
bool kbUnitQuerySetMaximumDistance(long queryID, float distance);
// Sets query data.
bool kbUnitQuerySetIgnoreKnockedOutUnits(long queryID, bool v);
// If parm is true, results are sorted in ascending distance order from the query position.
bool kbUnitQuerySetAscendingSort(long queryID, bool v);
// Sets query data.
bool kbUnitQuerySetBaseID(long queryID, int baseID);
// Sets query data.
bool kbUnitQuerySetAreaID(long queryID, int areaID);
// Sets query data.
bool kbUnitQuerySetAreaGroupID(long queryID, int areaGroupID);
// Sets query data.
bool kbUnitQuerySetArmyID(long queryID, int armyID);
// Sets query data.
bool kbUnitQuerySetSeeableOnly(long queryID, bool seeableOnly);
// Sets query data.
bool kbUnitQuerySetTechID(long queryID, long techID);
// Executes the current query; returns number of results.
int kbUnitQueryExecute(long queryID);
// Executes the current query on the previous query's results; returns the new number of results.
int kbUnitQueryExecuteOnQuery(long currentQueryID, int previousQueryID);
// Executes the current query on the previous query's results; returns the new number of results.
int kbUnitQueryExecuteOnQueryByName(long currentQueryID, string previousQueryName);
// gets total aiCost of query's units, weighted for HP if requested.
float kbUnitQueryGetUnitCost(int queryID, bool considerHealth);
// gets HP of query's units, using current HP if requested.
float kbUnitQueryGetUnitHitpoints(int queryID, bool considerHealth);
// Returns the player ID for this unit ID.
int kbUnitGetPlayerID(int unitID);
// Returns the plan ID for this unit ID.
int kbUnitGetPlanID(int unitID);
// Returns the base ID for this unit ID.
int kbUnitGetBaseID(int unitID);
// Returns the area ID for this unit ID.
int kbUnitGetAreaID(int unitID);
// Returns the army ID for this unit ID.
int kbUnitGetArmyID(int unitID);
// Returns the movementType for this unitTypeID.
int kbUnitGetMovementType(int unitTypeID);
// Returns the current hitpoints for this unit ID.
float kbUnitGetCurrentHitpoints(int unitID);
// Returns the maximum hitpoints for this unit ID.
float kbUnitGetMaximumHitpoints(int unitID);
// Returns the health for this unit ID.
float kbUnitGetHealth(int unitID);
// Returns the current AI cost (worth) for this unit ID.
float kbUnitGetCurrentAICost(int unitID);
// Returns the maximum AI cost (worth) for this unit ID.
float kbUnitGetMaximumAICost(int unitID);
// Returns the position for this unit ID.
vector kbUnitGetPosition(int unitID);
// Returns true if the unit is of the unitTypeID.
bool kbUnitIsType(int unitID, long unitTypeID);
// Returns the actionTypeID of the unit.
int kbUnitGetActionType(int unitID);
// Returns the target unit ID of the given unit.
int kbUnitGetTargetUnitID(int unitID);
// Returns the number of units currently working on the given unit.
int kbUnitGetNumberWorkers(int unitID);
// Returns the index-th worker unit ID.
int kbUnitGetWorkerID(int unitID, int index);
// Returns the number of the unit type you are allowed to have (ONLY WORKS ON BASE UNIT TYPES); returns -1 if there is no limit.
int kbGetBuildLimit(int player, int unitTypeID);
// Returns amount of pop cap addition provided by the given unit type (ONLY WORKS ON BASE UNIT TYPES).
int kbGetPopCapAddition(int player, int unitTypeID);
// Returns the number of pop slots this unit takes (ONLY WORKS ON BASE UNIT TYPES).
int kbGetPopSlots(int player, int unitTypeID);
// Returns the number of pop slots currently occupied by this unit type.
int kbGetPopulationSlotsByUnitTypeID(int playerID, int unitTypeID);
// Returns the number of pop slots currently occupied by the results in the given query.
int kbGetPopulationSlotsByQueryID(int queryID);
// Returns a quick unit count of units for a player.
int kbUnitCount(int player, int unitTypeID, int stateID);
// Returns a quick unit count of player2's units from player1's perspective.
void kbUnitCountConsole(int playerID1, int playerID2, string unitType, string state);
// Returns the center vector of the map.
vector kbGetMapCenter(void);
// Returns the X size of the map.
float kbGetMapXSize(void);
// Returns the Z size of the map.
float kbGetMapZSize(void);
// Creates areas and area groups. DO THIS BEFORE ANYTHING ELSE IN YOUR SCRIPT.
void kbAreaCalculate();
// Returns the number of areas.
int kbAreaGetNumber(void);
// Returns the ID of the given area.
int kbAreaGetIDByPosition(vector position);
// Returns the ID of the given area group.
int kbAreaGroupGetIDByPosition(vector position);
// Returns the center of the given areaGroup.
vector kbAreaGroupGetCenter(int groupID);
// Returns true if there is a land path between given 2 area groups.
bool kbAreAreaGroupsPassableByLand(int groupID, int otherGroupID);
// Returns the center of the given area.
vector kbAreaGetCenter(int areaID);
// Returns the number of tiles in the given area.
int kbAreaGetNumberTiles(int areaID);
// Returns the number of black tiles in the given area.
int kbAreaGetNumberBlackTiles(int areaID);
// Returns the number of visible tiles in the given area.
int kbAreaGetNumberVisibleTiles(int areaID);
// Returns the number of fog tiles in the given area.
int kbAreaGetNumberFogTiles(int areaID);
// Returns the gametime of the last visibility change for the given area.
int kbAreaGetVisibilityChangeTime(int areaID);
// Returns the number of units in the given area.
int kbAreaGetNumberUnits(int areaID);
// Returns the Unit ID of the index-th unit in the given area.
int kbAreaGetUnitID(int areaID, long index);
// Returns the number of border areas for the given area.
int kbAreaGetNumberBorderAreas(int areaID);
// Returns the Area ID of the index-th border area in the given area.
int kbAreaGetBorderAreaID(int areaID, long index);
// Returns the Type of area.
int kbAreaGetType(int areaID);
// Returns whether this map is an island map or not.
bool kbGetIslandMap(void);
// Returns number of area groups.
int kbAreaGroupGetNumber(void);
// Returns area group type.
int kbAreaGroupGetType(int areaGroupID);
// Returns number of areas of the given area group.
int kbAreaGroupGetNumberAreas(int areaGroupID);
// Returns the area at the given index of the given area group.
int kbAreaGroupGetAreaID(int areaGroupID, int index);
// returns an area's VP site ID (-1 if an area doesn't have a VP site).
int kbAreaGetVPSiteID(int areaID);
// returns ID for an array containing VP site IDs that match the specified parameters.
int kbVPSiteQuery(int scoreType, int playerRelationOrID, int siteState);
// blogs out info about all VP sites.
void kbDumpVPSiteInfo();
// returns the specified VP site's type (e.g., native, trade, etc).
int kbVPSiteGetType(int siteID);
// returns the specified VP site's world location.
int kbVPSiteGetLocation(int siteID);
// returns the specified VP site's owning player.
int kbVPSiteGetOwnerPlayerID(int siteID);
// returns the specified VP site's state.
int kbVPSiteGetState(int siteID);
// returns the protounit ID for the VP generator that corresponds to this type of VP site.
int kbGetVPGeneratorByScoreType(int siteType);
// Returns the Area ID of the best area to gather the given unit type.
int kbAreaFindBestGatherAreaID(int unitTypeID);
// Returns the Area ID of the closest area, of the given types, to given postion.
int kbAreaGetClosetArea(vector position, int areaType, int areaType1, float minDistance);
// Creates a path with the given name.
int kbPathCreate(string name);
// Destroys the given path.
bool kbPathDestroy(int pathID);
// Returns the number of paths.
int kbPathGetNumber(void);
// Returns the index-th path ID.
int kbPathGetIDByIndex(long index);
// Returns the name of the given path.
string kbPathGetName(int pathID);
// Returns the length of the given path.
float kbPathGetLength(int pathID);
// Returns the number of waypoints in the given path.
int kbPathGetNumberWaypoints(int pathID);
// Adds the waypoint to the given path.
bool kbPathAddWaypoint(int pathID, vector waypoint);
// Adds the waypoint to the given path.
bool kbPathAddWaypointAfter(int pathID, int waypointIndex, vector waypoint);
// Returns the appropriate waypoint from the given path.
vector kbPathGetWaypoint(int pathID, long waypointNumber);
// Returns true if the given unit type can path from pointA to pointB.
bool kbCanSimPath(vector pointA, vector pointB, long protoUnitTypeID, float range);
// Returns true if the given unit type can path from pointA to pointB.
bool kbCanPath2(vector pointA, vector pointB, long protoUnitTypeID, float range);
// Returns the Route ID if successful.
int kbCreateAttackRoute(string name, int startAreaID, int goalAreaID, int numInitialRoutes);
// Returns the Route ID if successful.
int kbCreateAttackRouteWithPath(string name, vector startPt, vector endPt);
// Returns true if the route was deleted.
bool kbDestroyAttackRoute(int routeID);
// add a new sector to path to.
bool kbAddAttackRouteSector(int sector);
// ignore this area when finding the route.
bool kbAddAttackRouteIgnoreID(int ignoreAreaID);
// ignore this areatype when finding the route.
bool kbAddAttackRouteIgnoreType(int ignoreAreaTypeID);
// Rreturns true if path was added to attack route.
bool kbAttackRouteAddPath(int attackRouteID, int pathID);
// find all the paths to the sector specified.
bool kbMakeAttackRoutes();
// Returns num paths from start to goal area.
int kbGetNumAttackRoutes(int startAreaID, int goalAreaID);
// Returns the id of path in the given attack route.
int kbGetAttackRoutePathByIndex(int routeID, int index);
// Returns the id of the routes from area1 to area2.
int kbGetAttackRouteID(int startAreaID, int goalAreaID);
// Returns the index-th attack route ID.
int kbGetAttackRouteIDByIndex(int index);
// Returns number of attack routes.
int kbAttackRouteGetNumber(void);
// Returns the attack route with the matching name.
int kbGetAttackRouteByName(void);
// Creates an escrow.
int kbEscrowCreate(string name, int resourceID, float percentage, int parentID);
// Destroys an escrow.
bool kbEscrowDestroy(int escrowID, bool promoteChildren);
// Returns the ID of the named escrow.
int kbEscrowGetID(string name);
// Returns the percentage of the escrow.
float kbEscrowGetPercentage(int escrowID, int resourceID);
// Sets the percentage of the escrow.
bool kbEscrowSetPercentage(int escrowID, int resourceID, float percentage);
// Sets the cap of the escrow.
bool kbEscrowSetCap(int escrowID, int resourceID, float cap);
// Returns the amount of credits in the given escrow for the given resource.
float kbEscrowGetAmount(int escrowID, int resourceID);
// Removes all credits (and puts them into the root escrow) of the given resource type from the given escrow.
bool kbEscrowFlush(int escrowID, int resourceID, bool flushChildren);
// Reallocates the current resource stockpile into the escrows.
bool kbEscrowAllocateCurrentResources(void);
// Creates a building placement; returns the ID.
int kbBuildingPlacementCreate(string name);
// Destroys the given building placement.
bool kbBuildingPlacementDestroy(int id);
// Resets the current building placement.
bool kbBuildingPlacementResetResults(void);
// Selects the given building placement.
bool kbBuildingPlacementSelect(int id);
// Sets event handler function for the current BP and event.
bool kbBuildingPlacementSetEventHandler(int eventType, string handlerName);
// Sets the building type for the current building placement.
bool kbBuildingPlacementSetBuildingType(int buildingTypeID);
// Sets the base ID and location preference for the current building placement.
bool kbBuildingPlacementSetBaseID(int baseID, int locationPref);
// Adds the Area ID to the current BP (with the given number of border area layers), addCenterInfluence - adds a positional influence from the area center.
bool kbBuildingPlacementAddAreaID(int areaID, int numberBorderAreaLayers, bool addCenterInfluence);
// Adds the AreaGroup ID to the current BP.
bool kbBuildingPlacementAddAreaGroupID(int areaGroupID);
// Sets up center position-based BP.
bool kbBuildingPlacementSetCenterPosition(vector position, float distance, float obstructionRadius);
// Adds the unit influence for the current building placement.
bool kbBuildingPlacementAddUnitInfluence(int typeID, float value, float distance, long kbResourceID);
// Adds the position influence for the current building placement.
bool kbBuildingPlacementAddPositionInfluence(vector position, float value, float distance);
// Sets the minimum acceptable value for evaluated spots in the BP.
bool kbBuildingPlacementSetMinimumValue(float minimumValue);
// Starts the placement of current building.
bool kbBuildingPlacementStart(void);
// Returns the vector result position for given BP ID.
vector kbBuildingPlacementGetResultPosition(int bpID);
// Returns the result value for given BP ID.
float kbBuildingPlacementGetResultValue(int bpID);
// Creates a target selector; returns the ID.
int kbTargetSelectorCreate(string name);
// Destroys the given target selector.
bool kbTargetSelectorDestroy(int id);
// Resets the current target selector.
bool kbTargetSelectorResetResults(void);
// Selects the given target selector.
bool kbTargetSelectorSelect(int id);
// Add the UAIT for the given BASE unit type as a filter.
bool kbTargetSelectorAddUnitType(int protoUnitTypeID);
// Sets the list of potential targets to the results in the given query.
bool kbTargetSelectorAddQueryResults(int queryID);
// Returns the number of results in the given target selector.
int kbTargetSelectorGetNumberResults(void);
// Returns the result value for given index of the current target selector.
int kbTargetSelectorGetResultValue(int index);
// Starts the current target selector.
bool kbTargetSelectorStart(void);
// Returns true if amount of resource is within distance of a dropsite.
bool kbSetupForResource(int baseID, int resourceID, float distance, float amount);
// Returns the current HomeCity Level of the given player.
long kbGetHCLevel(int playerID);
// Returns the current amount XP the given player has.
long kbResourceGetXP(int playerID);
// Returns the current amount of the given resource.
float kbResourceGet(int resourceID);
// Returns the maximum amount of the given resource you can have.
float kbMaximumResourceGet(int resourceID);
// Returns the total amount of the given resource gathered to this point in the game.
float kbTotalResourceGet(int resourceID);
// Returns the number of valid KB resources for the given plan/base.
int kbGetNumberValidResourcesByPlan(int planID, int baseID);
// Returns the number of valid KB resources for the resource types.
int kbGetNumberValidResources(int baseID, int resourceTypeID, int resourceSubTypeID, float distance, bool searchAllAreaGroups);
// Returns the resource amount of valid KB resources for the resource types.
float kbGetAmountValidResources(int baseID, int resourceTypeID, int resourceSubTypeID, float distance, bool searchAllAreaGroups);
// Returns the resource amount of valid KB resources for the resource types.
float kbGetAmountValidResourcesByLocation(vector positon, int resourceTypeID, int resourceSubTypeID, float distance);
// Returns the resource income over the last X seconds.
float kbGetResourceIncome(int resourceID, float seconds, bool relative);
// Returns true if the protoUnit is currently available.
bool kbProtoUnitAvailable(int protoUnitID);
// Returns the ID of the protounit.
int kbGetProtoUnitID(string name);
// Returns the unit's protounit ID.
int kbUnitGetProtoUnitID(int unitID);
// Returns true if the player can afford the proto unit.
bool kbCanAffordUnit(int protoUnitTypeID, int escrowID);
// returns the cost of the protounit for the given resource.
float kbUnitCostPerResource(int protoUnitID, int resourceID);
// returns the train points of the given unit.
float kbUnitGetTrainPoints(int protoUnitID);
// returns the resource amount of the unit.
float kbUnitGetResourceAmount(int unitID, int resourceID);
// returns the resource carry capacity of the unit.
float kbUnitGetCarryCapacity(int unitID, int resourceID);
// Returns true if the player can afford the tech.
bool kbCanAffordTech(int techID, int escrowID);
// returns the cost of the tech for the given resource.
float kbTechCostPerResource(int techID, int resourceID);
// Returns true if the protounit is of the unitTypeID.
bool kbProtoUnitIsType(int playerID, int protoUnitID, int unitTypeID);
// Returns the associated tech of this protounit.
int kbProtoUnitGetAssociatedTech(int protoUnitID);
// Returns the current tech status for the current player of the requested tech.
int kbTechGetStatus(int techID, bool checkPrereqs);
// Returns the current tech status for the current player of the requested tech.
int kbBuildingTechGetStatus(int techID, int unitID, bool checkPrereqs);
// Returns the percent complete for the the requested tech of the current player.
float kbGetTechPercentComplete(int techID);
// Returns the current tech HC card flags for the current player of the requested tech.
int kbTechGetHCCardFlags(int techID);
// Returns the current tech HC resource cost for the current player of the requested tech.
float kbTechGetHCCardValuePerResource(int techID, int resourceID);
// Returns the combat efficiency of the comparison (in terms of playerID1's units).
float kbGetCombatEfficiency(int playerID1, int unitTypeID1, int playerID2, int unitTypeID2, bool ignoreTrainCheck);
// Returns the AI cost weight for the given resource.
float kbGetAICostWeight(int resourceID);
// Sets the weight this resource type is given during AI cost calculuations.
bool kbSetAICostWeight(int resourceID, float weight);
// Returns the AI cost for the given protoUnit type ID.
float kbGetProtoUnitAICost(int protoUnitTypeID);
// Returns the AI cost for the given tech ID.
float kbGetTechAICost(int techID);
// Returns the player's resigned status.
bool kbIsPlayerResigned(int playerID);
// Returns the player's lost status.
bool kbHasPlayerLost(int playerID);
// Returns the player's team number.
int kbGetPlayerTeam(int playerID);
// Returns the player's name.
string kbGetPlayerName(int playerID);
// Returns true if the given player is an enemy.
bool kbIsPlayerEnemy(int playerID);
// Returns true if the given player is a neutral player.
bool kbIsPlayerNeutral(int playerID);
// Returns true if the given player is an ally.
bool kbIsPlayerAlly(int playerID);
// Returns true if the given player is a mutual ally.
bool kbIsPlayerMutualAlly(int playerID);
// Returns the number of mutual allies.
int kbGetNumberMutualAllies(void);
// Returns true if the given player is a valid player (i.e. it exists in the game).
bool kbIsPlayerValid(int playerID);
// Returns true if the given player is a a human player.
bool kbIsPlayerHuman(int playerID);
// Returns the player's handicap multiplier (ie., 1.0 = no handicap).
float kbGetPlayerHandicap(int playerID);
// Sets the indicated player's handicap multiplier (ie., 1.0 = no handicap).
void kbSetPlayerHandicap(int playerID, float handicap);
// Returns whether the game is over or not.
bool kbIsGameOver();
// Returns the location of the main town.
vector kbGetTownLocation(void);
// Returns the area ID of the main town.
int kbGetTownAreaID(void);
// Sets the location of the main town.
bool kbSetTownLocation(vector location);
// Returns the auto base creation value.
bool kbGetAutoBaseCreate(void);
// Sets the auto base creation value.
void kbSetAutoBaseCreate(bool v);
// Returns the auto base creation distance.
float kbSetAutoBaseCreateDistance(void);
// Sets the auto base creation distance.
void kbSetAutoBaseCreateDistance(float v);
// Returns the auto base detection value.
bool kbGetAutoBaseDetect(void);
// Sets the auto base detection value.
void kbSetAutoBaseDetect(bool v);
// Returns the auto base creation distance.
float kbSetAutoBaseDetectDistance(void);
// Sets the auto base creation distance.
void kbSetAutoBaseDetectDistance(float v);
// gets the nearest base of player relation from the location. (DO NOT USE cPlayerRelationEnemyNotGaia!!!)
long kbFindClosestBase(long playerRelation, vector location);
// Returns the ID of the next base that will be created.
int kbBaseGetNextID(void);
// Returns the number of bases for the given player.
int kbBaseGetNumber(int playerID);
// Returns the BaseID for the given base.
int kbBaseGetIDByIndex(int playerID, int index);
// Creates a base.
int kbBaseCreate(int playerID, string name, vector position, float distance);
// Finds/Creates a resource base.
int kbBaseFindCreateResourceBase(int resourceType, int resourceSubType, int parentBaseID);
// Finds/Creates a 'forward' military base against the given enemy base.
int kbBaseFindCreateResourceBase(int enemyPlayerID, int enemyBaseID);
// Destroys the given base.
bool kbBaseDestroy(int playerID, int baseID);
// Destroys all of the bases for the given player.
void kbBaseDestroyAll(int playerID);
// Gets the location of the base.
vector kbBaseGetLocation(int playerID, int baseID);
// Gets the last known damage location of the base.
vector kbBaseGetLastKnownDamageLocation(int playerID, int baseID);
// Returns the player ID of the specified base's owner.
int kbBaseGetOwner(int baseID);
// Sets the front (and back) of the base.
bool kbBaseSetFrontVector(int playerID, int baseID, vector frontVector);
// Gets the front vector of the base.
vector kbBaseGetFrontVector(int playerID, int baseID);
// Gets the back vector of the base.
vector kbBaseGetBackVector(int playerID, int baseID);
// Returns the number of continuous seconds the base has been under attack.
int kbBaseGetTimeUnderAttack(int playerID, int baseID);
// Gets the under attack flag of the base.
bool kbBaseGetUnderAttack(int playerID, int baseID);
// Sets the active flag of the base.
bool kbBaseSetActive(int playerID, int baseID, bool active);
// Gets the active flag of the base.
bool kbBaseGetActive(int playerID, int baseID);
// Gets the main base ID for the player.
int kbBaseGetMainID(int playerID);
// Sets the main flag of the base.
bool kbBaseSetMain(int playerID, int baseID, bool main);
// Gets the main flag of the base.
bool kbBaseGetMain(int playerID, int baseID);
// Sets the forward flag of the base.
bool kbBaseSetForward(int playerID, int baseID, bool forward);
// Gets the forward flag of the base.
bool kbBaseGetForward(int playerID, int baseID);
// Sets the settlement flag of the base.
bool kbBaseSetSettlement(int playerID, int baseID, bool settlement);
// Gets the settlement flag of the base.
bool kbBaseGetSettlement(int playerID, int baseID);
// Sets the military flag of the base.
bool kbBaseSetMilitary(int playerID, int baseID, bool military);
// Gets the military flag of the base.
bool kbBaseGetMilitary(int playerID, int baseID);
// Gets the military gather point of the base.
vector kbBaseGetMilitaryGatherPoint(int playerID, int baseID);
// Sets the military gather point of the base.
bool kbBaseSetMilitaryGatherPoint(int playerID, int baseID, vector gatherPoint);
// Sets the economy flag of the base.
bool kbBaseSetEconomy(int playerID, int baseID, bool Economy);
// Gets the economy flag of the base.
bool kbBaseGetEconomy(int playerID, int baseID);
// Gets the maximum resource distance of the base.
float kbBaseGetMaximumResourceDistance(int playerID, int baseID);
// Sets the maximum resource distance of the base.
void kbBaseSetMaximumResourceDistance(int playerID, int baseID, float distance);
// Adds the given unit to the base.
bool kbBaseAddUnit(int playerID, int baseID, int unitID);
// Removes the given unit to the base.
bool kbBaseRemoveUnit(int playerID, int baseID, int unitID);
// Returns the number of units that match the criteria.
bool kbBaseGetNumberUnits(int playerID, int baseID, int relation, int unitTypeID);
// Sets position and distance of the base.
int kbBaseSetPositionAndDistance(int playerID, int baseID, vector position, float distance);
// Gets distance of the base.
float kbBaseGetDistance(int playerID, int baseID);
// Returns true if the unit is currently visible to the player.
bool kbUnitVisible(int unitID);
// Returns true if the location is currently visible to the player.
bool kbLocationVisible(vector location);
// Returns the position of the cinematic block.
vector kbGetBlockPosition(string blockName);
// Returns the UnitID of the cinematic block.
int kbGetBlockID(string blockName);
// Returns a random, valid PUID that's of the given type.
int kbGetRandomEnabledPUID(int unitTypeID, int escrowID);
// Creates a unit pick.
int kbUnitPickCreate(string name);
// Destroys the given unit pick.
bool kbUnitPickDestroy(int upID);
// Resets all of the unit pick data.
bool kbUnitPickResetAll(int upID);
// Resets the unit pick results.
bool kbUnitPickResetResults(int upID);
// Gets the unit pick preference weight.
float kbUnitPickGetPreferenceWeight(int upID);
// Sets the unit pick preference weight.
bool kbUnitPickSetPreferenceWeight(int upID, float v);
// Sets the unit pick enemy player ID.
bool kbUnitPickSetEnemyPlayerID(int upID, int playerID);
// Sets the unit pick combat efficiency weight.
bool kbUnitPickSetCombatEfficiencyWeight(int upID);
// Sets the unit pick combat efficiency weight.
bool kbUnitPickSetBuildingCombatEfficiencyWeight(int upID);
// Resets the enemy unit typeIDs for the unit pick combat efficiency calculation.
bool kbUnitPickResetCombatEfficiencyTypes(int upID);
// Adds an enemy unit typeID to the unit pick combat efficiency calculation.
bool kbUnitPickAddCombatEfficiencyType(int upID, int typeID, float weight);
// Adds an enemy building typeID to the unit pick combat efficiency calculation.
bool kbUnitPickAddBuildingCombatEfficiencyType(int upID, int typeID, float weight);
// Sets the unit pick cost weight.
bool kbUnitPickSetCostWeight(int upID);
// Sets the unit pick movement type.
bool kbUnitPickSetMovementType(int upID, int movementType);
// Sets the unit pick desired number unit types.
bool kbUnitPickSetDesiredNumberUnitTypes(int upID, int number, int numberBuildings, bool degradeNumberBuildings);
// Gets the unit pick desired number unit types.
int kbUnitPickGetDesiredNumberUnitTypes(int upID);
// Sets the unit pick desired number buildings for the index-th unit type.
bool kbUnitPickSetDesiredNumberBuildings(int upID, int index, int numberBuildings);
// gets the unit pick desired number buildings for the index-th unit type.
int kbUnitPickGetDesiredNumberBuildings(int upID, int index);
// Sets the unit pick desired number unit types.
bool kbUnitPickSetMinimumNumberUnits(int upID, int number);
// Gets the unit pick minimum number units.
int kbUnitPickGetMinimumNumberUnits(int upID);
// Sets the unit pick desired number unit types.
bool kbUnitPickSetMaximumNumberUnits(int upID, int number);
// Gets the unit pick maximum number units.
int kbUnitPickGetMaximumNumberUnits(int upID);
// Sets the unit pick desired min pop.
bool kbUnitPickSetMinimumPop(int upID, int number);
// Gets the unit pick minimum pop.
int kbUnitPickGetMinimumPop(int upID);
// Sets the unit pick desired max pop.
bool kbUnitPickSetMaximumPop(int upID, int number);
// Gets the unit pick maximum pop.
int kbUnitPickGetMaximumPop(int upID);
// Sets the unit pick attack unit type.
bool kbUnitPickSetAttackUnitType(int upID, int type);
// Gets the unit pick attack unit type.
int kbUnitPickGetAttackUnitType(int upID);
// Sets the unit pick attack unit type.
bool kbUnitPickSetGoalCombatEfficiencyType(int upID, int type);
// Gets the unit pick attack unit type.
int kbUnitPickGetGoalCombatEfficiencyType(int upID);
// Sets the preferenceFactor for that unit type.
bool kbUnitPickSetPreferenceFactor(int upID, int unitTypeID, float preferenceFactor);
// Adjusts the preferenceFactor for that unit type (uses 50.0 as the base if the UP doesn't exist yet).
bool kbUnitPickAdjustPreferenceFactor(int upID, int unitTypeID, float baseFactorAdjustment);
// Removes preferenceFactor to this unit type.
bool kbUnitPickRemovePreferenceFactor(int upID, int unitTypeID);
// Sets the minimum number enemy units to turn on counter enemy mode.
bool kbUnitPickSetMinimumCounterModeNumberUnits(int upID, int pop);
// Sets the minimum enemy pop count to turn on counter enemy mode.
bool kbUnitPickSetMinimumCounterModePop(int upID, int pop);
// Runs the unit pick.
int kbUnitPickRun(int upID, int age);
// Returns the number of unit pick results.
int kbUnitPickGetNumberResults(int upID);
// Returns the index-th ProtoUnitID.
int kbUnitPickGetResult(int upID, int index);
// Returns the index-th total factor.
int kbUnitPickGetResultFactor(int upID, int index);
// returns the visible area group that matches the given criteria.
int kbFindAreaGroup(int groupType, float surfaceAreaRatio, int compareAreaID);
// returns the visible area group that matches the given criteria.
int kbFindAreaGroupByLocation(int groupType, float relativeX, float relativeZ);
// returns the id of the best building to repair.
int kbFindBestBuildingToRepair(vector position, float distance, float healthRatio, int repairUnderAttackUnitTypeID);
// set the explicit position that every forward base will use.
void kbSetForwardBasePosition(vector position);
// sets the TargetSelector Factor value.
int kbSetTargetSelectorFactor(int type, float val);
// gets the TargetSelector Factor value.
float kbGetTargetSelectorFactor(int type);
// gets the unit gather rate.
float kbProtoUnitGetGatherRate(int puid, int resourcePUID, int resourceID);
// gets number trade routes.
int kbGetNumberTradeRoutes(void);
// gets number trading posts on the route.
int kbTradeRouteGetNumberTradingPosts(int index);
// gets trading post id from route.
int kbTradeRouteGetTradingPostID(int index, int postIndex);
// gets number units from route.
int kbTradeRouteGetNumberUnits(int index);
// gets unit from route.
int kbTradeRouteGetUnit(int index, int unitIndex);
// gets the player starting position.
vector kbGetPlayerStartingPosition(int playerID);
// gets the proto unit pop count.
int kbGetProtoUnitPopCount(int puid);
// checks whether we have FFA turned on or not.
bool kbGetIsFFA();
// checks whether the proto unit can train the specified unit.
bool kbProtoUnitCanTrain(int puid, int trainPUID);
// Returns pop cap of the proto unit.
int kbProtoUnitGetPopCap(int puid);
// Returns build points of the proto unit.
float kbProtoUnitGetBuildPoints(int puid);
// gets number of resources.
int kbResourceGetNumber();
// gets resource id by index.
int kbResourceGetIDByIndex(int index);
// gets resource type.
int kbResourceGetType(int id);
// gets resource sub type.
int kbResourceGetSubType(int id);
// gets resource number units.
int kbResourceGetNumberUnits(int id);
// gets unit in the resource by index.
int kbResourceGetUnit(int id, int index);
// set to blacklist the resource.
int kbResourceSetBlacklisted(int id, bool v);
// Returns LOS of the proto unit.
float kbProtoUnitGetLOS(int puid);
// Returns trade route of the unit.
int kbUnitGetTradeRoute(int unitID);
// Returns sub civ of the unit.
int kbUnitGetSubCiv(int unitID);
// Returns build bounty of the unit.
float kbProtoUnitGetBuildBounty(int unitID);
// Returns bounty of the unit.
float kbProtoUnitGetBounty(int unitID);
// Returns number of actions of the unit.
int kbUnitGetNumberActions(int unitID);
// Returns action ID of the unit.
int kbUnitGetActionID(int unitID);
// Returns action ID at the index of the unit.
int kbUnitGetActionIDByIndex(int unitID, int index);
// Returns action type at the index of the unit.
int kbUnitGetActionTypeByIndex(int unitID, int index);
// Returns action is paused or not at the index of the unit.
int kbUnitGetActionPausedByIndex(int unitID, int index);
// Returns the resource name.
string kbGetResourceName(int id);
// Returns the counter current value.
int kbCounterGetCurrentValue(string name);
// Returns the proto unit command name.
string kbProtoUnitCommandGetName(int id);
// NOTE: All of this information is game-time/context dependent.
// Returns the name of the tech ID.
string kbGetTechName(int techID);
// Returns the name of the protounit ID.
string kbGetProtoUnitName(int protoUnitTypeID);
// Returns the base type ID of the unit.
int kbGetUnitBaseTypeID(int unitID);
// Returns the name of the unit type.
string kbGetUnitTypeName(int unitTypeID);
// Creates a unit progression of the given name.
int kbCreateUnitProgression(string unitName, string name);
// Creates a tech progression of the given name.
int kbCreateTechProgression(string techName, string name);
// gets cheapest researchable unit upgrade, optionally for specified unit/unit line.
int kbTechTreeGetCheapestUnitUpgrade(int unitTypeID, int researcherTypeID);
// gets cheapest researchable econ upgrade, optionally for specified resource unit type.
int kbTechTreeGetCheapestEconUpgrade(int resourceUnitTypeID, int resourceTypeID);
// returns true if the tech changes the unit type's stat.
int kbTechAffectsUnit(int techID, int protoUnitID);
// returns true if the tech affects the unit's gather rate for the resource type.
int kbTechAffectsWorkRate(int techID, int resourceTypeID, int resourceSubType);
// Returns the proto unit ID of this tech.
int kbTechGetProtoUnitID(int techID);
// Dumps the current state of the KBTT.
void kbTechTreeDump(void);
// Returns the total number of steps to complete the progression.
int kbProgressionGetTotalNodes(int progressionID);
// Returns the total cost of the given resource for this progressionID. A resourceID of -1 will return the total Cost.
float kbProgessionGetTotalResourceCost(int progressionID, int resourceID);
// Returns the type of node at the given index, either Unit type or Tech type.
int kbProgressionGetNodeType(int progressionID, int nodeIndex);
// Returns the data at nodeIndex, either UnitID or TechID, depending on the type.
int kbProgressionGetNodeData(int progressionID, int nodeIndex);
// Random map echo.
void rmEchoWarning(string echoString, int level);
// Random map echo.
void rmEchoError(string echoString, int level);
// Random map echo.
void rmEchoInfo(string echoString, int level);
// Returns a random float between min and max.
float rmRandFloat(float min, float max);
// Returns a random integer between min and max.
int rmRandInt(int min, int max);
// Returns true if this map is to place a covered wagon instead of a town center.
bool rmGetNomadStart();
// Returns true if this map is set to be a FFA game which means each player on their own team.
bool rmGetIsFFA();
// Returns true if this map is set to be a relic game..
bool rmGetIsRelicCapture();
// Returns true if this map is set to be a King of the Hill game.
bool rmGetIsKOTH();
// Sets the size of the map.
void rmSetMapSize(int x, int z);
// Returns the X size of the map.
int rmGetMapXSize(void);
// Returns the Z size of the map.
int rmGetMapZSize(void);
// Sets the sea level for the map.
void rmSetSeaLevel();
// Gets the sea level for the map.
float rmGetSeaLevel();
// Sets the sea type for the map. This is used if terrain is initialized to water.
bool rmSetSeaType(string name);
// Sets up terrain for initializing with a noise layer.
bool rmSetMapElevationParameters(int type, float freq, int octaves, float persistence, float variation);
// Initializes the base terrain with the requested mix. Call before rmTerrainInitialize.
bool rmSetBaseTerrainMix(string mixName);
// Adds a terrain to paint between the specified heights, modified by a random number between 0.0 and outerRange.
bool rmAddMapTerrainByHeightInfo(string terrain, float minHeight, float maxHeight, float outerRange);
// Adds a terrain to paint on tiles that are sloped between the specified angles (0 degrees is flat terrain, 90 degrees is sheer terrain), modified by a random number between 0.0 and outerRange.
bool rmAddMapTerrainByAngleInfo(string terrain, float minSlope, float maxSlope, float outerRange);
// Sets how much to smooth the overall terrain after initializing with noise.
bool rmSetMapElevationHeightBlend(int blend);
// place object clusters (of the specified protounit) around the map, and also optionally paint with the specified terrain.
bool rmPlaceMapClusters(string terrain, string protounit);
// sets up cluster system; valid ranges are from -1.0 to 1.0 and are compared to the internal noise field for deciding where to paint terrain and place clusters. Type is cClusterLand, or cClusterWater, or cClusterShallowWater, or cClusterEverywhere.
bool rmSetMapClusteringPlacementParams(float paintThreshold, float placeMinVal, float placeMaxVal, int type);
// sets up cluster system; min/max objects per tile (default: 0-3), and max random offset when placing (default: 0.5 tiles).
bool rmSetMapClusteringObjectParams(int minObjectCount, int maxObjectCount, float maxPosOffset);
// sets up cluster system; standard inputs to noise generator used to determine cluster placement.
bool rmSetMapClusteringNoiseParams(float minFrequency, int octaves, float persistence);
// Converts an area from fraction of the map to tile count.
int rmAreaFractionToTiles(float fraction);
// Converts area tile count to fraction of map.
float rmAreaTilesToFraction(int tiles);
// Converts an fraction of the map in the x direction to tile count.
int rmXFractionToTiles(float fraction);
// Converts tile count in the x direction to fraction of map.
float rmXTilesToFraction(int tiles);
// Converts an fraction of the map in the z direction to tile count.
int rmZFractionToTiles(float fraction);
// Converts tile count in the z direction to fraction of map.
float rmZTilesToFraction(int tiles);
// Converts an angle in degrees to radians.
float rmDegreesToRadians(float degrees);
// Converts a distance in meters to a number of tiles.
int rmMetersToTiles(float meters);
// Converts a number of tiles to a distance in meters.
float rmTilesToMeters(int tiles);
// Converts meters into a fraction of the map in the x direction.
float rmXMetersToFraction(float meters);
// Converts meters into a fraction of the map in the z direction.
float rmZMetersToFraction(float meters);
// Converts a fraction of the map in the x direction to meters.
float rmXFractionToMeters(float meters);
// Converts meters a fraction of the map in the z direction to meters.
float rmZFractionToMeters(float meters);
// Creates an area.
int rmCreateArea(string name, int parentAreaID);
// Set the area size to a min/max fraction of the map.
bool rmSetAreaSize(float minFraction, float maxFraction);
// Enable edge filling and set a border search size (for Carolina and similar maps with a big continent).
bool rmSetAreaEdgeFilling(int areaID, int borderSize);
// Set the area location.
bool rmSetAreaLocation(int areaID, float xFraction, float zFraction);
// Set the area location to player's location.
bool rmSetAreaLocPlayer(int areaID, int playerID);
// Set the area location to team's location.
bool rmSetAreaLocTeam(int areaID, int teamID);
// Builds the specified area.
bool rmBuildArea(int areaID);
// Simulatenously builds all unbuilt areas.
int rmBuildAllAreas();
// Sets the terrain type for an area.
bool rmSetAreaTerrainType(int areaID, string terrainTypeName);
// Sets the mix for an area. Overrides terrain type if it is also set.
bool rmSetAreaMix(int areaID, string mixName);
// Paints the terrain for a specified area.
bool rmPaintAreaTerrain(int areaID);
// Paints the area's tiles in the specified height range with specified terrain (with outerRange buffer if feathering is desired).
bool rmPaintAreaTerrainByHeight(long areaID, string terrain, float minHeight, float maxHeight, float outerRange);
// Paints the area's tiles in the specified angle range with specified terrain (with outerRange buffer if feathering is desired).
bool rmPaintAreaTerrainByAngle(long areaID, string terrain, float minAngle, float maxAngle, float outerRange);
// Sets the base height for an area.
bool rmSetAreaBaseHeight(int areaID, float height);
// Sets whether the area build process will warn if it fails.
bool rmSetAreaWarnFailure(int areaID, bool warn);
// Sets the forest type for an area.
bool rmSetAreaForestType(int areaID, string forestName);
// Sets the forest density for an area.
bool rmSetAreaForestDensity(int areaID, float density);
// Sets the forest density for an area.
bool rmSetAreaForestClumpiness(int areaID, float density);
// Sets the forest density for an area.
bool rmSetAreaForestUnderbrush(int areaID, float density);
// Sets the water type for an area.
bool rmSetAreaWaterType(int areaID, string waterName);
// Returns the point in areaID that's closest to the given point, optionally requiring that it pass the given constraint.
vector rmGetAreaClosestPoint(int areaID, vector point, float pullback, int constraintID);
// Sets the cliff type for an area.
bool rmSetAreaCliffType(int areaID, string cliffName);
// Set cliff painting options for an area.
bool rmSetAreaCliffPainting(int areaID, bool paintGround, bool paintOutsideEdge, bool paintSide, float minSideHeight, bool paintInsideEdge);
// Set cliff edge parameters for an area.
bool rmSetAreaCliffEdge(int areaID, int count, float size, float variance, float spacing, int mapEdge);
// Set an area's cliff height.
bool rmSetAreaCliffHeight(int areaID, float val, float variance, float ramp);
// Adds a class for an area's cliff edge to avoid.
bool rmAddAreaCliffEdgeAvoidClass(int areaID, int avoidID, float minDist);
// make a river dude.
int rmRiverCreate(int areaID, string waterType, int breaks, int offset, int minR, int maxR);
// .
bool rmRiverSetConnections(riverID, start, end);
// .
bool rmRiverConnectRiver(riverID, riverID, pct, end);
// Add waypoint to a river. Don't mix with rmRiverSetConnections or rmRiverConnectRiver
bool rmRiverAddWaypoint(riverID, xFraction, zFraction);
// .
bool rmRiverSetBankNoiseParams(riverID, frequency, octaves, persistence, sineLength, sineAmt, variation);
// .
bool rmRiverSetShallowRadius(riverID, radius);
// .
bool rmRiverAddShallow(riverID, distancePct);
// .
bool rmRiverAddShallows(riverID, count, radius);
// .
bool rmRiverAvoid(riverID, riverID2, minDist);
// Reveals a river plus the specified number of extra tiles around it.
bool rmRiverReveal(int riverID, int extraTiles);
// Sets up river foundation parameters: the terrain buffer around the river, and the height of the banks above water level
bool rmSetRiverFoundationParams(int tileBuffer, float heightOffset);
// Sets whether RM activities should be constrained to the main world circle.
bool rmSetWorldCircleConstraint(bool constrain);
// Determines whether an area obeys world circle constraint.
bool rmSetAreaObeyWorldCircleConstraint(int areaID, bool constrain);
// Adds a terrain layer to an area.
bool rmAddAreaTerrainLayer(int areaID, string terrain, float minDist, float maxDist);
// Specifies if the area should vary the terrain layer edges.
bool rmSetAreaTerrainLayerVariance(int areaID, bool variance);
// Sets minimum number of area blobs.
bool rmSetAreaMinBlobs(int areaID, int blobs);
// Sets maximum number of area blobs.
bool rmSetAreaMaxBlobs(int areaID, int blobs);
// Sets minimum blob distance.
bool rmSetAreaMinBlobDistance(int areaID, float dist);
// Sets maximum blob distance.
bool rmSetAreaMaxBlobDistance(int areaID, float dist);
// Sets area coherence (0-1).
bool rmSetAreaCoherence(int areaID, float coherence);
// Sets area edge smoothing distance (distance is number of neighboring points to consider in each direction).
bool rmSetAreaSmoothDistance(int areaID, int smoothDistance);
// Sets how smoothly area height blends into surroundings.
bool rmSetAreaHeightBlend(int areaID, int heightBlend);
// Gets area ID for given area name.
int rmAreaID(string name);
// Adds an area influence point.
bool rmAddAreaInfluencePoint(int areaID, float xFraction, float zFraction);
// Adds an area influence segment.
bool rmAddAreaInfluenceSegment(int areaID, float xFraction1, float zFraction1, float xFraction2, float zFraction2);
// Add an unit type that the specified area removes.
bool rmAddAreaRemoveType(int areaID, string typeName);
// Adds a terrain replacement rule to the area.
bool rmAddAreaTerrainReplacement(int areaID, string terrainTypeName, string newTypeName);
// Sets the area elevation variation type (cElevNormal, cElevFractalSum, cElevTurbulence).
bool rmSetAreaElevationType(int areaID, int type);
// Sets the area elevation variation noise frequency (best >0 and <1).
bool rmSetAreaElevationMinFrequency(int areaID, float freq);
// Sets the area elevation variation noise octaves.
bool rmSetAreaElevationOctaves(int areaID, int octaves);
// Sets the area elevation variation noise persistence (best >0 and <1).
bool rmSetAreaElevationPersistence(int areaID, float persistence);
// Sets the area elevation variation height (amount to vary +- from area base height).
bool rmSetAreaElevationVariation(int areaID, float variation);
// Sets the area elevation noise to falloff as it gets closer to the area edge.
bool rmSetAreaElevationEdgeFalloffDist(int areaID, float dist);
// Sets the area elevation variation noise bias (-1 means down only, 0 means +- equally, 1 means up only.)
bool rmSetAreaElevationNoiseBias(int areaID, float bias);
// Sets the area to be revealed (-1 means don't reveal, 0 means reveal, >0 means reveal plus that number of extra tiles.
bool rmSetAreaReveal(int areaID, int tiles);
// Sets the global snow percent.
void rmSetGlobalSnow(percent);
// Sets the global rain percent.
void rmSetGlobalRain(percent);
// Sets storm length and time between storm in seconds.
void rmSetGlobalStormLength(length, timeBetweenStorms);
// Sets the global wind magnitude (1.0f is default).
void rmSetWindMagnitude(float magnitude);
// Initializes the terrain to the base type and height.
void rmTerrainInitialize(string baseTerrain, float height);
// Fill map corners with blackmap.
void rmFillMapCorners();
// Sets a lighting set
void rmSetLightingSet(string name);
// Applies a lighting set fade.
void rmDoLightingFade("lightSetName", fadeTime);
// Applies a lighting set effect.
void rmDoLightingEffect("lightSetName", blendInTime, effectTime, blendOutTime);
// Sets Gaia's civilization
void rmSetGaiaCiv(int civ);
// Allocates the number of sub civs in the world.
bool rmAllocateSubCivs(int number);
// Sets a given sub civ in the world.
bool rmSetSubCiv(int index, string civName, bool big);
// Returns the civ ID.
int rmGetCivID(string civName);
// Adds mercs of to the merc manager for this game.
int rmAddMerc(string unitName, float count, float minCount, float maxCount, float countIncrement, bool multipleUses);
// Manually sets a player's starting location.
bool rmSetPlayerLocation (int playerID, float xFraction, float zFraction);
// Sets the area of the map to use for player placement.
void rmSetPlayerPlacementArea(float minX, float minZ, float maxX, float maxZ);
// Sets the team spacing modifier.
void rmSetTeamSpacingModifier(float modifier);
// Sets the team to place.
void rmSetPlacementTeam(int teamID);
// Sets the section of the placement line to use.
void rmSetPlacementSection(float fromPercent, float toPercent);
// Makes a circle of player locations.
bool rmPlacePlayersCircular(float minFraction, float maxFraction, float angleVariation);
// Makes a square of player locations.
bool rmPlacePlayersSquare(float dist, float distVariation, float spacingVariationfloat);
// Makes a line of player locations.
bool rmPlacePlayersLine(float x1, float z1, float x2, float z2, float distVariation, float spacingVariation);
// Makes a line of player locations along the specified river.
bool rmPlacePlayersRiver(int riverID, float distVariation, float spacingVariation, float edgeDistance);
// Sets one player location.
bool rmPlacePlayer(int playerID, float xFraction, float zFraction);
// Sets a player's 'official' area.
bool rmSetPlayerArea(int playerID, int areaID);
// Gets a player's start location x fraction.
float rmPlayerLocXFraction(int playerID);
// Gets a player's start location z fraction.
float rmPlayerLocZFraction(int playerID);
// Adds some fairLoc placement info.
int rmAddFairLoc(string unitName, bool forward, bool inside, float minPlayerDist, float maxPlayerDist, float locDist, float edgeDist, bool playerArea, bool teamArea);
// Sets fairLoc placement locations.
bool rmPlaceFairLocs();
// Resets fairLoc placment info.
void rmResetFairLocs();
// Gets a player's number of fairLocs.
int rmGetNumberFairLocs(int playerID);
// Gets a player's fairLoc x fraction.
float rmFairLocXFraction(int playerID, int index);
// Gets a player's fairLoc z fraction.
float rmFairLocZFraction(int playerID, int index);
// Sets a player's resource amount.
bool rmSetPlayerResource(int playerID, string resourceName, float amount);
// Adds to a player's resource amount.
bool rmAddPlayerResource(int playerID, string resourceName, float amount);
// Multiplys a player's resource amount by the given factor.
bool rmMultiplyPlayerResource(int playerID, string resourceName, float factor);
// Gets a player's name.
string rmGetPlayerName(int playerID);
// Gets the team the specified player is on.
int rmGetPlayerTeam(int playerID);
// Gets the civilization the specified player is on.
int rmGetPlayerCiv(int playerID);
// Gets the civilization type the specified player is on.
int rmGetPlayerCivType(int playerID);
// Gets the culture the specified player is on.
int rmGetPlayerCulture(int playerID);
// Gets the number of players on the given team.
int rmGetNumberPlayersOnTeam(int teamID);
// Sets a team's 'official' area.
bool rmSetTeamArea(int teamID, int areaID);
// Gets the total number of teams in the map, including blank teams.
int rmGetNumberWorldTeams();
// Gets the actual team in BWorld data the specified player is on.
int rmGetPlayerWorldTeam(int playerID);
// Gets the actual team in BWorld data for the given RM team.
int rmGetWorldTeamID(int teamID);
// Make a box constraint.
int rmCreateBoxConstraint(string name, float startX, float startZ, float endX, float endZ, float bufferFraction);
// Makes a 'pie' constraint.
int rmCreatePieConstraint(string name, float xFraction, float zFraction, float insideRadius, float outsideRadius, float minAngle, float maxAngle, float bufferFraction);
// Make an area overlap constraint.
int rmCreateAreaOverlapConstraint(string name, int areaID);
// Make a constraint that forces something to remain within an area.
int rmCreateAreaConstraint(string name, int areaID);
// Make an area distance constraint.
int rmCreateAreaDistanceConstraint(string name, int areaID, float distance);
// Make an area max distance constraint.
int rmCreateAreaMaxDistanceConstraint(string name, int areaID, float distance);
// Make a constraint that forces something to remain within an area's edge.
int rmCreateEdgeConstraint(string name, int areaID);
// Make an area edge distance constraint.
int rmCreateEdgeDistanceConstraint(string name, int areaID, float distance);
// Make an area edge max distance constraint.
int rmCreateEdgeMaxDistanceConstraint(string name, int areaID, float distance);
// Make a constraint that forces something to remain within an area's cliff edge.
int rmCreateCliffEdgeConstraint(string name, int areaID);
// Make an area cliff edge distance constraint.
int rmCreateCliffEdgeDistanceConstraint(string name, int areaID, float distance);
// Make an area cliff edge max distance constraint.
int rmCreateCliffEdgeMaxDistanceConstraint(string name, int areaID, float distance);
// Make a constraint that forces something to remain within an area's cliff ramp edge.
int rmCreateCliffRampConstraint(string name, int areaID);
// Make an area cliff ramp edge distance constraint.
int rmCreateCliffRampDistanceConstraint(string name, int areaID, float distance);
// Make an area cliff ramp edge max distance constraint.
int rmCreateCliffRampMaxDistanceConstraint(string name, int areaID, float distance);
// Make a class distance constraint.
int rmCreateClassDistanceConstraint(string name, int classID, float distance);
// Make a type distance constraint.
int rmCreateTypeDistanceConstraint(string name, int classID, float distance);
// Make a constraint to avoid terrain with certain a passability.
int rmCreateTerrainDistanceConstraint(string name, string type, bool passable, float distance);
// Make a constraint to be close to terrain with certain a passability.
int rmCreateTerrainMaxDistanceConstraint(string name, string type, bool passable, float distance);
// Make a constraint to pass if in or out of a corner.
int rmCreateCornerConstraint(string name, int corner, bool outside);
// Make a constraint to avoid trade routes.
int rmCreateTradeRouteDistanceConstraint(string name, float minDistance);
// Add specified constraint to an area.
bool rmAddAreaConstraint(int areaID, int constraintID);
// Create home city gather point constraint to avoid all HCGPs.
bool rmCreateHCGPConstraint(string name, float minDistance);
// Create home city gather point constraint to avoid given player's HCGP.
bool rmCreateHCGPSelfConstraint(string name, long playerID, float minDistance);
// Create home city gather point constraint to avoid given player's ally's HCGPs.
bool rmCreateHCGPAllyConstraint(string name, long playerID, float minDistance);
// Create home city gather point constraint to avoid given player's enemy's HCGPs.
bool rmCreateHCGPEnemyConstraint(string name, long playerID, float minDistance);
// Make an max height constraint (terrain must be less than given height).
int rmCreateMaxHeightConstraint(string name, float height);
// Add specified constraint to a fairLoc placement.
bool rmAddFairLocConstraint(int fairLocID, int constraintID);
// Add specified constraint to given object def.
bool rmAddObjectDefConstraint(int defID, int constraintID);
// Define a class with the given name.
int rmDefineClass(string className);
// Add given area to specified class.
bool rmAddAreaToClass(int areaID, int classID);
// Add given object def to specified class.
bool rmAddObjectDefToClass(int objectDefID, int classID);
// Gets class ID for given class name.
int rmClassID(string name);
// Gets constraint ID for given constraint name.
int rmConstraintID(string name);
// Creates an object definition.
int rmCreateObjectDef(string name);
// Creates special object definition for starting units with the given cluster distance.
int rmCreateStartingUnitsObjectDef(float clusterDistance);
// Set the minimum distance for the object definition (in meters).
bool rmSetObjectDefMinDistance(int defID, float dist);
// Set the maximum distance for the object definition (in meters).
bool rmSetObjectDefMaxDistance(int defID, float dist);
// Turn on the garrison secondary units flag.
bool rmSetObjectDefGarrisonSecondaryUnits(int defID, bool on);
// Turn on the garrison starting units flag.
bool rmSetObjectDefGarrisonStartingUnits(int defID, bool on);
// Creates a herd out of all units placed in this object def.
bool rmSetObjectDefCreateHerd(int defID, bool on);
// Set a herd angle(clockwise from +z) in the object def.
bool rmSetObjectDefHerdAngle(int defID, float angle);
// Lets objects overlap within this object def.
bool rmSetObjectDefAllowOverlap(int defID, bool on);
// Forces things in this object def to get full arbitrary rotation.
bool rmSetObjectDefForceFullRotation(int defID, bool on);
// Add item to object definition.
bool rmAddObjectDefItem(int defID, string unitName, int count, float clusterDistance);
// Add item to object definition.
bool rmAddObjectDefItemByTypeID(int defID, int unitTypeID, int count, float clusterDistance);
// Place object definition at specific location for given player.
int rmPlaceObjectDefAtLoc(int defID, int playerID, float xFraction, float zFraction, int placeCount);
// Place object definition at specific point for given player.
int rmPlaceObjectDefAtPoint(int defID, int playerID, vector point, int placeCount);
// Set the trade route for all objects in this object definition.
int rmSetObjectDefTradeRouteID(int defID, int tradeRouteID);
// Place object definition per player.
int rmPlaceObjectDefPerPlayer(int defID, bool playerOwned, int placeCount);
// Place object definition for the player at the given area's location.
int rmPlaceObjectDefAtAreaLoc(int defID, int playerID, int areaID, int placeCount);
// Place object definition for the player in the given area.
int rmPlaceObjectDefInArea(int defID, int playerID, int areaID, int placeCount);
// Place object definition for the player at the location of a random area in the given class.
int rmPlaceObjectDefAtRandomAreaOfClass(int defID, int playerID, int classID, int placeCount);
// Place object definition for the player in a random area in the given class.
int rmPlaceObjectDefInRandomAreaOfClass(int defID, int playerID, int classID, int placeCount);
// Creates an connection.
int rmCreateConnection(string name);
// Sets the connection type.
int rmSetConnectionType(int connectionID, int connectionType, bool connectAll, float connectPercentage);
// Adds an area to the connection.
bool rmAddConnectionArea(int connectionID, int areaID);
// Sets the position variance of a connection.
bool rmSetConnectionPositionVariance(int connectionID, float variance);
// Sets the width of a connection.
bool rmSetConnectionWidth(int connectionID, float width, float variance);
// Sets the base height of a connection.
bool rmSetConnectionBaseHeight(int connectionID, float width);
// Sets area coherence (0-1).
bool rmSetConnectionCoherence(int connectionID, float width);
// Sets whether a connection warns on failure.
bool rmSetConnectionWarnFailure(int connectionID, bool warn);
// Sets how smoothly connection height blends into surroundings.
bool rmSetConnectionHeightBlend(int connectionID, float width);
// Sets connection edge smoothing distance (distance is number of neighboring points to consider in each direction).
bool rmSetConnectionSmoothDistance(int connectionID, float width);
// Adds a terrain replacement rule to the connection.
bool rmAddConnectionTerrainReplacement(int connectionID, string terrainTypeName, string newTypeName);
// Sets the terrain cost for a connection.
bool rmSetConnectionTerrainCost(int connectionID, string terrainTypeName, float cost);
// Sets the base terrain cost for a connection.
bool rmSetConnectionBaseTerrainCost(int connectionID, float cost);
// Builds the given connection.
bool rmBuildConnection(int connectionID);
// Adds the connection to specified class.
bool rmAddConnectionToClass(int connectionID, int classID);
// Add specified constraint to a connection.
bool rmAddConnectionConstraint(int connectionID, int constraintID);
// Add specified constraint for a connection start point.
bool rmAddConnectionStartConstraint(int connectionID, int constraintID);
// Add specified constraint for a connection end point.
bool rmAddConnectionEndConstraint(int connectionID, int constraintID);
// Sets the friendly cool loading screen text.
void rmSetStatusText(status, progress);
// Creates a trigger with the given name.
int rmCreateTrigger(string triggerName);
// Switches context to the given trigger ID.
bool rmSwitchToTrigger(int triggerID);
// Returns the trigger ID that corresponds to the given trigger name.
int rmTriggerID(string triggerName);
// Sets the priority of the context trigger.
int rmSetTriggerPriority(int priority);
// Sets the initial status of the context trigger.
int rmSetTriggerActive(bool active);
// Sets the context trigger to run immediately upon activation if runImmediately == true.
int rmSetTriggerRunImmediately(bool runImmediately);
// Sets the context trigger to loop if loop == true.
int rmSetTriggerLoop(bool loop);
// Untested.
int rmSetTriggerOr(bool or);
// Untested.
int rmSetTriggerNot(bool not);
// Adds the given condition to the context trigger.
int rmAddTriggerCondition(string conditionType);
// Sets the string value of the given param.
bool rmSetTriggerConditionParam(string paramName, string value, bool add);
// Sets the int value of the given param.
bool rmSetTriggerConditionParamInt(string paramName, int value, bool add);
// Sets the float value of the given param.
bool rmSetTriggerConditionParamFloat(string paramName, float value, bool add);
// Sets the army ID of the given param.
bool rmSetTriggerConditionParamArmy(string paramName, int playerID, int armyID, bool add);
// Sets the vector value of the given param.
bool rmSetTriggerConditionParamVector(string paramName, vector point, bool add);
// Adds the given effect to the context trigger.
bool rmAddTriggerEffect(string effectType);
// Sets the string value of the given effect.
int rmSetTriggerEffectParam(string paramName, string value, bool add);
// Sets the int value of the given effect.
bool rmSetTriggerEffectParamInt(string paramName, int value, bool add);
// Sets the float value of the given param.
bool rmSetTriggerEffectParamFloat(string paramName, float value, bool add);
// Sets the army ID of the given param.
bool rmSetTriggerEffectParamArmy(string paramName, int playerID, int armyID, bool add);
// Sets the vector value of the given param.
bool rmSetTriggerEffectParamVector(string paramName, vector point, bool add);
// Creates an army and returns its ID.
int rmCreateArmy(int playerID, string armyName);
// Adds the units spawned by the given object def to the given army.
bool rmAddUnitsToArmy(int playerID, int armyID, int objectDefID);
// Returns the number of units spawned by the object def.
int rmGetNumberUnitsPlaced(int objectDefID);
// Returns the ID of the index-th unit spawned by the object def.
int rmGetUnitPlaced(int objectDefID, int index);
// .
int rmGetUnitPlacedOfPlayer(int objectDefID, int playerID);
// Untested.
string rmGetScenarioNameOfUnitPlacedOfPlayer(int objectDefID, int playerID);
// Untested.
bool rmDefineConstant(string name, int value);
// Untested.
void rmSetIgnoreForceToGaia(bool val);
// Creates a grouping.
int rmCreateGrouping(string name, string filename);
// Add specified constraint to a grouping.
bool rmAddGroupingConstraint(int GroupingID, int constraintID);
// Place grouping at specified location.
bool rmPlaceGroupingAtLoc(int groupingID, int playerID, float xFraction, float zFraction, int placeCount);
// Place grouping at specified point.
bool rmPlaceGroupingAtPoint(int groupingID, int playerID, vector point, int placeCount);
// Place grouping for the player in the given area.
int rmPlaceGroupingInArea(int groupingID, int playerID, int areaID, int placeCount);
// Place an instance of a non single-selectable/workable grouping at specified location and returns its index.
int rmPlaceGroupingInstanceAtLoc(int groupingID, float xFraction, float zFraction, int playerID);
// Set the minimum distance for the grouping (in meters).
bool rmSetGroupingMinDistance(int defID, float dist);
// Set the maximum distance for the grouping (in meters).
bool rmSetGroupingMaxDistance(int defID, float dist);
// Add given grouping to specified class.
bool rmAddGroupingToClass(int GroupingID, int classID);
// Returns the radius for the given grouping instance ID.
float rmGetGroupingInstanceRadius(int GroupingInstanceID);
// Returns the first unit matching the given unit type for the given grouping instance ID.
int rmGetGroupingInstanceUnitByType(int GroupingInstanceID, string typeName);
// Returns the amount of units within the given grouping instance that can be rebuilt/replaced.
long rmGetGroupingInstanceNumRebuildableUnits(int GroupingInstanceID);
// Creates a trade route.
int rmCreateTradeRoute();
// Adds the given waypoint to the specified trade route.
bool rmAddTradeRouteWaypoint(int tradeRouteID, float xFraction, float zFraction);
// Adds the given waypoint to the specified trade route.
bool rmAddTradeRouteWaypointVector(int tradeRouteID, vector v);
// Adds random waypoints to the specified trade route.
bool rmAddRandomTradeRouteWaypoints(int tradeRouteID, float endXFraction, float endZFraction, int count, float maxVariation);
// Adds random waypoints to the specified trade route.
bool rmAddRandomTradeRouteWaypointsVector(int tradeRouteID, vector v, int count, float maxVariation);
// Creates a trade route in the specified area.
bool rmCreateTradeRouteWaypointsInArea(int tradeRouteID, int areaID, float length);
// Retrieves a waypoint along the trade route based on the fraction.
vector rmGetTradeRouteWayPoint(int tradeRouteID, float fraction);
// Builds the trade route with the given terrain type.
bool rmBuildTradeRoute(int tradeRouteID, string terrainTypeName);
// Sets the HCGP for the given player.
bool rmSetHomeCityGatherPoint(int playerID, vector point);
// Sets the HCWSP for the given player.
bool rmSetHomeCityWaterSpawnPoint(int playerID, vector point);
// Returns the lowest HC Level of the players in the game.
int rmGetLowHomeCityLevel(void);
// Returns the average (rounded down) HC Level of the players in the game.
int rmGetAverageHomeCityLevel(void);
// Returns the highest HC Level of the players in the game.
int rmGetHighHomeCityLevel(void);
// Returns the HC Level of the given player.
int rmGetHomeCityLevel(int playerID);
// Returns the position of the unit.
vector rmGetUnitPosition(int unitID);
// Indicates that this map is of a certain type (it can be multiple types simultaneously.
void rmSetMapType(string type);
// Returns true if the map belongs to the given type.
bool rmIsMapType(string type);
// Enables / disables local water disturbances.
void rmEnableLocalWater(bool enable);
// Adds constraint to closest point finder.
bool rmAddClosestPointConstraint(int constraintID);
// Clears constraints for closest point finder.
void rmClearClosestPointConstraints();
// Finds closest point satisfying the preset constraints.
vector rmFindClosestPoint(float xFraction, float zFraction, float maxDistance);
// Returns which area is closer.
int rmFindCloserArea(float xFraction, float zFraction, int area1, int area2);
// Adds the given waypoint to the specified cliff area (for valleys).
bool rmAddAreaCliffWaypoint(int areaID, float xFraction, float zFraction);
// Adds random waypoints to the specified cliff valley area.
bool rmAddAreaCliffRandomWaypoints(int areaID, float endXFraction, float endZFraction, int count, float maxVariation);
// Sets the min/max difficulty levels for placing nuggets.
void rmSetNuggetDifficulty(int minLevel, int maxLevel);
// Sets whether or not to reveal oceans.
void rmSetOcean(bool reveal);
// Sets whether or not to reveal the entirety of the map.
void rmSetAllMapReveal(bool reveal);
// Adds mercs to the merc manager for this game.
bool rmEnableMerc(string unitName, int buildLimit);
// Sets whether or not default RM merc sets should be disabled.
void rmDisableDefaultMercs(bool useDefaultMercs);
// Sets whether or not RM manager mercs should be enforced for civTypes which have no access to mercs.
void rmDisableCivTypeMercRestriction(bool disable);
// Adds outlaws to the merc manager for this game.
bool rmEnableOutlaw(string unitName, int buildLimit);
// Returns true if this map is set to be a Treaty game.
bool rmGetIsTreaty();
// Returns true if this map is set to be an Empire Wars game.
bool rmGetIsEmpireWars();
// Returns true if this map is set to be an Economy Mode game.
bool rmGetIsEconomyMode();
// Returns true if this map is set to be a Two Town game.
bool rmGetIsTwoTown();
// Returns the database ID for a given technology.
int rmGetTechID(techID);
// Adds a map-specific starting unit to the given player.
void rmAddMapStartingUnit(int player, string protoName);
// Adds a map-specific town starting unit to the given player.
void rmAddMapTownStartingUnit(int player, string protoName, float resAmt);
// Disable initial spawning of Town Starting units and resources.
void rmDisableColonyStartingResources(bool disable);
// Disable initial spawning of Town Starting crates for a given player.
void rmDisablePlayerStartingCrates(bool disable);
// Sets the number of initial colonies with starting unit and resource drops for this map.
void rmSetNumberInitialColonies(long num);
// Sets whether or not Trade Monopoly victory will be forbidden from being used in the current map.
void rmForbidTradeMonopoly(bool set);
// Adds a map objective.
int rmObjectiveAdd(long textStrID, long hintStrID, bool isPrimary, bool isVisible, bool isDiscovered);
// Sets the title text string ID to be used in the objectives screen.
int rmObjectiveScreenSetTitle(long stringID);
// Sets the goal text string ID to be used in the objectives screen.
int rmObjectiveScreenSetGoal(long stringID);
// Assigns a team restriction to the given objective.
void rmObjectiveSetTeam(long objID, long teamID);
// Assigns a team restriction to the given objective.
void rmObjectiveSetPlayer(long objID, long playerID);
// Sets the min interval of the current rule.
void xsSetRuleMinIntervalSelf(int interval);
// Sets the min interval of the given rule.
void xsSetRuleMinInterval(string ruleName, int interval);
// Sets the max interval of the current rule.
void xsSetRuleMaxIntervalSelf(int interval);
// Sets the max interval of the given rule.
void xsSetRuleMaxInterval(string ruleName, int interval);
// Disables all rules in the given rule group.
void xsDisableRuleGroup(string ruleGroupName);
// Enables all rule in the given rule group.
void xsEnableRuleGroup(string ruleGroupName);
// Returns true if the rule group is enabled.
void xsIsRuleGroupEnabled(string ruleGroupName);
// Returns the y component of the given vector.
float xsVectorGetY(vector v);
// Returns the x component of the given vector.
float xsVectorGetX(vector v);
// Set the x component of the given vector, returns the new vector.
float xsVectorSetX(vector v, float x);
// Returns the z component of the given vector.
float xsVectorGetZ(vector v);
// Set the z component of the given vector, returns the new vector.
float xsVectorSetZ(vector v, float z);
// Set the y component of the given vector, returns the new vector.
float xsVectorSetY(vector v, float y);
// Returns the length of the given vector.
float xsVectorLength(vector v);
// Set the 3 components into a vector, returns the new vector.
float xsVectorSet(float x, float y, float z);
// Disables the current rule.
void xsDisableSelf(void);
// Disables the given rule.
void xsDisableRule(string ruleName);
// Returns true if the rule is enabled.
bool xsIsRuleEnabled(string ruleName);
// Enables the given rule.
void xsEnableRule(string ruleName);
// Sets the priority of the current rule.
void xsSetRulePrioritySelf(int priority);
// Sets the priority of the given rule.
void xsSetRulePriority(string ruleName, int priority);
// Resize the requested array.
int xsArrayResizeString(int arrayID, int newSize);
// Gets the value at the specified index in the requested array.
string xsArrayGetString(int arrayID, int index);
// Sets a value at the specified index in the requested array.
int xsArraySetVector(int arrayID, int index, vector value);
// creates a sized and named vector array, returning an arrayID.
int xsArrayCreateVector(int size, vector defaultValue, string name);
// Resize the requested array.
int xsArrayResizeVector(int arrayID, int newSize);
// Gets the value at the specified index in the requested array.
vector xsArrayGetVector(int arrayID, int index);
// blogs out all XS arrays.
int xsDumpArrays();
// Gets the specified array's size.
int xsArrayGetSize(int arrayID);
// Sets the current context player ID (DO NOT DO THIS IF YOU DO NOT KNOW WHAT YOU ARE DOING).
void xsSetContextPlayer(int playerID);
// Returns the current context player ID.
int xsGetContextPlayer(void);
// Setups a runtime event.  Don't use this.
bool xsAddRuntimeEvent(string foo, string bar, int something);
// Returns the current gametime (in milliseconds).
int xsGetTime(void);
// Returns the absolute value of the given float.
float abs(float x);
// Runs the secret XSFID for the function. USE WITH CAUTION.
int xsGetFuntionID(string functionName);
// Returns the square root of the given float.
float sqrt(float x);
// Returns the rounded value of the given float.
float round(float x);
// creates a sized and named integer array, returning an arrayID.
int xsArrayCreateInt(int size, int defaultValue, string name);
// Returns the normalized version of the given vector.
vector xsVectorNormalize(vector v);
// Gets the value at the specified index in the requested array.
int xsArrayGetInt(int arrayID, int index);
// Sets a value at the specified index in the requested array.
int xsArraySetInt(int arrayID, int index, int value);
// creates a sized and named float array, returning an arrayID.
int xsArrayCreateFloat(int size, float defaultValue, string name);
// Resize the requested array.
int xsArrayResizeInt(int arrayID, int newSize);
// Gets the value at the specified index in the requested array.
float xsArrayGetFloat(int arrayID, int index);
// Sets a value at the specified index in the requested array.
int xsArraySetFloat(int arrayID, int index, float value);
// Resize the requested array.
int xsArrayResizeFloat(int arrayID, int newSize);
// Sets a value at the specified index in the requested array.
int xsArraySetBool(int arrayID, int index, bool value);
// creates a sized and named boolean array, returning an arrayID.
int xsArrayCreateBool(int size, bool defaultValue, string name);
// Resize the requested array.
int xsArrayResizeBool(int arrayID, int newSize);
// Gets the value at the specified index in the requested array.
bool xsArrayGetInt(int arrayID, int index);
// Sets a value at the specified index in the requested array.
int xsArraySetString(int arrayID, int index, string value);
// creates a sized and named string array, returning an arrayID.
int xsArrayCreateString(int size, string defaultValue, string name);
// Returns the sine of the given float.
float sin(float x);
// Returns the power of the given float.
float pow(float x, float y);
// Returns the tangent of the given float.
float tan(float x);
// Returns the cosine of the given float.
float cos(float x);
// Returns the arc cosine of the given float.
float acos(float x);
// Returns the arc sine of the given float.
float asin(float x);
// Returns the arc tangent of the given float.
float atan2(float y, float x);
// Returns the arc tangent of the given float.
float atan(float x);
`;

export default functions;
