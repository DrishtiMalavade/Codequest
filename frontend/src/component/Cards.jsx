
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import "./Cards.css"
import { makeStyles, createStyles } from '@mui/styles';
import Header from './Header';
import weaponone from "./font/weaponone.png";
import { Button, Card } from '@mui/material';
import coins from "./font/coins.png";
import weapontwo from "./font/weapontwo.png"
import weaponthree from "./font/weaponthree.png";
import weaponfour from "./font/weaponfour.png";
import weaponfive from "./font/weaponfive.png";
import weaponsix from "./font/weaponsix.png";
import weaponseven from "./font/weaponseven.png";
import weaponeight from "./font/weaponeight.png";
import weaponnine from "./font/weaponnine.png";
import lock from "./font/Lock.png";
import p1 from "./font/p1.png";
import p2 from "./font/p2.png";
import p3 from "./font/p3.png";
import p4 from "./font/p4.png";
import p5 from "./font/p5.png";
import p6 from "./font/p6.png";
import p7 from "./font/p7.png";
import p8 from "./font/p8.png";
import p9 from "./font/p9.png";
import swal from 'sweetalert';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: "#A2CA71",
        },
        button: {
            backgroundColor: "#BEDC74"
        }
    }),
);

function Cards() {

    const splideRef = React.useRef(null);
    const classes = useStyles();

    React.useEffect(() => {
        const splide = splideRef.current.splide;

        const updateActiveSlide = () => {
            if (splide && splide.Components) {
                const centerIndex = splide.index;
                const slides = splide.Components.Elements.slides;

                // Update active class on slides
                slides.forEach((slide, index) => {
                    slide.classList.toggle('is-active', index === centerIndex);
                });
            }
        };

        splide.on('mounted', updateActiveSlide); // Update on mount
        splide.on('move', updateActiveSlide); // Update on move


        // Cleanup function
        return () => {
            if (splide) {
                splide.off('mounted', updateActiveSlide);
                splide.off('move', updateActiveSlide); // Remove event listeners
            }
        };
    }, []);


    return (
        <>
            <Header />
            <div style={{ marginTop: "200px" }}>
                <center>
                    <Splide ref={splideRef} options={{ type: 'loop', perPage: 3, focus: 'center', autoplay: true, interval: 1000, pauseOnHover: true }} style={{ width: "1150px", height: "700px" }}>
                        {/* <Splide ref={splideRef}> */}
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={weaponone} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={p1} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={weapontwo} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={p2} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={weaponthree} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={p3} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={weaponfour} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={p4} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button} ><p className='fontlav'>Claim 30</p>  <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={weaponfive} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={p5} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={weaponsix} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={p6} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={weaponseven} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={p7} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={weaponeight} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p>  <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={p8} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}>Claim 30  <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={weaponnine} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        <SplideSlide>
                            <Card style={{ height: "300px", width: "30rem" }} className={classes.root}>
                                <img src={lock} alt='lock' style={{ height: "250px", width: "20rem", opacity: "0.7", zIndex: "1", position: "absolute", top: "40px", right: "80px" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", height: "300px", width: "30rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ border: "3 px solid", display: "flex", flexDirection: "column" }}>
                                        <img src={p9} alt="weaponeone" style={{ height: "200px", width: "200px", }}></img>
                                        <Button className={classes.button}><p className='fontlav'>Claim 30</p> <img src={coins} alt='coins' style={{ height: "20px", width: "20px" }}></img> </Button>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                    </Splide>
                </center>
            </div>
        </>
    )
}

export default Cards;