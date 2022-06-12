"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_comic-page_comic-page_module_ts"],{

/***/ 3662:
/*!*********************************************************!*\
  !*** ./src/app/comic-page/comic-page-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComicPagePageRoutingModule": () => (/* binding */ ComicPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _comic_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comic-page.page */ 4309);




const routes = [
    {
        path: '',
        component: _comic_page_page__WEBPACK_IMPORTED_MODULE_0__.ComicPagePage
    }
];
let ComicPagePageRoutingModule = class ComicPagePageRoutingModule {
};
ComicPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComicPagePageRoutingModule);



/***/ }),

/***/ 2974:
/*!*************************************************!*\
  !*** ./src/app/comic-page/comic-page.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComicPagePageModule": () => (/* binding */ ComicPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _comic_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comic-page-routing.module */ 3662);
/* harmony import */ var _comic_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comic-page.page */ 4309);







let ComicPagePageModule = class ComicPagePageModule {
};
ComicPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comic_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComicPagePageRoutingModule
        ],
        declarations: [_comic_page_page__WEBPACK_IMPORTED_MODULE_1__.ComicPagePage]
    })
], ComicPagePageModule);



/***/ }),

/***/ 4309:
/*!***********************************************!*\
  !*** ./src/app/comic-page/comic-page.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComicPagePage": () => (/* binding */ ComicPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _comic_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comic-page.page.html?ngResource */ 1095);
/* harmony import */ var _comic_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comic-page.page.scss?ngResource */ 4923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ComicPagePage = class ComicPagePage {
    constructor() { }
    ngOnInit() {
    }
};
ComicPagePage.ctorParameters = () => [];
ComicPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-comic-page',
        template: _comic_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comic_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComicPagePage);



/***/ }),

/***/ 4923:
/*!************************************************************!*\
  !*** ./src/app/comic-page/comic-page.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21pYy1wYWdlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1095:
/*!************************************************************!*\
  !*** ./src/app/comic-page/comic-page.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button auto-hide=\"false\" menu=\"first\"></ion-menu-button>\r\n  </ion-buttons>\r\n\r\n  <ion-title>CÓMIC</ion-title>\r\n</ion-toolbar>\r\n<ion-searchbar\r\n  placeholder=\"Nombre del Cómic\"\r\n  inputmode=\"decimal\"\r\n  type=\"decimal\"\r\n  (ionChange)=\"onSearchChange($event)\"\r\n  [debounce]=\"250\"\r\n  showCancelButton=\"always\"\r\n></ion-searchbar>\r\n\r\n<ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"8\" size-md=\"8\" size-sm=\"6\" size-xs=\"12\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/imagenVenomyPunisher.jpg\" />\r\n\r\n          <ion-card-content>\r\n            <h1>Venom Funeral Pype</h1>\r\n            <h1>Precio: 12€</h1>\r\n            Punisher y Venom se unen en una aventura, están en el mismo lado de\r\n            la pelea contra una pandilla de California que amenaza a la ciudad.\r\n          </ion-card-content>\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/pago-page-comics\"\r\n                >Comprar</ion-button\r\n              >\r\n              <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/venom-fp-t3-reader\"\r\n                >Leer</ion-button\r\n              >\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <img src=\"assets/icon/batman.jpg\" />\r\n          <ion-card-content>\r\n            <h1>Batman: Night of the Monster Men</h1>\r\n            <h1>Precio: 10€</h1>\r\n            Cuando una gran tormenta se acerca a Gotham City, Batman, Batwoman y\r\n            Nightwing intentan prepararse para lo peor, ¡Pero nada puede\r\n            prepararlos para enormes monstruos que arrasan las calles! ¡Batman\r\n            necesitará que todos sus aliados se unan para evitar que estos\r\n            monstruos científicos locos destrocen su ciudad! ¿Serán suficientes\r\n            el Caballero Oscuro, Batwoman, Nightwing, Robin, Spoiler, Orphan y\r\n            Clayface? ¿Y quién es el cerebro detrás de todo esto?\r\n          </ion-card-content>\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/pago-page-comcis\"\r\n                >Comprar</ion-button\r\n              >\r\n              <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/batman-reader\"\r\n                >Leer</ion-button\r\n              >\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_comic-page_comic-page_module_ts.js.map