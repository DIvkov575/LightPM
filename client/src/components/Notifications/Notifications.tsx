import React from "react";
import './Notifications.scss'

const Notifications = () => {
    let notifications = [];
    return (
        <div id={"notifications"}>
            <h1>Notifications</h1>
            <div id={"notification-wrapper"}>
                {/*<div id={"toolbar"}>*/}
                {/*    <button style={{width: "125px"}}className={"b2"}>Refresh</button>*/}
                {/*    <button style={{width: "125px"}}className={"b2"}>Clear</button>*/}
                {/*</div>*/}
                {notifications.length == 0 && <h2>No Notifications at the moment 😢</h2>}
            </div>
        </div>
    )
}

export default Notifications;