let greet: Function;

greet = () => {
  console.log("Hello, Indonesia");
};

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
add(5, 10);

const minus = (a: number, b: number): any => {
  return a - b;
};

let result = minus(15, 10);
console.log(result);
result = "test";
console.log(result);
