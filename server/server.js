const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const dbo = require("./db/conn");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static("../client/build"))

dbo.connectToServer().then(()=> {
    app.use(require("./routes/record"));
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    });
})