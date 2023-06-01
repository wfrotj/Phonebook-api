import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./utils/config.js";
import personRouter from "./routes/personRouter.js";
const app = express();

const connecToDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log(`Connect Success`);
  } catch (error) {
    console.log("Error occured");
  }
};

connecToDB(config.MONGODB_URI);

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
app.use("/api/persons", personRouter);

export default app;
