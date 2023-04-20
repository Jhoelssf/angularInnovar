import { takeUntil, Subject, Observable, startWith, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PokemonObject } from 'src/app/models/pokemonObj';
import { FavoritesServiceService } from 'src/app/shared/favorites-service.service';
import { FormControl } from '@angular/forms';

export interface User {
  name: string;
}

@Component({
  selector: 'app-favorites-pokemon',
  templateUrl: './favorites-pokemon.component.html',
  styleUrls: ['./favorites-pokemon.component.css'],
})
export class FavoritesPokemonComponent implements OnInit {
  public listaFavoritos: PokemonObject[] = [];
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  myControl = new FormControl('');
  options: string[] = ['Hola'];

  filteredOptions!: Observable<string[]>;


  constructor(public favService: FavoritesServiceService) {}

  ngOnInit(): void {
    this.favService
      .getFavoritePokemon()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        console.log('Agregando:', res);
        this.listaFavoritos = res;
      });

    this.options = this.listaFavoritos.map<string>((poke:PokemonObject)=>poke.name)

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  ngOnDestroy(): void {
    console.log('Destruyendo favoritos');
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  mostrarLista(): void {
    console.log(this.listaFavoritos);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
