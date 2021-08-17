function handleTask(n, arr) {
  let i = 0;
  let j = arr.length - 1;

  let res = [];
  let index = "i";

  //time complexity O(n)
  // space complexity o(n)
  while (i <= j) {
    if (index === "i") {
      res.push(arr[i]);
      i++;
      index = "j";
    } else {
      res.push(arr[j]);
      j--;
      index = "i";
    }
  }

  console.log(res.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const arr = input[line++].trim().split(" ").map(Number);

    handleTask(n, arr);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2
  5
  1 3 5 4 2
  6
  1 3 5 6 4 2`);
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
