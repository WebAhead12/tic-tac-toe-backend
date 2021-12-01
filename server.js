const express = require("express");
const cookieParser = require("cookie-parser");
const users = require("./handler/users");
const scores = require("./handler/scores");
const verifyToken = require("./handler/verifyToken");
const cors = require("cors");
const port = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.get("/users/thisUser", verifyToken.doVerify, users.userInfo);
app.post("/users/login", users.login);
app.post("/users/register", users.register);
app.get("/score/:id", scores.getScore);
app.post("/score/update", scores.updateScore);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
