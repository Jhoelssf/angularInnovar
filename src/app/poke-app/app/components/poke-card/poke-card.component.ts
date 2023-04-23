import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Pokemon, PokemonView } from "../../models/pokemon.model";
import { PokeDetailComponent } from "../poke-detail/poke-detail.component";
import { PokeapiService } from "../../services/pokeapi.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-poke-card",
    templateUrl: "./poke-card.component.html",
    styleUrls: ["./poke-card.component.css"],
})
export class PokeCardComponent implements OnInit {
    @Input() pokemon: Pokemon | any;

    subscription: Subscription = new Subscription();
    pokemonView: PokemonView | any;

    constructor(
        private pokeapiService: PokeapiService,
        private dialog: MatDialog
    ) {
        this.pokemonView = {};
        this.pokemonView.pokemon = {};
    }

    ngOnInit(): void {
        this.subscription = this.pokeapiService
            .getPokemonInfo(this.pokemon)
            .subscribe((pokemonView) => {
                if (pokemonView) {
                    this.pokemonView = pokemonView;
                } else {
                    console.log("Error loading pokemon info");
                }
            });
    }

    goDetails(pokemonView: PokemonView) {
        const dialogRef = this.dialog.open(PokeDetailComponent, {
            data: { pokemonView },
            panelClass: "custom-dialog-container",
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
