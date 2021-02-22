var timer = document.querySelector(".timer");
var mainElem = document.querySelector("main");
var form = document.querySelector("form");
var cardNum = document.getElementById("card-number");

var submit = document.querySelector("button");

var sec = 60;

function changeTimer(sec) {
  timer.innerText = sec;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

cardNum.addEventListener("focus", startTimer);

function startTimer() {
  cardNum.removeEventListener("focus", startTimer);
  var timerId = setInterval(function () {
    sec--;
    changeTimer(sec === -1 ? 0 : sec);

    if (sec === -1) {
      mainElem.style.display = "none";
    }
    if (sec === -2) {
      sec = 60;
      alert("Sorry, your session is expired");
      clearInterval(timerId);
      changeTimer(sec);
    }
  }, 1000);
}
