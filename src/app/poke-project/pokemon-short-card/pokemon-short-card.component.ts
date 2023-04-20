import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokeDialogInfoService } from 'src/app/shared/poke-dialog-info.service';
import { DialogPokemonCardComponent } from '../dialog-pokemon-card/dialog-pokemon-card.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-short-card',
  templateUrl: './pokemon-short-card.component.html',
  styleUrls: ['./pokemon-short-card.component.css']
})
export class PokemonShortCardComponent implements OnInit {
  @Input() objectPokemon! : RootObject
  constructor(private pokeDialogService : PokeDialogInfoService, private pokeDialogObject: MatDialog) { }

  ngOnInit(): void {
  }

  onShortCardClick(){
    this.pokeDialogService.setInfoPokemon(this.objectPokemon)
    
  }
}
