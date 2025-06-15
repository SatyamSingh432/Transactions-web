import express from "express";
import Expense from "../models/transaction.js";
import { data } from "../routes/renDaata.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, async (req, res) => {
  try {
    console.log(req.user.id);
    const transaction = new Expense({ user_id: req.user.id, ...req.body });
    const saved = await transaction.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", authenticateToken, async (req, res) => {
  try {
    const { month } = req.query;

    let transactions = await Expense.find().sort({ time: -1 });

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

router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get("/news-sources", (req, res) => {
  res.json(data);
});
export default router;
