const express = require("express");
const router = express.Router();

const {
  getAllCoursesFromClass,
  deleteCourseFromClass,
} = require("../controllers/course");

router.get("/:classId", getAllCoursesFromClass);
router.delete("/:classId", deleteCourseFromClass);

module.exports = router;
