import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveService } from '../shared/reactive.service';
import { ICharacterInfo, ICharacters } from './model';
import { MatDialog } from '@angular/material/dialog';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
  public characters: ICharacterInfo[] = [];
  public characterInfo: ICharacterInfo|undefined ;

  constructor(private _reactiveService: ReactiveService,
    public dialog:MatDialog) {}
  
  ngOnInit(): void {
      this.getAllCharacters();
    }

  openDialog(id:number):void {  
    console.log("Este es el id", id);
    const dialogRef = this.dialog.open(DialogCardComponent,{data:{id:id}});
    dialogRef.afterClosed().subscribe(res => {
      console.log("fin");
    });
  }

  //-------------------
    async getAllCharacters(){

    const response =await this._reactiveService.getCharacters();
    
    response.json().then( resp =>
    {
      this.characters = resp.results;
     }).catch((error)=> console.log('hubo un error',error));
  }
}
