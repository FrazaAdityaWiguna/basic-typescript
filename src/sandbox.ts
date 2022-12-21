type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};