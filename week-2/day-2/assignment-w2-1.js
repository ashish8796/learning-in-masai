function divisibleBy5(num) {
  return !(num % 5);
}

divisibleBy5(30);

function sum(limit) {
  var totalSum = 0;
  for (var i = 1; i <= limit; i++) {
    totalSum += divisibleBy5(i) ? i : 0;
  }
  return totalSum;
}

sum(99);

function upper(char) {
  var lowerStr = "abcdefghijklmnopqrstuvwxyz";
  var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === char) {
      return upperStr[i];
    }
  }
}
upper("b");

function checkPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

checkPrime(15);

function findMinimum(arr) {
  var lowest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (lowest > arr[i]) {
      lowest = arr[i];
    }
  }
  return lowest;
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

findOccurances(arr, findMinimum(arr));

function isVowel(char) {
  var vowelStr = "aeiouAEIOU";
  for (var i = 0; i < vowelStr.length; i++) {
    if (vowelStr[i] === char) {
      return true;
    }
  }
  return false;
}

function removeConsonants(str) {
  var resultStr = "";

  for (var i = 0; i < str.length; i++) {
    resultStr += !isVowel(str[i]) ? str[i] : "";
  }

  return resultStr;
}

removeConsonants("AshishKumarSaini");
