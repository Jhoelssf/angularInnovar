export interface Pokemon {
    id: number;
    name: string;
    url: string;
}

export interface PokemonView {
    pokemon: Pokemon;
    url_img: string;
    type: string;
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
    };
}
