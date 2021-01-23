var studnetArr = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] },
    ],
  },
];

for (var i = 0; i < studnetArr.length; i++) {
  var obj = studnetArr[i];
  var studentSum = { garde: obj.grade };
  for (var j = 0; j < obj.students.length; j++) {
    var studentObj = obj.students[j];
    var sum = 0;
    for (var k = 0; k < studentObj.marks.length; k++) {
      sum += studentObj.marks[k];
      if (k === studentObj.marks.length - 1) {
        studentSum[studentObj.name] = sum;
      }
    }
  }
  var finalArr = Object.keys(studentSum);
  // finalArr = [grade, prateek, ntrpul]
  console.log(
    studentSum[finalArr[1]] > studentSum[finalArr[2]]
      ? studentSum.garde + "-" + finalArr[1] + "-" + studentSum[finalArr[1]]
      : studentSum.garde + "-" + finalArr[2] + "-" + studentSum[finalArr[2]]
  );
}
