class Student {
  constructor(name, lastName, yearOfBirth, assessments) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.assessments = assessments;
    this.suppleness = new Array(25).fill(undefined);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  }

  present() {
    const index = this.suppleness.findIndex((e) => e === undefined);
    if (index !== -1) {
      this.suppleness[index] = true;
    }
    return this;
  }

  absent() {
    const index = this.suppleness.findIndex((e) => e === undefined);
    if (index !== -1) {
      this.suppleness[index] = false;
    }
    return this;
  }

  summary() {
    const avgSuppleness =
      this.suppleness.filter((e) => e === true).length / this.suppleness.length;
    const sumAssessments = this.assessments.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(sumAssessments);
    const avgAssessments = sumAssessments / this.assessments.length;
    console.log(avgAssessments);
    if (avgSuppleness > 0.9 && avgAssessments > 90) {
      return "Молодець!";
    }
    if (avgSuppleness > 0.9 || avgAssessments > 90) {
      return "Добре, але можна краще!";
    }
    return "Редиска!";
  }
}

const student = new Student(
  "Harry",
  "Potter",
  1991,
  [80, 80, 90, 70, 80, 90, 90, 100, 100, 100, 100, 100, 100, 100]
);
student
  .present() //1
  .present() //2
  .present() //3
  .absent() //4
  .present() //5
  .present() //6
  .present() //7
  .present() //8
  .present() //9
  .present() //10
  .present() //11
  .present() //12
  .absent() //13
  .absent() //14
  .present() //15
  .absent() //16
  .present() //17
  .present() //18
  .present() //19
  .present() //20
  .present() //21
  .present() //22
  .absent() //23
  .present() //24
  .present() //25
  .present() //цей вже не рахуется
  .present(); //цей також

console.log(student.summary());
console.log(student.getAge()); // age
