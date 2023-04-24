import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public showBuscador: boolean = false;
  public hideNav: boolean = true;
  public optionDataLoad: string = "catalogo";
  public responsiveMenu: boolean = false;
  constructor(
    private router: Router
  ) {
    this.showBuscador = this.router.url === '/catalogo';
    this.hideNav = this.router.url === '/login';
    this.router.events.subscribe((val)=>{
      this.showBuscador = this.router.url === '/catalogo';
      this.hideNav = this.router.url === '/login';
    })
  }

  ngOnInit(): void {
  }

  loadSeachInput(option: string){
    this.optionDataLoad = option;
    this.responsiveMenu=false
  }

  openResponsiveMenu(){
    this.responsiveMenu = !this.responsiveMenu;
  }
  
}
