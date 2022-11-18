const removeDuplicates = (arrayElements = []) => {
	if (!(arrayElements instanceof Object) || arrayElements.length < 0)
		return console.log('Ingrese un array valido!.');

	const newArray = [...new Set(arrayElements)];
	console.log('Array antiguo:', arrayElements);
	console.log('Array nuevo:', newArray);
};

export const ejercicioVeinticinco = () =>
	removeDuplicates(['x', 10, 'x', 2, '10', 10, true, true]);

/* TODO:
	25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
