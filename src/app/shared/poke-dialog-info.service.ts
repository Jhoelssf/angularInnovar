import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeDialogInfoService {
  private infoPokemon!: RootObject;
  private infoPokemon$: Subject<RootObject> = new Subject<RootObject>();

  constructor() {}

  getInfoPokemon() {
    return this.infoPokemon$.asObservable();
  }
  setInfoPokemon(objPokemon: RootObject) {
    this.infoPokemon = objPokemon
    this.infoPokemon$.next(this.infoPokemon);
  }
}
