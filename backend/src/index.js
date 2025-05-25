import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API WORKING");
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongodb Connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
  });
});
