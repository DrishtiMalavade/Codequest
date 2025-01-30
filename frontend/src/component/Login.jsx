import React from "react";
import { Container, Button, TextField } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addData } from "./userDispatch";
import { Link } from "react-router-dom";
import Swal from "sweetalert";
import { trackPromise } from "react-promise-tracker";




function Login() {

    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    async function sendData() {

        const data = { user, pass };
        try {
            const res = await trackPromise(axios.post("http://localhost:5000/login", { data }));
            if (res.data === "success") {
                dispatch(addData(data));
                navigate("/main");
            }
            if (res.data === "notsuccess") {
                Swal("Username or Password not Correct");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="back" >
            <center>
                <Container style={{ width: "20%", height: "50%", marginTop: "10%", border: "5px bold", borderStyle: "solid", borderRadius: "12%", backgroundColor: "white" }}>
                    <img src="https://thumbs.dreamstime.com/z/initial-cg-alphabet-logo-design-template-vector-165507556.jpg?w=768" style={{ height: "100px", width: "100px", marginTop: "20px", borderRadius: "100%", borderStyle: "solid" }} alt="LOGO"></img>
                    <h1>Login</h1>
                    <TextField label="UserId" variant="outlined" style={{ backgroundColor: "white" }} onChange={(e) => { setUser(e.target.value) }}></TextField>
                    <TextField label="Password" variant="outlined" style={{ marginTop: "30px", backgroundColor: "white" }} onChange={(e) => { setPass(e.target.value) }}></TextField>
                    <Button style={{ width: "50px", height: "50px", marginTop: "2%", color: "black" }} onClick={sendData}>Login</Button>
                    <p style={{ marginTop: "0px" }}>If you don't have an Account  <Link to="/register" style={{ textDecoration: "none" }}>Register</Link></p>
                </Container>
            </center>
        </div>
    );
}

export default Login;