import globalStateManager from "./globalState.js";
import oldManGlobalStateManager from "./oldManGlobalState.js";
import wizardGlobalStateManager from "./wizardGlobalState.js";
import playerGlobalStateManager from "./playerGlobalState.js";

export const oldManState = oldManGlobalStateManager().getInstance();
export const wizardState = wizardGlobalStateManager().getInstance();
export const playerState = playerGlobalStateManager().getInstance();
export const gameState = globalStateManager().getInstance();
