// implementations of Fisher-Yates algorithm
// used to randomly shuffle an array
// refferences:
// -- https://bost.ocks.org/mike/shuffle/
// -- https://en.wikipedia.org/wiki/Fisher–Yates_shuffle

module.exports = function(array, callback) {
  try {
    // checking input
    if (!Array.isArray(array)) {
      throw new Error("Wrong Input: Must be an Array");
    } else {
      callback(null, {
        shuffleArray: function() {
          var i = 0,
            j = 0,
            temp = null;

          for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }

          return array;
        }
      });
    }
  } catch (error) {
    callback(error, null);
  }
};
