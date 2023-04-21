import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokeDialogInfoService } from 'src/app/shared/poke-dialog-info.service';
import { DialogPokemonCardComponent } from '../dialog-pokemon-card/dialog-pokemon-card.component';
import { MatDialog } from '@angular/material/dialog';

interface TypesUrls {
  [key: string]: string;
}

@Component({
  selector: 'app-pokemon-short-card',
  templateUrl: './pokemon-short-card.component.html',
  styleUrls: ['./pokemon-short-card.component.css'],
})
export class PokemonShortCardComponent implements OnInit {
  typesUrls: TypesUrls = {
    bug: 'https://i.imgur.com/ClrJZgc.png',
    dark: 'https://i.imgur.com/TqgcQJg.png',
    dragon: 'https://i.imgur.com/LKeKTCh.png',
    electric: 'https://i.imgur.com/UZXR4XS.png',
    fairy: 'https://i.imgur.com/N5yKiKW.png',
    fighting: 'https://i.imgur.com/uljHP2a.png',
    fire: 'https://i.imgur.com/YLFmobl.png',
    flying: 'https://i.imgur.com/GLgtFu8.png',
    ghost: 'https://i.imgur.com/YAKEmD1.png',
    grass: 'https://i.imgur.com/MI3qN5G.png',
    ground: 'https://i.imgur.com/P7oUqJA.png',
    ice: 'https://i.imgur.com/CQbB4aM.png',
    normal: 'https://i.imgur.com/5StGScN.png',
    poison: 'https://i.imgur.com/cC4l31Q.png',
    psychic: 'https://i.imgur.com/MfAJenN.png',
    rock: 'https://i.imgur.com/8YK4ShS.png',
    steel: 'https://i.imgur.com/9AF59D9.png',
    water: 'https://i.imgur.com/yYwSP4i.png',
  };

  @Input() objectPokemon!: RootObject;
  constructor(
    private pokeDialogService: PokeDialogInfoService,
    private pokeDialogObject: MatDialog
  ) {}
  ngOnInit(): void {}

  onShortCardClick() {
    this.pokeDialogService.setInfoPokemon(this.objectPokemon);
  }
}
