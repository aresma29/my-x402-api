import express from "express";

const app = express();

// API KEY (taruh DI SINI)
const API_KEY = "my-x402-api-production.up.railway.app";

app.use((req, res, next) => {
  const key = req.headers["x-api-key"];
  if (key !== API_KEY) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  next();
});

// endpoint
app.get("/", (req, res) => {
  res.json({ message: "API jalan 🚀" });
});

app.get("/alpha", (req, res) => {
  res.json({ alpha: "Airdrop potensial 🔥" });
});

// PORT (WAJIB)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
