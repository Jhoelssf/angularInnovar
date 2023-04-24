import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Character, RootObject } from 'src/app/interface/model';
import { ReactiveServiceService } from 'src/app/service/reactive-service.service';

@Component({
  selector: 'app-dragon-ball-super',
  templateUrl: './dragon-ball-super.component.html',
  styleUrls: ['./dragon-ball-super.component.css']
})
export class DragonBallSuperComponent implements OnInit {
  favorites: string[]=[];
  objectCharacters: RootObject|any;
  baseUrl= "https://dragon-ballz-super-api.site/api";
  constructor(
    private http: HttpClient,
    private reactiveService: ReactiveServiceService,
    ) {}

  ngOnInit(): void {
    this.http.get<RootObject>(`${this.baseUrl}`).subscribe((Response)=>{
      this.objectCharacters=Response.characters;
      console.log("hola:",this.objectCharacters)
    });
  }

}
