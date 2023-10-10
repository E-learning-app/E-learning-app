const express = require("express");
const router = express.Router();

const {
  getAllClasses,
  getOneClass,
  addClass,
  updateClass,
  deleteClass,
} = require("../controllers/class");

router.get("/", getAllClasses);
router.get("/:classId", getOneClass);
router.post("/", addClass);
router.put("/:classId", updateClass);
router.delete("/:classId", deleteClass);


module.exports = router;
