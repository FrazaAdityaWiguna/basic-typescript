import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// input
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

// Generics
const addUID = <T extends /* object */ { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "Fraza", age: 20 });
console.log(docOne);

interface Resource<T> {
  uid: number | string;
  resourceName: string;
  data: T;
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceName: "Nada",
  data: { age: "22" },
};

console.log(docTwo);

const docThree: Resource<(string | number)[]> = {
  uid: 1,
  resourceName: "Nada",
  data: [22, "22"],
};

console.log(docThree);
