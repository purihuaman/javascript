export function holamundo() {
	alert('Hola mundo');
}

const saludar = (ev, nombre = 'Anonimo') => {
	console.log(nombre);
	console.log(ev);
	console.log(event);
};

const btnSemantico = document.getElementById('btn-semantico');
const btnRemoveEvent = document.getElementById('remove-event');

const helloWorld = () => {
	// alert('Hello world');
	// console.log(event);

	// btnSemantico.addEventListener('click', holamundo);

	btnSemantico.addEventListener('click', (ev) => {
		console.log(ev);
		console.log(ev.type);
		console.log(ev.target);
		btnSemantico.textContent = 'addEventListener';
	});

	btnSemantico.addEventListener('click', (ev) => saludar(ev, 'pedro'));

	const removeBtn = btnRemoveEvent.addEventListener('dblclick', (ev) => {
		console.log('Doble click');
		btnRemoveEvent.disabled = true;
	});

	btnRemoveEvent.removeEventListener('dblclick', removeBtn, true);
};

function flujoEventos(ev) {
	// console.log(`click de ${this.id}, el click lo origino ${ev.target.id}`);
	console.log(`click de ${this}, el click lo origino ${ev.target.id}`);
	ev.stopPropagation();
}

const burbujeo = () => {
	const burbugeoSection = document.querySelector('.burbugeo');
	const burbugeoChild = document.querySelectorAll('.burbugeo div');

	burbugeoChild.forEach((el) => {
		/* NOTE:-> Fase de burbuja */

		// el.addEventListener('click', flujoEventos);

		/* NOTE:-> Fase de captura */

		// el.addEventListener('click', flujoEventos, true);

		el.addEventListener('click', flujoEventos, {
			capture: false, // En true cambia el orden burbujeo
			once: false, // En true se ejecuta una vez, en false en varias
		});
	});
};

const stopPropagation = () => {
	const linkEvent = document.querySelector('.burbugeo a');

	linkEvent.addEventListener('click', (ev) => {
		alert('hello');
		ev.preventDefault();
	});
};

const delegacionEventos = () => {
	const burbugeoSection = document.querySelector('.burbugeo');
	const burbugeoChild = document.querySelectorAll('.burbugeo div');

	document.addEventListener('click', (ev) => {
		console.log('Click en', ev.target);

		if (ev.target.matches('.burbugeo div')) {
			flujoEventos(ev);
		}

		if (ev.target.matches('.burbugeo a')) {
			alert('Soy un link');
			ev.preventDefault();
		}
	});
};

const bom = () => {
	const bomCard = document.getElementById('bomCard');

	window.addEventListener('resize', (ev) => {
		console.clear();
		console.log('innerWidth:', window.innerWidth);
		console.log('innerHeight:', window.innerHeight);
		console.log('outerWidth:', window.outerWidth);
		console.log('outerHeight:', window.outerHeight);

		console.log(ev);
	});

	addEventListener('scroll', (ev) => {
		console.clear();
		console.log('scrollX:', window.scrollX);
		console.log('scrollY:', window.scrollY);
		console.log(ev);
	});

	window.addEventListener('load', (ev) => {
		console.clear();
		console.log('screenX:', window.screenX);
		console.log('screenY:', window.screenY);
		console.log(ev);
	});

	window.addEventListener('DOMContentLoaded', (ev) => {
		console.clear();
		console.log('screenX:', window.screenX);
		console.log('screenY:', window.screenY);
		console.log(ev);
	});
};

const urlHistoryNavegator = () => {
	// console.log('URL', window.location);

	// console.log('HISTORIAL', window.history);
	// console.log('HISTORIAL ATRAS', window.history.back());
	// console.log('HISTORIAL', window.history.forward(2));
	// console.log('HISTORIAL IR A', window.history.go(-1));
	// console.log('HISTORIAL IR A', window.history.go(1));

	console.log('NAVEGADOR', window.navigator);
};

const evento = () => {
	// btnSemantico.onclick = helloWorld;

	// helloWorld();
	// burbujeo();
	// stopPropagation();
	// delegacionEventos();
	// bom();
	urlHistoryNavegator();
};

export const events = () => evento();
