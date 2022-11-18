export default function narrador() {
	const speechSelect = document.getElementById('speach-select');
	const speechText = document.getElementById('speech-text');
	const speechBtn = document.getElementById('speech-btn');

	const speechMessage = new SpeechSynthesisUtterance();

	let voices = [];

	speechSynthesis.addEventListener('voiceschanged', (ev) => {
		if (!speechSelect) return;
		voices = window.speechSynthesis.getVoices();
		const fragment = document.createDocumentFragment();

		voices.forEach((el) => {
			const option = document.createElement('option');
			option.value = el?.name;
			option.textContent = `${el?.name} - ${el?.lang}`;

			fragment.append(option);
		});

		speechSelect.append(fragment);
	});

	addEventListener('change', (ev) => {
		if (ev.target === speechSelect) {
			speechMessage.voice = voices.find(
				(voice) => voice.name === ev.target.value
			);
		}
	});

	addEventListener('click', (ev) => {
		if (ev.target === speechBtn) {
			speechMessage.text = speechText.value;
			speechSynthesis.speak(speechMessage);
		}
	});
}
