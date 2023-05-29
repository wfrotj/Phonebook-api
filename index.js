const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

let persons = [
  {
    id: 1,
    name: "Wilbert Rodrigo",
    number: "12345-678910",
  },
  {
    id: 2,
    name: "Wilberto Rodrigo",
    number: "678910-12345",
  },
  {
    id: 3,
    name: "Wilberte Rodrigo",
    number: "89101-12345",
  },
];

function generateId() {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;

  return maxId + 1;
}
app.get("/api/persons", (req, res) => {
  res.status(200).json(persons);
});

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  const person = {
    id: generateId(),
    name,
    number,
  };

  persons = persons.concat(person);
  res.status(201).json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = parseInt(req.params.id);

  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`The server is now running at port ${PORT}`);
});
