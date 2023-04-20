import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../charactermodels';
import { Subject, takeUntil } from 'rxjs';
import { RickandmortyApiService } from 'src/app/shared/rickandmorty.api.service';
import { FavoriteService } from 'src/app/shared/favorite.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  favorites: Character[] = [];
  pageIndex: number = 0;
  count: number = 100;
  pageSize: number = 10;
  disabled: boolean = true;

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
    this.rickandmortyApi.getCharacters(this.pageIndex+1)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res) =>{
      this.characters = res.results;
      this.count = res.info.count;
      this.pageSize = Math.round(res.info.count/res.info.pages);
      this.disabled = false;
    })
  }

  handlePageEvent(e: PageEvent) {
    this.disabled = true;
    this.pageIndex = e.pageIndex;
    this.getCharacters();
  }
}
