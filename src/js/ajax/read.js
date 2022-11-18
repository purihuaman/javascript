import { getAxiosHttp } from './getAxiosHttp';
import { getFetchHttp } from './getFetchHttp';
import getData from './getHttp';
import showErrors from './showError';
import showSaints from './showSaint';

const API_URL = 'http://localhost:5000/saints';

const getAllAxios = async () => {
	const { result, error } = await getAxiosHttp();

	result.length >= 1 ? showSaints(result) : showErrors(error);
};

const getAllFetch = async () => {
	const { error, result } = await getFetchHttp(API_URL, {});

	result.length >= 1 ? showSaints(result) : showErrors(error);
};

const getAllHttp = () => {
	getData({
		endpoint: API_URL,
		success: (resp) => showSaints(resp),
		errors: (ex) => showErrors(ex),
	});
};

export { getAllFetch, getAllHttp, getAllAxios };
