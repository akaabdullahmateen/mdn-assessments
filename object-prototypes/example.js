const personPrototype = {
  greet() {
    console.log(`Hello! My name is ${this.name}`);
  },
};

let object = Object.create(personPrototype);
console.log(object);

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);
