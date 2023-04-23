import { Component, OnInit } from "@angular/core";
import { PokeapiService } from "../../services/pokeapi.service";
import { Pokemon } from "../../models/pokemon.model";
import { Subscription } from "rxjs";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    subscription: Subscription = new Subscription();
    pokemonList: Array<Pokemon> = []; // Pokemons list by page
    page: number = 1;
    pageSize: number = 12;
    isUpper: boolean = false; // Disable next page button
    isLower: boolean = false; // Disable previous page button

    constructor(private pokeapiService: PokeapiService) {}

    ngOnInit(): void {
        this.subscription = this.pokeapiService
            .getPokemonList()
            .subscribe((loaded: boolean) => {
                if (loaded) {
                    this.pokemonListByPage();
                    console.log("Successfully loaded pokemon list");
                } else {
                    console.log("Error loading pokemon list");
                }
            });
    }

    // Get pokemons list by page
    pokemonListByPage() {
        this.pokemonList = this.pokeapiService.getPokemonListByPage(
            this.page,
            this.pageSize
        );
        this.isLower = this.page == 1 ? true : false;
        this.isUpper = this.page == 100 ? true : false;
    }

    nextPage() {
        this.page++;
        if (this.page > 100) {
            this.page = 100;
        }
        this.pokemonListByPage();
    }

    previousPage() {
        this.page--;
        if (this.page < 1) {
            this.page = 1;
        }
        this.pokemonListByPage();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
