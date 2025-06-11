import { gameState } from "../state/stateManagers.js";

async function displayLine(textContainer, line) {
  for (const char of line) {
    await new Promise((resolve) =>
      setTimeout(() => {
        textContainer.text += char;
        resolve();
      }, 10)
    );
  }
}

export async function dialog(k, pos, content) {
  gameState.setFreezePlayer(true);

  // Adjusted dialog box size for better readability
  const dialogBox = k.add([
    k.rect(900, 250), // Increased width and height
    k.pos(pos),
    k.fixed(),
  ]);

  const textContainer = dialogBox.add([
    k.text("", {
      font: "gameboy", // Changed font
      width: 850, // Adjusted width to fit new box size
      lineSpacing: 15,
      size: gameState.getFontSize() - 2, // Decreased font size slightly
    }),
    k.color(0, 0, 0),
    k.pos(25, 50), // Adjusted text position inside box
    k.fixed(),
  ]);

  let index = 0;

  await displayLine(textContainer, content[index]);
  let lineFinishedDisplayed = true;

  const dialogKey = k.onKeyPress("space", async () => {
    if (!lineFinishedDisplayed) return;

    index++;
    if (!content[index]) {
      k.destroy(dialogBox);
      dialogKey.cancel();
      gameState.setFreezePlayer(false);
      return;
    }

    textContainer.text = "";
    lineFinishedDisplayed = false;
    await displayLine(textContainer, content[index]);
    lineFinishedDisplayed = true;
  });
}
