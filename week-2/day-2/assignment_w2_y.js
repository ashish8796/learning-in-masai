function divBy7(num) {
  return !(num % 7);
}

divBy7(30);

function findAvg(limit) {
  var totalMultiples = (limit - (limit % 7)) / 7;
  var sum = 0;
  for (var i = 7; i < limit; i++) {
    sum += divBy7(i) ? i : 0;
  }
  return sum / totalMultiples;
}

findAvg(15);

function makeLower(char) {
  var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerStr = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < upperStr.length; i++) {
    if (upperStr[i] === char) {
      return lowerStr[i];
    }
  }
  return char;
}

function convertToLower(word) {
  var resultStr = "";
  for (var i = 0; i < word.length; i++) {
    resultStr += makeLower(word[i]);
  }
  return resultStr;
}

convertToLower("ASHISH");

function removeEven(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i] % 2 !== 0 && newArr.push(arr[i]);
  }
  return newArr;
}

removeEven([2, 5, 8, 9, 10]);

function findMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function findOccurances(arr, match) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (match === arr[i]) {
      count++;
    }
  }
  return count;
}
var arr = [12, 3, 4, 2, 2, 2];
findOccurances(arr, findMax(arr));
findOccurances(arr, findMin(arr));

function removeChar(str, char) {
  var resStr = "";
  for (var i = 0; i < str.length; i++) {
    resStr += str[i] === char ? "" : str[i];
  }

  return resStr;
}

removeChar("Ashish", "s");
