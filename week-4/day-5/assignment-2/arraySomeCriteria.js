var arr = [2, 4, 5, 3, 6, 8];

function criteria(el, i) {
  return !(i % 2) && !(el % 2);
}

console.log(arr.filter(criteria));
