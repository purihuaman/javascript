const app = document.getElementById('app');

export function mainPromise() {
	app.innerHTML = '<button class="boton">Ejecutar</button>';

	const button = document.querySelector('.boton');
	if (!button) return;

	button.addEventListener('click', (ev) => {
		getData()
			.then((autorización) => autorización && showData())
			.then((user) => setText(user.name))
			.catch((ex) => setText(ex));
	});
}

const setText = (data) => {
	const myContent = document.createElement('div');

	myContent.textContent = data;

	app.append(myContent);
};

const getData = function () {
	return new Promise(function (resolve, reject) {
		setText('Solicitando autorización');

		setTimeout(() => {
			resolve(true);
		}, 2_000);
	});
};

const showData = () => {
	return new Promise((resolve, reject) => {
		setText('Esperando a mostrar la información');

		setTimeout(() => {
			resolve({ name: 'Puri' });
		}, 2_000);
	});
};
