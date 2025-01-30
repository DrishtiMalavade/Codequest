import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./Sidebar.css";
import { Button, makeStyles } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearProfile, removeData } from "./userDispatch";



const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout() {
        dispatch(removeData());
        dispatch(clearProfile());
        navigate("/");

    }

    return (
        <Menu color="#387F39">
            <Button color='inherit' onClick={() => { navigate("/profile") }} className='fontlav'><h1>Profile </h1></Button>
            <Button color='inherit' onClick={() => { navigate("/cards") }} className='fontlav'><h1>Shop</h1></Button>
            <Button color='inherit' onClick={() => { navigate("/rule") }} className='fontlav'><h1>Rules</h1></Button>
            <Button color='inherit' onClick={() => { navigate("/certificate") }} className='fontlav'><h1>Certificate</h1></Button>
            {/* <Button color='inherit' onClick={() => { navigate("/reward") }}>Reward</Button> */}
            <Button color='inherit' onClick={logout} className='fontlav'><h1>Logout</h1></Button>
        </Menu>
    );
};

export default Sidebar;