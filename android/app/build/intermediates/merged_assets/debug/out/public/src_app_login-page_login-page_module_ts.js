"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login-page_login-page_module_ts"],{

/***/ 5454:
/*!*********************************************************!*\
  !*** ./src/app/login-page/login-page-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPagePageRoutingModule": () => (/* binding */ LoginPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.page */ 665);




const routes = [
    {
        path: '',
        component: _login_page_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPagePageRoutingModule = class LoginPagePageRoutingModule {
};
LoginPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPagePageRoutingModule);



/***/ }),

/***/ 6918:
/*!*************************************************!*\
  !*** ./src/app/login-page/login-page.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPagePageModule": () => (/* binding */ LoginPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page-routing.module */ 5454);
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.page */ 665);







let LoginPagePageModule = class LoginPagePageModule {
};
LoginPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPagePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_page_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPagePageModule);



/***/ }),

/***/ 665:
/*!***********************************************!*\
  !*** ./src/app/login-page/login-page.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.page.html?ngResource */ 1114);
/* harmony import */ var _login_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.page.scss?ngResource */ 5058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);







let LoginPage = class LoginPage {
    constructor(router, authService, fb) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.successMsg = '';
        this.errorMsg = '';
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.error_msg = {
            email: [
                {
                    type: 'required',
                    message: 'Provide email.'
                },
                {
                    type: 'pattern',
                    message: 'Email is not valid.'
                }
            ],
            password: [
                {
                    type: 'required',
                    message: 'Password is required.'
                },
                {
                    type: 'minlength',
                    message: 'Password length should be 8 characters long.'
                }
            ]
        };
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            ])),
        });
    }
    signIn(value) {
        this.authService.signinUser(value)
            .then((response) => {
            console.log(response);
            this.errorMsg = '';
            this.router.navigate(['/choose-page']);
        }, error => {
            this.errorMsg = error.message;
            this.successMsg = '';
        });
    }
    goToSignup() {
        this.router.navigate(['/home']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 5058:
/*!************************************************************!*\
  !*** ./src/app/login-page/login-page.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "#register-button {\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZWdpc3Rlci1idXR0b257XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbn0iXX0= */";

/***/ }),

/***/ 1114:
/*!************************************************************!*\
  !*** ./src/app/login-page/login-page.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Iniciar sesión</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form (ngSubmit)=\"signIn(userForm.value)\" [formGroup]=\"userForm\">\n    <ion-item fill=\"solid\" class=\"ion-margin-bottom\">\n      <ion-input\n        type=\"email\"\n        placeholder=\"Email\"\n        formControlName=\"email\"\n      ></ion-input>\n      <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n      <ion-note\n        slot=\"error\"\n        *ngIf=\"(userForm.get('email').dirty || userForm.get('email').touched) && userForm.get('email').errors\"\n        >Email no válido</ion-note\n      >\n    </ion-item>\n    <ion-item fill=\"solid\" class=\"ion-margin-bottom\">\n      <ion-input\n        type=\"password\"\n        placeholder=\"Contraseña\"\n        formControlName=\"password\"\n      ></ion-input>\n      <ion-icon slot=\"start\" name=\"key\"></ion-icon>\n      <ion-note\n        slot=\"error\"\n        *ngIf=\"(userForm.get('password').dirty || userForm.get('password').touched) && userForm.get('password').errors\"\n        >La contraseña necesita 6 carateres</ion-note\n      >\n    </ion-item>\n\n    <ion-button\n      type=\"submit\"\n      expand=\"block\"\n      [disabled]=\"!userForm.valid\"\n      >Iniciar sesion</ion-button\n    >\n    <ion-button\n      type=\"button\"\n      expand=\"block\"\n      color=\"secondary\"\n      routerLink=\"/register-page\"\n      >Crear una cuenta</ion-button\n    >\n\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login-page_login-page_module_ts.js.map