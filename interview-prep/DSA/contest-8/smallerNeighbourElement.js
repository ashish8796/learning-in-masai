//Time Complexity = O(n) Space Complexity = O(1)
function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);

  const s = []; //constant no of data inside the s
  let ans = ""; // changing same variable

  for (let i = 0; i < n; i++) {
    if (!s.length) {
      ans += " -1";
      s.push(arr[i]);
    } else {
      while (s.length) {
        if (arr[i] <= s[s.length - 1]) {
          s.pop();

          if (!s.length) {
            ans += " -1";
            s.push(arr[i]);

            break;
          }
        } else {
          ans += " " + s[s.length - 1];
          s.push(arr[i]);
          break;
        }
      }
    }
  }

  console.log(ans.trim());
}

if (process.env.USERNAME === "ashish") {
  runProgram(`8
  39 27 11 4 24 32 32 1`);
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
