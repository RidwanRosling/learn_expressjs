class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetings() {
    console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const person2 = new person("andi", 22);
person2.greetings();
