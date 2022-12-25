import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// Form
const form = document.querySelector(".new-item-form");
// input
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["BOOK"] = 2] = "BOOK";
    ResourceType[ResourceType["PERSON"] = 3] = "PERSON";
    ResourceType[ResourceType["DIRECTOR"] = 4] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: { title: "a thousand years" },
};
const docTwo = {
    uid: 9,
    resourceType: ResourceType.DIRECTOR,
    data: { name: "Fraza" },
};
console.log(docOne, docTwo);
