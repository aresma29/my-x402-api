const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API hidup 🚀");
});

app.get("/alpha", (req, res) => {
  res.json({ alpha: "OK 🔥" });
});

const PORT = process.env.PORT;

if (!PORT) {
  console.error("PORT tidak ditemukan dari Railway!");
  process.exit(1);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  console.log("Request masuk ke /");
  res.send("API hidup 🚀");
});
