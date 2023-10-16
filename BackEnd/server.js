const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./Database/index");
const classRouter = require("./routes/class");
const UserRouter = require("./routes/user");
const courseRouter = require("./routes/course");
require("dotenv").config();
const { OpenAI, OpenAIApi } = require("openai");

app.use(cors());
app.use(express.json());
app.use("/files", express.static(__dirname + "/files"));
app.use(express.urlencoded({ extended: true }));

app.use("/classess", classRouter);
app.use("/User", UserRouter);
app.use("/courses", courseRouter);

app.listen(3000, () => {
  console.log("listen on port 3000 ");
});
