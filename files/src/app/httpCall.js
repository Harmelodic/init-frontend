export async function httpCall(method, url, body) {
	const request = {};
	request.method = method.toUpperCase();

	request.headers = new Headers();
	request.headers.append('Content-Type', 'application/json');

	if (!(request.method === 'GET' || request.method === 'HEAD')) {
		// To work with the Fetch API, the body needs to be stringified first.
		request.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(url, request);
		return response;
	} catch (error) {
		console.log(`Error occurred in completing ${request.method} request:`);
		console.log(`${url} \n ${error}`);
		throw error;
	}
};
