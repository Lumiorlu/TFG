"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_favorites-page_favorites-page_module_ts"],{

/***/ 9768:
/*!*****************************************************************!*\
  !*** ./src/app/favorites-page/favorites-page-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPagePageRoutingModule": () => (/* binding */ FavoritesPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _favorites_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-page.page */ 3838);




const routes = [
    {
        path: '',
        component: _favorites_page_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPagePage
    }
];
let FavoritesPagePageRoutingModule = class FavoritesPagePageRoutingModule {
};
FavoritesPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritesPagePageRoutingModule);



/***/ }),

/***/ 7629:
/*!*********************************************************!*\
  !*** ./src/app/favorites-page/favorites-page.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPagePageModule": () => (/* binding */ FavoritesPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _favorites_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-page-routing.module */ 9768);
/* harmony import */ var _favorites_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites-page.page */ 3838);







let FavoritesPagePageModule = class FavoritesPagePageModule {
};
FavoritesPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favorites_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPagePageRoutingModule
        ],
        declarations: [_favorites_page_page__WEBPACK_IMPORTED_MODULE_1__.FavoritesPagePage]
    })
], FavoritesPagePageModule);



/***/ }),

/***/ 3838:
/*!*******************************************************!*\
  !*** ./src/app/favorites-page/favorites-page.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPagePage": () => (/* binding */ FavoritesPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _favorites_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-page.page.html?ngResource */ 7466);
/* harmony import */ var _favorites_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites-page.page.scss?ngResource */ 7843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FavoritesPagePage = class FavoritesPagePage {
    constructor() { }
    ngOnInit() {
    }
};
FavoritesPagePage.ctorParameters = () => [];
FavoritesPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-favorites-page',
        template: _favorites_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_favorites_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavoritesPagePage);



/***/ }),

/***/ 7843:
/*!********************************************************************!*\
  !*** ./src/app/favorites-page/favorites-page.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZXMtcGFnZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7466:
/*!********************************************************************!*\
  !*** ./src/app/favorites-page/favorites-page.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button meu=\"main-content\"></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Favoritos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_favorites-page_favorites-page_module_ts.js.map