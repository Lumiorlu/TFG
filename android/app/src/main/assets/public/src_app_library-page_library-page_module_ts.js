"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_library-page_library-page_module_ts"],{

/***/ 498:
/*!*************************************************************!*\
  !*** ./src/app/library-page/library-page-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPagePageRoutingModule": () => (/* binding */ LibraryPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _library_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-page.page */ 7603);




const routes = [
    {
        path: '',
        component: _library_page_page__WEBPACK_IMPORTED_MODULE_0__.LibraryPagePage
    }
];
let LibraryPagePageRoutingModule = class LibraryPagePageRoutingModule {
};
LibraryPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LibraryPagePageRoutingModule);



/***/ }),

/***/ 9213:
/*!*****************************************************!*\
  !*** ./src/app/library-page/library-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPagePageModule": () => (/* binding */ LibraryPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _library_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-page-routing.module */ 498);
/* harmony import */ var _library_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library-page.page */ 7603);







let LibraryPagePageModule = class LibraryPagePageModule {
};
LibraryPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _library_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.LibraryPagePageRoutingModule
        ],
        declarations: [_library_page_page__WEBPACK_IMPORTED_MODULE_1__.LibraryPagePage]
    })
], LibraryPagePageModule);



/***/ }),

/***/ 7603:
/*!***************************************************!*\
  !*** ./src/app/library-page/library-page.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPagePage": () => (/* binding */ LibraryPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _library_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-page.page.html?ngResource */ 5236);
/* harmony import */ var _library_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library-page.page.scss?ngResource */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LibraryPagePage = class LibraryPagePage {
    constructor() { }
    ngOnInit() {
    }
};
LibraryPagePage.ctorParameters = () => [];
LibraryPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-library-page',
        template: _library_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_library_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LibraryPagePage);



/***/ }),

/***/ 3069:
/*!****************************************************************!*\
  !*** ./src/app/library-page/library-page.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJyYXJ5LXBhZ2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5236:
/*!****************************************************************!*\
  !*** ./src/app/library-page/library-page.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button meu=\"main-content\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>Biblioteca</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_library-page_library-page_module_ts.js.map