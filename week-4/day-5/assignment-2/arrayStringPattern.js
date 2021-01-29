var arr = ["apple", "windows", "ubuntu", "cola", "system"];

console.log(
  arr.filter(function (el) {
    return el[0] === "a" || el[el.length - 1] === "a";
  })
);
