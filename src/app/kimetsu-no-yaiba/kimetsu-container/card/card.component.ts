import { Component, Input, OnInit } from '@angular/core';
import { RootObject1 } from '../../interface/model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() character!: RootObject1;
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
        url: this.character.url,
      },
    });
  }
  //---------------------------------

  processUrlimg():void{
      let image = this.character.image
      //console.log(image.lastIndexOf("png"));
      this.character["image"]=image.substring(0,image.lastIndexOf("png")+3)
      //console.log("ss",this.character)
  }
  ngOnInit(): void {
    this.processUrlimg();
  }

}
