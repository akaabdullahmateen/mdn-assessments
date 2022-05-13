// Object which will serve as a prototype for the next object

const personPrototype = {
  greet() {
    console.log(`Hello! My name is ${this.name}`);
  },
};

// Logging the prototype chain

let object = Object.create(personPrototype);

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Constructor

// Every function in JavaScript has a "prototype" property. When you call a function as a constructor,
// This property is set as the prototype of the newly constructed object, by default, in the property named: __proto__
// Therefore, running: const somePerson = new Person("someName"); will result in an empty __proto__.
function Person(name) {
  this.name = name;
}

// Now, for some reason, we do not want to have the greet() method in our constructor, so we define it in the prototype: personPrototype.
// To make the Person instances have access to this method, we set the "Person" prototype to point to "personPrototype".

Person.prototype = personPrototype;

// This works as intended; now any instance/objects created using the "Person" constructor will both initialize its name property to "name"
// And have access to the greet() function. However, the prototype: personPrototype, itself does not have access to the constructor: Person.
// This will lead to problems, since the "personPrototype" greet() method depends on "this.name", but "this.name" is not defined.
// Our prototype is itself an object, and needs to be valid on its own. So, we set the constructor of "personPrototype"
// When used as the __proto__ of "Person" to point to the constructor function "Person"

Person.prototype.constructor = Person;
