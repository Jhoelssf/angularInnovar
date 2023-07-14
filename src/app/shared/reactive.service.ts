import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';

@Injectable({
  providedIn: 'root',
})
export class ReactiveService {
  private dialog: Subject<any>=new Subject<any>()
  private favorite: Subject<any>=new Subject<any>()
  private infoPokemon: Subject<RootObject> = new Subject<RootObject>();
  private ListFavorite: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(this.favorite);
  // private ListFavorite= new BehaviorSubject(this.dialog)
  constructor() {}
  getInfoPokemon() {
    return this.infoPokemon.asObservable();
  }
  setInfoPokemon(obj: RootObject) {
    this.infoPokemon.next(obj);
  }
  setDialog(obj:any){
    this.dialog.next(obj)
  }
  getDialog(){
    return this.dialog.asObservable()
  }
  setFavorite(fav:any){
    this.favorite.next(fav)
    this.ListFavorite.subscribe(this.favorite)

  }
  getFavorite(){
    return this.ListFavorite.asObservable()
  }
}
