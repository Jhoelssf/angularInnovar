import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveService } from '../shared/reactive.service';
import { IPokemon, IPokemonInfo } from './model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  public pokemons: IPokemon[] = [];
  public pokemonInfo?: IPokemonInfo;
  i:number = 1;

  constructor(private _pokemonsService: ReactiveService) {}

  ngOnInit(): void {
    this.getAllPokemons();
  }

  //-------------------
  
  async getAllPokemons(){
    let pokemonData;
    const response =await this._pokemonsService.getPokemons();
    
    response.json().then( resp =>
    {
      
      this.pokemons = resp.results;


    }).catch((error)=> console.log('hubo un error',error));
  }
  async getPok(url:string){
    const idPokemon = Number(url.split('/')[8]);
  }
  async showInfo(url:string){
    const idPokemon = Number(url.split('/')[6]);

    const response = await this._pokemonsService.getPokemon(idPokemon);

    response.json().then( resp => {
      this.pokemonInfo = resp;
    }).catch((error)=> alert('hubo un error'));
  }

}



/*
export class HomeComponent implements OnInit {

  pokemons!: RootObject | undefined;


  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  hidden!: boolean;

  constructor(
    private http: HttpClient,
  ) {}
  

  ngOnInit(): void {
    //this.getAllPokemons();
  }
  getAllPokemons(){
    this.http.get<RootObject>(`${this.baseUrl}`).subscribe((response) => {
      this.pokemons = response;
    });
  }
}

*/