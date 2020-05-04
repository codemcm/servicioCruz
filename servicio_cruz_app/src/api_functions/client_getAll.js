import ConfigApi from '../config/config';
const axios = require('axios');
function client_getAll() {
    return axios({
        method: 'GET',
        url: ConfigApi.url + "client/all/",
        responseType: 'text'
    })
        .then(function (response) {
            console.log(response.data);
            return response;
        });
}

export { client_getAll }