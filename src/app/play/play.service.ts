import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  typeKanas: string;
  sensJeu: string ;
  nbQuestionsTotales: number;
  partieEnCours: boolean = false;

  nbQuestionsPosees: number = 0;
  nbBonnesReponses: number = 0;
  bonneReponse: string = "";
  caractere: string = "";
  propositions: string[] = ['', '', '', ''];
  nbCaracteres: number;
  reponseCouranteBonne: boolean = false;
  reponseCouranteFausse: boolean = false;
  questionRepondue: boolean = false;
  reponseChoisie: string = "";

  hiraganas = [
    'あ','い','う','え','お',
    'か','き','く','け','こ',
    'さ','し','す','せ','そ',
    'た','ち','つ','て','と',
    'な','に','ぬ','ね','の',
    'は','ひ','ふ','へ','ほ',
    'ま','み','む','め','も',
    'や','ゆ','よ',
    'ら','り','る','れ','ろ',
    'わ','を',
    'ん'
  ];
  
  katakanas = [
    'ア','イ','ウ','エ','オ',
    'カ','キ','ク','ケ','コ',
    'サ','シ','ス','セ','ソ',
    'タ','チ','ツ','テ','ト',
    'ナ','ニ','ヌ','ネ','ノ',
    'ハ','ヒ','フ','ヘ','ホ',
    'マ','ミ','ム','メ','モ',
    'ヤ','ユ','ヨ',
    'ラ','リ','ル','レ','ロ',
    'ワ','ヲ',
    'ン'
  ];
  
  romajis = [
    'a','i','u','e','o',
    'ka','ki','ku','ke','ko',
    'sa','shi','su','se','so',
    'ta','chi','tsu','te','to',
    'na','ni','nu','ne','no',
    'ha','hi','fu','he','ho',
    'ma','mi','mu','me','mo',
    'ya','yu','yo',
    'ra','ri','ru','re','ro',
    'wa','wo',
    'n'
  ];

  constructor() { }

  partieFinie(): boolean {
    return this.nbQuestionsPosees === this.nbQuestionsTotales;
  }

  private shuffle(array: any[]): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  menuPrincipal() {
    this.typeKanas = "";
    this.sensJeu = "";
    this.nbQuestionsTotales = 0;
    this.partieEnCours = false;

    this.nbQuestionsPosees = 0;
    this.nbBonnesReponses = 0;
    this.caractere = "";
    this.propositions= ['', '', '', ''];
    this.nbCaracteres = 0;

    this. reponseCouranteBonne = false;
    this.reponseCouranteFausse = false;
    this.questionRepondue = false;
    this.reponseChoisie = "";
  }

  rejouer() {
    this.nbQuestionsPosees = 0;
    this.nbBonnesReponses = 0;
    this.caractere = "";
    this.propositions= ['', '', '', ''];

    this.reponseCouranteBonne = false;
    this.reponseCouranteFausse = false;
    this.questionRepondue = false;
    this.reponseChoisie = "";

    this.poserQuestion();
  }

  commencerPartie(typeKanas: string, sensJeu: string, nbQuestionsTotales: number): void {
    this.typeKanas = typeKanas;
    this.sensJeu = sensJeu;
    this.nbQuestionsTotales = nbQuestionsTotales;
    this.partieEnCours = true;

    this.nbCaracteres = this.romajis.length;
    this.poserQuestion();
  }

  poserQuestion() {
    for (let i = 0; i < this.nbCaracteres; i++) {
      let indice = Math.floor(Math.random() * this.nbCaracteres);
      let indicesProps = [];
      for(let j = 0 ; j < 3; j++)
        indicesProps.push(Math.floor(Math.random() * this.nbCaracteres));

      if (this.sensJeu == 'kana-romaji') {
        if (this.typeKanas == 'hiragana')
          this.caractere = this.hiraganas[indice];
        else if (this.typeKanas == 'katakana')
          this.caractere = this.katakanas[indice];

        for(let j = 0; j < 3; j++)
          this.propositions[j] = this.romajis[indicesProps[j]];

        this.propositions[3] = this.romajis[indice];
        this.bonneReponse = this.propositions[3];
      }

      else if (this.sensJeu == 'romaji-kana') {
        this.caractere = this.romajis[indice];

        for(let j = 0; j < 3; j++) {
          if (this.typeKanas == 'hiragana')
            this.propositions[j] = this.hiraganas[indicesProps[j]];
          else if (this.typeKanas == 'katakana')
            this.propositions[j] = this.katakanas[indicesProps[j]];
        }

        if (this.typeKanas == 'hiragana')
          this.propositions[3] = this.hiraganas[indice];
        else if (this.typeKanas == 'katakana')
          this.propositions[3] = this.katakanas[indice];

        this.bonneReponse = this.propositions[3];
      }
    }

    this.propositions = this.shuffle(this.propositions);
  }

  repondre(indice): boolean {
    if (this.questionRepondue)
      return false;
    this.reponseChoisie = this.propositions[indice];

    this.questionRepondue = true;
    if (this.propositions[indice] == this.bonneReponse) {
      this.nbBonnesReponses++;
      this.reponseCouranteBonne = true;
    }
    else
      this.reponseCouranteFausse = true;

    this.nbQuestionsPosees++;

    return true;
  }

  reponseOk(indice: number): boolean {
    if (this.reponseCouranteBonne && this.propositions[indice] == this.bonneReponse)
      return true;
    else if (this.reponseCouranteFausse && this.propositions[indice] == this.bonneReponse)
      return true;
    else
      return false;
  }

  reponseNonOk(prop): boolean {
    if(this.reponseCouranteFausse && prop == this.reponseChoisie)
      return true;
    else
      return false;
  }

  questionSuivante(): boolean {
      if (this.nbQuestionsPosees >= this.nbQuestionsTotales)
        return false;

      if (!this.questionRepondue)
        this.nbQuestionsPosees++;

      this.caractere = "";
      this.propositions= ['', '', '', ''];

      this.reponseCouranteBonne = false;
      this.reponseCouranteFausse = false;
      this.questionRepondue = false;

      this.poserQuestion();

      return true;
  }
}
