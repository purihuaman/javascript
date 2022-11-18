const consoles = () => {
	console.log(console);
	console.warn('Advertencia');
	console.error('Error');
	console.info('Info');
	console.log(document.body);
	console.dir(document.body);
};

export const objConsole = () => consoles();
