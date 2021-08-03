function runProgram(input) {
  input = input.trim().split("\n");
  const str = input[0].trim();
  const s = input[1].trim();
  const indexObj = {};

  for (let i = 0; i < str.length; i++) {
    indexObj[str[i]] = i;
  }

  // console.log({ indexObj });

  let time = 0;
  let f = 0;
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      f = indexObj[s[i]];
      time = f;
    } else {
      time += Math.abs(f - indexObj[s[i]]);
      f = indexObj[s[i]];
    }
  }

  console.log(time);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`pqrstuvwxyzabcdefghijklmno
  hel`);
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
