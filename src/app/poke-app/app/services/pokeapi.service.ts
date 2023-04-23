import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Pokemon, PokemonView } from "../models/pokemon.model";

@Injectable({
    providedIn: "root",
})
export class PokeapiService {
    private API_URL = "https://pokeapi.co/api/v2/pokemon/";

    pokemonList: Array<Pokemon> = [];
    limit: number = 1200;

    constructor(private http: HttpClient) {}

    // Get a list of pokemon from pokeapi
    getPokemonList(): Observable<boolean> {
        return this.http.get(`${this.API_URL}?limit=${this.limit}`).pipe(
            map((data: any) => {
                let pokemonList = data.results.map((item: any) => {
                    let pokemon = {
                        id: item.url.split("/")[6],
                        name: item.name,
                        url: item.url,
                    };
                    return pokemon;
                });
                this.pokemonList = pokemonList;
                return true;
            })
        );
    }

    // get pokemon list by page
    getPokemonListByPage(
        page: number,
        size: number,
        pokemonList: Array<Pokemon> = this.pokemonList
    ): Array<Pokemon> {
        let pokemon_list: Array<Pokemon> = [];
        if (pokemonList.length > 0) {
            if (page == 1) {
                console.log(0, this.limit);
                pokemon_list = pokemonList.slice(0, size);
            } else {
                let start = page * size - size;
                let end = start + size;
                pokemon_list = pokemonList.slice(start, end);
            }
            return pokemon_list;
        } else {
            return [];
        }
    }

    // Get the details of a pokemon
    getPokemonInfo(pokemon: Pokemon): Observable<PokemonView> {
        return this.http.get<PokemonView>(`${this.API_URL}${pokemon.id}`).pipe(
            map((item: any) => {
                let pokemonView = {
                    pokemon: pokemon,
                    url_img: this.getUrlImg(pokemon.id),
                    type: item.types[0].type.name,
                    stats: {
                        hp: item.stats[0].base_stat,
                        attack: item.stats[1].base_stat,
                        defense: item.stats[2].base_stat,
                        speed: item.stats[5].base_stat,
                    },
                };
                //this.pokemonView = pokemonView;
                return pokemonView;
            })
        );
    }

    // Get the url of the image of the pokemon
    getUrlImg(id: number): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    }

    // Search a pokemon by name
    searchPokemons(name: string) {
        let pokemonList: Array<Pokemon> = [];
        if (this.pokemonList.length > 0) {
            pokemonList = this.pokemonList.filter((item: Pokemon) => {
                return item.name.includes(name.toLowerCase());
            });
        }
        return pokemonList;
    }
}
