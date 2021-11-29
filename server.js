const express = require("express");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
