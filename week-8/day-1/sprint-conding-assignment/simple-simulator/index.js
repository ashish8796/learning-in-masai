// Create separate constructor functions for plants, animal and human.

// Add relevant properties like ‘this.canspeak=true’ for humans. Add more properties of your choice. You can either pass them as parameters or hard code them.

// Create multiple objects of plant, animal, and human using new keyword.

// These objects should be created after a certain time period. See which Browser API functionality you can use for that.

// Push the objects in their respective arrays. Like new plant object will get pushed to plants array.

// Optional: Try removing the objects after a certain time interval as well. How many to remove is up to you.

// console.log plants, animals, and humans array whenever you are pushing respective objects to them

// This is only a Js problem. Create a single .js file linked to index.html that will print its output to the console when loaded into the brower.

function Human(canWalk, canBreath) {
  this.canSpeak = true;
  this.canWalk = canWalk;
  this.canBreath = canBreath;
}

function Animal(canWalk, canBreath) {
  this.canSpeak = false;
  this.canWalk = canWalk;
  this.canBreath = canBreath;
}

function Plant(canWalk, canBreath) {
  this.canSpeak = false;
  this.canWalk = canWalk;
  this.canBreath = canBreath;
}

var humanArr = [];
var animalArr = [];
var plantArr = [];

setTimeout(function () {
  var man = new Human(true, true);
  var woman = new Human(true, true);
  var kids = new Human(true, true);

  humanArr.push(man);
  humanArr.push(woman);
  humanArr.push(kids);

  console.log(humanArr);

  var dog = new Animal(true, true);
  var lion = new Animal(true, true);
  var cow = new Animal(true, true);

  animalArr.push(dog);
  animalArr.push(lion);
  animalArr.push(cow);

  console.log(animalArr);

  var mango = new Plant(false, true);
  var tomato = new Plant(false, true);
  var apple = new Plant(false, true);

  plantArr.push(mango);
  plantArr.push(tomato);
  plantArr.push(apple);

  console.log(plantArr);
}, 3000);
