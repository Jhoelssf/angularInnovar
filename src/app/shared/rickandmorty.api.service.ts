import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { RootCharacterObject } from '../rickandmorty/charactermodels';

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

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    } 
  }
}
