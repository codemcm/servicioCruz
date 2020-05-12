import ConfigApi from '../config/config';
const axios = require('axios');
function clientListAll() {
  return axios({
    method: 'GET',
    url: ConfigApi.url + 'client/all/',
    responseType: 'text',
  }).then(function(response) {
    return response.data;
  });
}

export {clientListAll};
