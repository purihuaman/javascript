const myData = {
	name: 'Pedro',
	lastname: 'Purihuaman',
	age: 23,
	height: 1.6,
	isDeveloper: true,
};

let myAge = myData.age;

const listData = [
	{ ...myData },
	{
		name: 'Christian',
		lastname: 'Carlos',
		age: 20,
		height: 1.5,
		isDeveloper: false,
	},
	{
		name: 'Fabian',
		lastname: 'Leonardo',
		age: 24,
		height: 1.6,
		isDeveloper: false,
	},
];

const listSortedByAge = listData.sort((a, b) => b.age - a.age);

console.log({ myData, myAge, listData, listSortedByAge });
