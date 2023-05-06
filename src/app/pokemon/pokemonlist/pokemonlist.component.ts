import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public page: number = 0;
  public search: string = "";

  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    this.PokemonService.getAllPokemons()
    .subscribe(pokemons => {
      this.pokemons = pokemons;
    })
  }
  nextPage(): void {
    this.page +=20;
  }
  prevPage(): void {
    if(this.page >20){
      this.page -=20;
    }
  }
  onSearchPokemon(search:string){
    this.page =0;
    this.search =search;
  }

}
