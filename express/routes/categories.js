import express from "express";
import pool from "../config/db.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

// GET – admin
router.get("/", authMiddleware, async (req, res) => {
  const result = await pool.query("SELECT * FROM categories");
  res.json(result.rows);
});

// CREATE – admin
router.post("/", authMiddleware, adminMiddleware, async (req, res) => {
  const { name, type } = req.body;

  const result = await pool.query(
    "INSERT INTO categories (name, type) VALUES ($1,$2) RETURNING *",
    [name, type]
  );

  res.status(201).json(result.rows[0]);
});

// DELETE – admin
router.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  await pool.query("DELETE FROM categories WHERE id=$1", [req.params.id]);
  res.json({ message: "Deleted" });
});

export default router;
