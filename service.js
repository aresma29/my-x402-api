import express from "express";

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
