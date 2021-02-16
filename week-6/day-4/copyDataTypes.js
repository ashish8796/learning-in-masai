var obj = { name: "Ashish", age: 24 };
var arr = [1, 2, 3, 4, 5];

function copyDataType(data) {
  return Object.assign(Array.isArray(data) ? [] : {}, data);
}

copyDataType(obj);
