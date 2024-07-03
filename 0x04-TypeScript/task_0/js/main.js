const firstStudent = {
	firstName: "Justine",
	lastName: "Adugbo",
	age: 26,
	location: "Nigeria"
};

const secondStudent = {
	firstName: "Iyanu",
        lastName: "Olatomide",
        age: 26,
        location: "Nigeria"
};

const studentsList = [firstStudent, secondStudent];
const table = document.createElement('table');
const tableBody = document.createElement('tableBody');
table.style.background = "blue";
table.appendChild('tableBody');
studentsList.forEach(function (student) {
	let row = document.createElement('tr');
	let nameCell = document.createElement('td');
	let locationCell = document.craeteElement('td');
	nameCell.textContent = student.firstName;
	locationCell.textContent = studnet.location;
	nameCell.style.border = "1px solid blue";
	locationCell.style.border = "1px solid blue";
	nameCell.style.padding = "5px";
	locationCell.style.padding = "5px";
	row.appendChild(nameCell);
	row.appendChild(locationCell);
	tablebody.appendChild(row);
});
document.body.appendChild(table);
