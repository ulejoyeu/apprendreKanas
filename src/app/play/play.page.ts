import { Component, OnInit } from '@angular/core';
import { PlayService } from './play.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  couleurBouton: string[] = ['medium', 'medium', 'medium', 'medium'];

  constructor(private playService: PlayService) { }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.playService.menuPrincipal();
  }

  repondre(indice: number) {
    if(this.playService.repondre(indice)) {
      if(this.playService.reponseOk(indice)) {
        this.couleurBouton[indice] = 'success';
      } else {
        for(let i = 0; i < this.couleurBouton.length; i++) {
          if(this.playService.reponseOk(i)) {
            this.couleurBouton[i] = 'success';
          }
          this.couleurBouton[indice] = 'danger';
        }
      }
    }
  }

  questionSuivante() {
    if(this.playService.questionSuivante()) {
      this.couleurBouton = new Array();
      this.couleurBouton = ['medium', 'medium', 'medium', 'medium'];
    }
  }

  rejouer() {
    this.playService.rejouer();
    this.couleurBouton = new Array();
    this.couleurBouton = ['medium', 'medium', 'medium', 'medium'];
  }
}
