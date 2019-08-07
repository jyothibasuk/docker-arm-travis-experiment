const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
  res.send("It works!!");
});

app.listen(3000, () => {
  console.log("Server is running!! - JG");
});
