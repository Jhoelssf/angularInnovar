import { Component, OnInit, Input } from "@angular/core";
import { PokeapiService } from "../../services/pokeapi.service";
import { Pokemon } from "../../models/pokemon.model";

@Component({
    selector: "app-poke-list",
    templateUrl: "./poke-list.component.html",
    styleUrls: ["./poke-list.component.css"],
})
export class PokeListComponent implements OnInit {
    @Input() pokemonList: Array<Pokemon> = [];

    constructor(private pokeapiService: PokeapiService) {}

    ngOnInit(): void {}
}
