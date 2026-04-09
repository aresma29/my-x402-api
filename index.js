const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("OK 🚀");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

const PORT = process.env.PORT || 3000;

console.log("PORT dari Railway:", process.env.PORT);

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server jalan di:", PORT);
});
