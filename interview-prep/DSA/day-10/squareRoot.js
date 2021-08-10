// function findSqrt(n, cache) {
//   let i = 1;

//   let isResult = false;

//   while (!isResult) {
//     if (i * i == n) {
//       console.log(i);
//       isResult = true;
//     } else if (i * i > n) {
//       console.log(i - 1);
//       isResult = true;
//     }

//     i++;
//   }
// }

// function Square(low, high, n, ans) {
//   let mid = low + (high - low) / 2;
//   let mul = mid * mid;

//   if (mul == n || mul - n < 0.00001) {
//     ans[0] = mid;
//   } else if (mul < n) return Square(mid, high, n, ans);
//   else return Square(low, mid, n, ans);
// }

function Square(a) {
  let x,
    x1 = a / 2;

  do {
    x = x1;
    x1 = (x + a / x) / 2;

    console.log({ x, x1 });
  } while (x !== x1);
  return x;
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);

    let ans = [];

    let res = Square(n);
    console.log((res + "").length > 1 ? (res + "").split(".")[0] : res);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`1
  8`);
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
