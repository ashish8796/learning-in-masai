function runProgram(input) {
  const str = input.trim().split("");
  let s = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      s.push(")");
    } else if (str[i] == "[") {
      s.push("]");
    } else if (str[i] == "{") {
      s.push("}");
    } else if (str[i] == ")" || str[i] == "]" || str[i] == "}") {
      if (str[i] != s.pop()) {
        console.log("unbalanced");
        return;
      }
      // console.log({ s, b: str[i] });
    }
  }

  // console.log({ s });

  console.log(s.length ? "unbalanced" : "balanced");
}

if (process.env.USERNAME === "ashish") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine{ten}]]]]]]]]]`);
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
