var url = "https://reqres.in/api/users?page=2";

//GET request using fetch browser api

fetch(url) //Creating a request to the server using GET method
  .then(function (response) {
    //After fulfilling the promise getting the response

    return response.json(); // collecting all small packets of the data and creating and returning the promise
  })
  .then(function (data) {
    // resolving the promise and getting the data into function

    console.log(data); //logging the data in object form
  });

//GET request using XMLHttpRequest api

var xhr = new XMLHttpRequest(); //Creating a request to the server

xhr.open("GET", url); //initializing the request with the get method

xhr.send(); // sending the request to the server

xhr.onload = function () {
  //getting the response
  console.log(JSON.parse(xhr.response)); //logging the data in the object
};
