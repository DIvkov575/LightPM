import './contact.scss';
import React, {useState} from 'react';
import {md5} from 'hash-wasm';
import Navbar from "../../components/navbar/Navbar";
import * as EmailValidator from 'email-validator';
import {FieldValues, useForm} from 'react-hook-form';

interface userInterface {
    email: string,
    password: string,
}

const authenticateEmail1 = (user: userInterface) => {
    if (!EmailValidator.validate(user.email)) {
        return false
    } else if (user.email.length === 0) {
        return false;
    } else if (user.password.length === 0) {
        return false;
    } else {
        return true;
    }
}

const submit = async (data: FieldValues) => {
    let parcel : string[] = [];
    for (const key in data) { parcel.push(data[key]); }
    console.log(data.values)

    await fetch(
        "http://localhost:3009/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parcel),
        })
        .then( response=> response.json())
        .then(jsonData => { console.log(jsonData);})
        .catch(error => {
            window.alert(error);
        });
}



function Contact() {
    const { register, handleSubmit, formState: {errors} , reset} = useForm();
    const onSubmit = (data: FieldValues) => {submit(data); reset()}


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 >Contact</h3>
                <input placeholder={"Name"} type='text' { ...register("Name", {minLength: 1, required: true})} />
                <input placeholder={"Email"} type='email' { ...register("Email", {minLength: 5, required: true})} />
                <input placeholder={"Contents"} type='text' { ...register("Contents",{maxLength: 500, required: true})} />
                <button>Submit</button>
            </form>
        </>
    );
}

export default Contact;