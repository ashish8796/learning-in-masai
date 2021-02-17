String.prototype.reverse = function () {
  var reverseStr = "";
  for (var i = 0; i < this.length; i++) {
    reverseStr = this[i] + reverseStr;
  }
  return reverseStr;
};

console.log("masai".reverse());
