import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-track',
  templateUrl: './sound-track.component.html',
  styleUrls: ['./sound-track.component.css']
})
export class SoundTrackComponent implements OnInit {

  audioPlayer: HTMLAudioElement;
  isPlaying: boolean = false;

  constructor() {this.audioPlayer = new Audio('/assets/static/sound-1.mp3');}

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
