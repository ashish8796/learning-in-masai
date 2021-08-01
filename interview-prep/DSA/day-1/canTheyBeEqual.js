function handleTask(str1, str2, low, high, res) {
  if (low > high || res.length > str2.length) {
    return;
  }

  console.log(res);

  // console.log(str1.slice(0, low + 1) + res.split("").reverse().join(""));

  // if (str1.slice(0, low + 1) + res.split("").reverse().join("") == str2) {
  //   console.log("Yes");
  //   return;
  // }

  handleTask(str1, str2, low, high, res + str1[low]);
  handleTask(str1, str2, low + 1, high, res);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const str1 = input[line++].trim();
    const str2 = input[line++].trim();

    handleTask(str1, str2, 0, n - 1, "");
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2
  2
  ab
  ac
  3
  aba
  aab`);
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
