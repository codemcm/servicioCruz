import ConfigApi from '../config/config';
async function raffleAdd(description, start_data, raffle_date, created_by) {
  const url = ConfigApi.url + 'raffle/';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: description,
        start_data: start_data,
        raffle_date: raffle_date,
        created_by: created_by,
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

export {raffleAdd};
