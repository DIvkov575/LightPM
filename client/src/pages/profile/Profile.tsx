import './profile.scss';
import React from 'react';
import {Box, boxProp} from "../settingsPage/components/Box"
import {Link} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Notifications from "../../components/Notifications/Notifications";
import RequestLogin from "../../components/RequestLogin";


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
                   <button className={"b2 funkyButton"}>AirBnb</button>
                   <button className={"b2 funkyButton"}>Vrbo</button>
                   <button className={"b2 funkyButton"}>Refresh</button>
                   <button className={"b2 funkyButton"}>Settings</button>
               </div>

                <div id={"properties"}>
                    <h1>Properties</h1>
                    <div id={"propertiesWrapper"}>
                        {props.length == 0 && <h2>No properties yet</h2>}
                        <div id={"properties-alignment"}> {props.map((elem) => ( <Link to={"/listing/" + elem.id}><Box {...elem} /></Link>))} </div>
                        <div style={{display: "flex", flexFlow: "row"}}>
                            <Link to={"/newListing"} style={{textDecoration: "none"}}><div className={"funkyButton"}>New</div></Link>
                            <Link to={"/allListings"} style={{textDecoration: "none"}}><div className={"funkyButton"}>All</div></Link>
                        </div>


                    </div>
                </div>

                <Notifications />

            </div>
        );
    }
}

export default Profile;