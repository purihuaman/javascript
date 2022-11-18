import { getAxiosHttp } from './getAxiosHttp';
import { getAllAxios } from './read';
import { showMessage } from './showMessage';

const API_URL = 'http://localhost:5000/saints';

const crudAxios = () => {
	getAllAxios();

	const formSaints = document.getElementById('saints');
	if (!formSaints) return;

	formSaints.addEventListener('submit', (ev) => {
		ev.preventDefault();

		const data = Object.fromEntries(new FormData(formSaints));

		const options = {
			data: JSON.stringify(data),
		};

		if (data.id === '') {
			// POST
			options.method = 'POST';

			getAxiosHttp(options);
			showMessage('¡Agregado correctamente!', 'green-100', 'text-green-800');
			formSaints.name.focus();
			formSaints.reset();
			getAllAxios();
		} else {
			// PUT
			options.method = 'PUT';
			options.url = `${API_URL}/${data.id}`;
			getAxiosHttp(options);
			getAllAxios();

			showMessage('Modificado correctamente!', 'blue-100', 'text-blue-800');
			formSaints.name.focus();
			formSaints.id.value = '';
			formSaints.querySelector('[type="submit"]').value = 'Send';
		}

		formSaints.reset();
	});
};

addEventListener('click', (ev) => {
	const formSaints = document.getElementById('saints');

	if (ev.target.matches('[data-edit]')) {
		formSaints.querySelector('h2').textContent = 'Editar Santo';
		formSaints.id.value = ev.target.dataset.edit;
		formSaints.name.value = ev.target.dataset.name;
		formSaints.constelation.value = ev.target.dataset.constelation;

		formSaints.querySelector('[type="submit"]').value = 'Save';
	}

	if (ev.target.matches('[data-delete]')) {
		const target = ev.target;
		const btnId = target.dataset.delete;
		const rowId = target.parentNode.parentNode.dataset.id;

		if (btnId !== rowId) return;

		if (confirm('¿Desea eliminar el resitro?')) {
			// DELETE
			const options = {
				method: 'delete',
				url: `${API_URL}/${rowId}`,
			};

			getAxiosHttp(options);

			showMessage('Eliminado correctamente!', 'red-200', 'text-red-500');
			target.parentNode.parentNode.remove();
		}
	}
});

export default crudAxios;
