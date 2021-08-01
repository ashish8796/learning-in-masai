function handleTask(n, arr) {
  // console.log({ n, arr });

  let prof = 0;

  let i = 1;
  while (n) {
    let f = arr[0];
    let l = arr[arr.length - 1];

    if (f < l) {
      prof += f * i;
      arr.shift();
      // console.log({ prof, arr });
    } else {
      prof += l * i;

      arr.pop();
      // console.log({ prof, arr });
    }

    n--;
    i++;
  }

  // if ((i - 1) % 2) {
  //   prof += arr[0] * (i - 1);
  // }

  console.log(prof);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);
  let numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const arr = input[line++]
      .trim()
      .split(" ")
      .filter((el) => !isNaN(parseInt(el)))
      .map(Number);

    // console.log({ arr });
    handleTask(n, arr);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2
  5
  12  5  2  45  1
  2
  2 3  
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
