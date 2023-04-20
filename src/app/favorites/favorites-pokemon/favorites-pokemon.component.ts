import { Component, OnInit } from '@angular/core';
import { PokemonObject } from 'src/app/models/pokemonObj';
import { FavoritesServiceService } from 'src/app/shared/favorites-service.service';

@Component({
  selector: 'app-favorites-pokemon',
  templateUrl: './favorites-pokemon.component.html',
  styleUrls: ['./favorites-pokemon.component.css']
})
export class FavoritesPokemonComponent implements OnInit {
  public listaFavoritos: PokemonObject[] = [];

  constructor(
    public favService: FavoritesServiceService
  ) { }

  ngOnInit(): void {
    this.favService.seAgregoCarta.subscribe(
      (res) => {
        console.log('Recibida la carta!!!', res)
      }
      )
      this.listaFavoritos = this.favService.pokemonLista
  }

  mostrarLista():void{
    console.log(this.listaFavoritos)
  }

}
