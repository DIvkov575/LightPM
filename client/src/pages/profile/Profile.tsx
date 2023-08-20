import './profile.scss';
import React from 'react';
import {Box, boxProp} from "../settingsPage/components/Box"
import {Link} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function RequestLogin() {
    return (
        <>
            <Navbar/>
            <div id={"request-login-wrapper"}>
                <h1>Please Login before proceeding to Profile</h1>
                <Link to={"/login"}>
                    <button id={"redirect-button"}>Login</button>
                </Link>

                <div className={"logo"} style={{margin: '25px 0px 0px'}}>
                    <img src={process.env.PUBLIC_URL + "/logo-black.svg"} alt="Logo"/>
                    <h1 style={{color: "#000"}}>LightPMS</h1>
                </div>
            </div>
        </>
    )
}

function Profile() {
    if (sessionStorage.length <= 1) {
        return (
            <RequestLogin/>
        )
    } else {

        let props: boxProp[] = JSON.parse(sessionStorage.getItem("properties") as string)
        let content = JSON.parse(sessionStorage.getItem("content") as string)

        return (
            <div id="profile">
                <Navbar />
               <div id={"utils"}>
                   <button className={"b2 b2-1"}>AirBnb</button>
                   <button className={"b2 b2-1"}>Vrbo</button>
                   <button className={"b2 b2-1"}>Refresh</button>
                   <button className={"b2 b2-1"}>Settings</button>
               </div>

                <div id={"properties"}>
                    <h1>Properties</h1>
                    <div id={"propertiesWrapper"}>
                        <div id={"properties-alignment"}> {props.map((elem) => ( <Link to={"/listing/" + elem.id}><Box {...elem} /></Link>))} </div>
                        <div style={{display: "flex", flexFlow: "row"}}>
                            <Link to={"/newListing"} style={{textDecoration: "none"}}><div className={"funkyButton"}>New</div></Link>
                            <Link to={"/allListings"} style={{textDecoration: "none"}}><div className={"funkyButton"}>All</div></Link>
                        </div>
                    </div>
                </div>

                <div id={"notifications"}>
                    <h1>Notifications</h1>
                    <div id={"notification-wrapper"}>
                    </div>
                </div>


            </div>
        );
    }
}

export default Profile;