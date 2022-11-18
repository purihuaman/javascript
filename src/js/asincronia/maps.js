const maps = () => {
	const map = new Map();
	map.set('name', 'Pedro');
	map.set('email', 'pedro@gmail.com');
	map.set('age', 23);

	console.log(map);
	console.log(map.size);
	console.log(map.has('email'));
	console.log(map.get('name'));
	map.set('name', 'Puri');
	map.delete('email');
	// map.clear();

	map.set(true, 'true');

	console.log(map);

	for (const [key, value] of map) {
		console.log(`${key}: ${value}`);
	}

	const kyes = [...map.keys()];
	const values = [...map.values()];

	console.log(kyes);
	console.log(values);

	/* NOTE:-> Weakmap */

	const weakMaps = new WeakMap();

	let key1 = {};
	let key2 = {};
	let key3 = {};

	weakMaps.set(key1, 100);
	weakMaps.set(key2, 200);

	console.log(weakMaps);

	console.log(weakMaps.has(key2));
	console.log(weakMaps.has(key3));

	console.log(weakMaps.get(key2));
	console.log(weakMaps.get(key3));

	weakMaps.delete(key2);

	console.log(weakMaps);

	setInterval(() => console.log(weakMaps), 1000);

	setTimeout(() => {
		key1 = null;
		key2 = null;
		key3 = null;
	}, 5000);
};

export const mappers = () => maps();
