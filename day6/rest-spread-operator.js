const numbers = [2, 4, 5, 7];
console.log(numbers[2]);
const [a, , , b] = numbers;
console.log(a, b);

// Rest operator and Spread Operator
const [first, ...restItems] = numbers;

console.log("First", first);
console.log("restItems:", restItems);
const obj1 = {
  temp1: "34",
  fName: "Mudasser",
  lName: "Deshmukh",
  height: 5.8,
  temp2: "546",
};

const { temp1, temp2, ...person } = obj1;

console.log(person);

const obj2 = { ...obj1 };
obj2.color = "fair";

console.log("obj2", obj2);
console.log("obj1", obj1);

const newArray = [...numbers];
newArray.push(8);
console.log("newArray", newArray);
