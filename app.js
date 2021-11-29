const express = require("express");
const port = process.env.PORT || 4000;

const app = express();

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
