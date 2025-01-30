
import React from "react";
import { Container, TextField, Button } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert";
import { useNavigate } from "react-router";
import { trackPromise } from "react-promise-tracker";

function Register() {

    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [conf, setConf] = React.useState("");
    const navigate = useNavigate();
    async function sendData() {
        if (pass === conf) {
            const data = { user, pass };
            const res = await trackPromise(axios.post("http://localhost:5000/register", { data }));
            if (res.data === "Already") {
                Swal("Username already exists");
            } else {
                if (res.data === "Done") {
                    Swal("Registered Successfully").then(() => { navigate("/") });
                } else {
                    Swal("Error occured");
                }
            }
        } else {
            Swal("Please enter correct password");
        }
    }

    return (
        <center>
            <Container style={{ width: "20%", height: "50%", marginTop: "10%", border: "5px bold", borderStyle: "solid", borderRadius: "12%", backgroundColor: "white" }}>
                <img src="https://thumbs.dreamstime.com/z/initial-cg-alphabet-logo-design-template-vector-165507556.jpg?w=768" style={{ height: "100px", width: "100px", marginTop: "20px", borderRadius: "100%", borderStyle: "solid" }} alt="LOGO"></img>
                <h1>Register</h1>
                <TextField label="UserId" variant="outlined" style={{ height: "30px" }} onChange={(e) => { setUser(e.target.value) }}></TextField>
                <TextField label="Password" variant="outlined" style={{ marginTop: "30px" }} onChange={(e) => { setPass(e.target.value) }}></TextField>
                <TextField label="Confirm Password" variant="outlined" style={{ marginTop: "5px" }} onChange={(e) => { setConf(e.target.value) }}></TextField>
                <Button style={{ width: "90px", height: "50px", marginTop: "2%", color: "black" }} onClick={sendData}>Register</Button>
            </Container>
        </center>)
}

export default Register