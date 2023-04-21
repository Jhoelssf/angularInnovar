import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICharacterInfo } from '../home/model';
import { ReactiveService } from '../shared/reactive.service';
@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {

  public characterInfo?: ICharacterInfo;

  constructor(
    public dialogRef: MatDialogRef<DialogCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private _reactiveService: ReactiveService) { }

  ngOnInit(): void {
    this.showInfo();
  }
/*
  getId(): void{
    this._exportar_id.disparador_id.subscribe(data => {
      console.log("ssdd", data);
      this.id = data;
    })
  }
*/
  onClickNo():void{
    this.dialogRef.close();
  }

  async showInfo(){
    const response = await this._reactiveService.getCharacter(this.data.id);

    response.json().then( resp => {
      this.characterInfo = resp;
    }).catch((error)=> alert('hubo un error'));
  }

}
