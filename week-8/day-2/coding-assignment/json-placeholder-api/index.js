var url = "http://jsonplaceholder.typicode.com";

const endPointMap = {
  post: "/posts",
  todos: "/todos",
  albums: "/albums",
  user: "/users",
};

function fetchEndpoint(event) {
  const endpoint = endPointMap[event.target.id];
  fetch(url + endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

document.getElementById("post").addEventListener("click", fetchEndpoint);

document.getElementById("todos").addEventListener("click", fetchEndpoint);

document.getElementById("albums").addEventListener("click", fetchEndpoint);

document.getElementById("user").addEventListener("click", fetchEndpoint);
