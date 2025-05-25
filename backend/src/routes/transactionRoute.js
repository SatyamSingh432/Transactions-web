import express from "express";
import Expense from "../models/transaction.js";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const transaction = new Expense(req.body);
    const saved = await transaction.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { month } = req.query;

    let transactions = await Expense.find().sort({ date: -1 });

    if (month) {
      transactions = transactions.filter((t) => {
        return new Date(t.date).getMonth() + 1 === parseInt(month);
      });
    }

    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;
