let arr = [9, 34, 56, 72];

arr.forEach(function (el) {
  console.log(el ** 2);
});

console.log(
  arr.map(function (el) {
    return el * 2;
  })
);

console.log(
  arr.filter(function (el) {
    return el % 2;
  })
);

console.log(
  arr.reduce(function (acc, el) {
    return acc * el;
  }, 1)
);

arr = [1, 2, 3, 4];

console.log(
  arr
    .filter(function (el) {
      return el % 2;
    })
    .reduce(function (acc, el) {
      return acc + el;
    }, 0)
);

arr = [1, 2, 3, 4, 5, 6];
console.log(
  arr
    .filter(function (el) {
      return !(el % 3);
    })
    .reduce(function (acc, el) {
      return acc + el ** 3;
    }, 0)
);
