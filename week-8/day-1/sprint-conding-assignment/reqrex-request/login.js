var emailElem = document.getElementById("email");
var passwordElem = document.getElementById("password");
var submitBtn = document.getElementById("submit-btn");
var tokenDiv = document.getElementById("token");

var xhr = new XMLHttpRequest();

submitBtn.addEventListener("click", function () {
  var url = "https://reqres.in/api/login";

  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  var email = emailElem.value;
  var password = passwordElem.value;

  var body = JSON.stringify({
    email,
    password,
  });

  xhr.send(body);

  xhr.onload = function () {
    var response = JSON.parse(xhr.response);
    localStorage.setItem("loginData", JSON.stringify(response));

    tokenDiv.innerText = JSON.parse(localStorage.getItem("loginData")).token;
    console.log(xhr.response);
  };
});
