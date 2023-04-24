import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { RootObject } from '../model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ReactiveService } from 'src/app/shared/reactive.service';
import { PokemonFavoritesService } from 'src/app/shared/pokemon-favorites.service';

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
  favoritesPokemon! : string[];

  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  icon: string = "star_border";
  ListFav: RootObject[] = [];
  bool_Fav: boolean = true ;

  constructor(private reactiveService: ReactiveService,
    public dialogRef: MatDialogRef<PokemonCardComponent>,
    private Action: PokemonFavoritesService,
    @Inject(MAT_DIALOG_DATA) public data: RootObject) {
      this.infoPokemon = data;
    }

  @Input() name_actual_pokemon!: string | number;
  @Input() lastName: string = "";

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

//Añadir a favoritos
  onAddFavorite(Pokemon: string){
    this.Action.favoritePokemons$.subscribe((res) => {
      this.favoritesPokemon = res
      console.log(this.favoritesPokemon)
    })
    this.Action.addFavoritePokemon(Pokemon);
  }

//Eliminar de favoritos
  onDeleteFavorite(Pokemon: string){
    this.Action.favoritePokemons$.subscribe((res) => {
      this.favoritesPokemon = res
      console.log(this.favoritesPokemon)
    })
    this.Action.deleteFavoritePokemon(Pokemon);
  }

  ChoiseIcon():boolean{
    this.Action.favoritePokemons$.subscribe((res) => {
      this.favoritesPokemon = res
    })
    this.bool_Fav = this.Action.IsFavoritePokemon(this.infoPokemon.name);
    return this.bool_Fav
  }

  onChangeIcon(Pokemon: string){
    this.Action.favoritePokemons$.subscribe((res) => {
      this.favoritesPokemon = res
    })
    this.bool_Fav = this.Action.IsFavoritePokemon(Pokemon);
    //console.log(this.bool_Fav);

    if(this.bool_Fav){
      this.icon = "star_border";
      this.onDeleteFavorite(Pokemon);
    }
    else{
      this.icon = "star";
      this.onAddFavorite(Pokemon);
    }
  }


}
