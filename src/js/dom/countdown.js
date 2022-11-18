const formatDate = (date) => ('0' + Math.floor(date)).slice(-2);

const countdown = () => {
	const countdown = document.getElementById('countdown');

	if (!countdown) return;

	let timeID = null;
	const birthday = 'Aug 5, 2022 15:59:00';
	const dateBirthday = new Date(birthday).getTime();

	timeID = setInterval(() => {
		const now = new Date().getTime();
		const limiteTime = dateBirthday - now;

		const days = Math.floor(limiteTime / (1_000 * 60 * 60 * 24));
		const hours = formatDate(
			(limiteTime % (1_000 * 60 * 60 * 24)) / (1_000 * 60 * 60)
		);
		const minutes = formatDate((limiteTime % (1_000 * 60 * 60)) / (1_000 * 60));
		const seconds = formatDate((limiteTime % (1_000 * 60)) / 1_000);

		const maxDate = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
		countdown.textContent = maxDate;

		if (limiteTime <= 0) {
			countdown.textContent = '🎊🎊 Fecha cumplida 🎉🎉';
			clearInterval(timeID);
		}
	}, 1000);
};

export { countdown };
