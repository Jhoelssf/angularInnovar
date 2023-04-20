import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../rickandmorty/charactermodels';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favorites: Character[] = [];
  private favoritesSubject: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>(this.favorites);

  constructor() { }

  addToFavorites(character: Character) {
    this.favorites.push(character);
    this.favoritesSubject.next(this.favorites)
  }
  removeFromFavorites(id: number | string) {
    this.favorites = this.favorites.filter(fav => fav.id !== id && fav.name !== id);
    this.favoritesSubject.next(this.favorites);
  }
  getFavorites() {
    return this.favoritesSubject.asObservable();
  }
}
