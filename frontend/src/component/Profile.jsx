import React from "react";
import Main from "./Main";
import { Button, Container, Divider, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { useSelector } from "react-redux";
import Header from "./Header";
import { trackPromise } from "react-promise-tracker";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";
import profile1 from "./font/profile1.png";
import profile2 from "./font/profile2.png";
import profile3 from "./font/profile3.png";
import profile4 from "./font/profiel4.png";
import profile5 from "./font/profile.5.png";
import profile6 from "./font/profile6.png";
import profile8 from "./font/profile8.png";
import rabbit from "./font/rabbit.png";



function Profile() {

    const [show, setShow] = React.useState(false);
    const [fullName, setFullName] = React.useState("");
    const [age, setAge] = React.useState();
    const [gender, setGender] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [coder, setCoder] = React.useState("");
    const [avatar, setAvatar] = React.useState();
    const [bio, setBio] = React.useState("");
    const state = useSelector((state) => state.user.username);
    const full = useSelector((state) => state.profile.fullName);
    const data = useSelector((state) => state.profile);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (full !== "") {
            setShow(true);
        }
    })

    const profileData = {
        username: state,
        fullName: fullName,
        age: age,
        gender: gender,
        mail: mail,
        coder: coder,
        avatar: avatar,
        bio: bio,
    }

    async function sendData() {
        const res = await axios.post("http://localhost:5000/setprofile", { profileData });
        if (res.data === "Added") {
            swal("PRofile Added SuccessFully!!!");
            navigate("/main");

        } else {
            swal("ERRor While adding Data");
        }
        console.log(res, "restest");
    }
    // swal(data.avatar);

    return (
        <>
            <Header />
            {show === false ? <div style={{ marginTop: "100px" }}>
                <Container style={{ height: "80%", width: "80%" }} className="container">
                    <h1 className="fontlav" style={{ fontSize: "2rem" }}>Profile</h1>
                    <Divider></Divider>
                    <h1 className="fontlav" style={{ fontSize: "2rem" }}>Personal Details</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "auto auto", rowGap: "20px", justifyContent: "space-between" }}>
                        <TextField label=" Full Name" style={{ width: "400px" }} onChange={(e) => { setFullName(e.target.value) }}>Full Namse</TextField>
                        <TextField label="Age" style={{ width: "400px" }} onChange={(e) => { setAge(e.target.value) }}>Age</TextField>
                        <FormControl fullWidth><InputLabel id="demo-simple-select-label">Gender</InputLabel><Select label="Gender" labelId="demo-simple-select-label" id="demo-simple-select" placeholder="Coder" style={{ width: "400px" }} value={gender} onChange={(e) => { setGender(e.target.value) }}><MenuItem value="Male">Male</MenuItem><MenuItem value="Female">Female</MenuItem></Select> </FormControl>
                        <TextField label="Email Id" style={{ width: "400px" }} onChange={(e) => { setMail(e.target.value) }}>Mail</TextField>
                        <FormControl fullWidth><InputLabel id="demo-simple-select-label">Rate Yourself as a Coder</InputLabel><Select label=" Rate Yourself as a Coder" labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: "400px" }} value={coder} onChange={(e) => { setCoder(e.target.value) }}><MenuItem value="Noob">Noob</MenuItem><MenuItem value="Mid">Mid</MenuItem><MenuItem value="Pro">Pro</MenuItem><MenuItem value="Ultra Pro Max">Ulta Pro Max</MenuItem></Select> </FormControl>
                    </div>

                    <Divider></Divider>
                    <h1 className="fontlav" style={{ fontSize: "2rem" }}>Profile info</h1>
                    <Divider></Divider>
                    <h1 className="fontlav" style={{ fontSize: "2rem" }}>Choose One of The Avatar</h1>
                    <div style={{ height: "330px" }}>
                        <Splide style={{ height: "300px" }}>
                            <SplideSlide >
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", justifyContent: "center" }}>
                                    <img src={profile1} alt="male" style={{ width: "200px", height: "200px", marginLeft: "470px" }}></img>
                                    <Button onClick={() => { setAvatar("profile1") }}>Select</Button>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", justifyContent: "center" }}>
                                    <img src={profile2} alt="female" style={{ width: "200px", height: "200px", marginLeft: "470px" }}></img>
                                    <Button onClick={() => { setAvatar("profile2") }}>Select</Button>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px" }}>
                                    <img src={profile3} alt="female" style={{ width: "200px", height: "200px", marginLeft: "470px" }}></img>
                                    <Button onClick={() => { setAvatar("profile3") }}>Select</Button>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px" }}>
                                    <img src={profile4} alt="female" style={{ width: "200px", height: "200px", marginLeft: "470px" }}></img>
                                    <Button onClick={() => { setAvatar("profile4") }}>Select</Button>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px" }}>
                                    <img src={profile5} alt="female" style={{ width: "200px", height: "200px", marginLeft: "470px" }}></img>
                                    <Button onClick={() => { setAvatar("profile5") }}>Select</Button>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px" }}>
                                    <img src={profile6} alt="female" style={{ width: "200px", height: "200px", marginLeft: "470px" }}></img>
                                    <Button onClick={() => { setAvatar("profile6") }}>Select</Button>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px" }}>
                                    <img src={profile8} alt="female" style={{ width: "200px", height: "200px", marginLeft: "470px" }}></img>
                                    <Button onClick={() => { setAvatar("profile8") }}>Select</Button>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px" }}>
                                    <img src={rabbit} alt="female" style={{ width: "200px", height: "200px", marginLeft: "470px" }}></img>
                                    <Button onClick={() => { setAvatar("rabbit") }}>Select</Button>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                    <Divider></Divider>
                    <TextField label="Write a Bio" fullWidth onChange={(e) => { setBio(e.target.value) }} ></TextField>
                    <Button style={{ marginLeft: "550px" }} onClick={sendData}>Submit</Button>
                </Container >
            </div > :
                (
                    <div style={{ marginTop: "100px" }}>
                        <Container style={{ height: "80%", width: "80%", padding: "2rem" }} className="container">
                            <h1 className="fontlav" style={{ fontSize: "3rem" }}>Profile</h1>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h1 className="fontlav" style={{ fontSize: "2rem" }}>{data.fullName}</h1>
                                    <p className="fontlav">{data.bio}</p>
                                </div>
                                <img src={data.avatar === 'rabbit' ? rabbit : null
                                    || data.avatar === 'profile1' ? profile1 : null
                                        || data.avatar === 'profile2' ? profile2 : null
                                            || data.avatar === 'profile3' ? profile3 : null
                                                || data.avatar === 'profile4' ? profile4 : null
                                                    || data.avatar === 'profile5' ? profile5 : null
                                                        || data.avatar === 'profile6' ? profile6 : null
                                                            || data.avatar === 'profile8' ? profile8 : null
                                }

                                    alt="ima" style={{ width: "300px", height: "300px", borderRadius: "100%" }}></img>
                            </div>

                        </Container>
                    </div>
                )
            }
        </>
    )
}

export default Profile;