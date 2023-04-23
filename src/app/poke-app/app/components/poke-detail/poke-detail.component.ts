import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FavoritesService } from "../../services/favorites.service";
import { PokemonView } from "../../models/pokemon.model";

@Component({
    selector: "app-poke-detail",
    templateUrl: "./poke-detail.component.html",
    styleUrls: ["./poke-detail.component.css"],
})
export class PokeDetailComponent implements OnInit {
    pokemonView: PokemonView | any;
    isFavorite: boolean = false;
    isInFavorites: boolean = false;

    constructor(
        private favoriteService: FavoritesService,
        private dialogRef: MatDialogRef<PokeDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit(): void {
        this.pokemonView = this.data.pokemonView;
        this.isFavorite = this.favoriteService.isFavorite(
            this.pokemonView.pokemon
        );
        this.isInFavorites = window.location.pathname == "/pokeapp/favorites";
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    // Check if pokemon is in favorites
    toggleFavorite(): void {
        this.isFavorite = !this.isFavorite;
        if (this.isFavorite) {
            this.favoriteService.addPokemonToFavorites(
                this.pokemonView.pokemon
            );
        } else {
            this.favoriteService.removePokemonFromFavorites(
                this.pokemonView.pokemon
            );
            // Check if we are in favorites page to reload the page
            if (this.isInFavorites) {
                window.location.reload();
            }
        }
    }
}
