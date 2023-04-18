import { Component, OnInit } from '@angular/core';
import { RootObject } from '../pokemon-template';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  objectPokemon! : RootObject | undefined;
  baseURL : string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('OnInit')
    this.http.get<RootObject>(`${this.baseURL}ditto`).subscribe(
      (response)=>{
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      }
    )
  }
}
