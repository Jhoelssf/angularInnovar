import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuList: {name: string, link: string}[] = [
    {name: 'Inicio', link: '/rickandmorty'}, 
    {name: 'Favoritos', link: '/rickandmorty/favorites'}, 
    {name: 'Ejemplo', link: '/ejemplo'}];
    
  @Input() title: string | undefined = undefined;
  @Input() selected: undefined | 'Inicio' | 'Favoritos' | 'Ejemplo' = undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
