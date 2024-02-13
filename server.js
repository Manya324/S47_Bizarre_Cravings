// require('dotenv').config()

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Modal = require("./Schema/Data.model");
const { validateCreate } = require("./Validator.js");
const users = require("./users.json");
const jwt = require("jsonwebtoken");

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
  const response = validateCreate(req.body);
  console.log(response);

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

const SECRET_KEY =
  "789856ad73e586951f892313f363f45448d74b4d10cd326d6d60ed91dd2bd65e0459df074c0619499562d4c06bbe4695bff5526d040cc8a07aa166bbcaed14bb";

app.post("/loginUser", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const token = jwt.sign({ sub: user.id }, SECRET_KEY, { expiresIn: "2h" });
  res.send({ token });
});

app.listen(5000, () => {
  console.log(`Server is running on 5000`);
});
