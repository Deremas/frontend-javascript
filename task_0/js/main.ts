interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

// Create table elements
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Add table styles for better readability
table.style.borderCollapse = "collapse";
table.style.margin = "20px 0";
table.style.fontFamily = "Arial, sans-serif";
table.style.width = "50%";

// Create header row
const headerRow = document.createElement("tr");
["First Name", "Location"].forEach((title) => {
  const th = document.createElement("th");
  th.innerText = title;
  th.style.border = "1px solid #333";
  th.style.padding = "8px";
  th.style.backgroundColor = "#f2f2f2";
  th.style.textAlign = "left";
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);

// Create rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.innerText = student.firstName;
  firstNameCell.style.border = "1px solid #333";
  firstNameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.innerText = student.location;
  locationCell.style.border = "1px solid #333";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

// Assemble table
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

// interface Student {
//   firstName: string;
//   lastName: string;
//   age: number;
//   location: string;
// }

// const student1: Student = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 20,
//   location: "New York",
// };
// const student2: Student = {
//   firstName: "Jane",
//   lastName: "Smith",
//   age: 22,
//   location: "London",
// };

// const studentsList: Student[] = [student1, student2];

// // Render table in HTML
// const table = document.createElement("table");
// table.border = "1";

// const header = table.insertRow();
// header.insertCell().innerText = "First Name";
// header.insertCell().innerText = "Location";

// studentsList.forEach((student) => {
//   const row = table.insertRow();
//   row.insertCell().innerText = student.firstName;
//   row.insertCell().innerText = student.location;
// });

// document.body.appendChild(table);
