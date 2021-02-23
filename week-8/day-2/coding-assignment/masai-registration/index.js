var registerForm = document.getElementById("register-form");
var nameElem = document.getElementById("name");
var emailElem = document.getElementById("email");
var passwordElem = document.getElementById("password");
var mobileElem = document.getElementById("mobile");
var usernameElem = document.getElementById("username");
var infoElem = document.getElementById("info");

var registerBtn = document.getElementById("register-btn");

var loginForm = document.getElementById("login-form");
var loginPasswordElem = document.getElementById("login-password");
var loginEmailElem = document.getElementById("login-email");

var loginBtn = document.getElementById("register-btn");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = nameElem.value;
  var email = emailElem.value;
  var password = passwordElem.value;
  var mobile = mobileElem.value;
  var username = usernameElem.value;
  var info = infoElem.value;

  var userObj = { name, email, password, mobile, username, description: info };
  console.log(userObj);

  var userData = JSON.stringify(userObj);

  var url = "https://masai-api-mocker.herokuapp.com/auth/register";

  fetch(url, {
    method: "POST",
    body: userData,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var password = document.getElementById("login-password").value;
  var username = document.getElementById("login-username").value;

  var userObj = { password, username };

  var userData = JSON.stringify(userObj);
  var url = "https://masai-api-mocker.herokuapp.com/auth/login";

  fetch(url, {
    method: "POST",
    body: userData,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      localStorage.setItem("credentials", JSON.stringify(response));
      console.log(response);

      fetch("https://masai-api-mocker.herokuapp.com/user/" + username, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + response.token,
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          localStorage.setItem("userData", JSON.stringify(response));
          console.log(response);
        });
    })
    .catch(function (err) {
      console.log(err);
    });
});
