function handleTask(n) {
  if (n % 2) {
    console.log(n);
    return;
  }

  let maxOdd = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    let factor = n % i;

    if (factor % 2 !== 0 && maxOdd < factor) {
      console.log({ maxOdd, factor });
      maxOdd = factor;
    }
  }

  console.log(maxOdd);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);

    handleTask(n);
    break;
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`10
  91608254740
  972655619229
  157519117562
  525741971613
  5923276905
  339664949571
  30073960628
  955199232088
  510245220628
  541654370148`);
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
