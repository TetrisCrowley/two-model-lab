const express = require('express');
const app = express();

const port = 3000;

require("./db/db.js");



app.listen(port, () => {
  console.log("listening to port 3000");
});