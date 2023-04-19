import { Observable } from 'rxjs';
import { PokemonObject } from './../../models/pokemonObj';
import { Component, OnInit, Input } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemonList';
import { PokemonAPIService } from 'src/app/shared/pokemon-api.service';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {
  public pokemonsList: PokemonList[] = [];
  public pokemonObjectList: PokemonObject[] = [];

  constructor(
    private pokemonService: PokemonAPIService
  ) { }

  ngOnInit(): void {
    this.loadPokemons();
    this.pokemonObjectList.sort((a, b) => a.id - b.id);
  }
 
  loadPokemons(): void{
    this.pokemonService.getPokemonList().subscribe(
      (res) => {
        this.pokemonsList = res;
        console.log(this.pokemonsList)
        this.pokemonsList.map((pokeSimple: PokemonList)=>{
          this.pokemonService.getPokemon(pokeSimple.name).subscribe(
            (res)=>{
              this.pokemonObjectList.push(res);
            }
          )
        })
    })
  }
}
