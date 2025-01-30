import React from "react";
import char from "./font/char.png";
import logo from "./font/logo.jpeg";
import "./Certificate.css";
import Header from "./Header";
import trophy from "./font/trophy1.png";
import { Button } from "@mui/material";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Certificate = () => {
    const downloadPDF = () => {
        const input = document.getElementById('cert-content');

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('certificate.pdf');
        });
    };

    return (
        <>
            <Header />
            <div className="cert-container">
                <div className="border-gray">
                    <div className="border-red">
                        <div className="content" id="cert-content">
                            <div className="copytext-container">
                                <div style={{ display: "flex", flexDirection: "row", padding: "2rem", justifyContent: "space-between" }}>
                                    <img src={trophy} alt="trophy" style={{ height: "100px", width: "100px" }} />
                                    <h1 className="fontl" style={{ fontSize: "2.5rem" }}>Certificate of Completion</h1>
                                    <img src={trophy} alt="trophy" style={{ height: "100px", width: "100px" }} />
                                </div>
                                <h2 className="h22" style={{ color: "white" }}>Congratulations <span>{"First Name"}</span> <span>{"Last Name"}</span></h2>
                                <h3 className="h33" style={{ color: "white" }}>For Completing the Course:</h3>
                                <h2 className="h22" style={{ color: "white" }}><span>{"Course Title"}</span></h2>
                                <h3 className="h33" style={{ color: "white" }}>Course Completed on: <span>{"Certificate Date"}</span></h3>
                                <div className="signature">Codequest</div>
                                <img id="custom-image" src={char} alt="Custom Image" />
                            </div>
                        </div>
                        <Button
                            onClick={downloadPDF}
                            style={{ height: "5rem", width: "15rem", display: "flex", marginLeft: "1000px", marginTop: "0px", backgroundColor: "gold", color: "white" }}>
                            <p className="fontlav">Download</p>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Certificate;
