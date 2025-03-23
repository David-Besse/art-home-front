import axios from 'axios';

axios.defaults.baseURL = 'https://arthome-back.vercel.app/api/';

console.log('Axios baseURL configurée:', axios.defaults.baseURL);

axios.defaults.withCredentials = true;

export default axios;
