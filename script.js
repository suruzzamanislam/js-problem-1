// problem 1
function scopeTest() {
  if (true) {
    var varVariable = 'I am var'; //function-scoped
    let letVariable = 'I am let'; //block-scoped
    const constVariable = 'I am const'; //block-scoped
  }
  console.log(varVariable); //result = 'I am var'
  console.log(letVariable); //result = ReferenceError: letVariable is not defined.
  console.log(constVariable); //result = ReferenceError: constVariable is not defined.
}
scopeTest();

// problem 2
const greet = (name, greeting = 'Hello') => {
  return `${greeting}, ${name}!`;
};
console.log(greet('Alice')); // "Hello, Alice!"
console.log(greet('Bob', 'Good morning')); // "Good morning, Bob!"

// problem 3
const sum = (...number) => {
  let sum = 0;
  for (let n of number) {
    sum += n;
  }
  return sum;
};
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5

// problem 4
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
// Your code here
const mergedArray = [...array1, ...array2, ...array3];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// problem 5
const name = 'John';
const age = 30;
// Your code here
const person = {
  name,
  age,
  greet() {
    return `"Hi, I'm ${this.name} and I'm ${this.age} years old."`;
  },
};
console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."

// problem 6
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}

// problem 7
const name2 = 'Alice';
const age2 = 25;
// Your code here
const message = `"My name is ${name2} and I am ${age2} years old."`;
console.log(message); // "My name is Alice and I am 25 years old."

// problem 8
const students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
  { name: 'Charlie', grade: 92 },
];
for (const student of students) {
  console.log(`Name: ${student.name}, Grade: ${student.grade}`);
}

// problem 9
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (const innerArray of nestedArrays) {
  let sum = 0;
  for (const n of innerArray) {
    sum += n;
  }
  console.log(`Sum of ${innerArray}: ${sum}`);
}

// problem 10
const a = 5;
const b = 10;

// Your code here
const result = `"The sum of ${a} and ${b} is ${a + b}`;
console.log(result); // "The sum of 5 and 10 is 15."
