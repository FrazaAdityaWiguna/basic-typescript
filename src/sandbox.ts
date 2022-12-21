// let greet = Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string) => {
  if (action === "add") {
    return numberOne + numberTwo;
  } else {
    return numberOne - numberTwo;
  }
};

// example 3
let logDetails: (obj: { name: string; age: number }) => void;

type tempPerson = { name: string; age: number };

logDetails = (person: tempPerson) => {
  console.log(`${person.name} is ${person.age} years old`);
};
