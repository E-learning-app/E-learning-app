const express = require("express");
const router = express.Router();

const {
  getAllCoursesFromClass,
  addCourseToClass,
  updateCourseInClass,
  deleteCourseFromClass,
} = require("../controllers/course");

router.get("/:classId", getAllCoursesFromClass);
router.post("/:classId", addCourseToClass);
router.put("/:courseId", updateCourseInClass);
router.delete("/:courseId", deleteCourseFromClass);

module.exports = router;
