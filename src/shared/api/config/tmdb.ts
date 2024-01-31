import { CountryEndpoint } from '../endpoints/country';
import { GenreEndpoint } from '../endpoints/genre';
import { MovieEndpoint } from '../endpoints/movie';
import { TvEndpoint } from '../endpoints/tv';

export class TMDB {
    private readonly accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    get genre(): GenreEndpoint {
        return new GenreEndpoint(this.accessToken);
    }

    get country(): CountryEndpoint {
        return new CountryEndpoint(this.accessToken);
    }

    get movie(): MovieEndpoint {
        return new MovieEndpoint(this.accessToken);
    }

    get tv(): TvEndpoint {
        return new TvEndpoint(this.accessToken);
    }
}
