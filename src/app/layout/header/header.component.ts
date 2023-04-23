import { Component, OnInit, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuList: {name: string, link: string}[] = [
    {name: 'Inicio', link: '/rickandmorty'}, 
    {name: 'Favoritos', link: '/rickandmorty/favorites'}, 
    {name: 'Ejemplo', link: '/ejemplo'}
  ];
  username: string | undefined = undefined;
  
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  @Input() title: string | undefined = undefined;
  @Input() selected: undefined | 'Inicio' | 'Favoritos' | 'Ejemplo' = undefined;
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth
      .getUsername()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((username)=>{
        this.username = username; 
      });
  }

}
