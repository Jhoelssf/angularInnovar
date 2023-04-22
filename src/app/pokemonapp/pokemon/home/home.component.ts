import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PokeApiService } from '../../../shared/poke-api.service';
import { RootObject } from './model';
import { DialogPokemonComponent } from './dialog-pokemon/dialog-pokemon.component';
import { PokemonsService } from 'src/app/shared/pokemons.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemon!: number;
  taPokemon!: Array<RootObject>;
  arrayPokemon: Array<RootObject> = [];
  favorites! : boolean;
  filterPokemon:string = ""

  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private dialog: MatDialog,
    private pokeApi: PokeApiService,
    private pokeAction: PokemonsService
  ) {}

  openDialog(Pokemon: RootObject): void {
    // this.pokeApi.currentPokemon$.next(idPokemon)
    console.log(this.pokeAction.favoritePokemons)
    console.log(Pokemon)
    this.taPokemon =  this.pokeAction.favoritePokemons.filter(item => item.id == Pokemon.id)
    if(this.taPokemon.length>0){
      this.favorites = true
    }
    else{
      this.favorites = false
    }
    
    console.log('desdehoome',this.favorites)
    this.dialog.open(DialogPokemonComponent, {
      width: '40rem',
      height: '33rem',
      data: {
        pokemonData: Pokemon,
        favorite: this.favorites
      },
    });
  }



  ngOnInit() {
    this.pokeApi.pokemon$.subscribe((obj) => {
      this.arrayPokemon.push(obj);
    });
    for (let i = 1; i < 20; i++) {
      this.pokeApi.getPokemon(i);
      
    }
  }
}
