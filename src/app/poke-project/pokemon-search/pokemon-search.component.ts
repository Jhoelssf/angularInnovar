import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokemonSearchManagementService } from 'src/app/shared/pokemon-search-management.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
})
export class PokemonSearchComponent implements OnInit, OnDestroy {
  arrPokemonSearchResults: RootObject[] = [];
  subscription!: Subscription;
  constructor(private pkmSearchServ: PokemonSearchManagementService) {}

  ngOnInit(): void {
    this.subscription = this.pkmSearchServ.resultSearchPokemon$.subscribe(
      (result) => {
        this.arrPokemonSearchResults = result;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
