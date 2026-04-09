import express from "express";
const API_KEY = "https://my-x402-api-production.up.railway.app/";

app.use((req, res, next) => {
  const key = req.headers["x-api-key"];
  if (key !== API_KEY) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  next();
});
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API jalan 🚀" });
});

app.get("/alpha", (req, res) => {
  res.json({ alpha: "Airdrop potensial hari ini 🔥" });
});

app.listen(3000, () => {
  console.log("Server running");
});
