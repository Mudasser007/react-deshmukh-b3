class Person {
  consstructor(name,level) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name}from ${this.level}`);
  }
}
const o1 = new Person("Azhar");
const o2 = new student("Mudasser", "BCA Final Year");
const o3 = new student("XYZ", "Grade 10");
o1.greet();
o2.greet();
o3.greet = () => {
  console.log("This is Special student");
};
