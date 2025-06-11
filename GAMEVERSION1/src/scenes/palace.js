import { generatefrogComponents, setfrogAI } from "../entities/frog.js";
import {
    generatePlayerComponents,
    setPlayerControls,
} from "../entities/player.js";
import { gameState } from "../state/stateManagers.js";
import { healthBar } from "../uiComponents/healthbar.js";
import {
    colorizeBackground,
    drawBoundaries,
    drawTiles,
    fetchMapData,
    onAttacked,
    onCollideWithPlayer,
} from "../utils.js";

export default async function palace(k) {
    colorizeBackground(k, 27, 29, 52);

    const mapData = await fetchMapData("./assets/maps/uni.json");
    const map = k.add([k.pos(520, 200)]);

    const entities = {
        player: null,
        frogs: [], // Initialize frogs array
    };

    const layers = mapData.layers;
    for (const layer of layers) {
        if (layer.name === "Boundaries") {
            drawBoundaries(k, map, layer);
            continue;
        }

        if (layer.name === "SpawnPoints") {
            for (const object of layer.objects) {
                if (object.name === "player") {
                    entities.player = map.add(
                        generatePlayerComponents(k, k.vec2(object.x, object.y))
                    );
                    continue;
                }
                if (object.name === "frog") {
                    entities.frogs.push(
                        map.add(generatefrogComponents(k, k.vec2(object.x, object.y)))
                    );
                }
            }
            continue;
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tileheight);
    }

    k.camScale(4);

    if (entities.player) {
        setPlayerControls(k, entities.player);

        // Set initial camera position after player is created
        k.camPos(entities.player.worldPos());

        // Continuous camera movement with smooth easing
        k.onUpdate(() => {
            const playerPos = entities.player.worldPos();
            const camPos = k.camPos();

            // Smooth camera movement using linear interpolation
            k.camPos(camPos.lerp(playerPos, 0.1));
        });

        entities.player.onCollide("palace-door-exit", () => {
            gameState.setPreviousScene("house");
            k.go("world");
        });
    } else {
        console.error(" ERROR: Player entity is null!");
    }

    if (entities.frogs.length > 0) {
        for (const frog of entities.frogs) {
            setfrogAI(k, frog);
            onAttacked(k, frog);
            onCollideWithPlayer(k, frog);
        }
    } else {
        console.warn(" WARNING: No frogs found in the map!");
    }

    healthBar(k);
}
