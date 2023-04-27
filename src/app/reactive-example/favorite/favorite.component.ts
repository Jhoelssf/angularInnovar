import { Component, Input, OnInit } from '@angular/core';
import { ReactiveService } from 'src/app/shared/reactive.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  // @Input() favorites:any[]=[]
  favorites:any
  constructor(private reactiveService:ReactiveService) { }

  ngOnInit(): void {
    this.reactiveService.getFavorite().subscribe(
      res=>{
        this.favorites=res
      }
    )
    console.log(this.favorites)
  }

}
