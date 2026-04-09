const express = require("express");
const app = express();

// endpoint utama
app.get("/", (req, res) => {
  res.send("X402 API LIVE 🚀");
});

// simulasi service berbayar
app.get("/alpha-api", (req, res) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== "12345") {
    return res.status(403).json({
      error: "Access denied",
      price: "0.0005 ETH"
    });
  }

  res.json({
    data: "Secret alpha data 🔥"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server jalan di:", PORT);
});
