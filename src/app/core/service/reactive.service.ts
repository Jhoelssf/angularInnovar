import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RootObject1 } from 'src/app/kimetsu-no-yaiba/interface/model';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {
  // inyeccion del obserbable
  private infoCharacter: Subject<RootObject1> = new Subject<RootObject1>();
  //creacion de obserbable
  getInfoCharacter(){
    return this.infoCharacter.asObservable();
  }
  setInfoCharacter(obj:RootObject1){
    this.infoCharacter.next(obj);

  }
  constructor() { }
}
