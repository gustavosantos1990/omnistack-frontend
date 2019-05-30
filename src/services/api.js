import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-g.herokuapp.com'
});

export default api;