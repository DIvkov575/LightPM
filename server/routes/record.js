const path = require('path');
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const emailValidator = require('deep-email-validator');
const ObjectId = require("mongodb").ObjectId;


async function isEmailValid(email) {
    return emailValidator.validate({email: email, validateSMTP: false})
}


// create a new account
recordRoutes.route("/record/add").post(async (req, response) => {
    let db_connect = dbo.getDb();
    let emailExists = await db_connect.collection("records").findOne({email: req.body.email});
    let emailValid = await isEmailValid(req.body.email);

    // checks if email exists in db
    if (emailExists !== null) {
        // response.json({errorMessage: "email exists"});
        response.send({errorMessage: "email exists"});
        console.log("womp womp . . . 🥲 email exists");

    // checks if email is valid ie regex
    } else if (!emailValid.valid) {
        response.send({errorMessage: "email invalid"});
        console.log("email invalid 🥲");

    // creates new account
    } else {
        console.log("new account: " + req.body.email);
        let myobj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            content: {
                AirbnbEmail: "",
                AirbnbPass: "",
                VrboEmail: "",
                VrboPass: "",
            },
            properties: [],
            settings: {
                favorAirbnb: "true",
            },
            private: {
                airbnbAuthToken: "",
            }
        };

        // insert account
        db_connect.collection("records").insertOne(myobj, function (err, res) {
            if (err) throw err;
            response.json(res);
        });
        response.send({message: "Account created"})
    }
});

// login
recordRoutes.route("/record/verifyLogin").post(async (req, res) => {
    let db_connect = dbo.getDb();
    let account = await db_connect.collection("records").findOne({email: req.body.email});

    // check if account exists
    if (account === null) {
        res.json({errorMessage: "email not found"});
        console.log("email not found");
    // incorrect password
    } else if (req.body.password !== account.password) {
        res.json({errorMessage:"incorrect password"})
        console.log("incorrect password")
    // incorrect password
    } else if (req.body.password === account.password) {
        res.json(account);
        console.log("successful login: " + req.body.email);
    // else
    } else {
        res.json("unknown error has occurred")
        console.log('unknown error has occurred');
    }
})

recordRoutes.route("/listing/getData").post(async (req, res) => {
    let db_connect = dbo.getDb();
    let account = await db_connect.collection("records").findOne({email: req.body.email});

})


module.exports = recordRoutes;