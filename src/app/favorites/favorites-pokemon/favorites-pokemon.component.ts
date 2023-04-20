import { takeUntil, Subject } from 'rxjs';
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
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public favService: FavoritesServiceService
  ) { }

  ngOnInit(): void {
    console.log('Construyendo: ')
    this.favService.getFavoritePokemon()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      res => {
        console.log('Agregando:',res)
        this.listaFavoritos = res;
      }
    )
  }

  ngOnDestroy(): void {
    console.log('Destruyendo favoritos')
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  mostrarLista():void{
    console.log(this.listaFavoritos)
  }

}
