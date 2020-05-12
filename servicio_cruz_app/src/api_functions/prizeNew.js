import ConfigApi from '../config/config';
async function prizeNew(product, raffle_id, user) {
  const url = ConfigApi.url + 'prize/';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: product,
        raffle_id: raffle_id,
        created_by: user,
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

export {prizeNew};
