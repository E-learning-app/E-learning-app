const express = require("express");
const router = express.Router();
const authJwt = require("../auth/authMiddelware");

const { getAllUsers, addUser, logUser } = require("../controllers/user");

router.post("/addUser", addUser);
router.post("/logUser", logUser);
router.use(authJwt.verifyToken)
router.get("/getAllUsers", authJwt.verifyToken, getAllUsers);


module.exports = router;
