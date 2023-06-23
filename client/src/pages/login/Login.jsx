
import './login.scss';
import {useState} from 'react';
import {md5} from 'hash-wasm';

// TODO: 
// - hash pass
// - check if reccord already exists
// - create redirect to login page -> implement routing
//
//
//





function Login() {
  // TODO: all 'useState's' can be combined to track form + in signup form
  // used to track state of diferent fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // used to update state of form 
  const handleEmailChange = (e) => { setEmail(e.target.value); }
  const handlePasswordChange = (e) => { setPassword(e.target.value); }
  

  // await md5 w/ import above used to get md5 hash of passowrd
  async function submit(e) {
    e.preventDefault();
    let user = {
        email: email,
        password: await md5(password), 
    } 



    console.log("posting1");
    await fetch("http://localhost:5000/record/add", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).catch(error => {
     window.alert(error);
     return;
   });
   console.log("posting2");
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