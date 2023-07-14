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
  id_pokemon:any
  id_favorite:any

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
    for (let index = 1; index < 100; index++) {
      this.http.get<RootObject>(`${this.baseUrl}${index}`).subscribe(
        res=>{
          this.List_Pokemon.push({name:res.name,url:res.sprites.other?.home.front_shiny})
        }
      )
    }
    console.log(this.List_Pokemon)
    console.log(this.Favorite)


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
    //  console.log(this.id_pokemon)
    this.http.get<RootObject>(`${this.baseUrl}${this.id_pokemon}`).subscribe(
      d=>{
       this.Dialog[0]={name:d.name,url:d.sprites.other?.home.front_shiny}
       this.reactiveService.setDialog(this.Dialog)
      //  this.reactiveService.setFavorite( this.Favorite.push({name:d.name,url:d.sprites.other?.home.front_shiny}))
      //  console.log(this.Favorite)
      }
    );
  }
  favorite(id:number|string){
    this.id_favorite=id
     console.log(this.id_favorite)
    this.http.get<RootObject>(`${this.baseUrl}${this.id_favorite}`).subscribe(
      d=>{
       this.reactiveService.setFavorite( this.Favorite.push({name:d.name,url:d.sprites.other?.home.front_shiny}))
      }
    );
  }
}
