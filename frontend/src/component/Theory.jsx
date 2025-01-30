import React from "react";
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";


function Theory(props) {





    return <div>

        <div style={{ width: "1200px", height: "400px", marginTop: "0px" }}>
            <center> <div><h1>Milestone </h1></div></center>
            <Container className="container" >
                <center><h1>{props.heading}</h1></center>
                <Divider variant="middle"></Divider>
                <h2 style={{ height: "500px" }}>{props.theory}</h2>
                <Divider variant="middle"></Divider>
                <center><Button onClick={props.renderQ} style={{ color: "black" }}>{">>>"}</Button></center>
                <Divider variant="middle"></Divider>
            </Container>
        </div>

    </div>
}


export default Theory;