const express = require("express");
const app = express();
const mongoose = require('mongoose');

const uri = "mongodb+srv://Manya_Jain:Gunnu324@cluster1.fvkwdo1.mongodb.net/?retryWrites=true&w=majority";

app.get('/', (req, res) => {
  mongoose.connect(uri)
    .then(() => {
      res.json({ connection: 'Connected' });
    })
    .catch((error) => {
      console.error(error);
      res.json({ connection: 'Not Connected' });
    });
});

app.get("/ping",(req,res) => {
  res.send("Hello world!")
})

app.listen(5000, ()=> {
  console.log(`Server is running on 5000`);
});
