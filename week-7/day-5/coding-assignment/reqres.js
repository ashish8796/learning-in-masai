var request = new XMLHttpRequest(); //Creating a request to the server

request.open("GET", "https://reqres.in/api/users?page=2"); //Initializing the newly-created request with GET method;

request.send(); //sending request to the server;

request.open("POST", "https://reqres.in/api/users"); //Re-initializing the newly-created request with POST method;

var data = {
  name: "morpheus",
  job: "leader",
}; //storing the data into a variable

var body = JSON.stringify(data); //converting the data into json format
request.send(body); //sending request to the server with data;

request.open("PUT", "https://reqres.in/api/users/2"); //Re-initializing the newly-created request with PUT method;

var data = {
  name: "morpheus",
  job: "zion resident",
}; //storing the data into a variable

var body = JSON.stringify(data); //converting the data into json format
request.send(body); //sending request to the server with data;

request.open("DELETE", "https://reqres.in/api/users/2"); //Re-initializing the newly-created request with DELETE   method;

request.send(); //sending request to the server with data;
