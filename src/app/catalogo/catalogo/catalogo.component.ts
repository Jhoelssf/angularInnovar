import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from '../model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  @Input() pokemonsList:any = [];

  constructor() { }

  ngOnInit(): void {

  }



}
