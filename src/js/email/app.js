import { form } from './Form';

export function appForm() {
	const app = document.getElementById('app');
	app.innerHTML = form();

	getFormData();
}

const data = {
	email: '',
	subject: '',
	message: '',
};

const getFormData = async () => {
	// Obteniendo los campos del form
	const formHtml = document.getElementById('form');
	if (!formHtml) return;

	const sons = [...formHtml.querySelectorAll('.form__input')];

	formHtml.addEventListener('submit', sendEmail);

	sons.forEach((son) => {
		son.addEventListener('input', (ev) => {
			let value = ev.target.value.trim();
			data[ev.target.name] = value;
			checkEmail();

			if (value === '' && ev.target.name !== 'cc') {
				checkEmail();
				showAlert(
					son,
					`❌ El campo "${son.name}" es obligatorio`,
					'alert-error'
				);
				return;
			}

			if (son.name.trim() === 'email' && !validEmail(value)) {
				checkEmail();
				showAlert(son, `❌ El campo "${son.name}" no es valido`, 'alert-error');
				return;
			}
			cleanAlert(son);
		});
	});

	resetButton(formHtml);
};

const showAlert = (element, message, classe) => {
	cleanAlert(element);

	const text = document.createElement('p');
	const parent = document.createElement('small');

	text.textContent = message;
	parent.appendChild(text);

	parent.classList.add('alert', classe);

	if (!element.nextElementSibling) {
		element.after(parent);
	}
};

const cleanAlert = (element) => {
	if (element.nextElementSibling) {
		element.nextElementSibling.remove();
	}
};

const validEmail = (email) => {
	const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	const result = regex.test(email);
	checkEmail();
	return result;
};

const checkEmail = () => {
	const button = document.querySelector('button[type="submit"]');

	if (!Object.values(data).includes('')) {
		button.classList.remove('disabled');
	} else {
		button.classList.add('disabled');
	}
};

const resetButton = (formHtml) => {
	if (!formHtml) return;
	const button = formHtml.querySelector('button[type="reset"]');
	if (!button) return;

	button.addEventListener('click', (ev) => {
		ev.preventDefault();
		const confirm = window.confirm('¿Estás seguro se limpiar los campos?');

		if (confirm) {
			resetData();
			formHtml.reset();
		}
	});
};

const resetData = () => {
	for (const key in data) {
		data[key] = '';
	}
	validEmail(data);
};

const sendEmail = (ev) => {
	ev.preventDefault();
	const form = ev.target;
	const loading = form.nextElementSibling;

	loading.classList.remove('hidden');

	setTimeout(() => {
		loading.classList.add('hidden');
		showAlert(form, '✅ Mensaje enviado correctamente', 'alert-success');

		setTimeout(() => {
			form.nextElementSibling.remove();
		}, 3_000);

		form.reset();
		resetData();
	}, 3_000);
};

// ✅
