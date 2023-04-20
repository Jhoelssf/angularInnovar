import { Component, OnInit } from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokemonFavoritesManagementService } from 'src/app/shared/pokemon-favorites-management.service';

@Component({
  selector: 'app-pokemon-fav-view',
  templateUrl: './pokemon-fav-view.component.html',
  styleUrls: ['./pokemon-fav-view.component.css']
})
export class PokemonFavViewComponent implements OnInit {
  pokemonsFavList: RootObject[] = [];

  constructor(
    private favPokemonServ : PokemonFavoritesManagementService,
  ) { }

  ngOnInit(): void {
    this.favPokemonServ.arrFavPokemon$.subscribe(result =>{
      this.pokemonsFavList = result
    })
  }
}
