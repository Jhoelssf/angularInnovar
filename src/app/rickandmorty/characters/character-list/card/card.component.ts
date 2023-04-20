import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Character } from 'src/app/rickandmorty/charactermodels';
import { FavoriteService } from 'src/app/shared/favorite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() character: Character | undefined = undefined;
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  hovered: boolean = false;
  favorite: boolean = false;
  constructor(
    private favoriteService: FavoriteService,
  ) { }

  ngOnInit(): void {
    this.favoriteService
      .getFavorites()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((characters)=>{
        this.favorite = characters.find(fav => fav.id === this.character?.id) !== undefined; 
      });
  }

  toggleHover(hovered: boolean){
    this.hovered = hovered;
  }
}
