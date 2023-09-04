import "./Navbar.scss"
import React from "react";
import {Link} from "react-router-dom";


 function Navbar() {
    return (
        <div id={"wrapper"}>
            <Link to={"/"} id={"logo"}>︎
                <img src={process.env.PUBLIC_URL + "/logo-white.svg"} alt="Logo"/>
                <h1>lightPM</h1>
            </Link>
            <Link className={"b1"} to={"/Login"}>Login</Link>
            <Link className={"b1"} to={"/Signup"}>Signup</Link>
            <Link className={"b1"} to={"/Profile"}>Profile</Link>
        </div>
    )
}

export default Navbar;