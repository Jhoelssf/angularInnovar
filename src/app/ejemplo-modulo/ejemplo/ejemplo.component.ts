import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveService } from '../../shared/reactive.service';
import { Pok, RootObject } from './model';
import { PokemonComponent } from 'src/app/pokemon/pokemon.component';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
})
export class EjemploComponent implements OnInit {
  objectPokemon!: RootObject | undefined;
  // List_Pokemon: Array<Pok>= new Array();
  List_Pokemon:any[]=[];
  Dialog:any[]=[];
  Favorite:any[]=[];
  favorite:any[]=[]
  id_pokemon:any
  
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  hidden!: boolean;
  constructor(
    private http: HttpClient,
    private reactiveService: ReactiveService
  ) {}

  ngOnInit(): void {
    this.http.get<RootObject>(`${this.baseUrl}ditto`).subscribe((response) => {
      this.objectPokemon = response;
      // this.reactiveService.setInfoPokemon(this.objectPokemon);
      console.log(this.objectPokemon);
    });
    for (let index = 1; index < 500; index++) {
      this.http.get<RootObject>(`${this.baseUrl}${index}`).subscribe(
        res=>{
          this.List_Pokemon.push({name:res.name,url:res.sprites.other?.home.front_shiny})
        }
      )       
    }
    console.log(this.List_Pokemon)
    // console.log(this.Dialog)
    console.log(this.favorite)

  }
  // hideReactive() {
  //   this.hidden = !this.hidden;
  // }

  onChangePokemon(idPokemon: number | string) {
    this.http.get<RootObject>(`${this.baseUrl}${idPokemon}`).subscribe({
      next: (response) => {
        this.objectPokemon = response;
        this.reactiveService.setInfoPokemon(this.objectPokemon);
        // console.log(this.objectPokemon);
      },
      error: (err) => {
        this.objectPokemon = undefined;
      },
    });
  }
  dialogo(id:number|string){
     this.id_pokemon=id
     console.log(this.id_pokemon)
    this.http.get<RootObject>(`${this.baseUrl}${this.id_pokemon}`).subscribe(
      d=>{
        this.Favorite.push({name:d.name,url:d.sprites.other?.home.front_shiny});
        this.Dialog[0]={name:d.name,url:d.sprites.other?.home.front_shiny}
        this.favorite.push(this.Favorite)
       this.reactiveService.setDialog(this.Dialog)
      }
    );
  }
}
