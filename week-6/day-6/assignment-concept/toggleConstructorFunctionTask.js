function Task(title) {
  this.title = title; //creating title key and assigning title to title key

  this.status = false; //creating title key and  assigning boolean to status key

  this.createdDate = new Date().toLocaleDateString(); //creating title key and assigning date to createdDate key

  this.toggleStatus = function () {
    this.status = !this.status;
  }; //creating toggleStatus key and assigning function to  toggle the status of the current task
} //defining a constructor function with one argument as parameter

var buyMilk = new Task("buy milk"); //creating instance in form of object of Task as buyMilk

var sellMilk = new Task("sell milk"); //creating instance in form of object of Task as sellMilk

var doAssignment = new Task("do assignment"); //creating instance in form of object of Task as doAssignment

var doAssignment = new Task("do assignment"); //creating instance in form of object of Task as object

var goMarket = new Task("go market"); //creating instance  of Task as goMarket

buyMilk.toggleStatus();
console.log(buyMilk);

buyMilk.toggleStatus();

console.log(buyMilk);
console.log(sellMilk);
console.log(doAssignment);
console.log(goMarket);
