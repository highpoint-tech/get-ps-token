const request = require('request-promise');

const getToken = async ({
  PS_HOSTNAME = '',
  PS_ENVIRONMENT = '',
  PS_USERNAME = '',
  PS_PASSWORD = '',
  HTTP_USERNAME = '',
  HTTP_PASSWORD = ''
}) => {
  const jar = request.jar();

  try {
    await request
      .post({
        uri: `https://${PS_HOSTNAME}/psp/${PS_ENVIRONMENT}/?cmd=login`,
        headers: { 'User-Agent': 'request' },
        jar,
        resolveWithFullResponse: true,
        simple: false
      })
      .form({ userid: PS_USERNAME, pwd: PS_PASSWORD })
      .auth(HTTP_USERNAME, HTTP_PASSWORD, false)
      .then(response => {
        if (response.statusCode >= 400) {
          return Promise.reject(new Error(response.message));
        }
      });
  } catch ({ message }) {
    console.error(message);
  }

  return jar;
};

module.exports = getToken;
