const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  getAllUsers,
  addUser,
  logUser,
  getAllClasses,
} = require("../controllers/user");

router.get("/getAllUsers", getAllUsers);
router.post("/addUser", addUser);
router.post("/logUser", logUser);
router.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.role === "admin") {
      res.json({ message: "You have access to the admin route." });
    } else {
      res.status(403).json({ message: "Access denied." });
    }
  }
);

router.get("/classes/:userId", getAllClasses);

module.exports = router;
