import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from '../model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  // @Input() pokemonsList:Array<RootObject> = []
  @Input() pokemonsList:any = []

  constructor() { }

  ngOnInit(): void {
    this.pokemonsList = [
      {
        name: 'Ditto',
        id: 34,
        types: ['tierra', 'aire']
      },
      {
        name: 'Celebi',
        id: 34,
        types: ['agua']
      },
      {
        name: 'Pikachu',
        id: 34,
        types: ['tierra', 'electrico']
      },
    ]
  }

}
