import { Component } from '@angular/core';
import { IPokemonData } from 'src/app/shared/models/resGetPokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-favourite-pokemon',
  templateUrl: './favourite-pokemon.component.html',
  styleUrls: ['./favourite-pokemon.component.css']
})
export class FavouritePokemonComponent {

  favoriteList: IPokemonData[] = [];

  constructor(private pokemonService: PokemonService  ){}

  ngOnInit() {
    this.pokemonService.getFavorites().subscribe((res) => {
      this.favoriteList = res;
    })
  }

}
