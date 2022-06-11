"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_batman-reader_batman-reader_module_ts"],{

/***/ 3956:
/*!***************************************************************!*\
  !*** ./src/app/batman-reader/batman-reader-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BatmanReaderPageRoutingModule": () => (/* binding */ BatmanReaderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _batman_reader_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batman-reader.page */ 2669);




const routes = [
    {
        path: '',
        component: _batman_reader_page__WEBPACK_IMPORTED_MODULE_0__.BatmanReaderPage
    }
];
let BatmanReaderPageRoutingModule = class BatmanReaderPageRoutingModule {
};
BatmanReaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BatmanReaderPageRoutingModule);



/***/ }),

/***/ 3293:
/*!*******************************************************!*\
  !*** ./src/app/batman-reader/batman-reader.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BatmanReaderPageModule": () => (/* binding */ BatmanReaderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _batman_reader_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batman-reader-routing.module */ 3956);
/* harmony import */ var _batman_reader_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./batman-reader.page */ 2669);







let BatmanReaderPageModule = class BatmanReaderPageModule {
};
BatmanReaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _batman_reader_routing_module__WEBPACK_IMPORTED_MODULE_0__.BatmanReaderPageRoutingModule
        ],
        declarations: [_batman_reader_page__WEBPACK_IMPORTED_MODULE_1__.BatmanReaderPage]
    })
], BatmanReaderPageModule);



/***/ }),

/***/ 2669:
/*!*****************************************************!*\
  !*** ./src/app/batman-reader/batman-reader.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BatmanReaderPage": () => (/* binding */ BatmanReaderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _batman_reader_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batman-reader.page.html?ngResource */ 105);
/* harmony import */ var _batman_reader_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./batman-reader.page.scss?ngResource */ 8677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 2111);





let BatmanReaderPage = class BatmanReaderPage {
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
        const imgRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, `Cómics/BatmanNMM/${file.name}`);
        (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(imgRef, file).then(resp => console.log(resp)).catch(err => console.log(err));
    }
    getImagenes() {
        const imagenesRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, '/Cómics/BatmanNMM');
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
BatmanReaderPage.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
BatmanReaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-batman-reader',
        template: _batman_reader_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_batman_reader_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BatmanReaderPage);



/***/ }),

/***/ 8677:
/*!******************************************************************!*\
  !*** ./src/app/batman-reader/batman-reader.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXRtYW4tcmVhZGVyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 105:
/*!******************************************************************!*\
  !*** ./src/app/batman-reader/batman-reader.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n  <div class=\"images\">\r\n    <img [src]=\"image\" *ngFor=\"let image of images\" width=\"400\">\r\n  </div>\r\n  \r\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_batman-reader_batman-reader_module_ts.js.map