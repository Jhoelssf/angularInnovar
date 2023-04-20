import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
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
  suscription!: Subscription;

  constructor(
    private dialogPokeServ: PokeDialogInfoService,
    public dialogPoke: MatDialog
    ) {
    this.suscription = dialogPokeServ.getInfoPokemon().subscribe((response) =>{
      console.log('Valor del view actualizado');
      this.dialogPoke.open(
        DialogPokemonCardComponent, {
          data: response, 
          panelClass: 'custom-dialog-container'
        });
      }
    )
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if(this.suscription){
      this.suscription.unsubscribe();
    }
    console.log('Destruido')
  }

}
