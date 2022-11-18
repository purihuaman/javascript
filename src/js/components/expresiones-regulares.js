const cadena =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt animi magnam quod rem sit! Molestiae sed sit eveniet quae saepe officia iste minus modi! Non perspiciatis reprehenderit voluptate? Libero lorem.';

const expresiones = () => {
	// const regex = new RegExp('lorem', 'ig');
	// const regex2 = /lorem{1,2}/gi;

	// console.log(regex2.test(cadena));
	// console.log(regex2.exec(cadena));

	(function () {
		console.log('funcion auto ejecutable clasica');
	})();

	(function (d, w, c) {
		console.log({ d, w, c });

		console.log('funcion auto ejecutable');
	})(document, window, console);

	(function (d, w, c) {
		console.log({ d, w, c });

		console.log('funcion auto ejecutable Crockford con doble cierre de ()');
	})(document, window, console);
	!(function (d, w, c) {
		console.log({ d, w, c });

		console.log('funcion auto ejecutable facebook');
	})(document, window, console);
};

export const expresionesRegulares = () => expresiones();
