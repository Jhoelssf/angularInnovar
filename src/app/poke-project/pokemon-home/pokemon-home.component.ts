import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokemonListManagementService } from 'src/app/shared/pokemon-list-management.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})

export class PokemonHomeComponent implements OnInit {
  pokemonList : RootObject[] = [];
  constructor(
    private listPokeService : PokemonListManagementService,
    ) {
   }

  ngOnInit(): void {
    this.listPokeService.generatePokemonList();

    this.listPokeService.getPokemonList$
    this.listPokeService.pokemonList$.subscribe(response =>{
      this.pokemonList = response
    })
  }
}