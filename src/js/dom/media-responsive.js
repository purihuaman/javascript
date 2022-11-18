const myVideo = `<iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

const myMapa =
	'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62450.22922799221!2d-77.10897679177806!3d-11.964854079540205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce21b6748c45%3A0xece5fa25a5e8c4d5!2sLos%20Olivos!5e0!3m2!1ses-419!2spe!4v1659973299253!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

const mediaResponsive = () => {
	const videoContainer = document.getElementById('video');
	const mapContainer = document.getElementById('map');
	const query = '(min-width:800px)';

	if (!videoContainer || !mapContainer) return;
	/* 
	addEventListener('resize', (ev) => {
		const width = ev.target.innerWidth;
		videoContainer.textContent = '';
		mapContainer.textContent = '';

		if (width < 800) {
			const { linkMap, linkVideo } = getLinks();
			videoContainer.append(linkVideo);
			mapContainer.append(linkMap);
		} else {
			videoContainer.innerHTML = myVideo;
			mapContainer.innerHTML = myMapa;
		}
	});
 */
	const breakpoint = window.matchMedia(query);

	const responsive = (ev) => {
		videoContainer.textContent = '';
		mapContainer.textContent = '';
		// console.log(ev);

		if (!ev.matches) {
			const { linkMap, linkVideo } = getLinks();
			videoContainer.append(linkVideo);
			mapContainer.append(linkMap);
		} else {
			videoContainer.innerHTML = myVideo;
			mapContainer.innerHTML = myMapa;
		}
	};

	// breakpoint.addListener(responsive);
	breakpoint.addEventListener('change', responsive);
	responsive(query);
};

const getLinks = () => {
	const urlVideo = 'https://youtu.be/16geDhp5Xmg';
	const urlMap = 'https://goo.gl/maps/U3v1NQcMJQrgatE2A';

	const linkVideo = document.createElement('a');
	const linkMap = document.createElement('a');

	linkVideo.href = urlVideo;
	linkMap.href = urlMap;

	linkVideo.setAttribute('target', '_blank');
	linkMap.setAttribute('target', '_blank');

	linkVideo.setAttribute('rel', 'noopener');
	linkMap.setAttribute('rel', 'noopener');

	linkVideo.textContent = 'Ver video';
	linkMap.textContent = 'Ver mapa';

	return { linkVideo, linkMap };
};

export default mediaResponsive;
