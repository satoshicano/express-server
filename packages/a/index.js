const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.set("port", PORT);

app.listen(app.get("port"), () =>
  console.log(`Example app listening on port ${PORT}!`)
);

app.get("/", (req, res) => res.send("ok"));

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send("ok");
});
