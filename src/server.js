const express = require("express");

const app = express();

app.get("/health", (res, req) => {
  res.json({
    msg: "OK",
  });
});

app.listen(5000, () => {
  console.log("Server is running...");
});

console.log("hi");
