import { Injectable } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";

@Injectable({
    providedIn: "root",
})
export class FavoritesService {
    constructor() {
        let favorites = localStorage.getItem("favorites");
        if (!favorites || favorites == "[]") {
            localStorage.setItem("favorites", JSON.stringify([]));
        }
    }

    // Get favorites from local storage
    getFavorites(): Array<Pokemon> {
        return JSON.parse(localStorage.getItem("favorites") || "[]");
    }

    // Check if pokemon is in favorites
    isFavorite(pokemon: Pokemon): boolean {
        let favorites = this.getFavorites();
        return favorites.some((item) => item.id == pokemon.id);
    }

    // Add pokemon to favorites
    addPokemonToFavorites(pokemon: Pokemon) {
        let favorites = this.getFavorites();
        if (!this.isFavorite(pokemon)) {
            favorites.push(pokemon);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }

    // Remove pokemon from favorites
    removePokemonFromFavorites(pokemon: Pokemon) {
        let favorites = this.getFavorites();
        favorites = favorites.filter((item) => item.id != pokemon.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}
