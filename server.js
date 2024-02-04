const express = require("express");
const app = express();
const cors = require("cors");
const {MongoClient} = require("mongodb")


app.use(cors());

const uri = "mongodb+srv://Manya_Jain:Gunnu324@cluster1.fvkwdo1.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const database = client.db('listData');
    const collection = database.collection('Weird Items eaten list');

    app.get('/', async (req,res) => {
      const result = await collection.find({}).toArray();
      res.json(result);
    })
  })
  .catch(err => {
    console.log('Error connecting to MongoDB Atlas:', err);
  });



app.listen(5000, ()=> {
  console.log(`Server is running on 5000`);
});
