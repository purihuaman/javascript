export const sets = () => {
	const user1 = { id: 1, name: 'Pedro' };
	const user2 = user1;
	const arrays = [1, 1, 2, 3, 4, 5, user1, user2];

	const mySet = new Set(arrays);

	// .add()
	mySet.add(1_000);

	// .delete()
	mySet.delete(user1);

	// .clear()
	// mySet.clear()

	// .has()
	console.log(mySet.has(1_000));

	// .size
	console.log(mySet.size);

	// Recorrer un set
	mySet.forEach((element) => {
		console.log(element);
	});

	// Obteniendo los valores de un set
	const iterationSet = mySet.values();
	console.log(iterationSet);

	// Obtener o convertir en un array un set
	const arrSet = [...mySet];
	console.log('array set', arrSet);

	console.log(arrays);
	console.log(mySet);
};

/*
	-> Sets o conjuntos (en castellano)
	- No permite almacenar valores duplicados
	- .add(): Permite agregar nuevos valores
	- .delete(): Eliminar valores del objeto set
	- .clear(): Elimina todo los valores del set
	- .has(): Si incluye el valor pasado como parametro
	- .size: Devuelve el tamaño del set, es una propiedad
*/
