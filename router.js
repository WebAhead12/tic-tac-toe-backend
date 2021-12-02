const express = require("express");
const router = express.Router();
const users = require("./handler/users");
const scores = require("./handler/scores");
const verifyToken = require("./handler/verifyToken");

router.get("/users/thisUser", verifyToken.doVerify, users.userInfo);
router.post("/users/login", users.login);
router.post("/users/register", users.register);
router.get("/score/:id", scores.getScore);
router.post("/score/update", scores.updateScore);

module.exports = router;
