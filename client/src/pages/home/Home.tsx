import './home.scss';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {Link} from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import React, {useRef, useState} from "react";

const Home = () => {
    const [bgcolor, setBgcolor] = useState("#eee");
    const [color, setColor] = useState("Black");
    const ref1 = useRef(null);

    return (
        <div id="home">
            <div id={"navbar-wrapper"}>
                <Navbar/>
            </div>
            <div id={"welcome-block"}>
                <div id={"welcome-block-inner"} style={{paddingBottom: "100px"}}>
                    <h1 className={"heading-1"}>Find peace of Mind</h1>
                    <h1 className={"heading-2"}>lightPM</h1>
                    <div style={{marginTop: "25px"}} className={"just-for-centering"}>
                        <Link to={"/signup"}>
                            <button style={{width: "200px", height: "50px"}} className={"b1"}>Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div id={"d2"}>
                <h1 style={{color: "black", marginTop: "50px"}} className={"heading-1"}>Manage short-term rentals</h1>
                <h2>Synchronize Reservations across all platforms</h2>
                <h2>Aggregate Notifications from all platforms</h2>
                <h2>Easily import listings</h2>
                <div id={"airbnb-vrbo-wrapper"}>
                    <h2 style={{margin: "0px", marginTop: "10px"}}>Compatible With</h2>
                    <div style={{
                        position: "absolute",
                        top: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <img style={{height: "45px"}} src={process.env.PUBLIC_URL + '/airbnb.png'} alt="Airbnb Icon"/>
                        <img style={{height: "100px"}} src={process.env.PUBLIC_URL + '/vrbo.webp'} alt="Vrbo Icon"/>
                    </div>
                </div>
            </div>
            <div id={"d3"} style={{backgroundColor: bgcolor}}>
                <h1 style={{color: color, marginBottom: "30px" }} className={"heading-1"}>Pricing</h1>
                <div className={"just-for-centering"} id={"d3-comp-wrapper"} style={{alignItems: "center"}}>
                    <Link to={"signup"} style={{textDecoration: "none"}}>
                        <div className={"d3-comp"}>
                            <img style={{width: "200px", margin: "0 auto"}}
                                 src={process.env.PUBLIC_URL + "/home-icon.png"} alt="Home Icon"/>
                            <h2 style={{top: "175px"}}>{"≤ 10 properties"}</h2>
                            <h2 id={'uid1'} style={{top: "205px"}}>$10/property/month</h2>
                            <div className={"b2 funky-button"}>Register</div>

                        </div>
                    </Link>

                    <button style={{backgroundColor: "transparent", border: 'none'}} onClick={() => {
                        let elem = document.getElementById("d4") as HTMLElement;
                        elem.scrollIntoView({behavior: "smooth"})
                    }}>
                        <div className={"d3-comp"}>
                            <img style={{width: "185px", margin: "0 auto"}}
                                 src={process.env.PUBLIC_URL + "/multiple-homes-icon.svg"} alt="Home Icon"/>
                            <h2 style={{top: "175px"}}>{"≥ 10 properties"}</h2>
                            <div className={"b2 funky-button"}>Contact</div>
                        </div>
                    </button>
                </div>
                <div ref={ref1} style={{display: "block"}}></div>
            </div>
            <div id={"d4"}>
                <h1 className={"heading-2"}>About Us</h1>
                <div id={"d4-wrapper"}>
                    <h2>lightPM is run by two technical founders out of Boston, MA. Our
                        small team should assure you of the fastest and highest-quality support, should you need it.</h2>
                </div>
                <ContactForm/>

            </div>
            <Footer/>
        </div>
    );
}

export default Home;
