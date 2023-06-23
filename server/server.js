const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const dbo = require("./db/conn");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
dbo.connectToServer().then(()=>{
  app.use(require("./routes/record"));
})

 
// const uri = "mongodb+srv://dmitriy:dmitriy@cluster0.9rkmb3y.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
// });
// async function run() {
  // try {
  //   await client.connect();
  //   await client.db("accounts").command({ ping: 1 });
  //   console.log("Pinged your deployment. You successfully connected to MongoDB!");
  // } finally {
  //   await client.close();
  // }
// }
app.listen(port, () => {
  // dbo.connectToServer().then(()=>{
  // console.log("1" + dbo.getDb())}
  // );
  // console.log("2" + dbo.getDb());
  
  
  console.log(`Server is running on port: ${port}`);

});