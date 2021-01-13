// Create an object with has a array of numbers with the key data
// Create two methods lessThanItems and greaterThanItems both of them take a value as a parameter
// The lessThanItems returns all the elements in the array less than the provided value
// The greaterThanItems returns all the elements in the array greater than the provided value

// Screenshot of the return values of both the methods for the array [1, 2, 6, 7, 3, 4, 9, 0] with the parameter for lessThanItems as 4 and greaterThanItems as 6

var obj = {
  data: [1, 2, 6, 7, 3, 4, 9, 0],

  lessThanItems: function (value) {
    return this.data.filter((v) => v < value);
  },
  greaterThanItems: function (value) {
    return this.data.filter((v) => v > value);
  },
};

console.log(obj.lessThanItems(4));
console.log(obj.greaterThanItems(6));
