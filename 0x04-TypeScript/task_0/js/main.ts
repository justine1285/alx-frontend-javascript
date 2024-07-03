interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const firstStudent1: Student = {
	firstName: "Justine",
	lastName: "Adugbo",
	age: 26,
	location: "Nigeria"
};

const secondStudent: Student = {
        firstName: "Iyanu",
        lastName: "Olatomide",
        age: 26,
        location: "Nigeria"
};

const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement('table');
const tableBody = document.createElement('tableBody');

table.style.background = "blue";
table.appendChild(tableBody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
