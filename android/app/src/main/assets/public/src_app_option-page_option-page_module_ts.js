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
    ngOnInit() {
        /********
         * asi te subscribis a un observable para leer su valor y usarlo como quieras
         * lo unico "raro" es que asigno todo a una variable del tipo subscription porque luego me interesa "desuscribirme"
         * en caso de que cambie de pagina para que se rompa la conexion sino por detras continuaria
         */
        this.userSubs$ = this.authService.user$.subscribe((usuario) => {
            // eslint-disable-next-line max-len
            // es importante decir que la funcion handler recive un parametro del tipo any sino el compilador cree que no tiene propiedades y llora
            /*******
             * si hay algun cambio en este observable, esta funcion handler se volvera a ejecutar y esta asignacion
             * se volvera a realizar VALE!!!!??
             */
            this.userTest = usuario;
        });
    }
    ngOnDestroy() {
        /********
         * si utilizas el metodo de subscribe tienes que desuscribite justo ahi de la siguiente forma
         */
        this.userSubs$.unsubscribe();
    }
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
    delete(userTest) {
        console.log(userTest);
        if (window.confirm('Do you really want to delete?')) {
            this.authService.deleteUser(userTest).then((res) => {
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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button meu=\"main-content\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>Opciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button shape=\"round\" type=\"submit\" expand=\"block\" (click)=\"logOut()\">\n    Cerrar sesión\n  </ion-button>\n  <!-- aqui antes pusiste user.uid pero donde mierda esta user de donde lo lee??? si ni siquiera esta como variable de tu componente se entiend??? esto arreglado seria llamando a userTest.uid\n    \n    hacerlo con async se puede tambien pero como explico mas abajo tienes que declarar un ngIf o en el boton o en el ion-content como para poder usar el alias que le declares al async-->\n  <ion-button\n    color=\"danger\"\n    shape=\"round\"\n    type=\"submit\"\n    expand=\"block\"\n    (click)=\"delete(userTest.uid)\"\n  >\n    Borrar cuenta\n  </ion-button>\n\n  <!-- Como utilice el metodo de subscribirme y asignar el resultado a una variable del componente pues ya lo puede ver \n    si te preguntas porque mierda pongo el \"?\" es porque al principio userTest no esta definido hasta que hago las subscripcion. Entonces el signo lo que hace es NO ACCEDER a la propiedad en este caso \"email\" HASTA que userTest este DEFINIDO\n  -->\n\n  <p>{{userTest?.email}}</p>\n\n  <!-- aca un ejemplo para que veas todo lo que trae userTest usando el pipe JSON -->\n\n  <div>{{userTest | json}}</div>\n\n  <!-- este metodo es el mas complejo pero practico si tu sabes usar esto no necesitas subscribirte ni nada solo usar el observable directamente lo que hago es asignar todo a una variable user que SOLO esta disponible aqui en el html del tag ng-container tambien lo puedes hacer en un div pero recuerda que solo dentro de ese tag podras usarlo.\n  \n  Un truco puede ser englobar todo en un div o ng-container y ahi hacer esto del async pero corres el riesgo que si no carga el usuario o falla no vez nada asique no lo recomiendo para los que recien empiezan osea ustedes xd-->\n\n  <ng-container *ngIf=\"(authService.user$ | async) as user\">\n    <p>{{user.username}}</p>\n  </ng-container>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_option-page_option-page_module_ts.js.map