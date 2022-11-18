export default function testerForm() {
	const formTester = document.getElementById('form-tester');

	if (!formTester) return;

	formTester.addEventListener('submit', (ev) => {
		ev.preventDefault();

		const data = Object.fromEntries(new FormData(formTester));

		if (!data) throw new Error('No hay datos');

		const windowOpen = window.open(
			data.url,
			'_blank',
			`innerWidth=${data.width}, innerHeight=${data.height}`
		);
		window.innerWidth = data.width;

		addEventListener('click', (ev) => {
			if (ev.target.id !== 'close-window') return;

			windowOpen.close();
			formTester.reset();
		});
	});
}
