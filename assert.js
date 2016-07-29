var inDocker = require("./");

if(!inDocker) {
  console.error("ERROR: This app is supposed to be run inside a docker container");
  var pkg;
  try {
    pkg = require(__dirname+"/../../package.json");
  } catch(err) {}

  if(pkg && pkg.homepage) {
    console.error("See <"+pkg.homepage+"#setup> for more details");
  }
  process.exit(1);
}
