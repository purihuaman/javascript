let myName = 'Pedro';
let myLastname = 'Purihuaman';
let student = `${myName} ${myLastname}`;
let studentMayus = student.toUpperCase();
let studentMinus = student.toLowerCase();
let studentLength = student.length;
let firstLetter = myName.substring(0, 1);
let lastLetter = myLastname.charAt(myLastname.length - 1);
let largeStudent = student.replace(' ', '');
let isContained = student.includes(myName);

console.log({
	myName,
	myLastname,
	student,
	studentMayus,
	studentMinus,
	studentLength,
	firstLetter,
	lastLetter,
	largeStudent,
	isContained,
});
