function CalPer() {
  return +((this.marksObtained / this.marksOutOf) * 100 + "").slice(0, 5);
}

function Students(marksObtained, marksOutOf) {
  this.marksObtained = marksObtained;
  this.marksOutOf = marksOutOf;
  this.percentage = CalPer.call(this);
}

var marksArr = [445, 545, 415, 425, 435, 455, 465, 475, 485, 500];

var studentArr = marksArr.map(function (cv) {
  var totalMarks = 600;
  return new Students(cv, totalMarks);
});

console.log(studentArr);
