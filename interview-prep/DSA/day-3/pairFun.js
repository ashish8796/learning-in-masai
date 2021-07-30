function handleTask(n, arr) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j && 4 * arr[i] == 5 * arr[j]) {
        count++;
      }
    }
  }
  console.log(count);
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
  runProgram(`1
  84
  978 -150 77 -751 642 -661 333 340 -669 285 524 272 -995 592 350 634 29 67 915 740 626 -927 -814 38 596 -32 -280 -767 -288 -389 -993 988 866 883 718 -770 -612 -939 -100 2 -134 312 -151 252 -17 748 -486 -701 464 928 806 557 -809 754 -188 932 937 -486 620 740 -728 320 37 -84 626 -207 -492 -671 -764 996 637 -692 960 -149 988 422 958 126 356 -243 -618 868 -184 -232`);
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
