function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);

    const mat = [];

    for (let p = 0; p <= n; p++) {
      let arr = [];
      for (let q = 0; q <= n; q++) {
        arr.push(0);
      }

      mat.push(arr);
    }

    let houseArr = [];

    for (let k = 0; k < n; k++) {
      const [a, b] = input[line++].trim().split(" ").map(Number);
      mat[a][b] = 1;

      if (!houseArr.includes(a)) {
        houseArr.push(a);
      }

      if (!houseArr.includes(b)) {
        houseArr.push(b);
      }
    }

    // for (let x = 0, y = 0; x < n && y < n; x++, y++) {}

    console.log(houseArr.length);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`1
  3
  1 2
  2 3
  1 3
  `);
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
