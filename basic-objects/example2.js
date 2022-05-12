// Manually typing object literals

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

person1.introduceSelf();
person2.introduceSelf();

// Functions to create objects

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const salva = createPerson("Salva");
console.log(salva.name);
salva.introduceSelf();

const frankie = createPerson("Frankie");
console.log(frankie.name);
frankie.introduceSelf();

// Constructor to create objects

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const salvaM = new Person("Salva");
console.log(salvaM.name);
salvaM.introduceSelf();

const frankieM = new Person("Frankie");
console.log(frankieM.name);
frankieM.introduceSelf();
