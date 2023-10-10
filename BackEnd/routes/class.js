const express = require("express");
const router = express.Router();

const { getAllClasses } = require("../controllers/class");

router.get("/", getAllClasses);

module.exports = router;
