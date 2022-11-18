export default function languageDraw() {
	const lottery = document.getElementById('lottery');
	if (!lottery) return;
	const lotteryChilds = [...lottery.children];
	const btnWinner = document.getElementById('winner');

	if (!lottery || !btnWinner) return;

	btnWinner.addEventListener('click', (ev) => {
		const index = randomPosition(lotteryChilds.length - 1);

		alertWinner(lotteryChilds[index].textContent);
	});
}

const randomPosition = (large) => Math.floor(Math.random() * (large - 0) + 0);

const alertWinner = (message) => {
	const container = document.createElement('div');
	const text = document.createElement('p');

	container.classList.add(
		'position-fixed',
		'fixed-top',
		'alert',
		'alert-warning',
		'text-center'
	);

	text.textContent = `El ganador es "${message}"`;

	container.append(text);

	document.body.append(container);

	setTimeout(() => container.remove(), 3000);
};
