import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootObject } from './model';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
})

// This class uses the API pokeapi

export class EjemploComponent implements OnInit {
  objectPokemon!: RootObject | undefined;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  // Just gets one pokemon, no more.
  ngOnInit(): void {
    // loads the pokemon data into objectPokemon
    this.http.get<RootObject>(`${this.baseUrl}ditto`).subscribe((response) => {
      this.objectPokemon = response;
      console.log(this.objectPokemon);
    });
  }

  // function that changes the pokemon, just ask for a new pokemon id or name
  // and updates the objectPokemon data, in case of error the objectPokemon is undefined
  onChangePokemon(idPokemon: number | string) {
    this.http.get<RootObject>(`${this.baseUrl}${idPokemon}`).subscribe({
      next: (response) => {
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      },
      error: (err) => {
        this.objectPokemon = undefined;
      },
    });
  }
  
  getNextPokemon(idPokemon: string | number){
    this.onChangePokemon(idPokemon);
  }

  getPrevPokemon(idPokemon: string | number){
    this.onChangePokemon(idPokemon);
  }
}
