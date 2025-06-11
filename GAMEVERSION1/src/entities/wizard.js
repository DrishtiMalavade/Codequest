import { gameState } from "../state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import wizardLines from "../content/wizardDialogue.js";

export function generateWizardComponents(k, pos) {
  return [
    k.sprite("assets", {
      anim: "wizard-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(2, 4), 12, 12) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    "wizard",
  ];
}

export async function startInteraction(k, wizard, player) {
  // Make the wizard face the player
  if (player.direction === "left") wizard.flipX = true;
  if (player.direction === "right") wizard.flipX = false;
  if (player.direction === "down") playAnimIfNotPlaying(wizard, "wizard-up");

  // Get the correct dialogue based on game locale
  const responses = wizardLines[gameState.getLocale()];
  
  // Show a dialogue box with the wizard’s message
  await dialog(k, k.vec2(250, 500), responses[0]); 
}

export function endInteraction(wizard) {
  playAnimIfNotPlaying(wizard, "wizard-down");
}
