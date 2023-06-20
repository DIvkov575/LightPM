import './signup.scss';
import {useState} from 'react';


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  
  const handleNameChange = (e) => { setName(e.target.value); }
  const handleEmailChange = (e) => { setEmail(e.target.value); }
  const handlePassword1Change = (e) => { setPassword1(e.target.value); }
  const handlePassword2Change = (e) => { setPassword2(e.target.value); }

  async function submit(e) {
    e.preventDefault();
    if (name.length <= 1) {
      alert("Name must be more than 1 character long"); return;
    } else if (email.length <= 1) {
      alert("email must be more than 1 character long"); return;
    } if (password2.length <= 7) {
      alert("password must be more than 7 character long"); return;
    } else if (password2.length <= 1) {
      alert("password must be more than 1 character long"); return;
    }

    if (password1 != password2) {
      alert("passwords do not match"); return;
    }
    
    console.log("posting1");
    // await fetch(window.location.href)
    await fetch("http://localhost:5000/record/add", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch(error => {
     window.alert(error);
     return;
   });
     console.log("posting2");
  }

  return (
     <div id="form"> 
      <h4>Sign Up</h4>
      <input type="text" id="name" placeholder="full name" required onChange={(e) => {handleNameChange(e)}}></input>
      <input type="email" id="email" placeholder="email" required onChange={(e) => {handleEmailChange(e)}}></input>
      <input type="password" id="password1" placeholder="password" required onChange={(e) => {handlePassword1Change(e)}}></input>
      <input type="password" id="password2" placeholder="confirm password" required onChange={(e) => {handlePassword2Change(e)}}></input>
      <button onClick={submit}>Signup</button>
      <div> 
        <p>Already have an account?</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Login</a>
      </div>
    </div> 
  );
}

export default Signup;
