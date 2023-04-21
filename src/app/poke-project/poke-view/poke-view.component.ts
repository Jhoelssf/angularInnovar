import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokeDialogInfoService } from 'src/app/shared/poke-dialog-info.service';
import { DialogPokemonCardComponent } from '../dialog-pokemon-card/dialog-pokemon-card.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.css']
})
export class PokeViewComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  constructor(
    private dialogPokeServ: PokeDialogInfoService,
    public dialogPoke: MatDialog
    ) {
    this.subscription = dialogPokeServ.getInfoPokemon().subscribe((response) =>{
      console.log('Valor del view actualizado');
      this.dialogPoke.open(
        DialogPokemonCardComponent, {
          data: response, 
          height: '400px',
          width: '800px',
        });
      }
    )
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Destruido')
  }
}
