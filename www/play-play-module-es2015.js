(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-play-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/play/play.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/play/play.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Apprendre les kanas\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"secondary\" *ngIf=\"!playService.partieFinie()\">\n  <p text-right class=\"score\"><b>Score : </b><span class=\"score-value\">{{ playService.nbBonnesReponses }} / {{ playService.nbQuestionsPosees }}</span></p>\n\n  <ion-card color=\"light\" class=\"character-to-guess\">\n    <ion-card-content text-center>\n      <h1>{{ playService.caractere }}</h1>\n    </ion-card-content>\n  </ion-card>\n  <br>\n\n  <ion-row class=\"answers\" margin-top>\n    <ion-col size=\"6\">\n      <ion-button [color]=\"couleurBouton[0]\" (click)=\"repondre(0)\">{{ playService.propositions[0] }}</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button [color]=\"couleurBouton[1]\" (click)=\"repondre(1)\">{{ playService.propositions[1] }}</ion-button>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"answers\">\n    <ion-col size=\"6\">\n      <ion-button [color]=\"couleurBouton[2]\" (click)=\"repondre(2)\">{{ playService.propositions[2] }}</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button [color]=\"couleurBouton[3]\" (click)=\"repondre(3)\">{{ playService.propositions[3] }}</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" (click)=\"questionSuivante()\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"arrow-dropright\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n<ion-content class=\"success-panel\" padding color=\"secondary\" *ngIf=\"playService.partieFinie()\">\n  <ion-card color=\"light\">\n    <ion-card-content text-center>\n      <h1>Vous avez un score de</h1><br>\n      <h1>{{ playService.nbBonnesReponses }} / {{ playService.nbQuestionsPosees }}</h1>\n      <br>\n      <ion-button color=\"tertiary\" (click)=\"rejouer()\">Rejouer</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/play/play.module.ts":
/*!*************************************!*\
  !*** ./src/app/play/play.module.ts ***!
  \*************************************/
/*! exports provided: PlayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageModule", function() { return PlayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play.page */ "./src/app/play/play.page.ts");







const routes = [
    {
        path: '',
        component: _play_page__WEBPACK_IMPORTED_MODULE_6__["PlayPage"]
    }
];
let PlayPageModule = class PlayPageModule {
};
PlayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_play_page__WEBPACK_IMPORTED_MODULE_6__["PlayPage"]]
    })
], PlayPageModule);



/***/ }),

/***/ "./src/app/play/play.page.scss":
/*!*************************************!*\
  !*** ./src/app/play/play.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".character-to-guess {\n  height: 35%;\n}\n.character-to-guess ion-card-content {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n.character-to-guess ion-card-content h1 {\n  font-size: 10em;\n  margin: auto;\n}\n.score {\n  font-size: 1.5em;\n}\n.score .score-value {\n  color: #999184;\n}\n.answers ion-col ion-button {\n  height: 5em;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NTRE1hY09TL1Byb2dyYW1tYXRpb24vYW5ndWxhci9hcHByZW5kcmVLYW5hcy9zcmMvYXBwL3BsYXkvcGxheS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BsYXkvcGxheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNDUjtBRENRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDWjtBRElBO0VBQ0ksZ0JBQUE7QUNESjtBREVJO0VBQ0ksY0FBQTtBQ0FSO0FETVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvcGxheS9wbGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFyYWN0ZXItdG8tZ3Vlc3Mge1xuICAgIGhlaWdodDogMzUlO1xuXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwZW07XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zY29yZSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAuc2NvcmUtdmFsdWUge1xuICAgICAgICBjb2xvcjogIzk5OTE4NDtcbiAgICB9XG59XG5cbi5hbnN3ZXJzIHtcbiAgICBpb24tY29sIHtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDVlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmNoYXJhY3Rlci10by1ndWVzcyB7XG4gIGhlaWdodDogMzUlO1xufVxuLmNoYXJhY3Rlci10by1ndWVzcyBpb24tY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNoYXJhY3Rlci10by1ndWVzcyBpb24tY2FyZC1jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiAxMGVtO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zY29yZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4uc2NvcmUgLnNjb3JlLXZhbHVlIHtcbiAgY29sb3I6ICM5OTkxODQ7XG59XG5cbi5hbnN3ZXJzIGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNWVtO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/play/play.page.ts":
/*!***********************************!*\
  !*** ./src/app/play/play.page.ts ***!
  \***********************************/
/*! exports provided: PlayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPage", function() { return PlayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _play_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.service */ "./src/app/play/play.service.ts");



let PlayPage = class PlayPage {
    constructor(playService) {
        this.playService = playService;
        this.couleurBouton = ['medium', 'medium', 'medium', 'medium'];
    }
    ngOnInit() {
    }
    ionViewWillLeave() {
        this.playService.menuPrincipal();
    }
    repondre(indice) {
        if (this.playService.repondre(indice)) {
            if (this.playService.reponseOk(indice)) {
                this.couleurBouton[indice] = 'success';
            }
            else {
                for (let i = 0; i < this.couleurBouton.length; i++) {
                    if (this.playService.reponseOk(i)) {
                        this.couleurBouton[i] = 'success';
                    }
                    this.couleurBouton[indice] = 'danger';
                }
            }
        }
    }
    questionSuivante() {
        if (this.playService.questionSuivante()) {
            this.couleurBouton = new Array();
            this.couleurBouton = ['medium', 'medium', 'medium', 'medium'];
        }
    }
    rejouer() {
        this.playService.rejouer();
        this.couleurBouton = new Array();
        this.couleurBouton = ['medium', 'medium', 'medium', 'medium'];
    }
};
PlayPage.ctorParameters = () => [
    { type: _play_service__WEBPACK_IMPORTED_MODULE_2__["PlayService"] }
];
PlayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-play',
        template: __webpack_require__(/*! raw-loader!./play.page.html */ "./node_modules/raw-loader/index.js!./src/app/play/play.page.html"),
        styles: [__webpack_require__(/*! ./play.page.scss */ "./src/app/play/play.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_play_service__WEBPACK_IMPORTED_MODULE_2__["PlayService"]])
], PlayPage);



/***/ })

}]);
//# sourceMappingURL=play-play-module-es2015.js.map