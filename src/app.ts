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

// Enums
enum ResourceType {
  AUTHOR = 1,
  BOOK,
  PERSON,
  DIRECTOR,
}
interface Resource<T> {
  uid: number | string;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.AUTHOR,
  data: { title: "a thousand years" },
};

const docTwo: Resource<object> = {
  uid: 9,
  resourceType: ResourceType.DIRECTOR,
  data: { name: "Fraza" },
};

console.log(docOne, docTwo);
