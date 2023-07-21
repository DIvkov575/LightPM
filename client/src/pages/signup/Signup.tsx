import './signup.scss';
import React, {useState} from 'react';
import {md5} from 'hash-wasm';
import Navbar from "../../components/navbar/Navbar";


// function Signup_2() {
//     const [formState, setFormState] = useState({
//         email1: '',
//         password1_1: '',
//         password1_2: '',
//         email2: '',
//         password2_1: '',
//         password2_2: '',
//     })
//    const handleFormChange = (e) => {
//         const {email1, password1_1, password1_2, email2, password2_1, password2_2} = e.target;
//         setFormState({
//             email1, password1_1, password1_2, email2, password2_1, password2_2
//         })
//    }
//
//     async function submit(e) {
//         e.preventDefault();
//     }
//
//
//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <h5>Link Airbnb Account</h5>
//                 <input type="email" id="email1" placeholder="email" required onChange={handleFormChange}></input>
//                 <input type="password" id="password1_1" placeholder="password" required onChange={handleFormChange}></input>
//                 <input type="password" id="password1_2" placeholder="confirm password" required onChange={handleFormChange}></input>
//
//                 <h5>Link Vrbo Account</h5>
//                 <input type="email" id="email2" placeholder="email" required onChange={handleFormChange}></input>
//                 <input type="password" id="password2_1" placeholder="password" required onChange={handleFormChange}></input>
//                 <input type="password" id="password2_2" placeholder="confirm password" required onChange={handleFormChange}></input>
//
//                 <label>Agree with <a href="">terms and conditions</a></label><input type={"checkbox"}></input>
//                 <button type={"submit"}>Continue</button>
//             </form>
//         </div>
//     )
// }
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
        // } else if (password2.length <= 1) {
        //     alert("password must be more than 1 character long");
        //     return;
        // }

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
        await fetch("http://localhost:3009/record/add", {
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
            alert("Successfully created account")
            window.open("login")
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
                    <a
                        className="App-link"
                        href={window.location.origin + "/login"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >Login</a>
                </div>
            </div>
        </>
    );
}

export default Signup;
