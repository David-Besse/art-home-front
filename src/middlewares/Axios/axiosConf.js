import axios from 'axios';

axios.defaults.baseURL = 'https://apiroute.webshappers.com/api/';

axios.defaults.withCredentials = true;

export default axios;
