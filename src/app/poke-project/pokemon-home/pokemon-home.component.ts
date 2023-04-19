import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RootObjectPokeList, Result} from '../../shared/pokeListTemplate'
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { tap } from 'rxjs'

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})
export class PokemonHomeComponent implements OnInit {
  urlGetList = 'https://pokeapi.co/api/v2/pokemon?limit=';
  urlGetList2 = '&offset=';
  minIdPokemon: string = '0';
  cantPokemon: string = '50';
  objectPokeList! : RootObjectPokeList | undefined;
  arrListPokemon! : RootObject[];

  constructor(private http: HttpClient,) {
   }

  ngOnInit(): void {
    this.recoverListPokemon()
  }

  recoverListPokemon(){
    let consulta = `${this.urlGetList}${this.cantPokemon}${this.urlGetList2}${this.minIdPokemon}`    
    this.http.get<RootObjectPokeList>(consulta)
    .subscribe((response) =>{
      this.objectPokeList = response;
      console.log(consulta);
      console.log(this.objectPokeList);
      // --> get info of each pokemon
      this.arrListPokemon = new Array(parseInt(this.cantPokemon));
      this.objectPokeList.results.forEach((element: Result, index) =>{
        this.getInfoPokemon(element, index)
      });
      console.log(this.arrListPokemon);
    }
      //this.objectPokeList.results.forEach()
    )
  }

  getInfoPokemon(element: Result, index: number){
    this.http.get<RootObject>(element.url).pipe(
      tap((response) => {
        this.arrListPokemon[index] = response;
      })
    ).subscribe();
  }

}
