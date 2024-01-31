import { AccessTokenAuth } from './config/consts';
import { TMDB } from './config/tmdb';

export const tmdbApi = new TMDB(AccessTokenAuth);
