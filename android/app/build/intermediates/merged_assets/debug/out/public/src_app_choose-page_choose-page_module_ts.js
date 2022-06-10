"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_choose-page_choose-page_module_ts"],{

/***/ 2454:
/*!***********************************************************!*\
  !*** ./src/app/choose-page/choose-page-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoosePagePageRoutingModule": () => (/* binding */ ChoosePagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _choose_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-page.page */ 3908);




const routes = [
    {
        path: '',
        component: _choose_page_page__WEBPACK_IMPORTED_MODULE_0__.ChoosePagePage
    }
];
let ChoosePagePageRoutingModule = class ChoosePagePageRoutingModule {
};
ChoosePagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChoosePagePageRoutingModule);



/***/ }),

/***/ 6478:
/*!***************************************************!*\
  !*** ./src/app/choose-page/choose-page.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoosePagePageModule": () => (/* binding */ ChoosePagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _choose_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-page-routing.module */ 2454);
/* harmony import */ var _choose_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-page.page */ 3908);







let ChoosePagePageModule = class ChoosePagePageModule {
};
ChoosePagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _choose_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChoosePagePageRoutingModule
        ],
        declarations: [_choose_page_page__WEBPACK_IMPORTED_MODULE_1__.ChoosePagePage]
    })
], ChoosePagePageModule);



/***/ }),

/***/ 3908:
/*!*************************************************!*\
  !*** ./src/app/choose-page/choose-page.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoosePagePage": () => (/* binding */ ChoosePagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _choose_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-page.page.html?ngResource */ 2503);
/* harmony import */ var _choose_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-page.page.scss?ngResource */ 180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ChoosePagePage = class ChoosePagePage {
    constructor() { }
    ngOnInit() {
    }
};
ChoosePagePage.ctorParameters = () => [];
ChoosePagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-choose-page',
        template: _choose_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_choose_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChoosePagePage);



/***/ }),

/***/ 180:
/*!**************************************************************!*\
  !*** ./src/app/choose-page/choose-page.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".mangaButton {\n  margin-top: 80px;\n  height: 200px;\n}\n\n.comicButton {\n  margin-top: 40px;\n  height: 200px;\n}\n\n.tituloChoose {\n  margin-left: 140px;\n  font-size: 30px;\n  font-family: \"Trebuchet MS\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZS1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6ImNob29zZS1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5nYUJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5jb21pY0J1dHRvbntcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi50aXR1bG9DaG9vc2V7XG4gICAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTonVHJlYnVjaGV0IE1TJztcbn0iXX0= */";

/***/ }),

/***/ 2503:
/*!**************************************************************!*\
  !*** ./src/app/choose-page/choose-page.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"tituloChoose\" color=\"primary\">Elige</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-button class=\"mangaButton\" (click)=\"onClick()\" expand=\"full\" fill=\"outline\" shape=\"round\" routerLink=\"/manga-page\">\n    MANGA\n  </ion-button>\n\n  <ion-button class=\"comicButton\" (click)=\"onClick()\" expand=\"full\" fill=\"outline\" shape=\"round\" routerLink=\"/comic-page\">\n    COMICS\n  </ion-button>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_choose-page_choose-page_module_ts.js.map