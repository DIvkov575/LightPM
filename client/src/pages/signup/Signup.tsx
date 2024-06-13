import './signup.scss';
import React, {useState} from 'react';
import {md5} from 'hash-wasm';
import Navbar from "../../components/navbar/Navbar";
import {Link} from "react-router-dom";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePassword1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword1(e.target.value);
    }
    const handlePassword2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value);
    }

    async function submit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (name.length <= 1) {
            alert("Name must be more than 1 character long");
            return;
        } else if (email.length <= 1) {
            alert("email must be more than 1 character long");
            return;
        }
        if (password2.length <= 7) {
            alert("password must be more than 7 character long");
            return;
        }

        if (password1 !== password2) {
        alert("passwords do not match"); return;
        }

        // creates object to be stringified
        // TODO: hash password before upload
        let newUser = {
            name: name,
            email: email,
            password: await md5(password1),
        }

        let data: {[key: string]: any} = {};
        // creates a post call to url -> our db is listening there
        // ie uploads to db
        await fetch(window.location.hostname + "/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        }).then(async (_response) => {
            data = await _response.json()
        }).catch(error => {
            window.alert(error);
            return;
        })

        if (data.hasOwnProperty("errorMessage")) {
            if (data['errorMessage'] === "email exists") {
                alert("email exists");
                return;
            } else if (data['errorMessage'] === "email invalid") {
                alert("email invalid");
                return;
            }
        } else {
            // alert("Successfully created account")
            window.open("login", "_self")
        }
    }


    return (
        <>
            <Navbar/>
            <div id="signup-form">
                <h4>Sign Up</h4>
                <input type="text" id="name" placeholder="Full Name" required onChange={(e) => {
                    handleNameChange(e)
                }}></input>
                <input type="email" id="email" placeholder="Email" required onChange={(e) => {
                    handleEmailChange(e)
                }}></input>
                <input type="password" id="password1" placeholder="Password" required onChange={(e) => {
                    handlePassword1Change(e)
                }}></input>
                <input type="password" id="password2" placeholder="Confirm Password" required onChange={(e) => {
                    handlePassword2Change(e)
                }}></input>
                <button onClick={submit}>Signup</button>
                <div>
                    <p>Already have an account?</p>
                    <Link to={"/Login"}>Login</Link>
                </div>
            </div>
        </>
    );
}

export default Signup;
