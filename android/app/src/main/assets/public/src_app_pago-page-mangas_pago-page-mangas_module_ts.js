"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pago-page-mangas_pago-page-mangas_module_ts"],{

/***/ 117:
/*!*********************************************************************!*\
  !*** ./src/app/pago-page-mangas/pago-page-mangas-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoPagePageRoutingModule": () => (/* binding */ PagoPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pago_page_mangas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pago-page-mangas.page */ 2140);




const routes = [
    {
        path: '',
        component: _pago_page_mangas_page__WEBPACK_IMPORTED_MODULE_0__.PagoPagePage
    }
];
let PagoPagePageRoutingModule = class PagoPagePageRoutingModule {
};
PagoPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagoPagePageRoutingModule);



/***/ }),

/***/ 1274:
/*!*************************************************************!*\
  !*** ./src/app/pago-page-mangas/pago-page-mangas.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoPagePageModule": () => (/* binding */ PagoPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pago_page_mangas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pago-page-mangas-routing.module */ 117);
/* harmony import */ var _pago_page_mangas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pago-page-mangas.page */ 2140);







let PagoPagePageModule = class PagoPagePageModule {
};
PagoPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pago_page_mangas_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagoPagePageRoutingModule
        ],
        declarations: [_pago_page_mangas_page__WEBPACK_IMPORTED_MODULE_1__.PagoPagePage]
    })
], PagoPagePageModule);



/***/ }),

/***/ 2140:
/*!***********************************************************!*\
  !*** ./src/app/pago-page-mangas/pago-page-mangas.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoPagePage": () => (/* binding */ PagoPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pago_page_mangas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pago-page-mangas.page.html?ngResource */ 4881);
/* harmony import */ var _pago_page_mangas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pago-page-mangas.page.scss?ngResource */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_stripe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stripe.service */ 2865);





let PagoPagePage = class PagoPagePage {
    constructor(ngZone, stripeService) {
        this.ngZone = ngZone;
        this.stripeService = stripeService;
    }
    ngAfterViewInit() {
        this.card = elements.create('card');
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.onChange.bind(this));
    }
    onChange({ error }) {
        if (error) {
            this.ngZone.run(() => this.mostrarError = error.message);
        }
        else {
            this.ngZone.run(() => this.mostrarError = null);
        }
    }
    onClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { token, error } = yield stripe.createToken(this.card);
            if (token) {
                this.stripeService.charge(100, token.id);
                console.log(token);
            }
            else {
                this.ngZone.run(() => this.mostrarError = error.message);
            }
        });
    }
};
PagoPagePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone },
    { type: _services_stripe_service__WEBPACK_IMPORTED_MODULE_2__.StripeService }
];
PagoPagePage.propDecorators = {
    cardInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['cardInfo',] }]
};
PagoPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pago-page-mangas',
        template: _pago_page_mangas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pago_page_mangas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagoPagePage);



/***/ }),

/***/ 5626:
/*!************************************************************************!*\
  !*** ./src/app/pago-page-mangas/pago-page-mangas.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".tarjeta-credito {\n  width: 300px;\n  height: 150px;\n  border: 4px solid #5597e8;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin-bottom: 500px;\n  margin-left: 45px;\n}\n\n.botonPagar {\n  margin-top: 30px;\n}\n\n.tituloPago {\n  font-family: \"Franklin Gothic Medium\";\n  margin-left: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ28tcGFnZS1tYW5nYXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXFRGRyUyMEZJTkFMXFxzcmNcXGFwcFxccGFnby1wYWdlLW1hbmdhc1xccGFnby1wYWdlLW1hbmdhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHFDQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJwYWdvLXBhZ2UtbWFuZ2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXJqZXRhLWNyZWRpdG97XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyOjRweCBzb2xpZCByZ2IoODUsIDE1MSwgMjMyKTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5IDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcblxyXG59XHJcblxyXG4uYm90b25QYWdhcntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi50aXR1bG9QYWdve1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJztcclxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG59IiwiLnRhcmpldGEtY3JlZGl0byB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzU1OTdlODtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbi1ib3R0b206IDUwMHB4O1xuICBtYXJnaW4tbGVmdDogNDVweDtcbn1cblxuLmJvdG9uUGFnYXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udGl0dWxvUGFnbyB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIjtcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XG59Il19 */";

/***/ }),

/***/ 4881:
/*!************************************************************************!*\
  !*** ./src/app/pago-page-mangas/pago-page-mangas.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\r\n  <ion-title class=\"tituloPago\">Realización de pago</ion-title>\r\n</ion-toolbar>\r\n\r\n\r\n  \r\n\r\n<div class=\"tarjeta-credito\">\r\n  <div>\r\n    <div #cardInfo></div>\r\n    <div class=\"error\" *ngIf=\"mostrarError\">\r\n      {{ mostrarError }}\r\n    </div>\r\n  </div>\r\n  <ion-button  class=\"botonPagar\" (click)=\"onClick()\" expand=\"block\" fill=\"solid\" shape=\"round\" routerLink=\"/manga-page\">\r\n    Pagar\r\n  </ion-button>\r\n</div>\r\n\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pago-page-mangas_pago-page-mangas_module_ts.js.map