function printPymd(level) {
  var resStr = "";
  for (var i = 0; i < level; i++) {
    var lineStr = "";
    var zeroPostion = level - i;
    var line = 2 * i + 1;
    var loopCount = 0;

    while (loopCount < (level - i) * 2 + 1) {
      if (loopCount === zeroPostion) {
        for (var l = 0; l < line; l++) {
          if (l % 2 === 0) {
            lineStr += "0";
          } else {
            lineStr += ".";
          }
        }
      } else {
        lineStr += ".";
      }
      loopCount++;
    }
    resStr += lineStr + "\n";
  }
  console.log(resStr);
}
printPymd(5);

function printReversePymd(level) {
  var resStr = "";
  for (var i = level - 1; i >= 0; i--) {
    var lineStr = "";
    var zeroPostion = level - i;
    var line = 2 * i + 1;
    var loopCount = 0;

    while (loopCount < (level - i) * 2 + 1) {
      if (loopCount === zeroPostion) {
        for (var l = 0; l < line; l++) {
          if (l % 2 === 0) {
            lineStr += "0";
          } else {
            lineStr += ".";
          }
        }
      } else {
        lineStr += ".";
      }
      loopCount++;
    }
    resStr += lineStr + "\n";
  }
  console.log(resStr);
}

printReversePymd(4);

function printRhombus(level) {
  var resStr = "";
  for (var i = 0; i < level; i++) {
    var lineStr = "";
    var zeroPostion = level - i;
    var line = 2 * i + 1;
    var loopCount = 0;

    while (loopCount < (level - i) * 2 + 1) {
      if (loopCount === zeroPostion) {
        for (var l = 0; l < line; l++) {
          if (l % 2 === 0) {
            lineStr += "0";
          } else {
            lineStr += ".";
          }
        }
      } else {
        lineStr += ".";
      }
      loopCount++;
    }
    resStr += lineStr + "\n";
  }

  for (var i = level - 2; i >= 0; i--) {
    var lineStr = "";
    var zeroPostion = level - i;
    var line = 2 * i + 1;
    var loopCount = 0;

    while (loopCount < (level - i) * 2 + 1) {
      if (loopCount === zeroPostion) {
        for (var l = 0; l < line; l++) {
          if (l % 2 === 0) {
            lineStr += "0";
          } else {
            lineStr += ".";
          }
        }
      } else {
        lineStr += ".";
      }
      loopCount++;
    }
    resStr += lineStr + "\n";
  }
  console.log(resStr);
}

printRhombus(4);
