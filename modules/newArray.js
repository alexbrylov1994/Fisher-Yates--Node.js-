// the module creates an array of integers
//1..10000 inclusive, all numbers are unique
exports.createArray = function() {
  var arr = [];

  for (var i = 1; i < 10001; i++) {
    arr.push(i);
  }

  return arr;
};
