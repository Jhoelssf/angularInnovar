import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RickandmortyService } from 'src/app/shared/rickandmorty.service';
import { Character } from '../charactermodels';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  characters: Character[] = this.rickandmortyService.getFavorites(); 
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private rickandmortyService: RickandmortyService) { }

  ngOnInit(): void {
    this.rickandmortyService
      .getFavoritesSubject()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(()=>{
        this.characters = this.rickandmortyService.getFavorites(); 
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
    console.log('Favorites component destroyed');
  }

  removeFavorite(id: string | number) {
    this.rickandmortyService.removeFromFavorites(id);
  }

}
