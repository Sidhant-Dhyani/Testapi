
const express = require("express");
const app = express();

app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World (get).");
});

app.get("/route", (req, res) => {
  res.send("Hello World (route).");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

