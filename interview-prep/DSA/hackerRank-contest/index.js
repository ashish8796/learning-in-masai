class Person {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getSum = () => {
    return this.a + this.b;
  };
}

const person1 = new Person(5, 3);

let name = "a";
let surname = "b";

let obj = {
  name: "ashish",
  surname: "saini",

  getFullName: () => {
    console.log(this);
    // return this.name + " " + this.surname;
  },
};

// console.log(person1.getSum());
// console.log(obj.getFullName());

function Sum(a, b) {
  this.a = a;
  this.b = b;
}

let newSum = new Sum(5, 7);

console.log(Sum.prototype === newSum.__proto__);
