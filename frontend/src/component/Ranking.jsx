import React from "react";
import Header from "./Header";
import { Container } from "@mui/material";
import axios from "axios";
import swal from "sweetalert";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";



function Ranking() {

    const [rank, setRank] = React.useState([]);
    const state = useSelector((state) => state.profile);

    React.useEffect(() => {
        fetchRank();
        setRank([]);
    }, []);
    function createData(
        rank,
        name,
        points
    ) {
        return { rank, name, points };
    }

    const rows = [
        createData(1, "Nikhil", "100"),
        createData(2, "Drishti", "100"),
        createData(3, "Suyash", "100"),
        createData(4, "Survesh", "100"),
    ];


    async function fetchRank() {
        await axios.post("http://localhost:5000/rank").then((res) => {
            console.log(res.data);
            setRank(res.data);

        }).catch((error) => {
            // swal({ title: "Error", cancelButtonColor: "A0D683" });
            swal("Error");
            console.log("Error");
        })
    }
    return (
        <div>
            <Header />
            {/* <Container style={{ marginTop: "10rem", height: "70%", width: "80%", backgroundColor: "aliceblue" }}> */}
            <div style={{ marginTop: "8rem" }}><center><h1>Ranking</h1></center></div>
            <TableContainer component={Paper} style={{ marginTop: "0rem", height: "70%", width: "80%", marginLeft: "10rem" }} className="container">
                <Table sx={{ minWidth: 650 }} aria-label="customized table" className="container">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" width={10}>Rank</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="right">Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rank.map((item, index) => (

                            <TableRow>
                                <TableCell align="left" width={10}>{item.rank}</TableCell>
                                <TableCell align="left">{item.fullname}</TableCell>
                                <TableCell align="right">{item.coins}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* </Container> */}
        </div>
    )
}

export default Ranking;