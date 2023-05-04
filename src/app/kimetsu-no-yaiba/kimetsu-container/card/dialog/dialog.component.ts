import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReactiveService } from 'src/app/core/service/reactive.service';
import { RootObject2,RootObject1 } from 'src/app/kimetsu-no-yaiba/interface/model';
export interface DialogData {
  character: RootObject1;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  CharacterDetaills? : RootObject2 | any;
  img? : string |any;
  len! : number;
  subUrl:string = this.data.character.url;
  constructor(
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private http: HttpClient,
              private reactiveService: ReactiveService
  ) {}
  objectToArray(obj: RootObject2): any[] {
    if (obj === undefined || obj === null) {
      return [];
    }
    return Object.entries(obj);
  }


  async ngOnInit(): Promise<void> {
    try {
      const Response = await this.http.get<Array<RootObject2>>(`${this.subUrl}`).toPromise();
      if (Response !== undefined && Response.length > 0) {
        this.CharacterDetaills = Response[0];
        this.len = this.CharacterDetaills.gallery.length;
        let cha: Array<string> = ["Tanjiro Kamado", "Muzan Kibutsuji", "Gyomei Himejima", "Nakime", "Yoriichi Tsugikuni"];
        if (cha.includes(this.CharacterDetaills.name) == true) {
          this.img = this.reactiveService.processUrlimg(this.CharacterDetaills.gallery[Math.floor(this.len * Math.random())]);
        } else {
          this.img = this.reactiveService.processUrlimg(this.CharacterDetaills.image);
        }
        this.CharacterDetaills["image"] = this.img;
        console.log("CharacterDetaills :", this.CharacterDetaills);
        console.log("image log :", this.img);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  /*ngOnInit(): void {
    console.log(this.subUrl);
    this.http.get<Array<RootObject2>>(`${this.subUrl}`).subscribe((Response)=>{
      this.CharacterDetaills=Response[0];
      this.len=this.CharacterDetaills.gallery.length;
      let cha : Array<string> = ["Tanjiro Kamado","Muzan Kibutsuji","Gyomei Himejima","Nakime","Yoriichi Tsugikuni"];
      if(cha.includes(this.CharacterDetaills.name)==true){
        this.img = this.reactiveService.processUrlimg(this.CharacterDetaills.gallery[Math.floor(this.len*Math.random())]);
      }
      else{
        this.img = this.reactiveService.processUrlimg(this.CharacterDetaills.image);
      }
      this.CharacterDetaills["image"] = this.img;
      console.log("CharacterDetaills :",this.CharacterDetaills);
      console.log("image log :",this.img);
      this.CharacterDetaills=Object.entries(this.CharacterDetaills);
    });
  }*/


}
