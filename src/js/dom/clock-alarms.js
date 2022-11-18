let hour = '';
let timeID = null;

/* eslint-disable no-useless-return */
const clockAlarms = () => {
	const alarms = document.getElementById('alarms');
	if (!alarms) return;

	document.addEventListener('click', (ev) => {
		if (
			ev.target.dataset.startClock !== 'start-clock' &&
			ev.target.dataset.stopClock !== 'stop-clock' &&
			ev.target.dataset.startAlarm !== 'start-alarm' &&
			ev.target.dataset.stopAlarm !== 'stop-alarm'
		)
			return;

		/* NOTE:-> Clock */
		if (ev.target.dataset.startClock === 'start-clock') {
			ev.target.classList.add('disabled');
			alarms.classList.remove('d-none');

			timeID = setInterval(() => {
				hour = new Date().toLocaleTimeString();
				alarms.textContent = hour;
			}, 1000);
		}

		if (ev.target.dataset.stopClock === 'stop-clock') {
			alarms.classList.add('d-none');
			clearInterval(timeID);
			document.querySelector('[data-start-clock]').classList.remove('disabled');
		}

		/* NOTE:-> Alarm */
		const music = '/assets/audio/TANTA SOLEDAD HAY EN MI VIDA.mp3';
		const audio = document.createElement('audio');
		audio.src = music;

		if (ev.target.dataset.startAlarm === 'start-alarm') {
			alarms.textContent = '';
			ev.target.classList.add('disabled');
			alarms.classList.remove('d-none');
			alarms.append(audio);
			audio.setAttribute('controls', true);

			timeID = setInterval(() => audio.play(), 100);
		}

		if (ev.target.dataset.stopAlarm === 'stop-alarm') {
			alarms.classList.add('d-none');
			document.querySelector('[data-start-alarm]').classList.remove('disabled');
			clearInterval(timeID);
			document.querySelector('audio').pause();
			document.querySelector('audio').remove();
		}
	});
};

export { clockAlarms };
