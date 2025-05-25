import express from "express";
import Expense from "../models/transaction.js";
const router = express.Router();
router.post("/transactionamt", async (req, res) => {
  try {
    const transaction = new Expense(req.body);
    const saved = await transaction.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
