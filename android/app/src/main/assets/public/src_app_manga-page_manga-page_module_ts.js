"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_manga-page_manga-page_module_ts"],{

/***/ 8596:
/*!*********************************************************!*\
  !*** ./src/app/manga-page/manga-page-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MangaPagePageRoutingModule": () => (/* binding */ MangaPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _manga_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manga-page.page */ 258);




const routes = [
    {
        path: '',
        component: _manga_page_page__WEBPACK_IMPORTED_MODULE_0__.MangaPagePage
    }
];
let MangaPagePageRoutingModule = class MangaPagePageRoutingModule {
};
MangaPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MangaPagePageRoutingModule);



/***/ }),

/***/ 2738:
/*!*************************************************!*\
  !*** ./src/app/manga-page/manga-page.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MangaPagePageModule": () => (/* binding */ MangaPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _manga_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manga-page-routing.module */ 8596);
/* harmony import */ var _manga_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manga-page.page */ 258);







let MangaPagePageModule = class MangaPagePageModule {
};
MangaPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _manga_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MangaPagePageRoutingModule
        ],
        declarations: [_manga_page_page__WEBPACK_IMPORTED_MODULE_1__.MangaPagePage]
    })
], MangaPagePageModule);



/***/ }),

/***/ 258:
/*!***********************************************!*\
  !*** ./src/app/manga-page/manga-page.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MangaPagePage": () => (/* binding */ MangaPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _manga_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manga-page.page.html?ngResource */ 9592);
/* harmony import */ var _manga_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manga-page.page.scss?ngResource */ 757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MangaPagePage = class MangaPagePage {
    constructor() { }
};
MangaPagePage.ctorParameters = () => [];
MangaPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-manga-page',
        template: _manga_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_manga_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MangaPagePage);



/***/ }),

/***/ 757:
/*!************************************************************!*\
  !*** ./src/app/manga-page/manga-page.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5nYS1wYWdlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9592:
/*!************************************************************!*\
  !*** ./src/app/manga-page/manga-page.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <!-- <ion-menu-button meu=\"main-content\"></ion-menu-button> -->\n    <ion-menu-button auto-hide=\"false\" menu=\"first\"></ion-menu-button>\n  </ion-buttons>\n\n  <ion-title>Mangas</ion-title>\n</ion-toolbar>\n<ion-searchbar\n  placeholder=\"Nombre del Manga\"\n  inputmode=\"decimal\"\n  type=\"decimal\"\n  (ionChange)=\"onSearchChange($event)\"\n  [debounce]=\"250\"\n></ion-searchbar>\n\n<ion-content>\n  <ion-card>\n      <img src=\"assets/icon/berserk_1_2.jpg\">\n\n    <ion-card-content>\n      <h1>Berserk Tomo 1</h1>\n      <h1>Precio: 16€</h1>\n      La historia está ambientada en una época con tintes de la Europa medieval y renacentista, \n      en la cual se cuenta la vida de Guts, un mercenario huérfano que acompañado del elfo Puck, \n      caza seres demoníacos llamados apóstoles.\n    </ion-card-content>\n\n    <ion-card>\n      <ion-item>\n        <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/pago-page-mangas\">Comprar</ion-button>\n        <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/berserk-t1-reader\">Leer</ion-button>\n      </ion-item>\n    </ion-card>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <img src=\"assets/icon/fairy_tail_1_4.jpg\">\n    </ion-card-header>\n\n    <ion-card-content>\n      <h1>Fairy Tail</h1>\n      <h1>Precio: 8€</h1>\n      La serie relata las aventuras del joven mago Natsu Dragneel\n      y su gato parlante Happy que viajan juntos en busca del d\n      ragón Igneel, el cual Natsu declara que es su padre adoptivo,\n      hasta que un día conocen a una chica llamada Lucy Heartfilia,\n      una maga de espíritus celestiales.\n    </ion-card-content>\n    <ion-card>\n      <ion-item>\n        <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/pago-page-mangas\">Comprar</ion-button>\n        <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/fairytail-t1-reader\">Leer</ion-button>\n      </ion-item>\n    </ion-card>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_manga-page_manga-page_module_ts.js.map