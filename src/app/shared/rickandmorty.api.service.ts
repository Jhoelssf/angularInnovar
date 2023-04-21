import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, map } from 'rxjs';
import { Character, RootCharacterObject } from '../rickandmorty/charactermodels';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyApiService {
  private rickandmortyUrl = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(page: number, search: string = ''): Observable<RootCharacterObject> {
    const url = `${this.rickandmortyUrl}/character/?page=${page}&name=${search}`;
    return this.http.get<RootCharacterObject>(url)
    .pipe(
      tap(x => console.log('Fetched characters')),
      catchError(this.handleError<RootCharacterObject>('getCharacters', undefined))
    );
  }
  
  getRandomCharacterImg(): Observable<string> {
    const id = Math.floor(Math.random() * 826)+1
    const url = `${this.rickandmortyUrl}/character/${id}`;
    return this.http.get<Character>(url)
    .pipe(
      map((character: Character) => character.image),
      tap(x => console.log('image fetched')),
      catchError(this.handleError<string>('getRandomCharacterImg', undefined))
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
