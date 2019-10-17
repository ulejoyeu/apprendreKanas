(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title text-center>\n      Apprendre les kanas\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"secondary\">\n  <ion-card color=\"light\" margin-bottom>\n    <ion-card-header>\n      <ion-card-title>Type de kanas</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-segment [(ngModel)]=\"typeKanas\">\n        <ion-segment-button value=\"hiragana\" checked>\n          <ion-label>Hiraganas<br>ひらがな</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"katakana\">\n          <ion-label>Katakanas<br>カタカナ</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color=\"light\" margin-bottom>\n    <ion-card-header>\n      <ion-card-title>Sens de jeu</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-segment [(ngModel)]=\"sensJeu\">\n        <ion-segment-button value=\"kana-romaji\" checked>\n          <ion-label>Kanas &rarr; Romajis</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"romaji-kana\">\n          <ion-label>Romaji &rarr; Kanas</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color=\"light\" margin-bottom>\n    <ion-card-header>\n      <ion-card-title>Nombre de questions</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-input [(ngModel)]=\"nbQuestions\" margin type=\"number\" placeholder=\"Nombre de questions\"></ion-input>\n    </ion-card-content>\n  </ion-card>\n\n  <div text-center>\n    <ion-button (click)=\"play()\" color=\"tertiary\">Jouer</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _play_play_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../play/play.service */ "./src/app/play/play.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomePage = /** @class */ (function () {
    function HomePage(playService, router) {
        this.playService = playService;
        this.router = router;
    }
    HomePage.prototype.play = function () {
        this.playService.commencerPartie(this.typeKanas, this.sensJeu, this.nbQuestions);
        this.router.navigate(['/', 'play']);
    };
    HomePage.ctorParameters = function () { return [
        { type: _play_play_service__WEBPACK_IMPORTED_MODULE_2__["PlayService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_play_play_service__WEBPACK_IMPORTED_MODULE_2__["PlayService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map