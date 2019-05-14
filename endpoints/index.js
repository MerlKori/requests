import endpoints from './endpoints.js';
import createEndpoints from './endpoints-template.js';

export default {
	test: createEndpoints(endpoints.testEndpoint)
};
