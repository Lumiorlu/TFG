(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth-guard */ 3200);




const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectUnauthorizedTo)(['']);
const redirectLoggedInToHome = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectLoggedInTo)(['home']);
const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomePageModule),
        //...canActivate(redirectUnauthorizedToLogin),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login-page_login-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login-page/login-page.module */ 6918)).then((m) => m.LoginPagePageModule),
        //...canActivate(redirectLoggedInToHome), 
    },
    {
        path: 'choose-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_choose-page_choose-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./choose-page/choose-page.module */ 6478)).then((m) => m.ChoosePagePageModule),
    },
    {
        path: 'manga-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_manga-page_manga-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./manga-page/manga-page.module */ 2738)).then((m) => m.MangaPagePageModule),
    },
    {
        path: 'comic-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_comic-page_comic-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./comic-page/comic-page.module */ 2974)).then((m) => m.ComicPagePageModule),
    },
    {
        path: 'option-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_option-page_option-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./option-page/option-page.module */ 6940)).then((m) => m.OptionPagePageModule),
    },
    {
        path: 'register-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_register-page_register-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register-page/register-page.module */ 3480)).then((m) => m.RegisterPagePageModule),
    },
    {
        path: 'favorites-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_favorites-page_favorites-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./favorites-page/favorites-page.module */ 7629)).then((m) => m.FavoritesPagePageModule),
    },
    {
        path: 'library-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_library-page_library-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./library-page/library-page.module */ 9213)).then((m) => m.LibraryPagePageModule),
    },
    {
        path: 'pago-page-comics',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pago-page-comics_pago-page-comics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pago-page-comics/pago-page-comics.module */ 8552)).then(m => m.PagoPagePageModule)
    },
    {
        path: 'pago-page-mangas',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pago-page-mangas_pago-page-mangas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pago-page-mangas/pago-page-mangas.module */ 1274)).then(m => m.PagoPagePageModule)
    },
    {
        path: 'berserk-t1-reader',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_berserk-t1-reader_berserk-t1-reader_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./berserk-t1-reader/berserk-t1-reader.module */ 5190)).then(m => m.BerserkT1ReaderPageModule)
    },
    {
        path: 'fairytail-t1-reader',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fairytail-t1-reader_fairytail-t1-reader_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fairytail-t1-reader/fairytail-t1-reader.module */ 6879)).then(m => m.FairytailT1ReaderPageModule)
    },
    {
        path: 'venom-fp-t3-reader',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_venom-fp-t3-reader_venom-fp-t3-reader_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./venom-fp-t3-reader/venom-fp-t3-reader.module */ 7688)).then(m => m.VenomFPT3ReaderPageModule)
    },
    {
        path: 'batman-reader',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_batman-reader_batman-reader_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./batman-reader/batman-reader.module */ 3293)).then(m => m.BatmanReaderPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_7__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuthModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestoreModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_10__.AngularFireStorageModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestoreModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.getAuth)()),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.getFirestore)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__.getStorage)())
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAU7RQIOBLyIpjGz6JI31xjwbHBpsnjk_I',
        authDomain: 'tfg-app-d6949.firebaseapp.com',
        projectId: 'tfg-app-d6949',
        storageBucket: 'tfg-app-d6949.appspot.com',
        messagingSenderId: '165752842564',
        appId: '1:165752842564:web:a727be1f10cb37d6418f11',
        measurementId: 'G-NJ1Z7PXTYY'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		4103,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "/*@media (min-width: 426px) {\n  .menu {\n    max-width: 5%;\n  }\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQG1lZGlhIChtaW4td2lkdGg6IDQyNnB4KSB7XG4gIC5tZW51IHtcbiAgICBtYXgtd2lkdGg6IDUlO1xuICB9XG59Ki9cblxuXG4iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" class=\"menu\" menuId=\"first\">\n      <ion-header>\n        <ion-toolbar color=\"primary\">\n          <ion-title>Menú</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n         <!--<ion-grid *ngIf=\"authService.user$ | async as User\">--> \n          <ion-list>\n            <ion-menu-toggle auto-hide=\"false\">\n              <!-- <p>\n                Bienvenido <strong>{{ user.username }}</strong>\n              </p>  -->\n              <ion-item [routerDirection]=\"'root'\" [routerLink]=\"'/comic-page'\">\n                <ion-icon slot=\"start\" [name]=\"'book'\"></ion-icon>\n                <ion-label> Cómics </ion-label>\n              </ion-item>\n              <ion-item [routerDirection]=\"'root'\" [routerLink]=\"'/manga-page'\">\n                <ion-icon slot=\"start\" [name]=\"'book'\"></ion-icon>\n                <ion-label> Mangas </ion-label>\n              </ion-item>\n              <ion-item\n                [routerDirection]=\"'root'\"\n                [routerLink]=\"'/library-page'\"\n              >\n                <ion-icon slot=\"start\" [name]=\"'library'\"></ion-icon>\n                <ion-label> Biblioteca </ion-label>\n              </ion-item>\n              <ion-item\n                [routerDirection]=\"'root'\"\n                [routerLink]=\"'/favorites-page'\"\n              >\n                <ion-icon slot=\"start\" [name]=\"'star'\"></ion-icon>\n                <ion-label> Favoritos </ion-label>\n              </ion-item>\n              <ion-item\n                [routerDirection]=\"'root'\"\n                [routerLink]=\"'/option-page'\"\n              >\n                <ion-icon slot=\"start\" [name]=\"'cog'\"></ion-icon>\n                <ion-label> Opciones </ion-label>\n              </ion-item>\n              <ion-item [routerDirection]=\"'root'\" [routerLink]=\"'/home'\">\n                <ion-icon slot=\"start\" [name]=\"'home'\"></ion-icon>\n                <ion-label> Cerrar sesión </ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n          </ion-list>\n         <!-- </ion-grid>  -->\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n<!-- <ion-app>\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main2\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>Menú</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle>\n          <ion-button\n            (click)=\"onClick()\"\n            expand=\"block\"\n            fill=\"solid\"\n            shape=\"round\"\n            routerLink=\"/comic-page\"\n          >\n            Ir a Comics\n          </ion-button>\n\n          <ion-button\n            (click)=\"onClick()\"\n            expand=\"block\"\n            fill=\"\"\n            shape=\"round\"\n            routerLink=\"/library-page\"\n          >\n            Biblioteca\n          </ion-button>\n\n          <ion-button\n            (click)=\"onClick()\"\n            expand=\"block\"\n            fill=\"\"\n            shape=\"round\"\n            routerLink=\"/favorites-page\"\n          >\n            Favoritos\n          </ion-button>\n\n          <ion-button\n            (click)=\"onClick()\"\n            expand=\"block\"\n            fill=\"\"\n            shape=\"round\"\n            routerLink=\"option-page\"\n          >\n            Ajustes\n          </ion-button>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main2\"></ion-router-outlet>\n</ion-app>\n\n<ion-app>\n  <ion-menu side=\"start\" menuId=\"second\" contentId=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>Menú</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      \n        <ion-list>\n         >\n          <ion-menu-toggle>\n            <ion-button\n              (click)=\"onClick()\"\n              expand=\"block\"\n              fill=\"solid\"\n              shape=\"round\"\n              routerLink=\"/manga-page\"\n            >\n              Ir a Mangas\n            </ion-button>\n\n            <ion-button\n              (click)=\"onClick()\"\n              expand=\"block\"\n              fill=\"\"\n              shape=\"round\"\n              routerLink=\"/library-page\"\n            >\n              Biblioteca\n            </ion-button>\n\n            <ion-button\n              (click)=\"onClick()\"\n              expand=\"block\"\n              fill=\"\"\n              shape=\"round\"\n              routerLink=\"/favorites-page\"\n            >\n              Favoritos\n            </ion-button>\n\n            <ion-button\n              (click)=\"onClick()\"\n              expand=\"block\"\n              fill=\"\"\n              shape=\"round\"\n              routerLink=\"option-page\"\n            >\n              Ajustes\n            </ion-button>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-grid>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app> -->\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map