const express = require("express");
const app = express();

// ROUTE
app.get("/", (req, res) => {
  res.send("API hidup 🚀");
});

app.get("/alpha", (req, res) => {
  res.json({ alpha: "OK 🔥" });
});

// 🔥 INI YANG PALING PENTING
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
