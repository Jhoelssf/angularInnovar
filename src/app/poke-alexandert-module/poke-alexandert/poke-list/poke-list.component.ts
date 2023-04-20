import { Component, OnInit } from '@angular/core';
import { RootObject } from '../model';
import { HttpClient } from '@angular/common/http';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
interface PokemonData{
  pokemonData: RootObject;
}

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})

export class PokeListComponent implements OnInit{
  pokemon!: number;
  pokeArray: Array<RootObject> =[];
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor( private http: HttpClient, public dialog: MatDialog){

  }
  ngOnInit(): void {
    
  }
}
