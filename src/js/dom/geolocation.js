export default function geolocationDetection() {
	const geolocation = document.getElementById('geolocation');

	if (!geolocation) return;

	const options = {
		enableHighAccuracy: true,
		timeout: 3000,
		maximumAge: 0,
	};

	const success = (position) => {
		const { latitude, longitude, accuracy } = position.coords;

		// console.log(position.coords);
		// console.log(latitude, longitude, accuracy);

		const { paragraph, list, linkMap } = showGeolocation(
			latitude,
			longitude,
			accuracy
		);

		geolocation.append(paragraph);
		geolocation.append(list);
		geolocation.append(linkMap);
	};

	const errors = (error) => {
		const paragraph = document.createElement('p');
		paragraph.innerHTML = `<mark>Error ${error.code}: ${error.message}</mark>`;

		geolocation.append(paragraph);
	};

	navigator.geolocation.getCurrentPosition(success, errors, options);
}

const showGeolocation = (latitude, longitude, accuracy) => {
	const paragraph = document.createElement('p');
	const linkMap = document.createElement('a');
	const list = document.createElement('ul');

	const itemLatitude = document.createElement('li');
	const itemlongitude = document.createElement('li');
	const itemAccuracy = document.createElement('li');

	paragraph.textContent = 'Tu posición actual es:';

	itemLatitude.innerHTML = `Latitud: <b>${latitude}</b>`;
	itemlongitude.innerHTML = `Longitud: <b>${longitude}</b>`;
	itemAccuracy.innerHTML = `Precisión: <b>${Math.round(accuracy)}</b> metros`;

	list.append(itemLatitude);
	list.append(itemlongitude);
	list.append(itemAccuracy);

	linkMap.textContent = 'Ver en Google Maps';
	linkMap.href = `https://www.google.com/maps/@${latitude},${longitude},20z`;
	linkMap.setAttribute('target', '_blank');
	linkMap.setAttribute('rel', 'noopener');

	return { paragraph, list, linkMap };
};
