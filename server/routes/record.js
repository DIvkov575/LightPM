const path = require('path');
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const emailValidator = require('deep-email-validator');
const ObjectId = require("mongodb").ObjectId;
// import {md5} from 'hash-wasm';

async function isEmailValid(email) {
  return emailValidator.validate({email:email, validateSMTP:false})
}
 

// create a new account
recordRoutes.route("/record/add").post(async function (req, response) {
  let db_connect = dbo.getDb();
  let emailExists = await db_connect.collection("records").findOne({email: req.body.email});
  let emailValid = await isEmailValid(req.body.email);
  // checks if email exists in db
  if (emailExists !== null) {
    response.status(400).json({message: "email exists"});
    // response.writeHead(400, "email exists");
    console.log("womp womp . . . 🥲 email exists");
  // checks if email is valid ie regex
  } else if (!emailValid.valid){
    console.log("email invalid 🥲");
  // creates new account
  } else{
    console.log("new account: " + req.body.email);
    let myobj = {
     name: req.body.name,
     email: req.body.email,
     password: req.body.password,
    content: {
         AirbnbEmail: "",
        AirbnbPass: "",
    }
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
     if (err) throw err;
     response.json(res);
    });
  }
});

// login
recordRoutes.route("/record/verifyLogin").post(async (req, res) => {
   let db_connect = dbo.getDb();
    let account = await db_connect.collection("records").findOne({email: req.body.email});
    if (account === null) {
        res.send(400).json({message: "email not found"});
        console.log("email not found");
    } else if (req.body.password === account.password) {
        res.json(account);
        console.log("successful login: " + req.body.email);
    } else {
        console.log('error with login: likely to be password');
    }
})

module.exports = recordRoutes;