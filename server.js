// Dependencies
const express = require("express");
const app = express();
const PORT = PROCESS.ENV.PORT || 1234;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api/csvtojson", (req, res) => {
  const data = req.body;
});

app.listen(PORT, () => {
  console.log(`Serving on http://localhost:${PORT}`);
});
