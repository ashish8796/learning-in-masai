const formElem = document.querySelector("form");
const nameElem = document.getElementById("name");
const moNoElem = document.getElementById("mo-no");
const emailElem = document.getElementById("email");
const passwordElem = document.getElementById("password");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameElem.value;
  const moNo = moNoElem.value;
  const email = emailElem.value;
  const password = passwordElem.value;

  const userData = { name, moNo, email, password };

  if (name && moNo && password) {
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData);
    window.location = "./sign-in.html";
  }
});
