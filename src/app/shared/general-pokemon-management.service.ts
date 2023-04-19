import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';

@Injectable({
  providedIn: 'root'
})
export class GeneralPokemonManagementService {
  private arrFavPokemon: Subject<RootObject[]> = new Subject<RootObject[]>();
  private arrListPokemon: Subject<RootObject[]> = new Subject<RootObject[]>();

  private infoPokemon: Subject<RootObject> = new Subject<RootObject>();
  // infoPokemon: BehaviorSubject<RootObject | null> = new BehaviorSubject<RootObject | null>(null);

  constructor() {
    console.log('Servicio pokemon');
  }

  getArrFavPokemon(){
    return this.arrFavPokemon.asObservable();
  }
  setArrFavPokemon(arrPokemon: RootObject[]){
    this.arrFavPokemon.asObservable();
  }

  getArrListPokemon(){
    return this.arrListPokemon.asObservable();
  }
  setArrListPokemon(arrPokemon: RootObject[]){
    this.arrListPokemon.asObservable();
  }

  getInfoPokemon() {
    return this.infoPokemon.asObservable();
  }
  setInfoPokemon(obj: RootObject) {
    this.infoPokemon.next(obj);
  }
}