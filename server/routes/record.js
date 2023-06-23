const path = require('path');
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const emailValidator = require('deep-email-validator');
const ObjectId = require("mongodb").ObjectId;

async function isEmailValid(email) {
  return emailValidator.validate({email:email, validateSMTP:false})
}
 
 
// fetch all
// recordRoutes.route("/record").get(function (req, res) {
//  let db_connect = dbo.getDb("EAT");
//  db_connect
//    .collection("accounts")
//    .find({})
//    .toArray(function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// This section will help you get a single record by id
// recordRoutes.route("/record/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("accounts")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// This section will help you create a new record.
recordRoutes.route("/record/add").post(async function (req, response) {
  let db_connect = dbo.getDb();
  let emailExists = await db_connect.collection("records").findOne({email: req.body.email});
  let emailValid = await isEmailValid(req.body.email);
  // checks if email exists in db
  if (emailExists !== null) { 
    response.status(400).json({message: "email exists"});
    response.writeHead(400, "email exists");
    console.log("womp womp . . . 🥲 email exists");
  // checks if email is valid ie regex
  } else if (!emailValid.valid){
    console.log("email invalid 🥲");
  // creates new account
  } else {
    console.log("new account: " + req.body.email);
    let myobj = {
     name: req.body.name,
     email: req.body.email,
     password: req.body.password,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
     if (err) throw err;
     response.json(res);
    });
  }
});
 
// update accounts
// recordRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("accounts")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// Delete accounts
// recordRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("accounts").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });

recordRoutes.route("/").get((req, res) => {
  res.sendFile(path.join(__dirname, 'public))
})
 
module.exports = recordRoutes;