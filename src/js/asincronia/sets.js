const set = () => {
	const array = [1, 2, 33, 33, true, false, true, {}, 'hello', 'HELLO'];

	const set = new Set(array);

	const set2 = new Set();
	set2.add('hello');

	console.log(array);
	console.log(set);
	console.log(set.size);
	console.log(set2);

	set.forEach((element) => {
		console.log(element);
	});

	set.delete('hello');
	const setArray = Array.from(set);
	console.log(setArray);

	console.log(setArray[6]);
	console.log(setArray);

	set2.clear();
	console.log(set2);
};

export const sets = () => set();
