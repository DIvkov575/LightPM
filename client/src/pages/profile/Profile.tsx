
import './profile.scss';
import React, {useEffect, useState} from 'react';
import {Box, boxProp} from "./components/Box"
import {Setting} from "./components/Setting"
import {Link} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function RequestLogin() {
    return (
        <>
            <Navbar />
            <div id={"request-login-wrapper"}>

                <h1>Please Login before proceeding to Profile</h1>
                <Link to={"/login"} ><button id={"redirect-button"}>Login</button></Link>

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
           <RequestLogin />
       )
   } else {

       let props: boxProp[] = JSON.parse(sessionStorage.getItem("properties") as string)
       let content = JSON.parse(sessionStorage.getItem("content") as string)

       return (
           <div id="profile">
               <div id={"properties"}>
                   <h1>Properties</h1>
                   {props.length < 3 &&
                       <div className={"propertiesWrapper"}>
                           <Link to={"/newListing"}>
                               <div className={"stdBox"} id={"newProperty"}>+</div>
                           </Link>
                           {props.map((elem) => (<Link to={"/listing/" + elem.id}><Box {...elem} /></Link>))}
                       </div>
                   }
               </div>

               <div id={"notifications"}>
                   <h1>Notifications</h1>
                   <div className={"wrapper"}>
                       stuff goes here . . .
                   </div>
               </div>

               <div id={"settings"}>
                   <h1>settings</h1>
                   <div>
                       <h2>Linked Accounts</h2>
                       <Setting settingName={"Airbnb Password"} value={content.AirbnbPass}/>
                       <Setting settingName={"Airbnb Email"} value={content.AirbnbEmail}/>
                   </div>
               </div>
           </div>
       );
   }
}

export default Profile;