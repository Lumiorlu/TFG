"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_venom-fp-t3-reader_venom-fp-t3-reader_module_ts"],{

/***/ 4183:
/*!*************************************************************************!*\
  !*** ./src/app/venom-fp-t3-reader/venom-fp-t3-reader-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenomFPT3ReaderPageRoutingModule": () => (/* binding */ VenomFPT3ReaderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _venom_fp_t3_reader_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venom-fp-t3-reader.page */ 690);




const routes = [
    {
        path: '',
        component: _venom_fp_t3_reader_page__WEBPACK_IMPORTED_MODULE_0__.VenomFPT3ReaderPage
    }
];
let VenomFPT3ReaderPageRoutingModule = class VenomFPT3ReaderPageRoutingModule {
};
VenomFPT3ReaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VenomFPT3ReaderPageRoutingModule);



/***/ }),

/***/ 7688:
/*!*****************************************************************!*\
  !*** ./src/app/venom-fp-t3-reader/venom-fp-t3-reader.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenomFPT3ReaderPageModule": () => (/* binding */ VenomFPT3ReaderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _venom_fp_t3_reader_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venom-fp-t3-reader-routing.module */ 4183);
/* harmony import */ var _venom_fp_t3_reader_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venom-fp-t3-reader.page */ 690);







let VenomFPT3ReaderPageModule = class VenomFPT3ReaderPageModule {
};
VenomFPT3ReaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _venom_fp_t3_reader_routing_module__WEBPACK_IMPORTED_MODULE_0__.VenomFPT3ReaderPageRoutingModule
        ],
        declarations: [_venom_fp_t3_reader_page__WEBPACK_IMPORTED_MODULE_1__.VenomFPT3ReaderPage]
    })
], VenomFPT3ReaderPageModule);



/***/ }),

/***/ 690:
/*!***************************************************************!*\
  !*** ./src/app/venom-fp-t3-reader/venom-fp-t3-reader.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenomFPT3ReaderPage": () => (/* binding */ VenomFPT3ReaderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _venom_fp_t3_reader_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venom-fp-t3-reader.page.html?ngResource */ 2815);
/* harmony import */ var _venom_fp_t3_reader_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venom-fp-t3-reader.page.scss?ngResource */ 9644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 2111);





let VenomFPT3ReaderPage = class VenomFPT3ReaderPage {
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
        const imgRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, `Cómics/VenomFP/${file.name}`);
        (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(imgRef, file).then(resp => console.log(resp)).catch(err => console.log(err));
    }
    getImagenes() {
        const imagenesRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, 'Cómics/VenomFP');
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
VenomFPT3ReaderPage.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
VenomFPT3ReaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-venom-fp-t3-reader',
        template: _venom_fp_t3_reader_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_venom_fp_t3_reader_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VenomFPT3ReaderPage);



/***/ }),

/***/ 9644:
/*!****************************************************************************!*\
  !*** ./src/app/venom-fp-t3-reader/venom-fp-t3-reader.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW5vbS1mcC10My1yZWFkZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2815:
/*!****************************************************************************!*\
  !*** ./src/app/venom-fp-t3-reader/venom-fp-t3-reader.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n  <div class=\"images\">\r\n    <img [src]=\"image\" *ngFor=\"let image of images\" width=\"400\">\r\n  </div>\r\n  \r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_venom-fp-t3-reader_venom-fp-t3-reader_module_ts.js.map