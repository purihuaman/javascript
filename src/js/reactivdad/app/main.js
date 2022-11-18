import { Componente } from './components/Componente';

export const reactividad = () => {
	// todosManual();
	// todosEstado();
	// todosEstadoReactivo();
	// todosEstadoReactivoInmutable();
	// componenteEstado();

	libreriaComponente();
};

// Componente con estado
const libreriaComponente = () => {
	const doc = document;

	const app = new Componente({
		element: '#todo-list',
		data: {
			todoList: [],
		},
		template: function (props) {
			if (props.todoList.length === 0) {
				return `<p><em>Lista sin tareas</em></p>`;
			}

			const todos = props.todoList.map((todo) => `<li>${todo}</li>`).join('');

			return todos;
		},
	});

	// Renderización a la carga
	app.render();

	// Estableciendo valores por defecto al State
	app.setState({
		todoList: ['Tarea 1', 'Tarea 2'],
	});

	doc.addEventListener('submit', (ev) => {
		ev.preventDefault();
		const input = doc.getElementById('todo-input');

		if (!ev.target.matches('#todo-form') || !input) return false;

		// Actualizar el state y UI de forma reactiva
		const lastState = app.getState();
		lastState.todoList.push(input.value);
		app.setState({ todoList: lastState.todoList });

		// Limpiar input y poner el foco
		input.value = '';
		input.focus();
	});
};

// Componente con estado
const componenteEstado = () => {
	const doc = document;

	// El State Global
	const state = {
		todoList: [],
	};

	// Template UI
	const templateUI = () => {
		if (templateUI.data.todoList.length === 0) {
			return `<p><em>Lista sin tareas</em></p>`;
		}

		const todos = templateUI.data.todoList
			.map((todo) => `<li>${todo}</li>`)
			.join('');

		return todos;
	};

	// Agregar State al Template que genera el Componente de UI (State local)
	templateUI.data = {
		todoList: [],
	};

	// Render UI
	const render = () => {
		const list = doc.getElementById('todo-list');

		if (!list) return;

		list.innerHTML = templateUI();

		console.log('Estado global', state);
		console.log('Estado local', templateUI.data);
	};

	// Actualizar el State de forma reactiva
	const setState = (obj) => {
		for (const key in obj) {
			if (templateUI.data.hasOwnProperty(key)) {
				templateUI.data[key] = obj[key];
			}
		}

		render();
	};

	// Obtenemos una copia inmutable del State
	const getState = () => JSON.parse(JSON.stringify(templateUI.data));

	// Renderización a la carga
	render();

	// Estableciendo valores por defecto al State
	setState({
		todoList: ['Tarea 1', 'Tarea 2'],
	});

	doc.addEventListener('submit', (ev) => {
		ev.preventDefault();
		const input = doc.getElementById('todo-input');

		if (!ev.target.matches('#todo-form') || !input) return false;

		// Actualizar el state y UI de forma reactiva
		const lastState = getState();
		lastState.todoList.push(input.value);
		setState({ todoList: lastState.todoList });

		// Limpiar input y poner el foco
		input.value = '';
		input.focus();
	});
};

