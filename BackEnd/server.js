const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const db = require("./Database/index");
const classRouter = require("./routes/class");
const UserRouter = require("./routes/user");
const courseRouter = require("./routes/course");
const testAuthentication = require("./routes/testAuthentication");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

app.use("/classess", classRouter);
app.use("/User", UserRouter);
app.use("/courses", courseRouter);

app.listen(3000, () => {
  console.log("listen on port 3000 ");
});
