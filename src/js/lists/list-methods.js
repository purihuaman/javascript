const listMethods = () => {
	const user = { id: 1, name: 'Alison' };
	const array1 = [
		8,
		'hello',
		false,
		{ id: 8, name: 'Puri' },
		null,
		undefined,
		user,
	];

	// Mostrando datos de un array
	console.log(array1);

	// Accediendo a los posiciones de un array
	console.log(array1[0]);
	console.log(array1[2]);
	console.log(array1[6]);

	//NOTE: Metodos de agregar datos a un array
	// .push()|.unshift()|.splice() -> Mutan el valor de nuestro array
	// .push() -> Añade al final del array
	array1.push(1_000);
	array1.push('javascript', ['java', 'php']);

	// .unshift() -> Añade al inicio del array
	array1.unshift(['react', 'angular', 'vue']);

	// .splice() -> Añade o elimina datos de un array, segun lo indiques
	// .splice(posicion inicio, cuanto eliminara, datos a agregar)
	// 1|3: posición donde empezara a agregar
	// 0|2: Indicar los elementos que va a eliminar
	// symfony, etc|[]: Son los datos que se van a agregar al array

	array1.splice(1, 0, 'symfony', 'laravel'); // Añadiendo
	array1.splice(3, 2, ['java', 'go', 'python']); // Añadiendo
	console.log(array1.splice(2, 4)); // Eliminado
	console.log('Splice', array1);

	// NOTE: Métodos para "eliminar" valores en nuestro array
	// .pop()|.shift() -> Mutan el valor del array
	// .pop() -> "Elimina" y/o abstrae el último elemento del array
	const lastElement = array1.pop();
	console.log(lastElement);

	// .shift() -> "Elimina" y/o abstrae el primer elemento del array
	const firstElement = array1.shift();
	console.log(firstElement);

	console.log(array1);

	// NOTE: Unir dos listas
	const list1 = ['javascript', 2, false, undefined];
	const list2 = ['angular', 8_000, { id: 8, name: 'Puri' }, null];
	const language = ['php', 'java', 'python', 'go', 'Rust', 'Ruby', 'c#'];

	// .concat(array): Devuelve un nuevo array juntando los 2 arrays
	// console.log(list1.concat(list2, language));
	console.log([...list1, ...list2, ...language]);

	console.log(list1);
	console.log(list2);
	console.log(language);

	// NOTE: Obtener datos de una lista
	// .slice(): No modifica el array, devuelve un nuevo array, no incluye el último elemento
	console.log('Original', language);
	// console.log('Nuevo', language.slice(0, 3));
	// console.log('Nuevo', language.slice(1, 3));
	console.log('Nuevo', language.slice(2, -2)); // No incluye los 2 últimos

	// NOTE: Métodos de iteraciones y/o recorrer
	const programmingLanguages = [
		{
			name: 'javascript',
			frameworks: ['react', 'angular', 'vue', 'svelt'],
		},
		{ name: 'php', frameworks: ['laravel', 'symfony'] },
		{ name: 'java', frameworks: ['sprint'] },
		{ name: 'php', frameworks: ['codeigneter', 'symfony'] },
		{ name: 'python', frameworks: ['flask', 'django'] },
	];
	console.log(programmingLanguages);

	// .forEach(): Recorre todos los elementos de un array
	programmingLanguages.forEach((language) => {
		console.log(language);
	});

	// Buscar un elemento
	// .find(): Devuelve el 1er elemento si lo encuentra si no undefined
	console.log(programmingLanguages.find((language) => language.name === 'php'));

	// Filtrar elementos
	// .filter(): Devuelve un array con los resultados encontrados
	console.log(
		programmingLanguages.filter((language) => language.name === 'php')
	);

	// Comparación de array
	const arr1 = [1, 2, 3, 5];
	const arr2 = [1, 2, 3, 5];

	console.log(arr1 === arr2);
	console.log(arr1.every((arr) => arr2.some((ar2) => arr === ar2)));
	console.log(arr1.every((arr, index) => arr === arr2[index]));
};

export default listMethods;
