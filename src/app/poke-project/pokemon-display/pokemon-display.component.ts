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
  constructor(private listPokeService : PokemonListManagementService) { }

  ngOnInit(): void {
  }

  paginatorAction(e: PageEvent){
    console.log(e)
    console.log('Inicio: ', e.pageIndex*e.pageSize)
    console.log('Tamaño: ',e.pageSize)
    this.listPokeService.generatePokemonList( 
      (e.pageIndex*e.pageSize).toString(),
      e.pageSize.toString())
  }
}
