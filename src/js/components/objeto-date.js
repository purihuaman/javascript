const dates = () => {
	console.log(Date());

	const fecha = new Date();

	console.log('Fecha:', fecha);
	console.log('Día del mes:', fecha.getDate());
	console.log('Mes:', fecha.getMonth());
	console.log('Día semana:', fecha.getDay());
	console.log('Año:', fecha.getFullYear());
	console.log('Hora:', fecha.getHours());
	console.log('Minutos:', fecha.getMinutes());
	console.log('Segundos:', fecha.getSeconds());
	console.log('Milisegundos:', fecha.getMilliseconds());

	console.log('Fecha =', fecha.toString());
	console.log('Fecha =', fecha.toDateString());
	console.log('Fecha y hora =', fecha.toLocaleString());
	console.log('Fecha =', fecha.toLocaleDateString());
	console.log('Hora =', fecha.toLocaleTimeString());
	console.log('Uso Horario =', fecha.getTimezoneOffset());
	console.log('Fecha 0 =', fecha.getUTCDate());
	console.log('Hora 0 =', fecha.getUTCHours());

	console.log('-- Time Stand --');
	console.log(Date.now());

	console.log('-- Cumple --');
	const cumple = new Date(1998, 11, 13);

	console.log(cumple);
};

export const objDate = () => dates();
