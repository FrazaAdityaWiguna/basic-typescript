// explicit types
let char: string, age: number, isLoggedIn: boolean;

char = "Raja";
age = 20;
isLoggedIn = true;

// arrays
let people: string[] = [];
people.push("Fraza");

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("Nada");
mixed.push(22);
mixed.push(true);

let uid: string | number;
uid = "123";
uid = 123;

// objects
let peopleOne: object;
peopleOne = { name: "Arrasy", age: 9 };

let peopleTwo: { name: string; age: number };
peopleTwo = { name: "Tegar", age: 7 };
