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
  processUrlimg(imgUrl : string):string{

    //console.log(image.lastIndexOf("png"));
    imgUrl =imgUrl.substring(0,imgUrl.lastIndexOf("png")+3)
    //console.log("ss",this.character)
    return imgUrl;
  }
  constructor() { }
}
