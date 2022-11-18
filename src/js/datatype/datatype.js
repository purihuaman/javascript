const dataType = () => {
	let myName = 'Purihuaman';
	let myAge = 23;
	let isDeveloper = true;
	let myBirthday = new Date(1998, 11, 13);
	let myFavoriteBook = {
		title: 'Hábitos atómicos',
		author: 'James Clear',
		date: '2019',
		url: 'https://www.amazon.com/H%C3%A1bitos-at%C3%B3micos/dp/B08JWXX27C/ref=sr_1_1?adgrpid=81810346296&gclid=Cj0KCQiA1NebBhDDARIsAANiDD29_fW2iirk8XK454cUTE0SJkUOBISZm-y-1w0hyfCLch6ycLo1OxQaAqSsEALw_wcB&hvadid=585362946447&hvdev=c&hvlocphy=9060924&hvnetw=g&hvqmt=b&hvrand=4491115374555260270&hvtargid=kwd-728711807425&hydadcr=22338_13333071&keywords=habitos+atomicos&qid=1668735259&sr=8-1',
	};

	console.log({ myName, myAge, isDeveloper, myBirthday, myFavoriteBook });
};

const dates = () => {
	const now = new Date();
	console.log(now);

	const dateMili = new Date();
	console.log(dateMili);

	const dateString = new Date('march 25 2023');
	console.log(dateString);

	const dateValues = new Date(2022, 10, 17);
	console.log(dateValues);

	const day = now.getDate();
	const month = now.getMonth() + 1;
	const year = now.getFullYear();

	console.log({ day, month, year });
};

const objects = () => {
	const user = {
		id: 8,
		name: 'Purihuaman',
		email: 'purihuaman@gmail.com',
	};

	const mobile = {
		height: 10,
		width: 5,
		mark: 'Huawei',
		isBlack: true,
		contacts: ['Mamá', 'Puri'],
	};

	mobile.year = 2018;
	mobile.height = 8;

	console.log(user.name);
	console.log(mobile);
	console.log(mobile['mark']);
};

const lists = () => {
	const list = [1, 'hello', true, undefined, false, {}];
	const list2 = new Array('hello', true, undefined, false, {}, [12, 8]);

	console.log(list2);
};

const primitive = () => {
	let typeNumber = 8;
	let typeString = 'Purihuaman';
	let typeBoolean = true;
	let typeNull = null;
	let typeUndefined = undefined;

	console.log(typeNumber);
	console.log(typeString);
	console.log(typeBoolean);
	console.log(typeNull);
	console.log(typeUndefined);
};

export { dataType };

/* NOTE:
 + TODAS DAN FALSY
 -> null: undefined - false - 0
 -> null: Espacio asignado en memoria pero sin valor
 -> undefined: Es un espacio que no esta definido en memoria, todavia no esta definido
*/
