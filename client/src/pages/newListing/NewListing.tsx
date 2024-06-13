import {findAllByDisplayValue} from "@testing-library/react";
import {Link} from "react-router-dom";
import './NewListing.scss'
import React from "react";
import {FieldValues, useForm} from "react-hook-form";
import {json} from "react-router";
import Navbar from "../../components/navbar/Navbar";


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
    let data = {email: sessionStorage.getItem('email') as string, pass: sessionStorage.getItem('pass') as string}
    const submit = (data: FieldValues) => {
            fetch( window.location.href + "newListing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then( response=> response.json())
        .then(jsonData => {
            if (jsonData['message'] == 'invalid user status') { alert("A Subscription is necessary to create listings"); }
            reset();
            return;
        })
        .catch(error => { window.alert(error); reset() });
    }
    const { register, handleSubmit, formState: {errors} , reset} = useForm();
    const onSubmit = (data: FieldValues) => {submit(data); }


    return (
        <>
            <Navbar />
            {sessionStorage.getItem("status") as string == "0" &&
                <div className={"Banner"}>
                    <h2> A subscription is necessary before creating listings
                        <br/>
                        <Link to={"/Contact"}>Reach Out</Link> for a subscription or see our <Link to={"/"}>Pricing</Link>
                    </h2>
                </div>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Create New Listing</h1>
                <input placeholder={"Listing Name"} type='text' { ...register("Name", {minLength: 0, maxLength: 200, required: false})} />
                <input placeholder={"Address"} type='text' { ...register("Address", {minLength: 3, maxLength: 200, required: true})} />
                <input placeholder={"Corresponding Airbnb Listing"} type='text' { ...register("AirbnbId",{minLength: 5, maxLength: 50, required: true})} />
                <input placeholder={"Corresponding Vrbo Listing"} type='text' { ...register("VrboId",{minLength: 5, maxLength: 50, required: true})} />
                <button className={"b2"}>Submit</button>
            </form>
        </>
    );
}

export default NewListing;