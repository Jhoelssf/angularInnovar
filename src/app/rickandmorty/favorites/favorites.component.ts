import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Character } from '../charactermodels';
import { FavoriteService } from 'src/app/shared/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  characters: Character[] = []; 
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteService
      .getFavorites()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((characters)=>{
        this.characters = characters; 
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
    console.log('Favorites component destroyed');
  }

  removeFavorite(id: string | number) {
    this.favoriteService.removeFromFavorites(id);
  }

}
