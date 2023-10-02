export interface Movie {
    id?: number,
    title?: string,
    original_title?: string,
    overview?: string,
    release_date?: Date,
    original_language?: string,
    poster_path?: string,
    vote_average?: number,
    vote_count?: number,
    popularity?: number,
    adult?: boolean,
    status?: string,
    production_countries?: Array<ProductionCountry>,
    production_companies?: Array<ProductionCompanies>,
    genres?: Array<Genre>,
    spoken_languages?: Array<Languages>
}

export interface ProductionCountry {
    iso_3166_1?: string,
    name?: string
}

export interface ProductionCompanies {
    id?: number,
    logo_path?: string,
    name?: string,
    origin_country?: string
}

export interface Genre {
    id?: number,
    name?: string
}

export interface Languages {
    english_name?: string,
    iso_639_1?: string,
    name?: string
}