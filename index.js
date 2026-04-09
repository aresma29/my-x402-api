const express = require("express");
const app = express();

// =====================
// ROOT
// =====================
app.get("/", (req, res) => {
  res.send("X402 API LIVE 🚀");
});

// =====================
// TEST
// =====================
app.get("/ping", (req, res) => {
  res.send("pong");
});

// =====================
// STATUS
// =====================
app.get("/status", (req, res) => {
  res.json({
    status: "running",
    time: new Date()
  });
});

// =====================
// SIMULASI X402 SERVICE
// =====================
app.get("/alpha-api", (req, res) => {
  const apiKey = req.headers["x-api-key"];

  // cek API key
  if (apiKey !== "12345") {
    return res.status(403).json({
      error: "Access denied",
      price: "0.0005 ETH"
    });
  }

  // kalau valid
  res.json({
    data: "Secret alpha data 🔥",
    timestamp: new Date()
  });
});

// =====================
// CRYPTO DUMMY
// =====================
app.get("/price", (req, res) => {
  res.json({
    BTC: "68000",
    ETH: "3200",
    XRP: "0.60"
  });
});

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 3000;

console.log("PORT dari Railway:", process.env.PORT);

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server jalan di:", PORT);
});
