const express = require("express");
const app = express();
const cors = require("cors");
const {MongoClient} = require("mongodb")
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

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

    app.post('/',async (req,res) => {
      const {serial, item,person,country,description,imageUrl} = req.body;
      const result = await collection.insertOne({serial, item,person,country,description,imageUrl});
      res.json(result);
    })
  })
  .catch(err => {
    console.log('Error connecting to MongoDB Atlas:', err);
  });



app.listen(5000, ()=> {
  console.log(`Server is running on 5000`);
});

