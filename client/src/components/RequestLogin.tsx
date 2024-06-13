import Navbar from "./navbar/Navbar";
import {Link} from "react-router-dom";
import React from "react";

export default function RequestLogin() {
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
                    <h1 style={{color: "#000"}}>lightPM</h1>
                </div>
            </div>
        </>
    )
}
