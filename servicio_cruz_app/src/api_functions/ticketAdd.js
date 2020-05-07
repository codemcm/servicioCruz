import ConfigApi from '../config/config';
async function ticketAdd(raffle_id, client_id, user_id) {
  const url = ConfigApi.url + 'ticket/';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raffle_id: raffle_id,
        client_id: client_id,
        user_id: user_id,
      }),
    });
    const dataJson = await response.json();
    if (dataJson.status == 'successful') {
      console.log(' cool' + dataJson);
      return dataJson.message;
    } else {
      return JSON.stringify(dataJson.message.code + dataJson.message.detail);
    }
  } catch (error) {
    console.log(' Error message' + error);
    return 'Sin acceso al servidor, contacte al administrador';
  }
}

export {ticketAdd};
