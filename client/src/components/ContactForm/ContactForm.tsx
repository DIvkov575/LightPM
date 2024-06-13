import './ContactForm.scss';
import React, {useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import {FieldValues, useForm} from 'react-hook-form';

const submit = async (data: FieldValues) => {
    window.alert("backend has been disabled - LightPM is no longer conducting business")
    // let parcel : string[] = [];
    // for (const key in data) { parcel.push(data[key]); }
    //
    // console.log(parcel)
    //
    // await fetch(
    //     window.location.href + "contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(parcel),
    //     })
    //     .then( response=> response.json())
    //     .then(jsonData => { console.log(jsonData);})
    //     .catch(error => {
    //         window.alert(error);
    //     });
}

const ContactForm = () => {
    const { register, handleSubmit, formState: {errors} , reset} = useForm();
    const onSubmit = (data: FieldValues) => {submit(data); reset()}

    return (
        <>
            <form className={"contact-form"} onSubmit={handleSubmit(onSubmit)}>
                <h3 >Contact</h3>
                <input placeholder={"Name"} type='text' { ...register("Name", {minLength: 1, required: true})} />
                <input placeholder={"Email"} type='email' { ...register("Email", {minLength: 5, required: true})} />
                <input placeholder={"Contents"} type='text' { ...register("Contents",{maxLength: 500, required: true})} />
                <button>Submit</button>
            </form>
        </>
    );
}

export default ContactForm;