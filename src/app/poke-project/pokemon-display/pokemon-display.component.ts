import { Component, OnInit, Input} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokemonListManagementService } from 'src/app/shared/pokemon-list-management.service';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css']
})
export class PokemonDisplayComponent implements OnInit {
  @Input() arrListPokemon! : RootObject[];
  @Input() Paginated! : boolean;
  constructor(private listPokeService : PokemonListManagementService) { }

  ngOnInit(): void {
  }

  paginatorAction(e: PageEvent){
    let cantPokemonsToGet = e.pageSize;
    let initialPokemon = e.pageIndex*e.pageSize;
    if(initialPokemon+ 1 + cantPokemonsToGet > e.length){
      cantPokemonsToGet = e.length - initialPokemon;
    }
    console.log(initialPokemon, '- + -',cantPokemonsToGet, '--', e.length);
    this.listPokeService.generatePokemonList( 
      (initialPokemon).toString(),
      cantPokemonsToGet.toString())
  }
}