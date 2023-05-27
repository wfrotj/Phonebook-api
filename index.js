const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Wilbert  Rodrigo",
    number: "450-254-1215",
  },
  {
    id: 2,
    name: "Annika Zoe P. Rodrigo",
    number: "123-456-1215",
  },
  {
    id: 3,
    name: "Anne Zjarrell P. Rodrigo",
    number: "456-123-1215",
  },
];

app.get("/api/persons", (_req, res) => {
  res.status(200).json(persons);
});

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  const person = {
    id: persons.length + 1,
    name,
    number,
  };
  persons = persons.concat(person);
  res.status(201).json(persons);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = parseInt(req.params.id);

  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`The server is now  running at port${PORT}`);
});
