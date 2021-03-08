const basicUrl = "https://www.youtube.com/results?search_query=";

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", (e) => {
  const query = document.querySelector("input").value;

  window.location = basicUrl + query;
});
