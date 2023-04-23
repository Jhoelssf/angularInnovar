import { Component, OnInit } from "@angular/core";
import { PokeapiService } from "../../services/pokeapi.service";
import { Pokemon } from "../../models/pokemon.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
    subscription: Subscription = new Subscription();
    searchForm: FormGroup = new FormGroup({});
    pokemonListFiltered: Array<Pokemon> = [];
    pokemonList: Array<Pokemon> = []; // Pokemons list by page
    page: number = 1;
    pageSize: number = 12;
    isUpper: boolean = false; // Disable next page button
    isLower: boolean = false; // Disable previous page button

    constructor(
        private formBuilder: FormBuilder,
        private pokeapiService: PokeapiService
    ) {}

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            search: ["", Validators.required],
        });

        this.subscription = this.pokeapiService
            .getPokemonList()
            .subscribe((loaded: boolean) => {
                if (loaded) {
                    console.log("Successfully loaded pokemon list");
                } else {
                    console.log("Error loading pokemon list");
                }
            });
    }

    // Search pokemons by name
    searchPokemons() {
        let search = this.searchForm.value.search;
        if (search != "") {
            this.pokemonListFiltered =
                this.pokeapiService.searchPokemons(search);
        } else {
            this.pokemonListFiltered = [];
        }
    }

    // Get pokemons list by page
    pokemonListByPage() {
        this.pokemonList = this.pokeapiService.getPokemonListByPage(
            this.page,
            this.pageSize,
            this.pokemonListFiltered
        );
        this.isLower = this.page == 1 ? true : false;
        this.isUpper = this.page == 100 ? true : false;
    }

    nextPage() {
        this.page++;
        if (this.page > 10) {
            this.page = 10;
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

    onSearchChange() {
        this.searchPokemons();
        this.pokemonListByPage();
    }

    onSubmit() {
        this.searchPokemons();
        this.pokemonListByPage();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
