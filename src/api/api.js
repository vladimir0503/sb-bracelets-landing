const urlDb = 'https://engraving-db-13cea-default-rtdb.firebaseio.com/catalog';
const botToken = '5728431671:AAGqB3TwIGbwTryXy--Zh36EnsSPx_0qXg8';
const chatId = -776018338;
const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=`;

const getProducts = async name => {
    const res = await fetch(`${urlDb}/${name}.json`);
    const data = await res.json();
    return data;
};

const fetchProductInfo = async (name, id) => {
    const res = await fetch(`${urlDb}/${name}/${id}.json`);
    const data = await res.json();
    return data;
};

const fetchRequest = async ({ name, tel, mail }) => {
    const message = `<b>Новая заявка!</b>%0A <b>Имя</b>: ${name}%0A <b>Телефон</b>: ${tel}%0A <b>Почта</b>: ${mail}`;
    const res = await fetch(`${telegramApi}${message}`);
    return res;
};

const api = {
    getProducts,
    fetchProductInfo,
    fetchRequest
};

export default api;