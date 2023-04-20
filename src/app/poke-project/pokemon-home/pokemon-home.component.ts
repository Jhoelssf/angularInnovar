import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RootObjectPokeList, Result} from '../../shared/pokeListTemplate'
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { tap } from 'rxjs'
import { PokeDialogInfoService } from 'src/app/shared/poke-dialog-info.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})

export class PokemonHomeComponent implements OnInit {
  minIdPokemon: string = '0';
  cantPokemon: string = '75';
  objectPokeList! : RootObjectPokeList | undefined;
  arrListPokemon! : RootObject[];
  pokeDialogInfo!: RootObject;

  constructor(
    private http: HttpClient, 
    private pokeDialogService : PokeDialogInfoService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    ) {
   }

  ngOnInit(): void {
    this.recoverListPokemon()
    this.pokeDialogService.getInfoPokemon().subscribe(response =>{
      this.pokeDialogInfo = response;
      console.log('Data changed:', this.pokeDialogInfo);
      this.dialog.
    })
  }

  ngOnDestroy() {
    
  }
  recoverListPokemon(){
    let consulta = `https://pokeapi.co/api/v2/pokemon?limit=${this.cantPokemon}&offset=${this.minIdPokemon}`    
    this.http.get<RootObjectPokeList>(consulta)
    .subscribe((response) =>{
      //this.objectPokeList = response;
      console.log(consulta);
      console.log(response);
      this.arrListPokemon = new Array(parseInt(this.cantPokemon));
      response.results.forEach((element: Result, index) =>{
        this.getInfoPokemon(element, index)
      });
    })
  }

  getInfoPokemon(element: Result, index: number){
    this.http.get<RootObject>(element.url).pipe(
      tap((response) => {
        this.arrListPokemon[index] = response;
      })
    ).subscribe();
  }
}