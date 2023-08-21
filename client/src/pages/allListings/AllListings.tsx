import "./AllListings.scss";
import {Link} from "react-router-dom";
import {Box, boxProp} from "../settingsPage/components/Box";
import React from "react";
import RequestLogin from "../../components/RequestLogin";
import Navbar from "../../components/navbar/Navbar";
const AllListings = () => {
    if (sessionStorage.length <= 1) {
        return (
            <RequestLogin/>
        )
    } else {
        let props: boxProp[] = JSON.parse(sessionStorage.getItem("properties") as string)

        return (
            <>
            <Navbar />
            <div id={"properties"}>
                <h1>All Listings</h1>
                <div id={"propertiesWrapper"}>

                    {/* Display Message when no listings exist for account */}
                    {props.length == 0 && <h2>No Listings yet</h2>}

                    {/* Display Each Listing Within a "Box" Component" */}
                    <div id={"properties-alignment"}> {props.map((elem) => (
                        <Link to={"/listing/" + elem.id}><Box {...elem} /></Link>))} </div>

                    {/* Buttons "tool belt" */}
                    <div style={{display: "flex", flexFlow: "row"}}>
                        <Link to={"/newListing"} style={{textDecoration: "none"}}>
                            <div className={"funkyButton"}>Add Listing</div>
                        </Link>
                        <div className={"funkyButton"}>Remove Listing</div>
                        <div className={"funkyButton"}>Edit</div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default AllListings;