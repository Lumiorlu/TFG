"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_berserk-t1-reader_berserk-t1-reader_module_ts"],{

/***/ 4297:
/*!***********************************************************************!*\
  !*** ./src/app/berserk-t1-reader/berserk-t1-reader-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BerserkT1ReaderPageRoutingModule": () => (/* binding */ BerserkT1ReaderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _berserk_t1_reader_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./berserk-t1-reader.page */ 1266);




const routes = [
    {
        path: '',
        component: _berserk_t1_reader_page__WEBPACK_IMPORTED_MODULE_0__.BerserkT1ReaderPage
    }
];
let BerserkT1ReaderPageRoutingModule = class BerserkT1ReaderPageRoutingModule {
};
BerserkT1ReaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BerserkT1ReaderPageRoutingModule);



/***/ }),

/***/ 5190:
/*!***************************************************************!*\
  !*** ./src/app/berserk-t1-reader/berserk-t1-reader.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BerserkT1ReaderPageModule": () => (/* binding */ BerserkT1ReaderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _berserk_t1_reader_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./berserk-t1-reader-routing.module */ 4297);
/* harmony import */ var _berserk_t1_reader_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./berserk-t1-reader.page */ 1266);







let BerserkT1ReaderPageModule = class BerserkT1ReaderPageModule {
};
BerserkT1ReaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _berserk_t1_reader_routing_module__WEBPACK_IMPORTED_MODULE_0__.BerserkT1ReaderPageRoutingModule
        ],
        declarations: [_berserk_t1_reader_page__WEBPACK_IMPORTED_MODULE_1__.BerserkT1ReaderPage]
    })
], BerserkT1ReaderPageModule);



/***/ }),

/***/ 1266:
/*!*************************************************************!*\
  !*** ./src/app/berserk-t1-reader/berserk-t1-reader.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BerserkT1ReaderPage": () => (/* binding */ BerserkT1ReaderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _berserk_t1_reader_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./berserk-t1-reader.page.html?ngResource */ 9397);
/* harmony import */ var _berserk_t1_reader_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./berserk-t1-reader.page.scss?ngResource */ 1221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 2111);





let BerserkT1ReaderPage = class BerserkT1ReaderPage {
    constructor(storage) {
        this.storage = storage;
        this.images = [];
    }
    ngOnInit() {
        this.getImagenes();
    }
    cargarImagen($event) {
        const file = $event.target.files[0];
        console.log(file);
        const imgRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, `Mangas/Berserk/${file.name}`);
        (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(imgRef, file).then(resp => console.log(resp)).catch(err => console.log(err));
    }
    getImagenes() {
        const imagenesRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, 'Mangas/Berserk');
        (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.listAll)(imagenesRef).then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(resp);
            this.images = [];
            for (let item of resp.items) {
                const url = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(item);
                this.images.push(url);
            }
        })).catch(err => { console.log(err); });
    }
};
BerserkT1ReaderPage.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
BerserkT1ReaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-berserk-t1-reader',
        template: _berserk_t1_reader_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_berserk_t1_reader_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BerserkT1ReaderPage);



/***/ }),

/***/ 1221:
/*!**************************************************************************!*\
  !*** ./src/app/berserk-t1-reader/berserk-t1-reader.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZXJzZXJrLXQxLXJlYWRlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9397:
/*!**************************************************************************!*\
  !*** ./src/app/berserk-t1-reader/berserk-t1-reader.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n<div class=\"images\">\n  <img [src]=\"image\" *ngFor=\"let image of images\" width=\"400\">\n</div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_berserk-t1-reader_berserk-t1-reader_module_ts.js.map