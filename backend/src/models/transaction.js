import mongoose from "mongoose";
import Users from "./User.js";

const Transaction = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  time: {
    type: String,
    default: new Date(),
  },
  category: {
    type: String,
    enum: ["Food", "travel", "Entertainment"],
    required: true,
  },
  description: { type: String, required: true },
});
const Expense = mongoose.model("Expense", Transaction);
export default Expense;
