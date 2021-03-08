const userData = JSON.parse(localStorage.getItem("userData"));
const formElem = document.querySelector("form");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const credential = document.getElementById("email-mo-no").value;

  const password = document.getElementById("password").value;

  if (
    (credential == userData.email || credential == userData.moNo) &&
    password == userData.password
  ) {
    alert("Login Successful");
  } else {
    alert("Credential Invalid");
  }
});
