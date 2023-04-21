import { Component, OnInit } from '@angular/core';
import { ICharacterInfo } from '../home/model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public favorites?: ICharacterInfo


  constructor() { }

  ngOnInit(): void {
  }

}
