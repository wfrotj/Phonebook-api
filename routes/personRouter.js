import express from "express";
import personController from "../controller/personController.js";

const personRouter = express.Router();

personRouter.get("/", personController.getPersons);
personRouter.get("/:id", personController.getPersonByID);
personRouter.post("/", personController.createPerson);
personRouter.put("/:id", personController.updatePerson);
personRouter.delete("/:id", personController.deletePerson);

export default personRouter;
