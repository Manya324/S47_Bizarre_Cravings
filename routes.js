const express = require("express");
const app = express();
const port = 8080;

const data = [
  {
    id: 1,
    item: "Toilet Paper",
    person: "Kesha",
    country: "USA",
    image_url:
      "https://images.news18.com/ibnlive/uploads/2023/03/whatsapp-image-2023-03-04-at-3.12.13-pm.jpeg?impolicy=website&width=510&height=356",
    description:
      "Kesha revealed on a talk show that she had a strange habit of eating toilet paper.",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send(data);
});

app.post("/", (req, res) => {
  const create = req.body;
  data.push(create);
  res.send(data);
});

app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const update = req.body;
  data[id] = update;
  res.json(data);
});

app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  data.splice(id, 1);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
