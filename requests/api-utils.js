function addQueryParams (baseUrl, endpoint, params) {
	const url = new URL(`${baseUrl}${endpoint}`);
	Object.keys(params).forEach(key => {
		url.searchParams.append(key, params[key]);
	});
	return url.href;
}

export default {
	addQueryParams
};
