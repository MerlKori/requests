
const getEndpointData = endpoint => ({
	getAll: {endpoint},
	create (body) {
		return {
			endpoint,
			options: {
				body: JSON.stringify(body)
			}
		};
	},
	edit (body) {
		return {
			endpoint,
			options: {
				body: JSON.stringify(body)
			}
		};
	},
	remove (body) {
		return {
			endpoint,
			options: {
				body: JSON.stringify(body)
			}
		};
	}
});

export default getEndpointData;
