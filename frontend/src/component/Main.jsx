import React, { useEffect } from 'react';
import gsap from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Button, Container, Divider } from '@mui/material';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';
import footer from "./font/platform.png"
import { addCoins, addlevels, addLives, addProfile, addtabs } from './userDispatch';

gsap.registerPlugin(ScrollToPlugin);

const Main = () => {

    const data = useSelector((state) => state.user.username);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    React.useEffect(() => {

        fetchPoint();
        fetchProfile();
        fetchLevel();
    }, [])



    async function fetchPoint() {
        await trackPromise(axios.post("http://localhost:5000/points", { data }).then((res) => {
            console.log(res.data, "points");
            const points = res.data;
            const lives = points.lives;
            const coins = points.coins;
            console.log(lives, coins, "DEstruc Points");
            dispatch(addCoins(coins));
            dispatch(addLives(lives));
        }).catch((err) => {
            console.log(err, "POINTS MAIN ERRor");
        }))

    }

    async function fetchProfile() {
        console.log('kkkkkk');

        const res = await trackPromise(axios.post("http://localhost:5000/profile", { data }));
        const userdata = res.data;
        console.log(userdata, "Response ");
        if (res.data.username === data) {
            dispatch(addProfile(userdata));
        } else {
            swal("Please Complete Your Profile").then(() => { navigate("/profile") })
            console.log('Called');
        }
    }


    async function fetchLevel() {
        const res = await trackPromise(axios.post("http://localhost:5000/levels", { data }));
        console.log(res.data, "ANSEWEeewetrty");
        dispatch(addlevels(res.data.levels));
        dispatch(addtabs(res.data.tab));

    }

    console.log(data, "Data");

    return (
        <>
            <div>
                <Header />
                <div style={{ marginTop: "10rem", marginLeft: "3rem", height: "75vh" }} className='scroll-section'>
                    <h1 className='fontlav' style={{ fontSize: "3rem" }}>CodeQuest</h1>
                    <p className='fontlav' style={{ fontSize: "2rem" }}>Code Quest is an interactive gaming platform designed to make learning coding fun and effective. Our goal is to transform the learning experience into an engaging adventure, where players master coding skills through immersive gameplay and challenges.</p>
                    <Button onClick={() => { navigate("/play") }}><p className='fontlav' style={{ fontSize: "1.5rem", backgroundColor: "#A2CA71", width: "200px", border: "0.5rem solid", borderRadius: "25%" }}>Play</p></Button>
                    <img src={footer} alt='foot' style={{ marginTop: "-2rem", marginLeft: "41rem", width: "50rem" }}></img>
                </div>

                <div style={{ backgroundColor: "#72BF78", height: "87vh" }} className='new-component'>
                    <div style={{ marginLeft: "3rem" }}>
                        <h1 className='fontlav' style={{ fontSize: "3.5rem" }}>Rules</h1>

                        <h5 className='fontlav'>Step 1: Create your character</h5>

                        <h5 className='fontlav'>Customize your avatar while learning basic coding concepts.</h5>

                        <h5 className='fontlav'>Step 2: Explore new challenges</h5>

                        <h5 className='fontlav'>Explore different worlds, solve coding puzzles, and unlock new levels.</h5>

                        <h5 className='fontlav'>Step3: Grow your skills</h5>
                        <h5 className='fontlav'>As you level up, you'll unlock more advanced coding knowledge while earning rewards.</h5>

                        <h1 className='fontlav' style={{ fontSize: "3.5rem" }}>Courses</h1>

                        <ul>
                            <li><h5 className='fontlav'>C Programming</h5></li>

                            <li><h5 className='fontlav'>DSA </h5></li>
                        </ul>

                    </div>
                </div>

                <div style={{ height: "50vh", display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "300px" }} className='"newee-component'>
                    <Button style={{ height: "3.5rem" }}><h1 className='fontlav' style={{ fontSize: "3.5rem" }}>Have fun Coding!!!</h1></Button>
                </div>
            </div>
        </>
    )
};

export default Main;