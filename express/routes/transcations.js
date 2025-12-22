import express from "express";
import pool from "../config/db.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// GET 
router.get("/", authMiddleware, async (req, res) => {
  const result = await pool.query(
    `SELECT t.*, c.name AS category_name
     FROM transactions t
     LEFT JOIN categories c ON t.category_id = c.id
     WHERE t.user_id = $1
     ORDER BY date DESC`,
    [req.user.id]
  );

  res.json(result.rows);
});

// CREATE
router.post("/", authMiddleware, async (req, res) => {
  const { title, amount, type, category_id, description, date } = req.body;

  const result = await pool.query(
    `INSERT INTO transactions
     (title, amount, type, category_id, description, date, user_id)
     VALUES ($1,$2,$3,$4,$5,$6,$7)
     RETURNING *`,
    [title, amount, type, category_id, description, date, req.user.id]
  );

  res.status(201).json(result.rows[0]);
});

// DELETE 
router.delete("/:id", authMiddleware, async (req, res) => {
  await pool.query(
    "DELETE FROM transactions WHERE id=$1 AND user_id=$2",
    [req.params.id, req.user.id]
  );

  res.json({ message: "Deleted" });
});

export default router;
