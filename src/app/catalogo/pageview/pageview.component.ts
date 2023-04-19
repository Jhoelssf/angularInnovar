import { filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { RootObject, Type } from '../model';

@Component({
  selector: 'app-pageview',
  templateUrl: './pageview.component.html',
  styleUrls: ['./pageview.component.css']
})
export class PageviewComponent implements OnInit {
  public listaPokemones: any = [];
  public listaTypes: Array<Type> = [];
  public objectPokemon: any;
  baseUrl: string = 'https://pokeapi.co/api/v2/';
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.getAll();
    this.http.get<any>(`${this.baseUrl}type`).subscribe((res)=>{
      this.listaTypes = res.results;
    });
  }

  getAll(){
    this.http.get<any>(`${this.baseUrl}pokemon?limit=40`).subscribe({
      next: (response) => {
        this.listaPokemones = response.results;
        // console.log(this.listaPokemones);
      },
      error: (err) => {
        this.listaPokemones = [];
      },
    });
  }
  
  
  getByTypes(nameType: string){
    if(nameType === "") console.log('Nada')
    else{
      this.http.get<any>(`${this.baseUrl}type/${nameType}`).subscribe({
        next: (response) => {
          this.listaPokemones = response.pokemon;
          // console.log(this.listaPokemones);
        },
        error: (err) => {
          console.error('Error obteniendo los tipos')
          this.listaPokemones = [];
        },
      });
    }
    // console.log(this.listaPokemones)

  }
}
