import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Utiliser l'URL correcte pour l'API
axios.defaults.baseURL = process.env.API_URL;

console.log('API URL:', process.env.API_URL);
console.log('Axios baseURL:', axios.defaults.baseURL);

axios.defaults.withCredentials = true;

export default axios;
