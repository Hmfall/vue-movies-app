import axios from 'axios';
import { AccessTokenAuth } from './consts';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AccessTokenAuth}`,
    },
    params: {
        language: 'ru',
    },
});
