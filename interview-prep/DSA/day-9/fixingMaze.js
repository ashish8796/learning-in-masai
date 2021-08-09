function handleTask(r, c, mat) {
  let count = 0;

  for (let i = 0; i < r; i++) {
    if (i == r - 1) {
      for (let j = 0; j < c; j++) {
        if (mat[i][j] == "D") {
          mat[i][j] = "R";
          count++;
        }
      }
    }

    if (mat[i][c - 1] == "R") {
      mat[i][c - 1] = "D";
      count++;
    }
  }

  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const [r, c] = input[line++].trim().split(" ").map(Number);
    const mat = input.slice(line, r + line).map((cv) => cv.trim().split(""));

    handleTask(r, c, mat);

    line = line + r;
    // break;
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`4
  3 3
  RRD
  DDR
  RRC
  1 4
  DDDC
  6 9
  RDDDDDRRR
  RRDDRRDDD
  RRDRDRRDR
  DDDDRDDRR
  DRRDRDDDR
  DDRDRRDDC
  1 1
  C`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
