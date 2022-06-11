"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_option-page_option-page_module_ts"],{

/***/ 9022:
/*!***********************************************************!*\
  !*** ./src/app/option-page/option-page-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionPagePageRoutingModule": () => (/* binding */ OptionPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _option_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option-page.page */ 9335);




const routes = [
    {
        path: '',
        component: _option_page_page__WEBPACK_IMPORTED_MODULE_0__.OptionPagePage
    }
];
let OptionPagePageRoutingModule = class OptionPagePageRoutingModule {
};
OptionPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OptionPagePageRoutingModule);



/***/ }),

/***/ 6940:
/*!***************************************************!*\
  !*** ./src/app/option-page/option-page.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionPagePageModule": () => (/* binding */ OptionPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _option_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option-page-routing.module */ 9022);
/* harmony import */ var _option_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option-page.page */ 9335);







let OptionPagePageModule = class OptionPagePageModule {
};
OptionPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _option_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.OptionPagePageRoutingModule
        ],
        declarations: [_option_page_page__WEBPACK_IMPORTED_MODULE_1__.OptionPagePage]
    })
], OptionPagePageModule);



/***/ }),

/***/ 9335:
/*!*************************************************!*\
  !*** ./src/app/option-page/option-page.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionPagePage": () => (/* binding */ OptionPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _option_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option-page.page.html?ngResource */ 8765);
/* harmony import */ var _option_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option-page.page.scss?ngResource */ 8113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);






let OptionPagePage = class OptionPagePage {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.successMsg = '';
        this.errorMsg = '';
    }
    ngOnInit() { }
    logOut() {
        this.authService
            .signoutUser()
            .then((res) => {
            this.router.navigateByUrl('/home');
        })
            .catch((error) => {
            console.log(error);
        });
    }
    delete(user) {
        console.log(user);
        if (window.confirm('Do you really want to delete?')) {
            this.authService.
                deleteUser(user.uid)
                .then((res) => {
                //this.router.navigateByUrl('/home');
            });
        }
    }
};
OptionPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
OptionPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-option-page',
        template: _option_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_option_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OptionPagePage);



/***/ }),

/***/ 8113:
/*!**************************************************************!*\
  !*** ./src/app/option-page/option-page.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHRpb24tcGFnZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8765:
/*!**************************************************************!*\
  !*** ./src/app/option-page/option-page.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button meu=\"main-content\"></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Opciones</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-button shape=\"round\" type=\"submit\" expand=\"block\" (click)=\"logOut()\"> Cerrar sesión </ion-button>\r\n    <ion-button color=\"danger\" shape=\"round\" type=\"submit\" expand=\"block\" (click)=\"delete(user.uid)\"> Borrar cuenta </ion-button>\r\n  \r\n  \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_option-page_option-page_module_ts.js.map