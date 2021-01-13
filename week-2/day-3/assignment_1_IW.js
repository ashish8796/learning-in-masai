var product = {
  name: "apple",
  type: "fruit",
  taste: "sweet",
  colors: ["red", "green", "yellow"],
  availabity: {
    Himachal: "50 million ton",
    JummuAndKashmir: "200 million ton",
  },
};

for (key in product) {
  console.log("key - " + key + ",", "value - " + product[key]);
}

var arr = [2, 3, 5, 9, 8, 9, 5, 8];
var occuranceObj = {};

for (var i = 0; i < arr.length; i++) {
  if (occuranceObj[arr[i]] === undefined) {
    occuranceObj[arr[i]] = 1;
  } else {
    occuranceObj[arr[i]] = ++occuranceObj[arr[i]];
  }
}

for (key in occuranceObj) {
  if (occuranceObj[key] === 1) {
    console.log(key);
  }
}

var user_1 = {
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
  printPicodes: function () {
    for (var i = 0; i < this.address.length; i++) {
      console.log(this.address[i].pin);
    }
  },
};

user_1.printPicodes();

var square = {
  side: 5,
  perimeter: function () {
    return 4 * this.side;
  },
};

console.log(square.perimeter());

var user = {
  marks: [
    { subject: "Maths", marks: 96 },
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
};

user.addMarks("ENGLISH", 78);
console.log(user.marks);
console.log(user.lowestMarks());
