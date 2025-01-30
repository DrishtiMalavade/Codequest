import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router";
import axios from "axios";
import swal from "sweetalert";
import { addProfile } from "./userDispatch";
import coin from "./font/coins.png";
import lives from "./font/lives.png";
import { trackPromise } from "react-promise-tracker";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: "#A2CA71"
        },
    }),
);

function Header() {
    const classes = useStyles();
    // const data = useSelector((state) => state.user.username);
    const navigate = useNavigate();
    const point = useSelector((state) => state.point);
    // const dispatch = useDispatch();

    // React.useEffect(() => {


    //     fetchProfile();
    // }, [])



    // async function fetchProfile() {
    //     console.log('kkkkkk');

    //     const res = await trackPromise(axios.post("http://localhost:5000/profile", { data }));
    //     const userdata = res.data;
    //     console.log(userdata, "Response ");
    //     if (res.data.username === data) {
    //         dispatch(addProfile(userdata));
    //     } else {
    //         swal("Please Complete Your Profile").then(() => { navigate("/profile") })
    //         console.log('Called');
    //     }
    // }

    // console.log(data, "Data");
    return (
        <>
            <>
                <div >
                    <AppBar className={classes.root}>
                        <Toolbar style={{ paddingLeft: "0px" }}>
                            <div >
                                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></Sidebar>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", marginLeft: "30rem", justifyContent: "space-around" }}>
                                <Button color="inherit" onClick={() => { navigate("/main") }} ><h1 className="fontlav" style={{ fontSize: "1.5rem" }}>Home</h1></Button>
                                <Button color="inherit" onClick={() => { navigate("/learn") }} style={{ marginLeft: "2rem" }}><h1 className="fontlav" style={{ fontSize: "1.5rem" }}>Learn</h1></Button>
                                <Button color="inherit" onClick={() => { navigate("/rank") }} style={{ marginLeft: "2rem" }} > <h1 className="fontlav" style={{ fontSize: "1.5rem" }}>Ranking</h1></Button>
                                <img src={coin} alt="coin" style={{ height: "55px", width: "55px", marginLeft: "280px", marginTop: "10px" }} ></img>
                                <h1 className="fontlav" style={{ fontSize: "1.8rem", marginLeft: "1rem", marginTop: "1.5rem" }}>{point.coins}</h1>
                                <img src={lives} alt="lives" style={{ height: "55px", width: "55px", marginTop: "10px", marginLeft: "2rem" }}></img>
                                <h1 className="fontlav" style={{ fontSize: "1.8rem", marginLeft: "0.3rem", marginTop: "1.5rem" }}>{point.lives}</h1>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            </>
        </>
    )
}


export default Header;