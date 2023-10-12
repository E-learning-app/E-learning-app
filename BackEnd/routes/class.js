const express = require("express");
const router = express.Router();

const {
  getAllClasses,
  getOneClass,
  addClass,
  updateClass,
  deleteClass,
  addUserToClass,
} = require("../controllers/class");

router.get("/:userId", getAllClasses);
router.get("/:classId", getOneClass);
router.post("/", addClass);
router.post("/:classId/:userId", addUserToClass);
router.put("/:classId", updateClass);
router.delete("/:classId", deleteClass);

module.exports = router;
