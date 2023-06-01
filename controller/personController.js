import Person from "../models/personModel.js";

const getPersons = async (req, res) => {
  try {
    const persons = await Person.find({});
    res.status(200).json(persons);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const getPersonByID = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findById(id);
    res.status(200).json(person);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

const createPerson = async (req, res) => {
  try {
    const person = await Person.create(req.body);
    res.status(201).json(person);
  } catch (error) {
    console.log(error);
    res.status(204).json({ message: error.message });
  }
};
const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findByIdAndUpdate(id, req.body);

    if (!person) {
      return res.status(404).json({ message: `${id} not found` });
    }
    const updatedPerson = await Person.findById(id);
    res.status(200).json(updatedPerson);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findByIdAndDelete(id);
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export default {
  getPersons,
  getPersonByID,
  createPerson,
  updatePerson,
  deletePerson,
};
