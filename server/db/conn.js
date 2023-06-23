const { MongoClient, ServerApiVersion } = require('mongodb');

let _db;
const uri = "mongodb+srv://dmitriy:dmitriy@cluster0.9rkmb3y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});
module.exports = {
  connectToServer: async function() {
    try {
      await client.connect();
      _db = await client.db("EAT");
      _db.command({ping:1});
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (e) {
      console.log(e);
    }
  },
  getDb: function() {
    return _db;
  }
}