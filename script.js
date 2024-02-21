const headTr = document.getElementById("headTr");
const tbody = document.querySelector("tbody");

const employes = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "Engineering",
    role: { title: "Frontend Developer", level: "Mid" },
    contact: { email: "john.doe@example.com", phone: "123-456-7890" },
    skills: ["JavaScript", "React", "CSS"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    department: "Design",
    role: { title: "UI/UX Designer", level: "Senior" },
    contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
    skills: ["Figma", "Sketch", "Adobe XD"],
  },
];

function createTHead(obj, tableHead) {
  Object.keys(obj).forEach((key) => {
    let newTh = document.createElement("th");
    newTh.textContent = key;
    tableHead.appendChild(newTh);
  });
}

createTHead(employes?.[0], headTr);

function createTBody(arr, tableBody) {
  arr.forEach((person) => {
    let tr = document.createElement("tr");
    Object.values(person).forEach((value) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        let td = document.createElement("td");
        let nestedTable = document.createElement("table");
        let nestedHead = document.createElement("thead");
        let nestedBody = document.createElement("tbody");
        td.appendChild(nestedTable);
        nestedTable.appendChild(nestedHead);
        nestedTable.appendChild(nestedBody);
        createTHead(value, nestedHead);
        createTBody([value], nestedBody);
        tr.appendChild(td);
      } else {
        let td = document.createElement("td");
        td.textContent = Array.isArray(value) ? value.join(", ") : value;
        tr.appendChild(td);
      }
    });
    tableBody.appendChild(tr);
  });
}

createTBody(employes, tbody);
