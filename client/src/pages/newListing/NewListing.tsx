import {findAllByDisplayValue} from "@testing-library/react";
import {Link} from "react-router-dom";
import './NewListing.scss'
import React from "react";


interface nameProp { name: string; }
const LinkAcc: React.FC<nameProp>= (Props) => {
    return (
        <div style={{display: "flex", border: "solid", borderRadius:"5px"}}>
            <h2>{Props.name}</h2>
            <Link to={"/profile"} style={{textDecoration:"none"}}><div id={"button1"}>{">"}</div></Link>
        </div>
    )
}
const LinkProperty: React.FC<nameProp>= (Props) => {
    return (
        <div id={"propWrap"}style={{display: "flex", border: "solid", borderRadius:"5px"}}>
            <h2>{Props.name}</h2>
            <input type="text"/>
        </div>
    )
}


const NewListing = () => {
    let content = JSON.parse(sessionStorage.getItem("content") as string);
    console.log(content.VrboEmail);
   return (
       <div>
          <h1>New Listing</h1>
           {(content.AirbnbEmail !== "")?
               <LinkProperty name={"Link to Property on Airbnb"}/>:
               <LinkAcc name={"Link Airbnb Account"}/>
           }
           {(content.VrboEmail !== "")?
               <LinkProperty name={"Link to Property on Vrbo"}/>:
               <LinkAcc name={"Link Vrbo Account"}/>
           }
           <input id={"name"} placeholder={"Name"} type="text"/>
           {/*<input id={""} type="text"/>*/}
       </div>
   )
}

export default NewListing;