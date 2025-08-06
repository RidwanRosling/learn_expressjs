// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greetings() {
//     console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
//   }
// }

// const person2 = new person("andi", 22);
// person2.greetings();

// callback function
sum(displayResult, 5, 10);

function sum(callback, x, y) {
  const result = x + y;
  callback(result);
}

function displayResult(result) {
  console.log(`The result is: ${result}`);
}
