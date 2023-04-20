                                                                      
import { PokemonObject } from './../../models/pokemonObj'             ;
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core'              ;
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PokemonList } from 'src/app/models/pokemonList'              ; 
import { PokemonAPIService } from 'src/app/shared/pokemon-api.service';
                                                                       

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit, AfterViewInit {
  public pokemonsList: PokemonList[] = [];
  public pokemonObjectList: PokemonObject[] = [];

  length = 1000;
  pageSize = 16;
  pageSizeOptions = [5, 10, 20, 100];
  pageIndex = 1;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // MatPaginator Output
  pageEvent!: PageEvent ;

  constructor(
    private pokemonService: PokemonAPIService
  ) { }
  
  ngAfterViewInit() {
    this.paginator.page
      .subscribe((event:PageEvent) => {
        const startIndex = event.pageIndex * event.pageSize;
        this.loadPokemons(event.pageSize, startIndex)
      });
  }

  ngOnInit(): void {
    this.loadPokemons(this.pageSize, 0);
  }

  loadPokemons(limit: number, offset: number): void{
    this.pokemonObjectList = [];
    this.pokemonService.getPokemonList(limit,offset).subscribe(
      (res) => {
        this.pokemonsList = res;
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
