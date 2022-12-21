"use strict";
// let greet = Function;
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === "add") {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
// example 3
let logDetails;
logDetails = (person) => {
    console.log(`${person.name} is ${person.age} years old`);
};
