const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API hidup 🚀");
});

app.get("/alpha", (req, res) => {
  res.json({ alpha: "OK 🔥" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
