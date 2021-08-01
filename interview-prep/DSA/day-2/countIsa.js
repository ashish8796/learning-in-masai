function handleTask(r, c, mat) {
  // console.log({ r, c, mat });

  let count = 0;

  //horizontally
  for (let i = 0; i < r; i++) {
    let str = "";
    for (let j = 0; j < c; j++) {
      str += mat[i][j];
      console.log({ str, e: mat[i][j] });

      if (str.length == 3 && str == "isa") {
        count++;
        str = "";
      }
    }
  }

  console.log({ count });

  //vertically
  for (let i = 0; i < c; i++) {
    let str = "";
    for (let j = 0; j < r; j++) {
      str += mat[i][j];

      console.log({ str, e: mat[i][j] });
      if (str.length == 3 && str == "isa") {
        count++;
        str = "";
      }
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
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2
  3 3
  isa
  sia
  ais
  5 3
  isa
  sia
  ais
  ssa
  aai`);
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
