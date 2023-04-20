import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';

@Injectable({
  providedIn: 'root'
})
export class PokeDialogInfoService {
  private infoPokemon: Subject<RootObject> = new Subject<RootObject>();

  constructor() {}

  getInfoPokemon() {
    return this.infoPokemon.asObservable();
  }
  setInfoPokemon(obj: RootObject) {
    this.infoPokemon.next(obj);
  }
}
