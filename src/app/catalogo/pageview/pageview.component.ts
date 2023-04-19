import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootObject } from '../model';

@Component({
  selector: 'app-pageview',
  templateUrl: './pageview.component.html',
  styleUrls: ['./pageview.component.css']
})
export class PageviewComponent implements OnInit {
  public listaPokemones: any = [];
  public objectPokemon: any;
  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.http.get<any>(`${this.baseUrl}?limit=40`).subscribe({
      next: (response) => {
        this.listaPokemones = response.results;
        console.log(this.listaPokemones);
      },
      error: (err) => {
        this.listaPokemones = [];
      },
    });
  }
  

  getByTypes(nameType: string){
    this.getAll();
    console.log("En pageview: ",nameType);
    let listaFiltrada:any = [];
    console.log(this.listaPokemones);
    for(let pokemon of this.listaPokemones){
      console.log('name: ',pokemon.name)
      console.log('name: ',pokemon.url)

      this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/1`).subscribe((res) => {
        console.log(res);
        this.objectPokemon = res;
    });
      console.log(this.objectPokemon);
      if(nameType in this.objectPokemon.types){
        listaFiltrada.push(this.objectPokemon);
      }
    }
    this.listaPokemones = listaFiltrada;
  }
}
