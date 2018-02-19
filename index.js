// initialization of moduless
var shuffle = require("./modules/shuffle");
var newArray = require("./modules/newArray");
var timer = require("./modules/runtime");

// date and time [seconds, nanoseconds] to determine run time
var start = new Date();
var hrstart = process.hrtime();

// creates an array 1..10000
var arr = newArray.createArray();

// passing array to the shuffle module
shuffle(arr, function(err, sh) {
  if (err) {
    console.log(err);
  } else {
    console.log("\nOutput:\n" + "\n------------------------------\n");
    //shows shuffled array
    console.log(sh.shuffleArray());
    console.log("\n------------------------------\n");
  }
});

// has to be at the end to calculate proper run time
// takes time created at the beggining of the file and passes it to the module
timer.runTime(start, hrstart);
