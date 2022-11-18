const speak = () => {
	const text =
		'Soy Alison (mustato) Pudihuamán Pudihuamán, me gusta jugar a cada rato.';

	speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};

export const speaks = () => speak();
