import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../rickandmorty/charactermodels';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string | undefined = undefined;
  private authSubject$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(this.username);

  constructor() { }

  getUsername(): Observable<string | undefined>{
    return this.authSubject$.asObservable();
  }

  login(username: string): void{
    if(username.indexOf(' ') < 0){
      this.username = username;
      this.authSubject$.next(this.username);
    }
  }

  logout(): void{
    this.username = undefined;
    this.authSubject$.next(this.username);
  }

  isLoggedIn(): boolean{
    return this.username !== undefined;
  }

}
