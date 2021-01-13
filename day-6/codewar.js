// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  let zeros = arr.join("").split("0").length - 1;
  for (let i = 0; i < zeros; i++) {
    let index = arr.indexOf(0);
    let newArr = arr.splice(index, 1);
    arr = arr.concat(newArr);
  }
  return arr;
};

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
