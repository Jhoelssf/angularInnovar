import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../charactermodels';
import { RickandmortyService } from '../../shared/rickandmorty.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  favorites: Character[] = this.rickandmortyService.getFavorites();

  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private rickandmortyService: RickandmortyService) { }

  ngOnInit(): void {
    this.getCharacters();
    this.rickandmortyService
      .getFavoritesSubject()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(()=>{
        this.favorites = this.rickandmortyService.getFavorites(); 
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  addFavorite(character: Character): void{
    this.rickandmortyService.addToFavorites(character);
  }
  
  removeFavorite(id: string | number): void{
    this.rickandmortyService.removeFromFavorites(id);
  }

  getCharacters(): void{
    this.rickandmortyService.getCharacters(1)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res) =>{
      this.characters = res.results;
      console.log(this.characters);
    })
  }
}
