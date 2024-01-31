<template>
    <div class="filtersSection">
        <Select
            v-model="genre"
            :label="'Жанр'"
            :options="mappedGenres"
        />
        <Select
            v-model="country"
            :label="'Страна'"
            :options="mappedCountries"
        />
    </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import { countryApi } from '@/entities/country';
import { genreApi } from '@/entities/genre';
import { Country, Genre, Genres } from '@/shared/api/types';
import { Select } from '@/shared/ui';

interface SelectOption {
    value: string | number;
    name: string;
}

/*interface Emits {
    (e: 'change', filters: MediaDiscoverQuery): void;
}

const emits = defineEmits<Emits>();*/

const mappedGenres = ref<SelectOption[]>([]);
const mappedCountries = ref<SelectOption[]>([]);

const genre = ref<SelectOption | undefined>(undefined);
const country = ref<SelectOption | undefined>(undefined);

const {
    data: countries,
    isLoading: countriesIsLoading,
    isError: countriesIsError,
} = countryApi.useCountries();

const {
    data: genres,
    isLoading: genresIsLoading,
    isError: genresIsError,
} = genreApi.useGenres({
    mediaType: 'tv',
});

const mapGenres = (genres: Ref<Genres>) => {
    return genres.value.genres.map((genre: Genre) => ({
        value: genre.id,
        name: genre.name,
    }));
};

const mapCountries = (countries: Ref<Country[]>) => {
    return countries.value.map((country) => ({
        value: country.iso_3166_1,
        name: country.native_name,
    }));
};

watch(
    () => genres.value,
    () => {
        if (genres.value) mappedGenres.value = mapGenres(genres);
    },
);

watch(
    () => countries.value,
    () => {
        if (countries.value) mappedCountries.value = mapCountries(countries);
    },
);
</script>

<style scoped lang="scss">
.inner {
    padding: 12px;
}
</style>
