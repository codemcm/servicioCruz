import ConfigApi from '../config/config';
async function clientAdd(name, last_name, cell, observations) {
    const url = ConfigApi.url + "client/";
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": name,
                "last_name": last_name,
                "cell": cell,
                "observations": observations
            })
        });
        const dataJson = await response.json();
        if (dataJson.status == "successful") {
            console.log(" cool" + dataJson);
            return dataJson.message;
        }
        else {
            return JSON.stringify(dataJson.message.code + dataJson.message.detail);
        }
    }
    catch (error) {
        console.log(" Error message" + error);
        return "Sin acceso al servidor, contacte al administrador";
    }
}

export { clientAdd }