import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../charactermodels';
import { Subject, takeUntil } from 'rxjs';
import { RickandmortyApiService } from 'src/app/shared/rickandmorty.api.service';
import { FavoriteService } from 'src/app/shared/favorite.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  favorites: Character[] = [];

  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private favoriteService: FavoriteService,
    private rickandmortyApi: RickandmortyApiService
    ) { }

  ngOnInit(): void {
    this.getCharacters();
    this.favoriteService
      .getFavorites()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((characters)=>{
        this.favorites = characters; 
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  addFavorite(character: Character): void{
    this.favoriteService.addToFavorites(character);
  }
  
  removeFavorite(id: string | number): void{
    this.favoriteService.removeFromFavorites(id);
  }

  getCharacters(): void{
    this.rickandmortyApi.getCharacters(1)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res) =>{
      this.characters = res.results;
      console.log(this.characters);
    })
  }
}
