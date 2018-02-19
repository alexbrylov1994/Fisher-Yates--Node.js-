// the module is used to determine the run time of the application
// refferences:
// -- https://nodejs.org/api/process.html
// -- https://blog.tompawlak.org/measure-execution-time-nodejs-javascript

exports.runTime = function(start, hrstart) {
  try {
    if (!(start instanceof Date) || !(hrstart instanceof Array)) {
      throw new Error("Wrong input: must be [Date], [Seconds, Nanoseconds] ");
    } else {
      setTimeout(function() {
        var end = new Date() - start,
          hrend = process.hrtime(hrstart);

        console.info("\nExecution time: %dms\n", end);
        console.info(
          "Execution time (hr): %ds %dms\n",
          hrend[0],
          hrend[1] / 1000000
        );
      }, 1);
    }
  } catch (err) {
    console.log(err);
  }
};
