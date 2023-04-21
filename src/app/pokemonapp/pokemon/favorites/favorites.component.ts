import { Component, OnInit } from '@angular/core';
import { RootObject } from '../home/model';
import { PokemonsService } from 'src/app/shared/pokemons.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritePokemons! : Array<RootObject>;

  constructor(private pokeAction: PokemonsService) { }

  ngOnInit(): void {
    this.favoritePokemons = this.pokeAction.favoritePokemons;
  }

  deleteFromFavorites(pokemon: RootObject):void {
    this.pokeAction.favoritePokemons$.subscribe((obj) => {
      this.favoritePokemons = obj

    })
    this.pokeAction.deleteFavoritePokemon(pokemon)
  }

}
