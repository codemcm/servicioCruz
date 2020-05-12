import ConfigApi from '../config/config';
const axios = require('axios');
function lotListAll() {
  return axios({
    method: 'GET',
    url: ConfigApi.url + 'raffle/all/',
    responseType: 'text',
  }).then(function(response) {
    //console.log(response.data);
    return response.data;
  });
}

export {lotListAll};
