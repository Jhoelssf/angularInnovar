import { Component, Input, OnInit } from '@angular/core';
import { ReactiveService } from 'src/app/shared/reactive.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() dial: any[]=[];
  constructor(private reactiveService:ReactiveService) { }
  ngOnInit(): void {
    this.reactiveService.getDialog().subscribe(
      res=>{
        this.dial=res
        console.log(this.dial)
      }
    )
  }

}
