var arr = ["apple", "windows", "ubuntu"];

console.log(
  arr.reduce(function (acc, el, i) {
    if (i === arr.length - 1) {
      return acc + el;
    } else {
      return acc + el + "_";
    }
  }, "")
);
