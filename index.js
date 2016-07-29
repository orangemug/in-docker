var fs = require("fs");


var exists;
try {
  fs.statSync("/..dockerinit");
  exists = true;
} catch(err) {
  exists = false;
}

module.exports = exists;
