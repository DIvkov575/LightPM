import "./Footer.scss"
import React from "react";
import {Link} from "react-router-dom";


 function Footer() {
    return (
        <div id={"wrapper"}>
            <Link to={""} id={"logo"}>︎
                <img src={process.env.PUBLIC_URL + "/logo-white.svg"} alt="Logo"/>
                <h1>LightPMS</h1>
            </Link>
            <Link className={"b2"} style={{color: "#505050", border: "3px solid #505050"}} to={"Login"}>Login</Link>
            <Link className={"b2"} style={{color: "#505050", border: "3px solid #505050"}} to={"Signup"}>Signup</Link>
            <Link className={"b2"} style={{color: "#505050", border: "3px solid #505050"}} to={"Profile"}>Profile</Link>
        </div>
    )
}

export default Footer;