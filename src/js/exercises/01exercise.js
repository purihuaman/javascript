/* TODO: 
  Leer 5 números, guardarlos en un arreglo y mostrarlos en el mismo orden
*/

let counter = 1;
const arrayNumbers = [];

while (counter <= 5) {
	const newNumber = prompt('Ingrese un número');

	arrayNumbers.push(newNumber);
	counter++;
}

console.log(arrayNumbers);
