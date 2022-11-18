import loading from '../dom/loading';

const URL_ARTIST = 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=';
const URL_SONG = 'https://api.lyrics.ovh/v1';

const music = () => {
	const searchForm = document.getElementById('song-search');
	const songContent = document.getElementById('music-content');

	if (!searchForm || !songContent) return;

	searchForm.addEventListener('submit', async (ev) => {
		ev.preventDefault();
		const dataToSearch = Object.fromEntries(new FormData(searchForm));

		getData(dataToSearch, songContent);
	});
};

const getData = async (dataToSearch, songContent) => {
	songContent.textContent = '';
	try {
		// if (songContent.querySelector('.loading')) {
		// 	songContent.removeChild(songContent.querySelector('.loading'));
		// }
		loading(songContent, 'Cargando');
		const { artist, song } = dataToSearch;

		const ARTIST_API = fetch(`${URL_ARTIST}${artist.trim().toLowerCase()}`);
		const SONG_API = fetch(
			`${URL_SONG}/${artist.trim().toLowerCase()}/${song.toLowerCase()}`
		);

		const [artistRes, songRes] = await Promise.all([SONG_API, ARTIST_API]);

		const artistData = await artistRes.json();
		const songData = await songRes.json();

		artistData.artists === null
			? showArtist(
					songContent,
					`<h2>No existe el intérprete <mark>${artist}</mark></h2>`
			  )
			: showArtist(songContent, artistData.artists);

		songData.error
			? showSong(
					songContent,
					`<h2>No existe la canción <mark>${song}</mark></h2>`
			  )
			: showSong(songContent, songData.lyrics);
	} catch (ex) {
		showError(ex, songContent);
	}
};

const showArtist = (songContent, info) => {
	const artistContainer = document.getElementById('music-artist');
	const fragment = document.createDocumentFragment();
	const templateArtist = document.getElementById('template-artist').content;

	if (!songContent || !info || !artistContainer || !templateArtist || !fragment)
		return;
	const artist = info[0];

	templateArtist.querySelector('[data-name]').textContent = artist.strArtist;
	templateArtist.querySelector('[data-image]').src = artist.strArtistThumb;
	templateArtist.querySelector(
		'[]'
	).textContent = `${artist.intBornYear} - ${artist.intDiedYear}`;
	templateArtist.querySelector('[data-country]').textContent =
		artist.strCountry;
	templateArtist.querySelector(
		'[]'
	).textContent = `${artist.strGenre} - ${artist.strStyle}`;
	templateArtist.querySelector('[data-biography]').textContent =
		artist.strBiographyEN;

	const templateClone = templateArtist.cloneNode(true);
	fragment.append(templateClone);
	artistContainer.append(fragment);
	songContent.append(artistContainer);
};

const showSong = (songContent, info) => {
	const songContainer = document.getElementById('music-song');
	if (!songContent || !info || !songContainer) return;

	console.log(info);
};

const showError = (error, songContent) => {
	const content = document.createElement('div');
	const texts = document.createElement('p');

	if (!error || !songContent || !texts || !content) return;
	songContent.textContent = '';

	const message = error.statusText || 'Ocurrió un error';
	content.setAttribute('data-error', 'error');
	texts.textContent = `Error ${error.status}: ${message}`;
	content.append(texts);

	if (songContent.querySelector('[data-error]')) {
		songContent.removeChild(songContent.querySelector('[data-error]'));
	}

	songContent.append(content);
};

export default music;
