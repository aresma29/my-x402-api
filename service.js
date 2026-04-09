const express = require("express");
const app = express();

// route test WAJIB ADA
app.get("/", (req, res) => {
  res.send("OK 🚀");
});

// ambil port dari Railway
const PORT = process.env.PORT;

console.log("PORT dari Railway:", PORT);

if (!PORT) {
  console.error("PORT tidak ditemukan!");
  process.exit(1);
}

// listen ke semua IP (PENTING)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
