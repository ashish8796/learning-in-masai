var numArr = [];

for (var i = 25; i <= 50; i++) {
  numArr.push(i);
}

var doubleArr = numArr.map(function (e) {
  return e * 2;
});

var greater35Arr = numArr.filter(function (cv) {
  return cv > 35;
});

var sum = numArr.reduce(function (acc, cv) {
  return acc + cv;
});

var doubleArrArrow = numArr.map((cv) => cv * 2);
var greater35ArrArrow = numArr.filter((cv) => cv > 35);
var sumArrow = numArr.reduce((acc, cv) => acc + cv);

console.log({
  doubleArr,
  greater35Arr,
  sum,
  doubleArrArrow,
  greater35ArrArrow,
  sumArrow,
});
