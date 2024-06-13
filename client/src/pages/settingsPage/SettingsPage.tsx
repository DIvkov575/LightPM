
import './settingsPage.scss';
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import {boxProp} from "./components/Box";
import {Setting} from "./components/Setting";



function SettingsPage() {
    let props: boxProp[] = JSON.parse(sessionStorage.getItem("properties") as string)
    let content = JSON.parse(sessionStorage.getItem("content") as string)

        return (
            <>
                <Navbar />
                <div id={"settings"}>
                    <h1>settings</h1>
                    <div>
                        <h2>Linked Accounts</h2>
                        <Setting settingName={"Airbnb Password"} value={content.AirbnbPass}/>
                        <Setting settingName={"Airbnb Email"} value={content.AirbnbEmail}/>
                    </div>
                </div>
            </>
    );
}

export default SettingsPage;