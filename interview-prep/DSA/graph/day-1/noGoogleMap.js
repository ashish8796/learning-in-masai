function handleTask(n, arr) {
  console.log({ n, arr });
}

function runProgram(input) {
  input = input.trim().split("\n");
  const [n, m] = input[0].trim().split(" ").map(Number);
  const mat = [];

  for (let i = 0; i <= n; i++) {
    let arr = [];
    for (let j = 0; j <= n; j++) {
      arr.push(0);
    }

    mat.push(arr);
  }

  let line = 1;

  for (let i = 0; i < m; i++) {
    const [a, b] = input[line++].trim().split(" ").map(Number);
    mat[a][b] = 1;
  }

  let q = Number(input[line++].trim());

  for (let i = 0; i < q; i++) {
    const [a, b] = input[line++].trim().split(" ").map(Number);
    console.log(mat[a][b] ? "YES" : "NO");
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`5 6
  1 2
  1 3
  2 3
  3 4
  3 5
  4 5
  3
  2 4
  1 3
  1 5`);
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
