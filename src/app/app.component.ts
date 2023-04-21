import { Component, OnInit } from '@angular/core';
import { RootObject } from './pokemon-modulo/pokemon-cards/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  favorites_list: RootObject[] = [];
  title = 'primer-proyecto';
  ngOnInit(): void {
    const str1: string = 'ejemplo';
    this.ejemplo(str1);
  }

  ejemplo(str: string = 'ejemplo2') {}
}
