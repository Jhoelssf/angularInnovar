import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  objectPokemon!: RootObject | undefined;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<RootObject>(`${this.baseUrl}ditto`).subscribe((response)=>{
      this.objectPokemon = response;
      console.log(this.objectPokemon);
    });
  }

  onChangePokemon(idPokemon: number | string){
    this.http.get<RootObject>(`${this.baseUrl}${idPokemon}`).subscribe({
      next: (response) =>{
        this.objectPokemon = response;
        console.log(this.objectPokemon)
      },
      error: (err) => {
        this.objectPokemon = undefined;
      },
    });
  }

}
 