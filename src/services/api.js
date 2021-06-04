import axios from 'axios';

//base url https://api-ssl.bitly.com/v4/


export const secretKey = '';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${secretKey}`
    }
});

export default api;