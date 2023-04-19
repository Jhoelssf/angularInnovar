import { Component, OnInit } from '@angular/core';
import { RootObject } from './model_pokemon';
import { HttpClient } from '@angular/common/http';
import { ReactiveService } from 'src/app/shared/reactive.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  objectPokemon!: RootObject | undefined;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  hidden!: boolean;
  constructor(
    private http: HttpClient,
    private reactiveService: ReactiveService
  ) {}


  ngOnInit(): void {
    this.http.get<RootObject>(`${this.baseUrl}pikachu`).subscribe((response) => {
      this.objectPokemon = response;
      // this.reactiveService.setInfoPokemon(this.objectPokemon);
      console.log(this.objectPokemon);
    });
  }


  onChangePokemon(idPokemon: number | string) {
    this.http.get<RootObject>(`${this.baseUrl}${idPokemon}`).subscribe({
      next: (response) => {
        this.objectPokemon = response;
        this.reactiveService.setInfoPokemon(this.objectPokemon);
        console.log(this.objectPokemon);
      },
      error: (err) => {
        this.objectPokemon = undefined;
      },
    });
  }


  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds
  of dog  from Japan. A small, agile dog that copes very well with mountainous terrain,
  the Shiba Inu was  originally bred for hunting.`;

}
