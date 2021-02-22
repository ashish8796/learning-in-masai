var emailElem = document.getElementById("email");
var passwordElem = document.getElementById("password");
var submitBtn = document.getElementById("submit-btn");
var tokenDiv = document.getElementById("token");

var xhr = new XMLHttpRequest();

submitBtn.addEventListener("click", function () {
  var url = "https://reqres.in/api/register";

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
    localStorage.setItem("userData", JSON.stringify(response));

    tokenDiv.innerText = JSON.parse(localStorage.getItem("userData")).token;
    window.location = "./login.html";
  };
});
