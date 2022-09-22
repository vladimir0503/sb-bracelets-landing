const urlDb = 'https://engraving-db-13cea-default-rtdb.firebaseio.com';
const botToken = '5728431671:AAGqB3TwIGbwTryXy--Zh36EnsSPx_0qXg8';
const chatId = -746500348;
const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=`;

const getProducts = async name => {
    const res = await fetch(`${urlDb}/catalog/${name}.json`);
    const data = await res.json();
    return data;
};

const getProductInfo = async (name, id) => {
    const res = await fetch(`${urlDb}/catalog/${name}/${id}.json`);
    const data = await res.json();
    return data;
};

const getWorks = async () => {
    const res = await fetch(`${urlDb}/works.json`);
    const data = await res.json();
    return data;
};

const fetchRequest = async message => {
    const res = await fetch(`${telegramApi}${message}`);
    return res;
};

const api = {
    getProducts,
    getWorks,
    getProductInfo,
    fetchRequest
};

export default api;