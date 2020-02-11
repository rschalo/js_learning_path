//rounding to nearest whole number, use math object, floor()?

const average = function(arr) {
  var total = 0;
  arr.forEach(score => {
    total += score;
  });
  var avg = total / arr.length;
  avg = Math.round(avg);
  return console.log(avg);
};

average([90, 98, 89, 100, 100, 86, 94]);
average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]);
