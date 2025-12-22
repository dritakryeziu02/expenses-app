import express from "express";
import pool from "../config/db.js";
import auth from "../middlewares/authMiddleware.js";
import adminOnly from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.get("/stats", auth, adminOnly, async (req, res) => {
  const users = await pool.query("SELECT COUNT(*) FROM users");
  const transactions = await pool.query("SELECT COUNT(*) FROM transactions");
  const income = await pool.query(
    "SELECT COALESCE(SUM(amount),0) FROM transactions WHERE type='income'"
  );
  const expense = await pool.query(
    "SELECT COALESCE(SUM(amount),0) FROM transactions WHERE type='expense'"
  );

  res.json({
    users: users.rows[0].count,
    transactions: transactions.rows[0].count,
    income: income.rows[0].sum,
    expense: expense.rows[0].sum,
  });
});

export default router;
