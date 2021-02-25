var Stack = function () {
  this.storage = "";
};

Stack.prototype.push = function (val) {
  this.storage += this.storage.concat(" ", val);
};

Stack.prototype.pop = function () {
  var arr = this.storage.split(" ");
  var arr = this.storage.slice(this.storage.lastIndexOf(" "));
  return arr.pop();
  // this.storage = arr.join(" ");
};

Stack.prototype.size = function () {
  return this.storage.split(" ").length;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
