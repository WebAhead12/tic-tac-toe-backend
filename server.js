const express = require("express");
const cookieParser = require("cookie-parser");
const users = require("./handler/users");
const cors = require("cors");
const port = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {});
app.post("/users/login", users.login);
app.post("/users/register", users.register);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
