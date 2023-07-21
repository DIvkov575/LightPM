const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const dbo = require("./db/conn");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// dbo.connectToServer().then(()=>{
//   app.use(require("./routes/record"));
// })
require("./apis/airbnb")
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
//
// });