import { Component, ElementRef, Input, OnInit, ViewChild,Renderer2 } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/interface/model';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { style } from '@angular/animations';

@Component({
  selector: 'app-card-dbs',
  templateUrl: './card-dbs.component.html',
  styleUrls: ['./card-dbs.component.css']
})
export class CardDbsComponent implements OnInit {
  @ViewChild("asfavorite") colorFavorite!:ElementRef;
  @Input() favorites!: String[];
  @Input() character!: Character;
  constructor(public dialog: MatDialog,private renderer: Renderer2) {}
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
  //----manipulacion del doom)
  change():void {
    const asfavorite = this.colorFavorite.nativeElement;
    if (this.isColored) {
      const indexAEliminar = this.favorites.findIndex(nombre => nombre.includes(this.character.id));
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
        this.favorites.push(this.character.id)
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
  //---------dialog-------

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
