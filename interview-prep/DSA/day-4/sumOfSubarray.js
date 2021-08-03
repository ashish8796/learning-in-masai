function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);
  const q = Number(input[2]);

  let sum = 0;
  let lStack = [];
  let rStack = [];

  for (let i = 0, line = 3; i < q; i++) {
    let [l, r] = input[line++].trim().split(" ").map(Number);
    let preL = lStack[0];
    let preR = rStack[0];
    let x = l;
    let y = r;

    console.log({ sum, l, r, lStack, rStack, preL, preR });

    if (i == 0) {
      while (l <= r) {
        sum += arr[l - 1];
        l++;
      }

      console.log({ sum, l, r, lStack, rStack, preL, preR });
    } else {
      while (l > preL) {
        sum -= arr[l - 1];
        l--;
      }
      console.log({ sum, l, r, lStack, rStack, preL, preR });

      while (preL < l) {
        sum += arr[l - 1];
        l++;
      }
      console.log({ sum, l, r, lStack, rStack, preL, preR });

      while (r > preR) {
        sum += arr[r];
        r--;
      }
      console.log({ sum, l, r, lStack, rStack, preL, preR });

      while (preR > r) {
        sum -= arr[r];
        r--;
      }

      lStack.pop();
      rStack.pop();
    }

    lStack.push(x);
    rStack.push(y);

    console.log({ sum, l, r, lStack, rStack, preL, preR });
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`4
  3 2 1 5
  4
  1 3
  2 4
  1 4
  3 3`);
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
