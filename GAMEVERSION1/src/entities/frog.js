import { playAnimIfNotPlaying } from "../utils.js";

const directionalStates = ["left", "right", "up", "down"];
export function generatefrogComponents(k, pos) {
  return [
    k.sprite("assets", { frame: 788 }),
    k.area({
      shape: new k.Rect(k.vec2(0, 4), 16, 10),
      collisionIgnore: ["frog"],
    }),
    k.body(),
    k.pos(pos),
    k.offscreen(),
    k.state("idle", ["idle", ...directionalStates]),
    k.health(3),
    k.opacity(),
    {
      speed: 30,
      attackPower: 0.5,
    },
    "frog",
  ];
}

async function move(k, entity, isHorizontal, moveBy, duration) {
  await entity.tween(
    isHorizontal ? entity.pos.x : entity.pos.y,
    isHorizontal ? entity.pos.x + moveBy : entity.pos.y + moveBy,
    duration,
    (val) => {
      isHorizontal ? (entity.pos.x = val) : (entity.pos.y = val);
    },
    k.easings.linear
  );
}


export function setfrogAI(k, frog) {
  k.onUpdate(() => {
    switch (frog.state) {
      case "right":
        frog.move(frog.speed, 0);
        break;
      case "left":
        frog.move(-frog.speed, 0);
        break;
      case "up":
        frog.move(0, -frog.speed);
        break;
      case "down":
        frog.move(0, frog.speed);
        break;
      default:
    }
  });

  const idle = frog.onStateEnter("idle", async () => {
    frog.stop();
    await k.wait(3);
    frog.enterState(
      directionalStates[Math.floor(Math.random() * directionalStates.length)]
    );
  });

  const right = frog.onStateEnter("right", async () => {
    frog.flipX = false;
    playAnimIfNotPlaying(frog, "frog-side");
    await k.wait(3);

    if (frog.getCollisions().length > 0) {
      frog.enterState("idle");
      return;
    }

    frog.enterState("idle");
  });

  const left = frog.onStateEnter("left", async () => {
    frog.flipX = true;
    playAnimIfNotPlaying(frog, "frog-side");
    await k.wait(3);

    if (frog.getCollisions().length > 0) {
      frog.enterState("idle");
      return;
    }

    frog.enterState("idle");
  });

  const up = frog.onStateEnter("up", async () => {
    playAnimIfNotPlaying(frog, "frog-up");
    await k.wait(3);

    if (frog.getCollisions().length > 0) {
      frog.enterState("idle");
      return;
    }

    frog.enterState("idle");
  });

  const down = frog.onStateEnter("down", async () => {
    playAnimIfNotPlaying(frog, "frog-down");
    await k.wait(3);

    if (frog.getCollisions().length > 0) {
      frog.enterState("idle");
      return;
    }

    frog.enterState("idle");
  });

  k.onSceneLeave(() => {
    idle.cancel();
    right.cancel();
    left.cancel();
    up.cancel();
    down.cancel();
  });
}
