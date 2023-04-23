import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../models/pokemon.model";
import { FavoritesService } from "../../services/favorites.service";

@Component({
    selector: "app-favorites",
    templateUrl: "./favorites.component.html",
    styleUrls: ["./favorites.component.css"],
})
export class FavoritesComponent implements OnInit {
    favorites: Array<Pokemon> = [];

    constructor(private favoriteService: FavoritesService) {}

    ngOnInit(): void {
        this.favorites = this.favoriteService.getFavorites();
    }
}
