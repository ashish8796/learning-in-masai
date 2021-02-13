var form = document.querySelector("form");
var tbody = document.querySelector("tbody");

function StudentData(name, age, city, number) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.number = number;
}

function appendStudent(studentData) {
  var student = document.createElement("tr");

  var name = document.createElement("td");
  name.textContent = studentData.name;

  var age = document.createElement("td");
  age.textContent = studentData.age;

  var city = document.createElement("td");
  city.textContent = studentData.city;

  var number = document.createElement("td");
  number.textContent = studentData.number;

  student.appendChild(name);
  student.appendChild(age);
  student.appendChild(city);
  student.appendChild(number);

  tbody.appendChild(student);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name");
  var age = document.getElementById("age");
  var city = document.getElementById("city");
  var number = document.getElementById("number");

  var studentData = new StudentData(
    name.value,
    age.value,
    city.value,
    number.value
  );

  appendStudent(studentData);

  name.value = "";
  age.value = "";
  city.value = "";
  number.value = "";
});
