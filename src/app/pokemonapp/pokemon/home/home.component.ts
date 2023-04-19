import { Component, OnInit } from '@angular/core';
import { RootObject } from './model';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayPokemon : Array<RootObject> = [];
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient){

  }
  ngOnInit() {
    for(let i = 1; i<10; i++){
      this.http.get<RootObject>(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe((res) => {
      this.arrayPokemon.push(res)
      console.log(this.arrayPokemon);
      
    })
    }
    
  }

}