// Manipulación del DOM con Estado Reactivo
const todosEstadoReactivoInmutable = () => {
	const doc = document;

	// Estado
	const state = {
		todoList: [],
	};

	// Template UI
	const templateUI = () => {
		if (state.todoList.length === 0) {
			return `<p><em>Lista sin tareas</em></p>`;
		}

		const todos = state.todoList.map((todo) => `<li>${todo}</li>`).join('');

		return todos;
	};

	// Render UI
	const render = () => {
		const list = doc.getElementById('todo-list');

		if (!list) return;

		list.innerHTML = templateUI();
	};

	// Actualizar el State de forma reactiva
	const setState = (obj) => {
		for (const key in obj) {
			if (state.hasOwnProperty(key)) {
				state[key] = obj[key];
			}
		}

		render();
	};

	// Obtenemos una copia inmutable del State
	const getState = () => JSON.parse(JSON.stringify(state));

	// Renderización a la carga
	render();

	// Estableciendo valores por defecto al State
	setState({
		todoList: ['Tarea 1', 'Tarea 2'],
	});

	/* 
		Estado mutable: Permite modificar el estado directamente creando una copia del objeto y agregando otro elemento
	*/
	// const items = state.todoList;
	// items.push('Tarea 3');
	// console.log('Estado mutable', state);

	const items = getState();
	items.todoList.push('Tarea 3');
	console.log('Estado inmutable', state);

	doc.addEventListener('submit', (ev) => {
		ev.preventDefault();
		const input = doc.getElementById('todo-input');

		if (!ev.target.matches('#todo-form') || !input) return false;

		// Actualizar el state y UI de forma reactiva
		const lastState = getState();
		lastState.todoList.push(input.value);
		setState({ todoList: lastState.todoList });

		// Limpiar input y poner el foco
		input.value = '';
		input.focus();
	});
};

// Manipulación del DOM con Estado Reactivo
const todosEstadoReactivo = () => {
	const doc = document;

	// Estado
	const state = {
		todoList: [],
	};

	// Template UI
	const templateUI = () => {
		if (state.todoList.length === 0) {
			return `<p><em>Lista sin tareas</em></p>`;
		}

		const todos = state.todoList.map((todo) => `<li>${todo}</li>`).join('');

		return todos;
	};

	// Render UI
	const render = () => {
		const list = doc.getElementById('todo-list');

		if (!list) return;

		list.innerHTML = templateUI();
	};

	// Actualizar el State de forma reactiva
	const setState = (obj) => {
		for (const key in obj) {
			if (state.hasOwnProperty(key)) {
				state[key] = obj[key];
			}
		}

		render();
	};

	render();

	// Estableciendo valores por defecto al State
	setState({
		todoList: ['Tarea 1', 'Tarea 2'],
	});

	/* Estado mutable: Permite modificar el estado directamente creando una copia del objeto y agregando otro elemento */
	const items = state.todoList;
	items.push('Tarea 3');
	console.log('Estado mutable', state);

	doc.addEventListener('submit', (ev) => {
		ev.preventDefault();
		const input = doc.getElementById('todo-input');

		if (!ev.target.matches('#todo-form') || !input) return false;

		// Agregar item el state y UI
		state.todoList.push(input.value);
		render();

		// Limpiar input y poner el foco
		input.value = '';
		input.focus();
	});
};

// Manipulación del DOM con Estado
const todosEstado = () => {
	const doc = document;

	// Estado
	const state = {
		todoList: [],
	};

	// Template UI
	const templateUI = () => {
		if (state.todoList.length === 0) {
			return `<p><em>Lista sin tareas</em></p>`;
		}

		const todos = state.todoList.map((todo) => `<li>${todo}</li>`).join('');

		return todos;
	};

	// Render UI
	const render = () => {
		const list = doc.getElementById('todo-list');

		if (!list) return;

		list.innerHTML = templateUI();
		console.log(state);
	};

	render();

	doc.addEventListener('submit', (ev) => {
		ev.preventDefault();
		const input = doc.getElementById('todo-input');

		if (!ev.target.matches('#todo-form') || !input) return false;

		// Agregar item el state y UI
		state.todoList.push(input.value);
		render();

		// Limpiar input y poner el foco
		input.value = '';
		input.focus();
	});
};

// Manipulación del DOM manual
const todosManual = () => {
	const doc = document;

	const input = doc.getElementById('todo-input');
	const list = doc.getElementById('todo-list');

	doc.addEventListener('submit', (ev) => {
		ev.preventDefault();

		if (!ev.target.matches('#todo-form')) return false;

		// Agregar item a lista
		const item = document.createElement('li');
		item.textContent = input.value;

		list.appendChild(item);

		// Limpiar input y poner el foco
		input.value = '';
		input.focus();
	});
};
