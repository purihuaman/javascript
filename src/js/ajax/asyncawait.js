const app = document.getElementById('app');

export function mainAsyncAwait() {
	let user = null;
	app.innerHTML = '<button class="boton">Ejecutar</button>';

	const button = document.querySelector('.boton');
	if (!button) return;

	button.addEventListener('click', async (ev) => {
		const authorization = await getData();
		const resp = authorization && (user = await showData());

		setText(resp.name);
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
