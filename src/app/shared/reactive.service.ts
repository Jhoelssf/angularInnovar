import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../api/global';
import { ICharacterInfo } from '../home/model';

@Injectable({
  providedIn: 'root',
})
export class ReactiveService {
  
  datos?: ICharacterInfo;
  private infoPokemon: Subject<RootObject> = new Subject<RootObject>();
  // infoPokemon: BehaviorSubject<RootObject | null> = new BehaviorSubject<RootObject | null>(null);

  constructor() {}
  
  async getCharacters(){
    return await fetch(`${API_URL}`, { method: 'GET'});
  }
  
  async getCharacter (id: number){
    return await fetch(`${API_URL}${id}`, { method: 'GET'});
  } 

  enviarDatos(datos: ICharacterInfo) {
    this.datos = datos;
  }


  getInfoPokemon() {
    return this.infoPokemon.asObservable();
  }
  setInfoPokemon(obj: RootObject) {
    this.infoPokemon.next(obj);
  }
  
}
