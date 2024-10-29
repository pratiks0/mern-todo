const express = require("express");
const app = express();
require("./conn/conn");
const auth = require("./routes/auth");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1", auth);

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});
