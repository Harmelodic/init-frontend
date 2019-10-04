import Actions from './Actions';

// eslint-disable-next-line no-unused-vars
const httpCall = (method, url, body) => {
  const request = {};
  request.method = method.toUpperCase();

  request.headers = new Headers();
  request.headers.append('Content-Type', 'application/json');

  if (!(request.method === 'GET' || request.method === 'HEAD')) {
    // To work with the Fetch API, the body needs to be stringified first.
    request.body = JSON.stringify(body);
  }

  return fetch(url, request)
      .catch((error) => {
        console.log(`Error occurred in completing ${request.method} request:`);
        console.log(`${url} \n ${error}`);
      })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          throw response;
        }
      });
};

export default class Middleware {
  // Insert Middleware functions

  static fetchTitle() {
    return (dispatch) => {
      httpCall('GET', '/api/')
          .then((response) => {
            response.json()
                .then((data) => {
                  dispatch(Actions.setTitle(data));
                })
                .catch(() => {
                  dispatch(Actions.setTitle('Hello World!'));
                });
            // Any 2xx response
          })
          .catch((response) => {
            // Any non-2xx response
            dispatch(Actions.setTitle('Hello World!'));
          });
    };
  }
}
