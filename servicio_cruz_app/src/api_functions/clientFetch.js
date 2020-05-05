import ConfigApi from '../config/config';
function clientFetch() {
    const URL = ConfigApi.url + "client/all/"
    return fetch(URL)
        .then((response) => response.json())
        .then((responseJsona) => {
            return responseJsona;


        })
        .catch((error) => {

            alert("Mensaje de error" + error);
        });
}

export { clientFetch }