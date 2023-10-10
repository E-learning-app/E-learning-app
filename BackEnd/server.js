const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./Database/index");
const classRouter = require("./routes/class");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/classess", classRouter);

app.listen(3000, () => {
  console.log("listen on port 3000 ");
});
