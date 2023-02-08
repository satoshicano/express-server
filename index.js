const path = require("path");
const express = require("express");

const app = express();
app.use(express.json());

app.set("port", process.env.PORT || 5050);

app.listen(app.get("port"), () =>
  console.log("Example app listening on port 5050!")
);

app.get("/", (req, res) => res.send("ok"));

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send("ok");
});
