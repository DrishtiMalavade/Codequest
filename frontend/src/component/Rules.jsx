import React from "react";
import { Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";



function Rules() {
    const [open, setOpen] = React.useState(true);
    const run = true;
    const navigate = useNavigate();


    function closeRules() {
        setOpen(false);
        navigate("/main");
    }


    return (
        <>
            {run &&
                (<>

                    <Dialog open={open} maxWidth="lg">
                        <DialogContent >
                            <center><DialogTitle><h1 className="fontlav" style={{ fontSize: "3rem" }}>Welcome to CodeGames</h1></DialogTitle></center>
                            <Divider></Divider>
                            <DialogContentText>
                                <center><h1 className="fontlav" style={{ fontSize: "1.5rem" }}>Welcome to Coding Quest, an engaging game designed to teach you coding concepts through fun and interactive gameplay. Players embark on a journey where they solve puzzles and challenges using real coding languages.</h1></center>
                                <Divider></Divider>

                                <p className="fontlav">Learning Objectives
                                    <ul><li>Understand basic coding concepts and syntax.</li>
                                        <li>Develop problem-solving skills through coding challenges.</li>
                                        <li>Apply learned skills in real-world scenarios.</li></ul>
                                </p>

                                <Divider></Divider>
                                <p className="fontlav">Rules and Regulations:</p>
                                <p className="fontlav">
                                    <ol>
                                        <li>Respect the Community: Always treat other players with kindness and respect. Harassment or negative behavior will not be tolerated.</li>
                                        <li>Challenge Yourself: Attempt challenges at your own pace, but don't shy away from difficulties. Embrace the learning experience!</li>
                                        <li>Use Your Resources: Make use of in-game tutorials, forums, and community help. Don’t hesitate to ask questions or seek assistance when needed</li>
                                        <li>Practice Coding Ethics: When working on coding challenges, avoid sharing solutions or using unauthorized resources. Focus on learning and improving your skills.</li>
                                        <li>Keep It Fun: Enjoy the game! Take breaks when needed, and remember that the goal is to learn and have fun with coding.</li>
                                        <li>Report Issues: If you encounter bugs or inappropriate content, report them to the support team to help us improve the game for everyone.</li>
                                    </ol>
                                </p>

                                <Divider></Divider>
                                <p className="fontlav"><center>I assure you this is the best way to start your coding for basic and logic Development.</center> </p>
                                <Divider></Divider>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <center><Button onClick={closeRules} style={{ marginRight: "520px", color: "black" }} className="fontlav">Agree and Continue</Button></center>
                        </DialogActions>
                    </Dialog>
                </>
                )
            }
        </>)
}

export default Rules;