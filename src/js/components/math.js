const objMath = () => {
	// console.log(Math);
	console.log('PI:', Math.PI);
	console.log('Valor absoluto: ', Math.abs(8.8));
	console.log('Valor absoluto sin importar si es negativo: ', Math.abs(-8.8));
	console.log('Redondea hacía arriba:', Math.ceil(8.1));
	console.log('Redondea hacía abajo:', Math.floor(8.8));
	console.log('Redondea al mas cercano:', Math.round(8.5));
	console.log('Raiz cuadrada de un número:', Math.sqrt(5));
	console.log('Potencia:', Math.pow(2, 5));
	console.log('Retorn -1(negativo), (1)positivo:', Math.sign(25));
	console.log('Valor aleatorio:', Math.random());
	console.log('Valor entre n a m:', Math.floor(Math.random() * (20 - 1) + 1));
};

export const math = () => objMath();
