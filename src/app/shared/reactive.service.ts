import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';

@Injectable({
  providedIn: 'root',
})
export class ReactiveService {
  private favorite: Subject<any>=new Subject<any>()
  private infoPokemon: Subject<RootObject> = new Subject<RootObject>();
  // infoPokemon: BehaviorSubject<RootObject | null> = new BehaviorSubject<RootObject | null>(null);

  constructor() {}
  getInfoPokemon() {
    return this.infoPokemon.asObservable();
  }
  setInfoPokemon(obj: RootObject) {
    this.infoPokemon.next(obj);
  }
  setDialog(obj:any){
    this.favorite.next(obj)
  }
  getDialog(){
    return this.favorite.asObservable()
  }
}
