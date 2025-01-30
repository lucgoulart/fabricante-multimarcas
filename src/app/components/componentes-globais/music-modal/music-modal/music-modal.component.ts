import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-modal',
  templateUrl: './music-modal.component.html',
  styleUrls: ['./music-modal.component.css']
})
export class MusicModalComponent implements OnInit {
  showModal: boolean = false;
  isPlaying: boolean = false;
  audio = new Audio('musica-audio.mp4'); // Caminho da música

  ngOnInit() {
    // const hasVisited = localStorage.getItem('musicModalShown');
    const hasVisited = ''
    if (!hasVisited) {
      this.showModal = true;
    }
  }

  playMusic() {
    this.audio.loop = true;
    this.audio.play();
    this.isPlaying = true;
    localStorage.setItem('musicModalShown', 'true'); // Salva escolha do usuário
    this.closeModal();
  }

  stopMusic() {
    this.audio.pause();
  }

  closeModal() {
    this.showModal = false;
  }
}
