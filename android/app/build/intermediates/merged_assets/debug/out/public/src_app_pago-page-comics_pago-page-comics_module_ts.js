"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pago-page-comics_pago-page-comics_module_ts"],{

/***/ 5258:
/*!*********************************************************************!*\
  !*** ./src/app/pago-page-comics/pago-page-comics-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoPagePageRoutingModule": () => (/* binding */ PagoPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pago_page_comics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pago-page-comics.page */ 3958);




const routes = [
    {
        path: '',
        component: _pago_page_comics_page__WEBPACK_IMPORTED_MODULE_0__.PagoPagePage
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

/***/ 8552:
/*!*************************************************************!*\
  !*** ./src/app/pago-page-comics/pago-page-comics.module.ts ***!
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
/* harmony import */ var _pago_page_comics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pago-page-comics-routing.module */ 5258);
/* harmony import */ var _pago_page_comics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pago-page-comics.page */ 3958);







let PagoPagePageModule = class PagoPagePageModule {
};
PagoPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pago_page_comics_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagoPagePageRoutingModule
        ],
        declarations: [_pago_page_comics_page__WEBPACK_IMPORTED_MODULE_1__.PagoPagePage]
    })
], PagoPagePageModule);



/***/ }),

/***/ 3958:
/*!***********************************************************!*\
  !*** ./src/app/pago-page-comics/pago-page-comics.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoPagePage": () => (/* binding */ PagoPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pago_page_comics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pago-page-comics.page.html?ngResource */ 3155);
/* harmony import */ var _pago_page_comics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pago-page-comics.page.scss?ngResource */ 9947);
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
                if (window.confirm('Muchas gracias por tu compra'))
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
        selector: 'app-pago-page-comics',
        template: _pago_page_comics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pago_page_comics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagoPagePage);



/***/ }),

/***/ 9947:
/*!************************************************************************!*\
  !*** ./src/app/pago-page-comics/pago-page-comics.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".tarjeta-credito {\n  width: 300px;\n  height: 150px;\n  border: 4px solid #5597e8;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin-bottom: 500px;\n  margin-left: 45px;\n}\n\n.botonPagar {\n  margin-top: 30px;\n}\n\n.tituloPago {\n  font-family: \"Franklin Gothic Medium\";\n  margin-left: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ28tcGFnZS1jb21pY3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQ0FBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoicGFnby1wYWdlLWNvbWljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyamV0YS1jcmVkaXRve1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlcjo0cHggc29saWQgcmdiKDg1LCAxNTEsIDIzMik7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG5cclxufVxyXG5cclxuLmJvdG9uUGFnYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udGl0dWxvUGFnb3tcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bSc7XHJcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcclxufVxyXG5cclxuXHJcbiAgXHJcbiAiXX0= */";

/***/ }),

/***/ 3155:
/*!************************************************************************!*\
  !*** ./src/app/pago-page-comics/pago-page-comics.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\r\n  <ion-title class=\"tituloPago\">Realización de pago</ion-title>\r\n</ion-toolbar>\r\n\r\n\r\n  \r\n\r\n<div class=\"tarjeta-credito\">\r\n  <div>\r\n    <div #cardInfo></div>\r\n    <div class=\"error\" *ngIf=\"mostrarError\">\r\n      {{ mostrarError }}\r\n    </div>\r\n  </div>\r\n  <ion-button class=\"botonPagar\" (click)=\"onClick()\" expand=\"block\" fill=\"solid\" shape=\"round\" routerLink=\"/comic-page\">\r\n    Pagar\r\n  </ion-button>\r\n</div>\r\n\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pago-page-comics_pago-page-comics_module_ts.js.map