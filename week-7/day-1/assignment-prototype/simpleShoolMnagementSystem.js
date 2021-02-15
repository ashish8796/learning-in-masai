function Teachers(name, age, subject, experience) {
  this.name = name;
  this.age = age;
  this.subject = subject;
  this.experience = experience;
}

Teachers.prototype.showTeacherBio = function () {
  var bio = `
  Name: ${this.name}
  Age: ${this.age}
  Expertise: ${this.subject}
  Experience of years: ${this.experience}
  `;

  console.log(bio);
};

var teacher1 = new Teachers("Nrupul", 32, "Java Script", 12);

teacher1.showTeacherBio();

function Students(name, age, standard) {
  this.name = name;
  this.age = age;
  this.standard = standard;
}

Students.prototype.showStudentBio = function () {
  var bio = `
  Name: ${this.name}
  Age: ${this.age}
  Standard: ${this.standard}
  `;

  console.log(bio);
};

var student1 = new Students("Ashish Kumar Saini", 24, "Unit 2");

student1.showStudentBio();

function Competitions(name, duration, expectedDate) {
  this.name = name;
  this.duration = duration;
  this.expectedDate = expectedDate;
}

Competitions.prototype.startCompetition = function () {
  console.log(
    `Competition '${this.name}' is of ${this.duration} minutes. It will start on ${this.expectedDate}.`
  );
};

var contest = new Competitions("OJ", 30, "20/02/2021");
contest.startCompetition();
