const express = require("express");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {});
app.post("/users/login", (req, res) => {});
app.post("/logout", (req, res) => {});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
