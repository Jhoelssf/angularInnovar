import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Character, RootCharacterObject } from '../rickandmorty/charactermodels';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  private rickandmortyUrl = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient
  ) { }

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
