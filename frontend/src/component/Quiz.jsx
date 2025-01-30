import { Container, Divider, Button, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from "@mui/material";
import React from "react";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { addCoins, addtabs, cutLives } from "./userDispatch";
import axios from "axios";




function Quiz(props) {

    const [selected, setSelected] = React.useState("");
    const soln = props.soln;
    const [next, noNext] = React.useState(false);
    const state = useSelector((state) => state.point);
    const page = useSelector((state) => state.levels.tabs);
    const username = useSelector((state) => state.user.username);
    const dispatch = useDispatch();

    function check() {
        if (selected === soln) {
            // // swal({ title: "Correct Answer", confirmButtonColor: "#A0D683" });
            // noNext(true);
            // swal("Correct Answer")
            // let newData = state.coins + 5;
            // dispatch(addCoins(newData));
            // dispatch(addtabs(Number(page) + 1))
            addCtod();
        } else {
            // swal("Incorrect Solution ,PLease try again!!!");
            // // swal({ title: "Incorrect Solution ,PLease try again!!!", cancelButtonColor: "#A0D683" });
            // let newData = state.lives - 1;
            // dispatch(cutLives(newData));
            cutLive();
        }
    }


    async function addCtod() {
        const coins = state.coins + 10;
        const res = await axios.post("http://localhost:5000/addP", { username, coins })
        if (res.data === "Done") {
            let newState = state.coins + 10;
            dispatch(addCoins(newState));
            dispatch(addtabs(Number(page) + 1));
            swal("Right");
            noNext(true);
        } else {
            swal("Error");
        }
    }

    async function cutLive() {
        const lives = state.lives - 1;
        const res = await axios.post("http://localhost:5000/cutL", { username, lives });
        if (res.data === "Done") {
            let newState = state.lives - 1;
            dispatch(cutLives(newState));
            dispatch(addtabs(page));
            swal("Wrong");
            noNext(true);
        } else {
            swal("Error");
        }
    }

    return <div>

        <div style={{ width: "1200px", height: "400px", marginTop: "0px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <center> <div><h1>MileStone</h1></div></center>
            <Container className="container" >
                <h2>{props.question}</h2>
                <Divider variant="middle"></Divider>
                <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        // value={value}
                        // style={{ color: "black" }}
                        onChange={(e) => { setSelected(e.target.value) }}
                    >
                        <FormControlLabel value={props.one} control={<Radio sx={{ color: "black", '&.Mui-checked': { color: "black", }, }} />} label={props.one} />
                        <FormControlLabel value={props.two} control={<Radio sx={{ color: "black", '&.Mui-checked': { color: "black", }, }} />} label={props.two} />
                        <FormControlLabel value={props.three} control={<Radio sx={{ color: "black", '&.Mui-checked': { color: "black", }, }} />} label={props.three} />
                        <FormControlLabel value={props.four} control={<Radio sx={{ color: "black", '&.Mui-checked': { color: "black", }, }} />} label={props.four} />
                    </RadioGroup>
                </FormControl>
                <Divider></Divider>
                <center><Button onClick={check} style={{ color: "black" }}>Submit</Button>
                    {next && (<Button onClick={props.renderQ} style={{ display: "inline" }}>Next</Button>)}
                </center>
            </Container>
        </div>

    </div>
}

export default Quiz;