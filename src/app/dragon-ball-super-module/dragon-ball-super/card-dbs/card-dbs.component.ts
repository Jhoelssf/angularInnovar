import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/interface/model';

@Component({
  selector: 'app-card-dbs',
  templateUrl: './card-dbs.component.html',
  styleUrls: ['./card-dbs.component.css']
})
export class CardDbsComponent implements OnInit {

  @Input() character!: Character;
  isPulsing = false;
  
   // evento del corazon or favorite
  onHeartClick() {
    this.isPulsing = true;
    setTimeout(() => {
      this.isPulsing = false;
    }, 1000); // Duración de la animación en milisegundos
    console.log("onclik")
  }
  //---------dialog-------
  constructor(public dialog: MatDialog) {}

    openDialog() {
      this.dialog.open(DialogComponent, {
        data: {
          character: this.character,
        },
      });
    }
    //---------------------------------

    /*processUrlimg():void{
        let image = this.character.image
        //console.log(image.lastIndexOf("png"));
        this.character["image"]=image.substring(0,image.lastIndexOf("png")+3)
        //console.log("ss",this.character)
    }*/
    ngOnInit(): void {
      //this.processUrlimg();
    }

}
