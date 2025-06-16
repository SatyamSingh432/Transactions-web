import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import transaction from "./routes/transactionRoute.js";
import authRoute from "./routes/authRoutes.js";

const app = express();

app.use(
  cors({
    origin: "https://satyam-yardstick-transaction.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/transactionamt", transaction);
app.use("/api", authRoute);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongodb Connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
  });
});
