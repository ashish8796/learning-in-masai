var arr = [2, 5, 3, 8];

function increase(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i]++;
  }
}

increase(arr);
console.log(arr);
