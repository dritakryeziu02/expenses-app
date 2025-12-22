import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import categoriesRoutes from "./routes/categories.js";
import transactionsRoutes from "./routes/transcations.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/categories", categoriesRoutes);

app.use("/api/transactions", transactionsRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.listen(8096, () => console.log("Express server running on port 8096"));
