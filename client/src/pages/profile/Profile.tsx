
import './profile.scss';
import React, {useEffect, useState} from 'react';
import {Box, boxProp} from "./components/Box"
import {Setting} from "./components/Setting"
import {Link} from "react-router-dom";

function Profile() {
    let props: boxProp[] = JSON.parse(sessionStorage.getItem("properties") as string)
    let content = JSON.parse(sessionStorage.getItem("content") as string)
    return (
     <div id="profile">
         <div id={"properties"}>
             <h1>Properties</h1>
             {props.length < 3 &&
             <div className={"propertiesWrapper"}>
                 <Link to={"/newListing"}><div className={"stdBox"} id={"newProperty"}>+</div></Link>
                 {props.map((elem) => ( <Link to={"/listing/"+elem.id}><Box {...elem} /></Link> ))}
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

export default Profile;