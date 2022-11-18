export default function cameraDetection() {
	const webcam = document.getElementById('webcam');

	if (!webcam) return;

	if (navigator.mediaDevices.getUserMedia) {
		const video = document.createElement('video');
		const audio = document.createElement('audio');

		navigator.mediaDevices
			.getUserMedia({ audio: true, video: true })
			.then((stream) => {
				console.log(stream);
				video.srcObject = stream;
				audio.srcObject = stream;

				webcam.append(audio);
				webcam.append(video);

				video.play();
				audio.play();
			})
			.catch((ex) => {
				const message = document.createElement('p');
				message.innerHTML = `¡Sucedió el siguiente error!: <mark>${ex}</mark>`;

				webcam.append(message);
				console.log(ex);
			});
	}
}
