export default function deviceDetection() {
	const userDevice = document.getElementById('user-device');
	if (!userDevice) return;

	const userAgent = window.navigator.userAgent;

	const isMobile = {
		android: () => userAgent.match(/android/i),
		ios: () => userAgent.match(/iphone|ipad|ipod/i),
		windows: () => userAgent.match(/windows phone/i),
		any: function () {
			return this.android() || this.ios() || this.windows();
		},
	};

	const isDesktop = {
		linux: () => userAgent.match(/linux/i),
		mac: () => userAgent.match(/mac os/i),
		windows: () => userAgent.match(/windows nt/i),
		any: function () {
			return this.linux() || this.mac() || this.windows();
		},
	};

	const isBrowser = {
		chrome: () => userAgent.match(/chrome/i),
		safari: () => userAgent.match(/safari/i),
		firefox: () => userAgent.match(/firefox/i),
		opera: () => userAgent.match(/opera|opera mini/i),
		ie: () => userAgent.match(/msie|iemobile/i),
		edge: () => userAgent.match(/edge/i),
		any: function () {
			return (
				this.chrome() ||
				this.safari() ||
				this.firefox() ||
				this.opera() ||
				this.ie() ||
				this.edge()
			);
		},
	};

	const list = document.createElement('ul');
	const itemAgent = document.createElement('li');
	const itemPlatf = document.createElement('li');
	const itemNav = document.createElement('li');
	const itemContentChrome = document.createElement('p');
	const itemContentFirefox = document.createElement('p');
	const itemContentEdge = document.createElement('p');

	itemAgent.textContent = `User Agent: ${userAgent}`;
	itemPlatf.textContent = `Plataforma: ${
		isMobile.any() ? isMobile.any() : isDesktop.any()
	}`;
	itemNav.textContent = `Navegador: ${isBrowser.any()}`;

	list.append(itemAgent);
	list.append(itemPlatf);
	list.append(itemNav);

	if (isBrowser.chrome()) {
		itemContentChrome.innerHTML = `<mark>Este contenido sólo se ve en Chrome</mark>`;
	}

	if (isBrowser.firefox()) {
		itemContentFirefox.innerHTML = `<mark>Este contenido sólo se ve en Firefox</mark>`;
	}

	if (isBrowser.edge()) {
		itemContentEdge.innerHTML = `<mark>Este contenido sólo se ve en Edge</mark>`;
	}

	list.append(itemContentChrome);
	list.append(itemContentFirefox);
	list.append(itemContentEdge);

	userDevice.append(list);
}
