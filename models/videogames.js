const mongoose = require('mongoose');

const consoleSchema = new mongoose.Schema({
  name: String
});

const brandSchema = new mongoose.Schema({
  name: String,
  consoles: [consoleSchema]
});

const Console = mongoose.model('Console', consoleSchema);
const Brand = mongoose.model('Brand', brandSchema);

module.exports = Console;
module.exports = Brand;