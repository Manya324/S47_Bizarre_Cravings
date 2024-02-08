const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Modal = require("./Schema/Data.model");
const { validateCreate } = require('./Validator.js');

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://Manya_Jain:Gunnu324@cluster1.fvkwdo1.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    dbName: "listData",
  })
  .then(() => console.log("DB Connected"));

app.get("/", (req, res) => {
  Modal.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/", (req, res) => {

  const {error} = validateCreate(req.body);

if (error) {
console.log(error)
res.send(error.details)
}
res.send("Item Added Successfully!")

  Modal.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getItem/:id", (req, res) => {
  const id = req.params.id;
  Modal.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateItem/:id", (req, res) => {
  const id = req.params.id;
  Modal.findByIdAndUpdate(
    { _id: id },
    {
      serial: req.body.serial,
      item: req.body.item,
      person: req.body.person,
      country: req.body.country,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    },
    { new: true }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteItem/:id", (req, res) => {
  const id = req.params.id;
  Modal.findByIdAndDelete(id)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log(`Server is running on 5000`);
});
