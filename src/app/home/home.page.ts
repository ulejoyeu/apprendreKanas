import { Component } from '@angular/core';
import { PlayService } from '../play/play.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nbQuestions: number;
  typeKanas: string;
  sensJeu: string;

  constructor(private playService: PlayService, private router: Router) {}

  play() {
    this.playService.commencerPartie(this.typeKanas, this.sensJeu, this.nbQuestions);
    this.router.navigate(['/', 'play']);
  }
}
