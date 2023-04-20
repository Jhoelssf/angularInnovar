import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveService } from 'src/app/shared/reactive.service';
import { RootObject } from './model_pokemon';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  objectPokemon!: RootObject;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  hidden!: boolean;

  constructor(
    private http: HttpClient,
    private reactiveService: ReactiveService
  ) {}
  nombre: string = '';
  img_src: string = '';
  num_pokemon: number = 1008;
  array_pokemon: RootObject[] = [];

  ngOnInit(): void {
    for (let i = 1; i < 20; i++) {
      this.http
        .get<RootObject>(`${this.baseUrl}${i}`)
        .subscribe((respuesta) => {
          this.array_pokemon.push(respuesta);
        });
    }
  }

  onChangePage(e: any) {
    console.log('asd', e);
  }

  // onChangePokemon(idPokemon: number | string) {
  //   this.http.get<RootObject>(`${this.baseUrl}${idPokemon}`).subscribe({
  //     next: (response) => {
  //       this.objectPokemon = response;
  //       this.reactiveService.setInfoPokemon(this.objectPokemon);
  //       console.log(this.objectPokemon.id);
  //     },
  //     error: (err) => {
  //       this.objectPokemon = undefined;
  //     },
  //   });
  // }
}
