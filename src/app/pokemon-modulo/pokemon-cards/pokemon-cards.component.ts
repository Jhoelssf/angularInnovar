import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveService } from 'src/app/shared/reactive.service';
import { RootObject } from './model';
import {PageEvent} from '@angular/material/paginator';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { MatDialog } from '@angular/material/dialog';
import { PokemonFavoritesService } from 'src/app/shared/pokemon-favorites.service';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit {

  //Variables
  num_pokemon: number = 1281;
  array_pokemon: RootObject[] = [];
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  pageSizeOptions = [5, 10, 25];

  hidePageSize = true;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageIndex = 0;
  firstPage: number = 1;
  lastPage: number = 15;

  pageEvent!: PageEvent;
  objectPokemon!:RootObject | undefined;
  icon: string = "star_border";
  ListFav: RootObject[] = [];
  bool_Fav: boolean = false;

  

 

  constructor(
    private http: HttpClient,
    private reactiveService: ReactiveService,
    private matDialog:MatDialog,
    private Action: PokemonFavoritesService,
  ) {}

  ngOnInit(): void {
    this.onUpdatePokemons(this.firstPage,this.lastPage);
  }

  onUpdatePokemons(firstPage:number,lastPage:number): void {
    console.log("update esta funcionandos")
    this.array_pokemon = []

    for (let i = firstPage; i <= lastPage; i++) {
      if(i > 1010){
        i = i + 8990
      }

      this.http
        .get<RootObject>(`${this.baseUrl}${i}`)
        .subscribe((respuesta) => {
          this.array_pokemon.push(respuesta);
        });

      if(i > 10000){
        i = i - 8990
      }
  
    }
    console.log(this.array_pokemon)
  }

  ChangePage(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.firstPage = e.pageIndex * e.pageSize + 1;
    this.lastPage = e.pageIndex * e.pageSize + e.pageSize;
    if(this.lastPage > this.num_pokemon){
      this.lastPage = this.num_pokemon
    }
    this.onUpdatePokemons(this.firstPage,this.lastPage);
  }

  onOpenDialog(Pokemon: RootObject){

    this.matDialog.open(PokemonCardComponent,{
      width:'500px',
      height:'634px',
    
      data:{
        pokemonData:  Pokemon,
      },
    })
    this.onChangePokemon(Pokemon.id);

  }

  onChangePokemon(idPokemon: number | string) {
    this.http.get<RootObject>(`${this.baseUrl}${idPokemon}`).subscribe({
      next: (response) => {
        this.objectPokemon = response;
        this.reactiveService.setInfoPokemon(response);
        console.log(this.objectPokemon);
      },
      error: (err) => {
        this.objectPokemon = undefined;
      },
    });
  }

  onFavorite(Pokemon: RootObject){
    //if(ListFav.includes(Pokemon))
    if(!this.bool_Fav)
    {
      this.icon = "star";
      this.bool_Fav = true;
    }else{
      this.icon = "star_border"
      this.bool_Fav = false;
    }
  }


}
