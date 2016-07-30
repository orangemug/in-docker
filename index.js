var fs = require("fs");


var exists;
try {
  fs.statSync("/.dockerenv");
  exists = true;
} catch(err) {
  exists = false;
}

module.exports = exists;
