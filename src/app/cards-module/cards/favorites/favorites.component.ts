import { Component, OnInit } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';
import { RootObject } from '../model_pokemon';
import { DialogeCardComponent } from '../dialoge-card/dialoge-card.component';
import { PokemonsService } from 'src/app/shared/pokemons.service';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  // Variables
  //lista de nombres de los pokemons
  favoritePokemons! : string[];
  len_favoritePokemons : number = 0;
  //Aqui se guardan los objetos pokemon despues de traerlos
  array_pokemon: RootObject[] = [];

  pageindex = 0
  objectPokemon!: RootObject;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  hidden!: boolean;

  nombre: string = '';
  img_src: string = '';
  //1 - 1010
  //10001 - 10271
  num_pokemon: number = 1281;



  favorites: string[] = [];

  first_page: number = 1;
  last_page: number = 16;
  showFirstLastButtons = true;

  lastName: string = "";

  //variable para enviar al dialog
  name_actual_pokemon!: string | number;

  //imagen de pokemon por defecto
  url_img_null = "https://m.media-amazon.com/images/I/71WkWKFRSWL.png"
  constructor(
    private http: HttpClient,
    private pokeAction: PokemonsService,
    private matDialog:MatDialog
  ) {}


  ngOnInit(): void {
    this.name_actual_pokemon = "pikachu"
    this.favoritePokemons = this.pokeAction.favoritePokemons;
    this.len_favoritePokemons = this.favoritePokemons.length;
    this.onUpdatePokemons(1, this.len_favoritePokemons);

  }
  // funcion para eliminar de favoritos
  deleteFromFavorites(name_pokemon: string){
    this.pokeAction.favoritePokemons$.subscribe((obj) => {
      this.favoritePokemons = obj
    })
    this.pokeAction.addFavoritePokemon(name_pokemon)
  }

  onUpdatePokemons(first: number = 1,last: number = 16): void {

    this.array_pokemon = []

    for (let i = first; i <= last; i++) {
      this.http
        .get<RootObject>(`${this.baseUrl}${this.favoritePokemons[i - 1]}`)
        .subscribe((respuesta) => {
          this.onSetImage(respuesta);
          this.array_pokemon.push(respuesta);
        });
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
