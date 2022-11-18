export default function internetDetection() {
	const detection = document.getElementById('detection');

	if (!detection) return;

	addEventListener('online', (ev) => alertMessage('Conectado', 'success'));
	addEventListener('offline', (ev) => alertMessage('Desconectado', 'danger'));

	if (navigator.onLine) alertMessage('Conectado', 'success');
	else alertMessage('Desconectado', 'danger');
}

const alertMessage = (message, bgColor) => {
	const alert = document.createElement('div');

	alert.textContent = message;
	alert.classList.add(
		'position-fixed',
		'fixed-top',
		'text-center',
		'alert',
		`alert-${bgColor}`
	);

	document.body.append(alert);

	setTimeout(() => alert.remove(), 3_000);
};
