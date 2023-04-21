import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public showBuscador: boolean = false;
  public optionDataLoad: string = "catalogo";
  constructor(
    private router: Router
  ) {
    this.showBuscador = this.router.url === '/catalogo';
    this.router.events.subscribe((val)=>{
      this.showBuscador = this.router.url === '/catalogo';
    })
  }

  ngOnInit(): void {
  }

  loadSeachInput(option: string){
    this.optionDataLoad = option;
  }
  
}
