function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);

    let dArr = [];
    for (let j = 1; j <= n ** (1 / 2); j++) {
      if (n % j == 0) {
        dArr.push(j);
      }
    }

    dArr.push(n);

    let oddCount = 0;
    let evenCount = 0;

    for (let k = 0; k < dArr.length; k++) {
      if (dArr[k] % 2) {
        oddCount++;
      } else {
        evenCount++;
      }
    }

    if (oddCount > evenCount) {
      console.log("Odd Skewed");
    } else if (oddCount < evenCount) {
      console.log("Even Skewed");
    } else {
      console.log("Not Skewed");
    }
    // console.log({ dArr });
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`7
  63736285
  81893620
  57518129
  63111394
  60579629
  12575681
  38582008
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
