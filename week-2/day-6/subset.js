function printWall(bricks, height) {
  var resStr = "";
  for (var i = 1; i <= height; i++) {
    var layer = i % 2 ? "odd" : "even";
    for (var j = 1; j <= bricks * 4 + 1; j++) {
      if (layer === "odd") {
        if (j === 1 || j % 4 === 1) {
          resStr += "|";
        } else {
          resStr += "_";
        }
      } else if (layer === "even") {
        if (j === 3 || j % 4 === 3) {
          resStr += "|";
        } else {
          resStr += "_";
        }
      }
    }
    resStr += "\n\n";
  }
  console.log(resStr);
}

printWall(10, 6);
