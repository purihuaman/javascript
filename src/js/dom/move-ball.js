export const moveBall = () => {
	const balls = document.getElementById('balls');
	const ballChild = document.querySelector('#balls div');

	if (!balls || !ballChild) return;

	let x = 0;
	let y = 0;

	addEventListener('keydown', (ev) => {
		const limitBallContainert = balls.getBoundingClientRect();
		const limitBallChild = ballChild.getBoundingClientRect();

		if (
			ev.key !== 'ArrowRight' &&
			ev.key !== 'ArrowLeft' &&
			ev.key !== 'ArrowUp' &&
			ev.key !== 'ArrowDown'
		)
			return;

		switch (ev.key) {
			case 'ArrowRight':
				document.body.style.overflow = 'auto';
				if (limitBallChild.right < limitBallContainert.right) {
					x++;
					ev.preventDefault();
				}
				break;
			case 'ArrowLeft':
				document.body.style.overflow = 'auto';
				if (limitBallChild.left > limitBallContainert.left) {
					x--;
					ev.preventDefault();
				}
				break;
			case 'ArrowUp':
				document.body.style.overflow = 'hidden';
				if (limitBallChild.top > limitBallContainert.top) {
					y--;
					ev.preventDefault();
				}
				break;
			case 'ArrowDown':
				document.body.style.overflow = 'hidden';
				if (limitBallChild.bottom < limitBallContainert.bottom) {
					y++;
					ev.preventDefault();
				}
				break;
		}

		ballChild.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
	});
};
