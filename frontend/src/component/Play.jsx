import React from "react";
import kaboom from "kaboom";
import spritesheet from "./font/spritesheet.png";
import maze from "./font/maze.png"
import mazejson from "./maze.json";
import { scaleFactor, dialogueData } from "./constant";
import "./Play.css";
import { displayDialogue } from "./utils";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom"

function Play() {
    const container = React.useRef(null);
    const [currentAvatar, setC] = React.useState();
    console.log(mazejson.layers, "Maze Json");
    const avatar = useSelector((state) => state.profile.avatar);
    const navigate = useNavigate();
    const [visible, setVisible] = React.useState(false);
    const [currentText, setText] = React.useState("");
    // swal(avatar);
    function setAvatar() {

        let avatarConfig;
        if (avatar === "profile4") {
            avatarConfig = {
                "idle-down": 936,
                "walk-down": { from: 936, to: 939, loop: true, speed: 8 },
                "idle-side": 975,
                "walk-side": { from: 975, to: 978, loop: true, speed: 8 },
                "idle-up": 1014,
                "walk-up": { from: 1014, to: 1017, loop: true, speed: 8 },
            };


        } else if (avatar === "profile3") {
            avatarConfig = {
                "idle-down": 940,
                "walk-down": { from: 940, to: 943, loop: true, speed: 8 },
                "idle-side": 979,
                "walk-side": { from: 979, to: 982, loop: true, speed: 8 },
                "idle-up": 1018,
                "walk-up": { from: 1018, to: 1021, loop: true, speed: 8 },
            }

        } else if (avatar === "profile5") {
            avatarConfig = {
                "idle-down": 944,
                "walk-down": { from: 944, to: 947, loop: true, speed: 8 },
                "idle-side": 983,
                "walk-side": { from: 983, to: 985, loop: true, speed: 8 },
                "idle-up": 1022,
                "walk-up": { from: 1022, to: 1025, loop: true, speed: 8 },
            };


        } else if (avatar === "profile2") {
            avatarConfig = {
                "idle-down": 948,
                "walk-down": { from: 948, to: 951, loop: true, speed: 8 },
                "idle-side": 987,
                "walk-side": { from: 987, to: 990, loop: true, speed: 8 },
                "idle-up": 1026,
                "walk-up": { from: 1026, to: 1029, loop: true, speed: 8 },
            }


        } else if (avatar === "profile8") {
            avatarConfig = {
                "idle-down": 956,
                "walk-down": { from: 956, to: 959, loop: true, speed: 8 },
                "idle-side": 995,
                "walk-side": { from: 995, to: 998, loop: true, speed: 8 },
                "idle-up": 1034,
                "walk-up": { from: 1034, to: 1037, loop: true, speed: 8 },
            }

        } else if (avatar === "profile6") {
            avatarConfig = {
                "idle-down": 960,
                "walk-down": { from: 960, to: 963, loop: true, speed: 8 },
                "idle-side": 999,
                "walk-side": { from: 999, to: 1002, loop: true, speed: 8 },
                "idle-up": 1038,
                "walk-up": { from: 1038, to: 1041, loop: true, speed: 8 },
            }


        } else {
            avatarConfig = {
                "idle-down": 952,
                "walk-down": { from: 952, to: 955, loop: true, speed: 8 },
                "idle-side": 991,
                "walk-side": { from: 991, to: 994, loop: true, speed: 8 },
                "idle-up": 1030,
                "walk-up": { from: 1030, to: 1033, loop: true, speed: 8 },
            };
        }

        setC(avatarConfig);
    }

    React.useEffect(() => {
        setAvatar();
        const k = kaboom({
            global: false,
            touchToMouse: true,
            canvas: container.current,
            debug: true,
        });

        console.log(k, "K");
        k.loadSprite("spritesheet", spritesheet, {
            sliceX: 39,
            sliceY: 31,
            anims: currentAvatar || {
                "idle-down": 952,
                "walk-down": { from: 952, to: 955, loop: true, speed: 8 },
                "idle-side": 991,
                "walk-side": { from: 991, to: 994, loop: true, speed: 8 },
                "idle-up": 1030,
                "walk-up": { from: 1030, to: 1033, loop: true, speed: 8 },
            }
        }).then(() => {
            console.log("DOING LOD");
        }).catch((err) => {
            console.log(err, "error")
        });

        k.loadSprite("maze", maze).then(() => {
            console.log("loading Maze")
        }).catch((err) => {
            console.log(err, "Erorr Maze")
        });

        k.setBackground(k.Color.fromHex("#311047"));


        function setCamScale(k) {
            const resizeFactor = k.width() / k.height();
            if (resizeFactor < 1) {
                k.camScale(k.vec2(1));
            } else {
                k.camScale(k.vec2(1.5));
            }
        }

        k.scene("main", async () => {
            console.log("MAIN  SCENE");
            const response = await fetch("./maze.json");
            console.log(response, "RESponsee")
            const mapData = await response.json();
            console.log("MapData", mapData);
            const layers = mapData.layers;
            const maze = k.add([k.sprite("maze"), k.pos(0), k.scale(scaleFactor)]);

            const player = k.make([
                k.sprite("spritesheet", { anim: "idle-down" }),
                k.area({
                    shape: new k.Rect(k.vec2(0, 3), 10, 20)
                }),
                k.body(),
                k.anchor("center"),
                k.pos(),
                k.scale(scaleFactor),
                {
                    speed: 250,
                    direction: "down",
                    isInDialogue: false
                },
                "player"
            ])



            for (const layer of layers) {
                if (layer.name === "boundaries") {
                    for (const boundary of layer.objects) {
                        maze.add([
                            k.area({ shape: new k.Rect(k.vec2(0), boundary.width, boundary.height) }),
                            k.body({ isStatic: true }),
                            k.pos(boundary.x, boundary.y),
                            boundary.name
                        ]);

                        if (boundary.name) {
                            player.onCollide(boundary.name, () => {
                                player.isInDialogue = true;
                                setText(dialogueData[boundary.name]);
                                displayDialogue(
                                    dialogueData[boundary.name],
                                    () => (player.isInDialogue = false)
                                );
                            });
                        }
                    }
                    continue;
                }
                if (layer.name === "spawnpoint") {
                    for (const entity of layer.objects) {
                        if (entity.name === "players") {
                            player.pos = k.vec2(
                                (maze.pos.x + entity.x) * scaleFactor,
                                (maze.pos.y + entity.y) * scaleFactor
                            );
                            k.add(player);
                            continue;
                        }
                    }
                }
            }

            let zoomLevel = 1; // Initial zoom level set to 2
            k.camScale(zoomLevel); // Apply zoom

            k.onResize(() => {
                k.camScale(zoomLevel); // Maintain zoom level on resize
            });

            // Optional: Adding dynamic zoom controls
            k.onKeyDown("plus", () => {
                zoomLevel += 0.1; // Increase zoom level
                k.camScale(zoomLevel); // Apply zoom
                updateCameraPosition(); // Update camera position
            });

            k.onKeyDown("minus", () => {
                zoomLevel = Math.max(zoomLevel - 0.1, 0.5); // Decrease zoom level, with a minimum limit
                k.camScale(zoomLevel); // Apply zoom
                updateCameraPosition(); // Update camera position
            });

            // Function to update camera position
            function updateCameraPosition() {
                const offsetX = (k.width() / zoomLevel) / 2; // Offset for centering
                const offsetY = (k.height() / zoomLevel) / 2; // Offset for centering
                k.camPos(player.worldPos().x, player.worldPos().y - 100); // Original camera position adjustment
                k.camPos(player.worldPos().x, player.worldPos().y - 100 + offsetY); // Adjust camera position based on zoom
            }

            // Camera follows player and adjusts for zoom
            k.onUpdate(() => {
                updateCameraPosition();
            });

            k.onMouseDown((mouseBtn) => {
                if (mouseBtn !== "left" || player.isInDialogue) return;

                const worldMousePos = k.toWorld(k.mousePos());
                player.moveTo(worldMousePos, player.speed);

                const mouseAngle = player.pos.angle(worldMousePos);

                const lowerBound = 50;
                const upperBound = 125;

                if (
                    mouseAngle > lowerBound &&
                    mouseAngle < upperBound &&
                    player.curAnim() !== "walk-up"
                ) {
                    player.play("walk-up");
                    player.direction = "up";
                    return;
                }

                if (
                    mouseAngle < -lowerBound &&
                    mouseAngle > -upperBound &&
                    player.curAnim() !== "walk-down"
                ) {
                    player.play("walk-down");
                    player.direction = "down";
                    return;
                }

                if (Math.abs(mouseAngle) > upperBound) {
                    player.flipX = false;
                    if (player.curAnim() !== "walk-side") player.play("walk-side");
                    player.direction = "right";
                    return;
                }

                if (Math.abs(mouseAngle) < lowerBound) {
                    player.flipX = true;
                    if (player.curAnim() !== "walk-side") player.play("walk-side");
                    player.direction = "left";
                    return;
                }
            });

            function stopAnims() {
                if (player.direction === "down") {
                    player.play("idle-down");
                    return;
                }
                if (player.direction === "up") {
                    player.play("idle-up");
                    return;
                }

                player.play("idle-side");
            }

            k.onMouseRelease(stopAnims);

            k.onKeyRelease(() => {
                stopAnims();
            });

            k.onKeyDown((key) => {
                const keyMap = [
                    k.isKeyDown("right"),
                    k.isKeyDown("left"),
                    k.isKeyDown("up"),
                    k.isKeyDown("down"),
                ];

                let nbOfKeyPressed = 0;
                for (const key of keyMap) {
                    if (key) {
                        nbOfKeyPressed++;
                    }
                }

                if (nbOfKeyPressed > 1) return;

                if (player.isInDialogue) return;
                if (keyMap[0]) {
                    player.flipX = false;
                    if (player.curAnim() !== "walk-side") player.play("walk-side");
                    player.direction = "right";
                    player.move(player.speed, 0);
                    return;
                }

                if (keyMap[1]) {
                    player.flipX = true;
                    if (player.curAnim() !== "walk-side") player.play("walk-side");
                    player.direction = "left";
                    player.move(-player.speed, 0);
                    return;
                }

                if (keyMap[2]) {
                    if (player.curAnim() !== "walk-up") player.play("walk-up");
                    player.direction = "up";
                    player.move(0, -player.speed);
                    return;
                }

                if (keyMap[3]) {
                    if (player.curAnim() !== "walk-down") player.play("walk-down");
                    player.direction = "down";
                    player.move(0, player.speed);
                }
            });

        })

        k.go("main");

        k.onKeyDown("escape", () => {
            navigate("/main"); // Change this to your home page route
        });

        return (
            console.log("Working")
        )
    }, []);


    const displayDialogue = (text) => {
        setText(text);
        setVisible(true);

        let index = 0;
        const intervalRef = setInterval(() => {
            if (index < text.length) {
                setText(prev => prev + text[index]);
                index++;
            } else {
                clearInterval(intervalRef);
            }
        }, 50); // Adjust the interval as needed

        // Close after text is fully displayed + 1 second
    };

    const handleClose = () => {

        setVisible(false);
        setText(""); // Clear dialogue text
    };



    function handleKeyDown(event) {
        if (event.key === "Escape") {
            setTimeout(() => {
                navigate("/main");
            }, 2000);
        }
    }


    return (
        <div id="app" onKeyDown={handleKeyDown}>
            <div>
                <p className="note">Tap/Click around to move</p>

                {visible && <div id="textbox-container">
                    <div id="textbox">
                        <p id="dialogue" className="ui-text">{currentText}</p>
                        <div className="btn-container">
                            <button id="close" className="ui-close-btn" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>}
            </div>
            <canvas ref={container}></canvas>
        </div>

    )
}

export default Play;