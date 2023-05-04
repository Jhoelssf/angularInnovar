import { Component, OnInit } from '@angular/core';
import { RootObject1 } from '../interface/model';
import { HttpClient } from '@angular/common/http';
import { ReactiveService } from 'src/app/core/service/reactive.service';
import { SoundtrackComponent } from './soundtrack/soundtrack.component';

@Component({
  selector: 'app-kimetsu-conatiner',
  templateUrl: './kimetsu-container.component.html',
  styleUrls: ['./kimetsu-container.component.css']
})
export class KimetsuContainerComponent implements OnInit {
  objectCharacters: RootObject1|any;
  favorites: string[]=[];
  baseUrl= "https://demon-slayer-api.onrender.com/v1/";
  constructor(
    private http: HttpClient,
    private reactiveService: ReactiveService,
    ) {}

  ngOnInit(): void {
    console.log("hola:",this.objectCharacters)
    this.http.get<RootObject1>(`${this.baseUrl}`).subscribe((Response)=>{
      this.objectCharacters=Response;
      console.log("hola:",this.objectCharacters)
    });
  }


}
