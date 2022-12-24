import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("Nada", "work on Nada website", 250);
const invTwo = new Invoice("Fraza", "work on Fraza website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.format());
});
// Form
const form = document.querySelector(".new-item-form");
// input
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
