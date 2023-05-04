import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RootObject1 } from '../../interface/model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveService } from 'src/app/core/service/reactive.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() character!: RootObject1;
  @ViewChild("asfavorite") colorFavorite!:ElementRef;
  @Input() favorites!: String[];
  img? : string;
  //-----estates--
  isPulsing = false;
  isColored = false; // Variable para almacenar el estado del botón
   // evento del corazon or favorite
  onHeartClick( ) {
    this.isPulsing = true;
    setTimeout(() => {
      this.isPulsing = false;
    }, 400); // Duración de la animación en milisegundos
    console.log("onclik")
  }
  //---------dialog-------
  constructor(public dialog: MatDialog, private service:ReactiveService,private renderer: Renderer2) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        character : this.character,
      },
    });
  }
  //----manipulacion del doom)
  change():void {
    const asfavorite = this.colorFavorite.nativeElement;
    if (this.isColored) {
      const indexAEliminar = this.favorites.findIndex(nombre => nombre.includes(this.character.name));
      if (indexAEliminar !== -1) {
        this.favorites.splice(indexAEliminar, 1);
      }
      this.isColored=false
      // Si isColored es true, establecer el fondo a rosado
      this.renderer.setStyle(asfavorite, "background", "linear-gradient(to right, white, white)");
      this.renderer.setStyle(asfavorite, "-webkit-background-clip", "text");
      this.renderer.setStyle(asfavorite, "-webkit-text-fill-color", "transparent");
      console.log("if")
    } else {
      if(this.favorites.indexOf("this.character.id")==-1){
        this.favorites.push(this.character.name)
      }
      this.isColored=true
      console.log("else")
      // Si isColored es false, establecer el fondo a blanco
      this.renderer.setStyle(asfavorite, "background", "linear-gradient(to right, #ff0055, rgb(255, 0, 191))");
      this.renderer.setStyle(asfavorite, "-webkit-background-clip", "text");
      this.renderer.setStyle(asfavorite, "-webkit-text-fill-color", "transparent");
    }
    console.log("favorites:",this.favorites)
  }
  //---------------------------------


  ngOnInit(): void {
    this.img = this.service.processUrlimg(this.character.image)
    this.character["image"]=this.img;
  }

}
