var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
console.log(
  arr.reduce(function (acc, el) {
    return el.length % 2 ? acc + el.length : acc;
  }, 0)
);
