/* TODO: 
  Leer 5 números, guardarlos en un arreglo y mostrarlos en el orden inverso al introducido.
*/

let counter = 1;
const arrayNumbers = [];

for (let index = 0; index < 5; index++) {
	const newNumber = prompt('Ingrese un número');
	arrayNumbers.unshift(newNumber);
}

console.log(arrayNumbers);
