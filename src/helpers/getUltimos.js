


export const getUltimos = async () => {

    const response = await  fetch('https://ticket-server-production-1fc8.up.railway.app//ultimos');

    const data = await response.json();


    return data.ultimos;
}