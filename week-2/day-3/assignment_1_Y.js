var company = {
  name: "apple",
  type: "brand",
  speciality: "mobile phones & laptop",
  colors: ["red", "green", "yellow"],
};

for (key in company) {
  console.log("key - " + key + ",", "value - " + company[key]);
}

var arr = ["a", "c", "e", "d", "d", "e"];
var occuranceObj = {};

for (var i = 0; i < arr.length; i++) {
  if (occuranceObj[arr[i]] === undefined) {
    occuranceObj[arr[i]] = 1;
  } else {
    occuranceObj[arr[i]] = ++occuranceObj[arr[i]];
  }
}

for (key in occuranceObj) {
  if (occuranceObj[key] > 1) {
    console.log(key);
  }
}

var user = {
  name: "ashish kumar saini",
  address: [
    { city: "SBL", state: "UP", pin: 244303, type: "HOME" },
    { city: "SBL", state: "UP", pin: 244302, type: "FARM" },
    {
      city: "DHARMSHALA",
      state: "HIMACHAL",
      pin: 156218,
      type: "LIVING",
    },
  ],

  printCities: function () {
    for (var i = 0; i < this.address.length; i++) {
      console.log(this.address[i].city);
    }
  },
};

user.printCities();

var square = {
  side: 5,
  perimeter: function () {
    return 4 * this.side;
  },
  area: function () {
    return this.side ** 2;
  },
};

console.log(square.perimeter());

console.log(square.area());

var user_2 = {
  marks: [
    { subject: "Maths", marks: 98 },
    { subject: "Physics", marks: 96 },
    { subject: "Chemistry", marks: 84 },
  ],
  addMarks: function (sub_name, sub_marks) {
    this.marks.push({ subject: sub_name, marks: sub_marks });
  },
  lowestMarks: function () {
    var lower = this.marks[0].marks;
    for (var i = 0; i < this.marks.length; i++) {
      if (lower > this.marks[i].marks) {
        lower = this.marks[i].marks;
      }
    }
    return lower;
  },
  highestMarks: function () {
    var high = this.marks[0].marks;
    for (var i = 0; i < this.marks.length; i++) {
      if (high < this.marks[i].marks) {
        high = this.marks[i].marks;
      }
    }
    return high;
  },
  totalMarks: function () {
    var total = 0;
    for (var i = 0; i < this.marks.length; i++) {
      total += this.marks[i].marks;
    }
    return total;
  },
};

user_2.addMarks("ENGLISH", 78);
console.log(user_2.marks);
console.log(user_2.lowestMarks());
console.log(user_2.highestMarks());
console.log(user_2.totalMarks());
