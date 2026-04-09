const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("OK 🚀");
});

const PORT = process.env.PORT;

console.log("PORT dari Railway:", PORT);

if (!PORT) {
  console.error("PORT tidak ditemukan!");
  process.exit(1);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
