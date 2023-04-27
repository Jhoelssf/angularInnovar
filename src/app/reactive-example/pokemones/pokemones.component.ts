import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { ReactiveService } from 'src/app/shared/reactive.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  @Input() lista: any[]=[];
  @Output() dialogo: EventEmitter<number | string> = new EventEmitter<
  number | string>();
  @Output() favorite: EventEmitter<number | string> = new EventEmitter<
  number | string>();
  id:any
  id_favorite:any
  constructor(private reactiService:ReactiveService,public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {

  }
  Dialog(id_pokemon:number|string){
    this.id=id_pokemon
    // console.log(this.id)
    this.dialogo.emit(this.id)
  }
  openFavorite(id_pokemon:number|string){
    this.id_favorite=id_pokemon
    // console.log(this.id_favorite)
    this.favorite.emit(this.id_favorite)
  }

}
