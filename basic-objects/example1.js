const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  bio() {
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name.first}.`);
  },
};

if (typeof person === "object" && person !== null) {
  console.log(person.toString());
  console.log(person);
}

person.age = 45;
person["name"]["last"] = "Cratchit";

console.log(person["name"]);
console.log(person["name"]["first"]);
console.log(person["age"]);
person.bio();
person.introduceSelf();

person["eyes"] = "hazel";
person.farewell = () => {
  console.log("Bye everybody!");
};

console.log(person["eyes"]);
person.farewell();
