function runProgram(input) {
  let [a, b] = input.trim().split(" ").map(Number);
  let pArr = [b];

  while (a < b) {
    if (pArr.includes(a)) {
      console.log(a);
      return;
    }

    a = a + (a + "").split("").reduce((acc, cv) => acc + Number(cv), 0);
    b = b + (b + "").split("").reduce((acc, cv) => acc + Number(cv), 0);
    pArr.push(b);

    console.log({ a, b });
  }

  console.log(-1);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`162701 50312`);
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
