import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { ReactiveService } from 'src/app/shared/reactive.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  @Input() lista: any[]=[];
  @Output() dialogo: EventEmitter<number | string> = new EventEmitter<
  number | string>(); 
  id:any
  constructor(private reactiService:ReactiveService) { }

  ngOnInit(): void {

  }
  Dialog(id_pokemon:number|string){
    this.id=id_pokemon
    // console.log(this.id)
    this.dialogo.emit(this.id)
  }

}
