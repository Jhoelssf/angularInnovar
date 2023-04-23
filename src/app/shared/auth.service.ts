import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../rickandmorty/charactermodels';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string | undefined = undefined;
  private favoritesSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(this.username);

  constructor() { }

  getUsername(): Observable<string | undefined>{
    return this.favoritesSubject.asObservable();
  }

  login(username: string): void{
    if(username.indexOf(' ') < 0)
      this.username = username;
  }

  isLoggedIn(): boolean{
    return this.username !== undefined;
  }

}
