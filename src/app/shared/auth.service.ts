import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() { }

  
  login(useremail: string, password: string): boolean{
    if(useremail === "user@innovar.com" && password === 'password'){
      this.isLoggedIn = true;
      return true;
    }else{
      return false;
    }
  }

  logout(): void{
    this.isLoggedIn = false;
  }

  isLogged(): boolean{
    return this.isLoggedIn;
  }
}
