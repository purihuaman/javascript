const today = new Date();
const birthday = new Date(1998, 11, 13);

const islater = today.getTime() > birthday.getTime();

const birthdayDay = birthday.getDate();
const birthdayMonth = birthday.getMonth() + 1;
const birthdayYear = birthday.getFullYear();

console.table({
	today,
	birthday,
	islater,
	birthdayDay,
	birthdayMonth,
	birthdayYear,
});
