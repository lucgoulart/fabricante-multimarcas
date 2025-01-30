import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // O serviço será compartilhado em toda a aplicação
})
export class MusicaService {
  private audio = new Audio('musica-audio.mp4');
  isPlaying: boolean = false;

  constructor() {
    this.audio.loop = true; // Mantém a música tocando em loop
  }

  playMusic() {
    if (!this.isPlaying) {
      this.audio.play().catch(error => console.error('Erro ao reproduzir áudio:', error));
      this.isPlaying = true;
    }
  }

  stopMusic() {
    this.audio.pause();
    this.isPlaying = false;
  }
}
