import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokemonListManagementService } from 'src/app/shared/pokemon-list-management.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})

export class PokemonHomeComponent implements OnInit, OnDestroy{
  pokemonList : RootObject[] = [];
  subscription! : Subscription;
  constructor(
    private listPokeService : PokemonListManagementService,
    ) {
   }

  ngOnInit(): void {
    this.listPokeService.generatePokemonList();

    this.listPokeService.getPokemonList$
    
    this.subscription = this.listPokeService.pokemonList$.subscribe(response =>{
      this.pokemonList = response
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}