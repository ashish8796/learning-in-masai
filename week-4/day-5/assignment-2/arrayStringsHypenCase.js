var arr = ["Apple", "Windows", "UBUNTU"];

console.log(
  arr.reduce(function (acc, el, i) {
    if (i === arr.length - 1) {
      return acc + el;
    } else {
      return acc + el + "-";
    }
  }, "")
);
