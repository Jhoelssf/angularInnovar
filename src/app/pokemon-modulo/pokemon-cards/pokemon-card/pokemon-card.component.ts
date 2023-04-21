import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ability, RootObject } from '../model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ReactiveService } from 'src/app/shared/reactive.service';

interface PokemonData {
  pokemonData: RootObject;
}

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit, OnDestroy  {
  infoPokemon!: RootObject;
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  //Abilities: Ability[]=[];

  constructor(private reactiveService: ReactiveService) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.reactiveService
      .getInfoPokemon()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((infoPokemon) => {
        this.infoPokemon = infoPokemon;
        console.log(infoPokemon);
      });
  }


}
