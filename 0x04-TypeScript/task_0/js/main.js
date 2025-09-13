var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London",
};
var studentsList = [student1, student2];
// Render table in HTML
var table = document.createElement("table");
table.border = "1";
var header = table.insertRow();
header.insertCell().innerText = "First Name";
header.insertCell().innerText = "Location";
studentsList.forEach(function (student) {
    var row = table.insertRow();
    row.insertCell().innerText = student.firstName;
    row.insertCell().innerText = student.location;
});
document.body.appendChild(table);
