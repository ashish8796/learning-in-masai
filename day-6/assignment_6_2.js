// Pattern (Only part of it is show to get an understanding) ```
// 1.1.1 1.1.2 . . 2.1.1 . . 9.9.8 9.9.9 ```
// Screenshot of the output

var num = 9;
var str = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    for (let k = 1; k <= num; k++) {
      var m_str = i + "." + j + "." + k + " ";
      str += m_str;
    }
  }
}
console.log("");
console.log(str);
console.log("");
