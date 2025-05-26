import mongoose from "mongoose";

const Transaction = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: {
    type: String,
    enum: ["Food", "Travel", "Entertainment"],
    required: true,
  },
  description: { type: String, required: true },
});
const Expense = mongoose.model("Expense", Transaction);
export default Expense;
