import k from "./kaboomContext.js";
import mainMenu from "./scenes/mainMenu.js";
import world from "./scenes/world.js";
import house from "./scenes/house.js";
import dungeon from "./scenes/dungeon.js";
import shed from "./scenes/shed.js";
import palace from "./scenes/palace.js";

k.loadFont("gameboy", "assets/retrogaming.ttf");
k.loadSprite("assets", "./assets/topdownasset.png", {
  sliceX: 39,
  sliceY: 31,
  anims: {
    "player-idle-down": 936,
    "player-down": {
      from: 936,
      to: 939,
      loop: true,
    },
    "player-idle-side": 976,
    "player-side": {
      from: 976,
      to: 978,
      loop: true,
    },
    "player-idle-up": 1014,
    "player-up": {
      from: 1014,
      to: 1017,
      loop: true,
    },
    "player-attack-up": 1094,
    "player-attack-down": 1092,
    "player-attack-left": 1093,
    "player-attack-right": 1093,
    "slime-idle-down": 858,
    "slime-down": { from: 858, to: 859, loop: true },
    "slime-idle-side": 860,
    "slime-side": { from: 860, to: 861, loop: true },
    "slime-idle-up": 897,
    "slime-up": { from: 897, to: 898, loop: true },
    "frog-idle-down": 788,
    "frog-down": { from: 788, to: 789, loop: true },
    "frog-idle-side": 790,
    "frog-side": { from: 790, to: 791, loop: true },
    "frog-idle-up": 827,
    "frog-up": { from: 827, to: 828, loop: true },
    "oldman-down": 866,
    "oldman-side": 907,
    "oldman-up": 905,
    "wizard-down": 784,
    "wizard-side": 825,
    "wizard-up": 786,
    "ghost-down": { from: 862, to: 863, loop: true },
  },
});
k.loadSpriteAtlas("./assets/topdownasset.png", {
  "full-heart": {
    x: 0,
    y: 224,
    width: 48,
    height: 48,
  },
  "half-heart": {
    x: 48,
    y: 224,
    width: 48,
    height: 48,
  },
  "empty-heart": {
    x: 96,
    y: 224,
    width: 48,
    height: 48,
  },
});

const scenes = {
  world,
  house,
  dungeon,
  shed,
  palace,
  mainMenu,
};
for (const sceneName in scenes) {
  k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("mainMenu");
