const express = require("express");
const router = express.Router();

const { getAllCourses, deleteOneCourse } = require("../controllers/course");

router.get("/", getAllCourses);
router.delete("/deleteCourse/:id", deleteOneCourse);

module.exports = router;
