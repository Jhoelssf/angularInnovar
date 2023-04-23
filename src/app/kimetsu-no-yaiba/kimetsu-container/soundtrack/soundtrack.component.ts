import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundtrack',
  templateUrl: './soundtrack.component.html',
  styleUrls: ['./soundtrack.component.css']
})
export class SoundtrackComponent implements OnInit {
  audioPlayer: HTMLAudioElement;
  isPlaying: boolean = false;

  constructor() {
    this.audioPlayer = new Audio('/assets/static/soung-1.mp3');
  }

  playAudio(): void {
    if (this.audioPlayer.paused) {
      this.audioPlayer.play();
      this.isPlaying = true;
    } else {
      this.audioPlayer.pause();
      this.isPlaying = false;
    }
  }

  ngOnInit(): void {
  }

}

