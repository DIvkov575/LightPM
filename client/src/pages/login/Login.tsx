import './login.scss';
import React, {useState} from 'react';
import {md5} from 'hash-wasm';
import {Link} from "react-router-dom";


function Login() {
  // TODO: all 'useState's' can be combined to track form + in signup form
  // used to track state of different fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // used to update state of form
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }

  // await md5 w/ import above used to get md5 hash of passowrd
  async function submit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    let user = {
        email: email,
        password: await md5(password), 
    }
    let user_data : {[key: string]: any }= {};
    console.log(user);
    await fetch(
        "http://localhost:3009/record/verifyLogin", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
        })
        .then( response=> response.json())
        .then(jsonData => { console.log(jsonData); user_data = jsonData; })
        .catch(error => { window.alert(error) });

        sessionStorage.setItem('email',user_data['email']);
        sessionStorage.setItem('name',user_data['name']);
        sessionStorage.setItem('content',JSON.stringify(user_data['content']));
        sessionStorage.setItem('properties',JSON.stringify(user_data['properties']));

        window.open("profile")

  }

  return (
     <div id="form"> 
      <h4>login</h4>
      <input type="email" id="email" placeholder="email" required onChange={(e) => {handleEmailChange(e)}}></input>
      <input type="password" id="password" placeholder="password" required onChange={(e) => {handlePasswordChange(e)}}></input>
      <button onClick={submit}>login</button>
      <div> 
        <p>Dont have an account?</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Signup</a>
      </div>
    </div> 
  );
}

export default Login;