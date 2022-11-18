export const Componente = (function () {
	// Creando el construtor del componente
	const Constructor = function (props) {
		this.element = props.element;
		this.data = props.data;
		this.template = props.template;
	};

	// Agregamos los métodos al prototipo del constructor del componente

	// Render UI
	Constructor.prototype.render = function () {
		const element = document.querySelector(this.element);

		if (!element) return;

		element.innerHTML = this.template(this.data);

		console.log(this.data);
	};

	// Actualizar el State de forma reactiva
	Constructor.prototype.setState = function (obj) {
		for (const key in obj) {
			if (this.data.hasOwnProperty(key)) {
				this.data[key] = obj[key];
			}
		}

		this.render();
	};

	// Obtener una copia inmutable de State
	Constructor.prototype.getState = function () {
		return JSON.parse(JSON.stringify(this.data));
	};

	return Constructor;
})();
