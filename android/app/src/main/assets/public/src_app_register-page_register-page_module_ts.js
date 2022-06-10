"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register-page_register-page_module_ts"],{

/***/ 2950:
/*!***************************************************************!*\
  !*** ./src/app/register-page/register-page-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPagePageRoutingModule": () => (/* binding */ RegisterPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-page.page */ 9009);




const routes = [
    {
        path: '',
        component: _register_page_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPagePageRoutingModule = class RegisterPagePageRoutingModule {
};
RegisterPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        providers: []
    })
], RegisterPagePageRoutingModule);



/***/ }),

/***/ 3480:
/*!*******************************************************!*\
  !*** ./src/app/register-page/register-page.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPagePageModule": () => (/* binding */ RegisterPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-page-routing.module */ 2950);
/* harmony import */ var _register_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-page.page */ 9009);







let RegisterPagePageModule = class RegisterPagePageModule {
};
RegisterPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPagePageRoutingModule
        ],
        declarations: [_register_page_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPagePageModule);



/***/ }),

/***/ 9009:
/*!*****************************************************!*\
  !*** ./src/app/register-page/register-page.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-page.page.html?ngResource */ 2505);
/* harmony import */ var _register_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-page.page.scss?ngResource */ 2246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);







let RegisterPage = class RegisterPage {
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
                    message: 'Provide email.',
                },
                {
                    type: 'pattern',
                    message: 'Email is not valid.',
                },
            ],
            password: [
                {
                    type: 'required',
                    message: 'Password length should be 8 characters long.',
                },
            ],
            username: [
                {
                    type: 'required',
                    message: 'Username is required.'
                },
            ],
        };
    }
    get email() {
        return this.userForm.get('email');
    }
    get password() {
        return this.userForm.get('password');
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])),
            /**
             * nunca va a funcionar nada si no lo agregas en el formulario, cada campo del form queda
             * bindeado al html a travez del attr formControlName. Es la unica forma de que lo que hagas
             * en el input afecte al formulario. Ahora el valor de tu formulario será
             * {
             *  email:'', password:'', username:''
             * }
             * y se completará con lo que rellenes.
             */
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    signUp(value) {
        //aqui si revisas el ngSubmit el valor de 'value' es el formulario como lo mencioné antes
        // {username, password, email}
        this.authService.createUser(value).then((response) => {
            this.errorMsg = '';
            this.successMsg = 'New user created.';
        }, (error) => {
            this.errorMsg = error.message;
            this.successMsg = '';
        });
    }
    goToLogin() {
        this.router.navigate(['/login-page']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register',
        template: _register_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 2246:
/*!******************************************************************!*\
  !*** ./src/app/register-page/register-page.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2505:
/*!******************************************************************!*\
  !*** ./src/app/register-page/register-page.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Registrarse</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"signUp(userForm.value)\">\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Nombre de Usuario\" formControlName=\"username\"></ion-input>\n      <ion-icon slot=\"start\" name=\"person-circle-outline\"></ion-icon>\n    </ion-item>\n\n    <ng-container *ngFor=\"let error of error_msg.username\">\n      <div\n        *ngIf=\"userForm.get('username').hasError(error.type) && (userForm.get('username').dirty || userForm.get('username').touched)\"\n      >\n        {{ error.message }}\n      </div>\n    </ng-container> \n\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n      <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n    </ion-item>\n\n    <ng-container *ngFor=\"let error of error_msg.email\">\n      <div\n        *ngIf=\"userForm.get('email').hasError(error.type) && (userForm.get('email').dirty || userForm.get('email').touched)\"\n      >\n        {{ error.message }}\n      </div>\n    </ng-container>\n\n    <ion-item>\n      <ion-input type=\"password\" placeholder=\"Contraseña\" formControlName=\"password\"></ion-input>\n      <ion-icon slot=\"start\" name=\"key\"></ion-icon>\n    </ion-item>\n\n    <ng-container *ngFor=\"let error of error_msg.password\">\n      <div\n        *ngIf=\"userForm.get('password').hasError(error.type) && (userForm.get('password').dirty || userForm.get('password').touched)\"\n      >\n        {{ error.message }}\n      </div>\n    </ng-container>\n\n    <ion-button shape=\"round\" type=\"submit\" expand=\"block\" [disabled]=\"!userForm.valid\" routerLink=\"/login-page\">\n      Continuar\n    </ion-button>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_register-page_register-page_module_ts.js.map