import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokemonFavoritesManagementService } from 'src/app/shared/pokemon-favorites-management.service';

@Component({
  selector: 'app-pokemon-fav-view',
  templateUrl: './pokemon-fav-view.component.html',
  styleUrls: ['./pokemon-fav-view.component.css'],
})
export class PokemonFavViewComponent implements OnInit, OnDestroy {
  pokemonsFavList: RootObject[] = [];
  subscription! : Subscription;

  constructor(private favPokemonServ: PokemonFavoritesManagementService) {}

  ngOnInit(): void {
    this.subscription =this.favPokemonServ.arrFavPokemon$.subscribe((result) => {
      this.pokemonsFavList = result;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
