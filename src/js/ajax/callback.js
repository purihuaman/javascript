const app = document.getElementById('app');

export function mainCallback() {
	app.innerHTML = '<button class="boton">Ejecutar</button>';

	const button = document.querySelector('.boton');
	if (!button) return;

	button.addEventListener('click', (ev) => {
		getData((authorization) => {
			if (authorization)
				showData((user) => {
					setText(user.name);
				});
		});
	});
}

const setText = (data) => {
	const myContent = document.createElement('div');

	myContent.textContent = data;

	app.append(myContent);
};

const getData = (callback) => {
	setText('Solicitando autorización');

	setTimeout(() => {
		callback(true);
	}, 2_000);
};

const showData = (cb) => {
	setText('Esperando a mostrar la información');

	setTimeout(() => {
		cb({ name: 'Puri' });
	}, 2_000);
};
