const validation = () => {
	const formValid = document.getElementById('form-valid');
	const inputs = [...document.querySelectorAll('#form-valid input')];

	if (!formValid || !inputs) return;

	const data = Object.fromEntries(new FormData(formValid));

	inputs.forEach((el) => {
		el.addEventListener('keyup', (ev) => {
			console.log(ev.target.value);

			if (
				!validateEmail(ev.target.value) ||
				!validateEmail(ev.target.value.trim()) ||
				ev.target.value === ''
			) {
				document
					.querySelector('input[name="email"]')
					.classList.remove('success');

				document
					.querySelector('input[name="email"]')
					.nextElementSibling.classList.replace('success', 'error');

				document.querySelector(
					'input[name="email"]'
				).nextElementSibling.textContent = 'Email no valido';
			} else {
				document.querySelector('input[name="email"]').classList.add('success');

				document
					.querySelector('input[name="email"]')
					.nextElementSibling.classList.add('success');

				document.querySelector(
					'input[name="email"]'
				).nextElementSibling.textContent = 'Email valido';
			}
		});
	});

	formValid.addEventListener('submit', (ev) => {
		ev.preventDefault();

		/* 
			name
			email
			affair
			comment
		*/
	});
};

const validateEmail = (email) => {
	const emailRegex =
		/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (emailRegex.test(email)) return true;
	else return false;

	// if (emailRegex.test(email)) console.log('email válido');
	// else console.log('email incorrecto');
};

export default validation;
