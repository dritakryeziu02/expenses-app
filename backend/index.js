const express = require("express");
const cors = require("cors");
const jsonServer = require("json-server");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// JSON Server setup
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Use JSON Server middlewares
app.use(middlewares);
app.use("/api", router);

// Server port
const PORT = 8096;

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
