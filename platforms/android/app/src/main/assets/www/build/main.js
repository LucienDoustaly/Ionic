webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ParametresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParametresPage = (function () {
    function ParametresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ParametresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParametresPage');
    };
    ParametresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parametres',template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\pages\parametres\parametres.html"*/'<ion-content>\n\n    <ion-grid>\n        <ion-row>\n      \n          <ion-col col-5></ion-col>\n          <ion-col col-2>\n            <p>PAGE PARAMETRES</p>\n          </ion-col>\n          <ion-col col-5></ion-col>\n  \n        </ion-row>\n      </ion-grid>\n  \n\n      <ion-grid class="boutonparametres">\n        <ion-row>\n            \n          <ion-col col-5></ion-col>\n          \n          <ion-col col-2>\n            <button col-12 ion-button color="danger" round (click)="goBackToMenu()">Valider</button>\n          </ion-col>\n\n          <ion-col col-5></ion-col>\n            \n        </ion-row>\n      </ion-grid>  \n\n</ion-content>'/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\pages\parametres\parametres.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ParametresPage);
    return ParametresPage;
}());

//# sourceMappingURL=parametres.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReglesPage = (function () {
    function ReglesPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ReglesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReglesPage');
    };
    ReglesPage.prototype.goBackToMenu = function () {
        this.navCtrl.pop();
    };
    ReglesPage.prototype.launchPopUp = function () {
        var alert = this.alertCtrl.create({
            title: 'Balais couilles',
            subTitle: '10% of battery remaining',
            buttons: ['Tant pis']
        });
        alert.present();
    };
    ReglesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regles',template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\pages\regles\regles.html"*/'<ion-content>\n\n    <ion-grid>\n        <ion-row>\n      \n          <ion-col col-5></ion-col>\n          <ion-col col-2>\n            <p>PAGE REGLES</p>\n          </ion-col>\n          <ion-col col-5></ion-col>\n  \n        </ion-row>\n      </ion-grid>\n  \n\n      \n      <ion-grid class="boutonsregles">\n        <ion-row>\n            \n          <ion-col col-3></ion-col>\n          \n          <ion-col col-2>\n            <button col-12 ion-button color="danger" round (click)="goBackToMenu()">J\'ai compris</button>\n          </ion-col>\n            \n          <ion-col col-2></ion-col>\n            \n          <ion-col col-2>\n            <button col-12 ion-button color="danger" round (click)="launchPopUp()">J\'ai pas compris</button>\n          </ion-col>\n            \n          <ion-col col-3></ion-col>\n            \n        </ion-row>\n      </ion-grid>  \n  \n</ion-content>  '/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\pages\regles\regles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReglesPage);
    return ReglesPage;
}());

//# sourceMappingURL=regles.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/joueur/joueur.module": [
		274,
		2
	],
	"../pages/parametres/parametres.module": [
		275,
		1
	],
	"../pages/regles/regles.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regles_regles__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__joueur_joueur__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parametres_parametres__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToRegles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regles_regles__["a" /* ReglesPage */]);
    };
    HomePage.prototype.goToJoueurs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__joueur_joueur__["a" /* JoueurPage */]);
    };
    HomePage.prototype.goToParametres = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__parametres_parametres__["a" /* ParametresPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\pages\home\home.html"*/'<ion-content>\n\n\n\n    <ion-grid class="logomenu">\n\n      <ion-row>\n\n    \n\n        <ion-col col-4></ion-col>\n\n        <ion-col col-4>\n\n          <img src="https://pre00.deviantart.net/239a/th/pre/i/2014/106/6/c/random_logo_by_criticl-d7eqdvw.png">\n\n        </ion-col>\n\n        <ion-col col-4></ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n    \n\n    <ion-grid class="boutonsmenu">\n\n      <ion-row>\n\n      \n\n        <ion-col col-2></ion-col>\n\n      \n\n        <ion-col col-2>\n\n          <button col-12 ion-button color="danger" round (click)="goToRegles()">Règles</button>\n\n        </ion-col>\n\n      \n\n        <ion-col col-1></ion-col>\n\n      \n\n        <ion-col col-2>\n\n          <button col-12 ion-button color="danger" round (click)="goToJoueurs()">Jouer</button>\n\n        </ion-col>\n\n      \n\n        <ion-col col-1></ion-col>\n\n      \n\n        <ion-col col-2>\n\n          <button col-12 ion-button color="danger" round (click)="goToParametres()">Paramètres</button>\n\n        </ion-col>\n\n      \n\n        <ion-col col-2>\n\n      \n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>  \n\n</ion-content> '/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_regles_regles__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_parametres_parametres__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_joueur_joueur__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_regles_regles__["a" /* ReglesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_parametres_parametres__["a" /* ParametresPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_joueur_joueur__["a" /* JoueurPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/joueur/joueur.module#JoueurPageModule', name: 'JoueurPage', segment: 'joueur', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parametres/parametres.module#ParametresPageModule', name: 'ParametresPage', segment: 'parametres', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regles/regles.module#ReglesPageModule', name: 'ReglesPage', segment: 'regles', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_regles_regles__["a" /* ReglesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_parametres_parametres__["a" /* ParametresPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_joueur_joueur__["a" /* JoueurPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoueurPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JoueurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoueurPage = (function () {
    function JoueurPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JoueurPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoueurPage');
    };
    JoueurPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joueur',template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\pages\joueur\joueur.html"*/'<ion-content>\n\n    <ion-grid>\n        <ion-row>\n      \n          <ion-col col-5></ion-col>\n          <ion-col col-2>\n            <p>PAGE CHOIX DU NBR DE JOUEUR</p>\n          </ion-col>\n          <ion-col col-5></ion-col>\n  \n        </ion-row>\n      </ion-grid>\n  \n\n  \n</ion-content>'/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini-Projet\IsenEnSlip\src\pages\joueur\joueur.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], JoueurPage);
    return JoueurPage;
}());

//# sourceMappingURL=joueur.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map