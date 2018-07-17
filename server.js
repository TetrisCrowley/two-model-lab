const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

require("./db/db.js");


app.use(bodyParser.urlencoded({extended: false}));


const brandController = require('./controllers/brandController');
app.use('/brands', brandController);

app.use('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log("listening to port 3000");
});