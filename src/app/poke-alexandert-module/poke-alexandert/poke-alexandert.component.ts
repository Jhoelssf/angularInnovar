import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';

@Component({
  selector: 'app-poke-alexandert',
  templateUrl: './poke-alexandert.component.html',
  styleUrls: ['./poke-alexandert.component.css']
})
export class PokeAlexandertComponent implements OnInit{
  objectPokemon!: RootObject | undefined;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor (private http: HttpClient){

  }
  ngOnInit(): void {
  }
}
