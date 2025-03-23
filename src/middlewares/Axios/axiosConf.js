import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

axios.defaults.baseURL = process.env.DATABASE_URL;

axios.defaults.withCredentials = true;

export default axios;
