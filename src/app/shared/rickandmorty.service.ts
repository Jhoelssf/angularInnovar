import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Character, RootCharacterObject } from '../rickandmorty/charactermodels';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  private rickandmortyUrl = 'https://rickandmortyapi.com/api';

  private favorites: Character[] = [];
  private favoritesSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient
  ) { }

  addToFavorites(character: Character) {
    this.favorites.push(character);
    this.favoritesSubject.next(true);
  }
  removeFromFavorites(id: number | string) {
    this.favorites = this.favorites.filter(fav => fav.id !== id && fav.name !== id);
    this.favoritesSubject.next(true);
  }
  getFavorites() {
    return this.favorites;
  }
  getFavoritesSubject() {
    return this.favoritesSubject;
  }

  getCharacters(page: number): Observable<RootCharacterObject> {
    const url = `${this.rickandmortyUrl}/character/?page=${page}`;
    return this.http.get<RootCharacterObject>(url)
    .pipe(
      tap(x => console.log('Fetched characters')),
      catchError(this.handleError<RootCharacterObject>('getCharacters', undefined))
    );
  }

  getCharacter(id: number | string): Observable<Character> {
    const url = `${this.rickandmortyUrl}/character/${id}`;
    return this.http.get<Character>(url)
    .pipe(
      tap(x => console.log('Fetched character')),
      catchError(this.handleError<Character>('getCharacter', undefined))
    );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    } 
  }
}
