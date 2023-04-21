import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveService } from 'src/app/shared/reactive.service';
import { RootObject } from './model_pokemon';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogeCardComponent } from './dialoge-card/dialoge-card.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  // Variables
  pageindex = 0
  objectPokemon!: RootObject;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  hidden!: boolean;

  nombre: string = '';
  img_src: string = '';
  //1 - 1010
  //10001 - 10271
  num_pokemon: number = 1281;
  array_pokemon: RootObject[] = [];
  favorites: string[] = [];

  first_page: number = 1;
  last_page: number = 16;
  showFirstLastButtons = true;

  lastName: string = "";
  
  //variable para enviar al dialog
  name_actual_pokemon!: string | number;

  //imagen de pokemon por defecto
  url_img_null = "https://www.pngitem.com/pimgs/m/30-302283_pikachu-pokmon-go-silhouette-drawing-whos-that-pokemon.png"
  constructor(
    private http: HttpClient,
    private reactiveService: ReactiveService,
    private matDialog:MatDialog
  ) {}


  ngOnInit(): void {
    this.onUpdatePokemons();
    this.name_actual_pokemon = "pikachu"

  }

  onUpdatePokemons(first: number = 1,last: number = 16): void {

    this.array_pokemon = []


    for (let i = first; i <= last; i++) {
      if(i > 1010){
        i = i + 8990
      }
      this.http
        .get<RootObject>(`${this.baseUrl}${i}`)
        .subscribe((respuesta) => {
          this.onSetImage(respuesta);
          this.array_pokemon.push(respuesta);
        });
      if(i > 10000){
        i = i - 8990
      }
    }
    console.log(this.array_pokemon)
  }
  onOpenDialog(Pokemon: RootObject){

    this.matDialog.open(DialogeCardComponent,{
      width:'1000px',
      height:'600px',
      data:{
        pokemonData:  Pokemon,
      },
    })
  }
  onAddFavorites(pokemon: string ){
    this.favorites.push(pokemon);
    console.log(this.favorites)
  }

  onChangePage(e: PageEvent) {
    //calculate firts and last page
    console.log(e)
    this.pageindex = e.pageIndex

    this.first_page = e.pageIndex * e.pageSize + 1;
    this.last_page = e.pageIndex * e.pageSize + e.pageSize;
    if(this.last_page > this.num_pokemon){
      this.last_page = this.num_pokemon
    }
    console.log(this.first_page,"  ",this.last_page);

    this.onUpdatePokemons(this.first_page,this.last_page);

  }

  //funcion para colocar imagen
  onSetImage(Pokemon: RootObject){
    if(Pokemon.sprites.front_default == null){
      Pokemon.sprites.front_default = this.url_img_null
    }
  }


}
