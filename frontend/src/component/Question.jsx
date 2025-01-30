import React from "react";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Editor from "@monaco-editor/react";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { addCoins, addtabs, cutLives } from "./userDispatch";
import axios from "axios";


function Question(props) {

    const [code, setCode] = React.useState("");
    const [output, setOutput] = React.useState('');
    const [done, setDone] = React.useState(false);
    const [input, setInput] = React.useState("");
    const state = useSelector((state) => state.point);
    const page = useSelector((state) => state.levels.tabs);
    const username = useSelector((state) => state.user.username);
    const dispatch = useDispatch();

    function store(e) {
        setCode(e);
        console.log(code);
    }

    React.useEffect(() => {

        if (output === "") {

        }
        else if (output === props.soln) {
            addCtod();

        } else {
            cutLive();

        }
    }, [props.soln, output]);


    async function addCtod() {
        const coins = state.coins + 10;
        const res = await axios.post("http://localhost:5000/addP", { username, coins })
        if (res.data === "Done") {
            let newState = state.coins + 10;
            dispatch(addCoins(newState));
            dispatch(addtabs(Number(page) + 1));
            swal("Right");
            setDone(true);
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
            setDone(false);
        } else {
            swal("Error");
        }
    }

    async function check() {

        let datatoSend = {
            code: code,
            input: input
        }
        try {
            const response = await fetch('http://localhost:5000/compile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ datatoSend }),
            });
            const result = await response.json();
            setOutput(result.output);

        } catch (error) {
            console.log(error);
            setOutput('Error compiling code');
        }


    }
    function storeInput(e) {
        setInput(e.target.value);
        console.log(input);
    }




    return <div style={{ width: "1200px", height: "480px", marginTop: "0px" }}>
        <center>
            <div><h1>Milestone</h1></div>
            <Container className="container">
                <h2>{props.question}</h2>
                <Divider variant="middle"></Divider>
                <Editor height="500px" theme="vs-dark" language="c" onChange={store} />
                <Divider variant="middle"></Divider>
                <pre>{output}</pre>
                <Divider></Divider>
                <input type="text" onChange={storeInput} placeholder="Your Input" style={{ width: "400px" }}></input>
                <Divider></Divider>
                <Button onClick={check} style={{ color: "black" }}>Check</Button>
                {done && <Button onClick={props.renderQ}>Next</Button>}
            </Container>
        </center>
    </div>
}


export default Question;