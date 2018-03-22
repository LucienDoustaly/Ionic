webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimerComponent = (function () {
    function TimerComponent(navCtrl, apiProvider, vibration, media) {
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.vibration = vibration;
        this.media = media;
    }
    //initialise le timer lors de l'initialisation
    TimerComponent.prototype.ngOnInit = function () {
        this.initTimer();
    };
    //avertie que le timer est terminé
    TimerComponent.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    //initialise le timer
    TimerComponent.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    //lance le timer
    TimerComponent.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
        this.bgSound();
    };
    //arrete le timer tempororairement
    TimerComponent.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
        this.audio.stop();
    };
    //relance le timer
    TimerComponent.prototype.resumeTimer = function () {
        this.startTimer();
    };
    //recharge le timer
    TimerComponent.prototype.reloadTimer = function () {
        this.initTimer();
        this.startTimer();
        this.apiProvider.play();
    };
    //fait defiler les nombres de timer jusqu'a 0
    TimerComponent.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
                _this.lanceVibration();
                _this.lanceSonFinal();
            }
        }, 1000);
    };
    TimerComponent.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10);
        var seconds = sec_num;
        var secondsString = '';
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return secondsString;
    };
    //fait vibrer le téléphone
    TimerComponent.prototype.lanceVibration = function () {
        //on arrete les vibrations puis on les relance proprement
        this.vibration.vibrate(0);
        this.vibration.vibrate(4000);
    };
    //lance le son de fin de manche
    TimerComponent.prototype.lanceSonFinal = function () {
        //si le son est deja lancé on l'arrete en premier
        if (this.sonfinal) {
            this.sonfinal.stop();
            this.sonfinal.release();
        }
        this.sonfinal = this.media.create('/android_asset/www/assets/raw/trompette.mp3');
        this.sonfinal.play();
        this.sonfinal.setVolume(0.8);
    };
    //son du background
    TimerComponent.prototype.bgSound = function () {
        if (this.audio) {
            this.audio.stop();
            this.audio.release();
        }
        this.audio = this.media.create('/android_asset/www/assets/raw/mans.mp3');
        this.audio.play();
        this.audio.setVolume(0.8);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "timeInSeconds", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timer',template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\timer\timer.html"*/'\n<div class="timer" >\n  {{timer.displayTime}}\n</div>\n\n<div *ngIf="timer" class="reloadButton">\n  \n  <button ion-button icon-left color="danger" small (click)="reloadTimer()" item-left *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n    <ion-icon name="play"></ion-icon>\n    Suivant\n  </button>\n\n</div>'/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\timer\timer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */]])
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiProvider = (function () {
    function ApiProvider(http) {
        this.http = http;
    }
    //rand pour l'affichage du user et de l'action
    ApiProvider.prototype.rand = function () {
        return this.random = Math.floor(Math.random() * 47);
    };
    ApiProvider.prototype.rand2 = function () {
        return this.random2 = Math.floor(Math.random() * 30);
    };
    //recupere le user depuis l'api
    ApiProvider.prototype.getUser = function () {
        this.rand();
        console.log('random user : ', this.random);
        return this.http.get('https://isenenslipapi.herokuapp.com/user/' + this.random);
    };
    //recupere l'action depuis l'api
    ApiProvider.prototype.getAction = function () {
        this.rand2();
        console.log('random activity : ', this.random2);
        return this.http.get('https://isenenslipapi.herokuapp.com/action/' + this.random2);
    };
    //lance la récuperation du user et de l'action depuis l'api
    ApiProvider.prototype.play = function () {
        var _this = this;
        this.user = this.getUser();
        this.user
            .subscribe(function (data) {
            console.log('my data: ', data.name);
            _this.name = data.name;
        });
        this.action = this.getAction();
        this.action
            .subscribe(function (data) {
            console.log('my data: ', data.activity);
            _this.activity = data.activity;
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(42);
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
    function ParametresPage(navCtrl, navParams, fileChooser, media, filePath) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileChooser = fileChooser;
        this.media = media;
        this.filePath = filePath;
    }
    //retourne au menu principal
    ParametresPage.prototype.goBackToMenu = function () {
        this.navCtrl.pop();
    };
    //cette fonctionnalité ne fonctionne pas sous ionic à cause d'un changement récent dans la doc technique ionic
    ParametresPage.prototype.ajouteMusique = function () {
        var _this = this;
        this.fileChooser.open().then(function (uri) { return _this.monUri = uri; });
        //uri obtenu : content://com.android.providers.media.documents/document/audio%3A20826
        this.filePath.resolveNativePath(this.monUri).then(function (result) { return _this.nativepath = result; });
        this.file = this.media.create(this.nativepath);
        this.file.play();
    };
    ParametresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parametres',template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\parametres\parametres.html"*/'<ion-content>\n\n    <ion-grid>\n        <ion-row>\n      \n          <ion-col col-4></ion-col>\n          <ion-col col-4>\n            <p class="stylepolice">Ajouter une Musique</p>\n          </ion-col>\n          <ion-col col-4></ion-col>\n  \n        </ion-row>\n      </ion-grid>\n\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-5></ion-col>\n          <ion-col col-2>\n            <button col-12 ion-button color="danger" (click)="ajouteMusique()">Choix Musique</button>\n          </ion-col>\n          <ion-col col-5></ion-col>\n  \n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class="boutonparametres">\n        <ion-row>\n            \n          <ion-col col-4></ion-col>\n          \n          <ion-col col-4>\n            <button col-12 ion-button color="danger" (click)="goBackToMenu()">Valider</button>\n          </ion-col>\n\n          <ion-col col-4></ion-col>\n            \n        </ion-row>\n      </ion-grid>  \n\n</ion-content>'/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\parametres\parametres.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__["a" /* FilePath */]])
    ], ParametresPage);
    return ParametresPage;
}());

//# sourceMappingURL=parametres.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__ = __webpack_require__(42);
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
    function ReglesPage(platform, navCtrl, navParams, alertCtrl, media) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.media = media;
    }
    //retourne au menu du jeu
    ReglesPage.prototype.goBackToMenu = function () {
        this.navCtrl.pop();
    };
    //joue le son (pour la popup)
    ReglesPage.prototype.playSound = function () {
        if (this.audio) {
            this.audio.stop();
            this.audio.release();
        }
        this.audio = this.media.create('/android_asset/www/assets/raw/ah.mp3');
        this.audio.play();
        this.audio.setVolume(0.8);
    };
    //lance la popup
    ReglesPage.prototype.launchPopUp = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Balais couilles',
            subTitle: "On peut plus rien faire pour toi la, désolé",
            buttons: [{
                    text: "Tan pis",
                    handler: function (data) {
                        _this.goBackToMenu();
                    }
                }]
        });
        alert.present();
        this.playSound();
    };
    ReglesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regles',template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\regles\regles.html"*/'<ion-content>\n\n    <ion-grid>\n        <ion-row>\n      \n          <ion-col col-4></ion-col>\n          <ion-col col-4>\n            <p class="stylepolice">COMMENT ON JOUE ?</p>\n          </ion-col>\n          <ion-col col-4></ion-col>\n  \n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid class="textregles">\n\n        <ion-row>\n          <ion-col col-3></ion-col>\n\n          <ion-col col-6>\n            <p class="stylepolice"> \n              Les règles sont simples :\n            </p>\n                <ul>\n                    <li>Lancer une partie</li>\n                    <li>Placer le téléphone sur son front</li>\n                    <li>Vous avez maintenant 90 secondes pour deviner qui vous êtes et ce que vous faites</li>\n                    <li>Une fois le temps terminé, passer le téléphone au joueur suivant</li>\n                </ul>\n          </ion-col>\n\n          <ion-col col-3></ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-grid class="boutonsregles">\n        <ion-row>\n            \n          <ion-col col-2></ion-col>\n          \n          <ion-col col-3>\n            <button col-12 ion-button color="danger" (click)="goBackToMenu()">J\'ai compris</button>\n          </ion-col>\n            \n          <ion-col col-2></ion-col>\n            \n          <ion-col col-3>\n            <button col-12 ion-button color="danger" (click)="launchPopUp()">J\'ai pas compris</button>\n          </ion-col>\n            \n          <ion-col col-2></ion-col>\n            \n        </ion-row>\n      </ion-grid>  \n  \n</ion-content>  '/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\regles\regles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */]])
    ], ReglesPage);
    return ReglesPage;
}());

//# sourceMappingURL=regles.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/parametres/parametres.module": [
		289,
		1
	],
	"../pages/regles/regles.module": [
		290,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regles_regles__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jouer_jouer__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parametres_parametres__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timer_timer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__ = __webpack_require__(42);
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
    function HomePage(navCtrl, diagnostic, alertCtrl, network, media) {
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.media = media;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //surveille la connexion à internet
        this.connect = this.network.onConnect().subscribe(function (data) {
            console.log(data);
            _this.etatConnexion(data.type);
        }, function (error) { return console.error(error); });
        //surveille la déconnexion à internet
        this.disconnect = this.network.onDisconnect().subscribe(function (data) {
            console.log(data);
            _this.etatConnexion(data.type);
        }, function (error) { return console.error(error); });
        this.bgSound();
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.audio.stop();
    };
    //son du background
    HomePage.prototype.bgSound = function () {
        if (this.audio) {
            this.audio.stop();
            this.audio.release();
        }
        this.audio = this.media.create('/android_asset/www/assets/raw/backgroundmusic.mp3');
        this.audio.play();
        this.audio.setVolume(0.8);
    };
    //redirige vers la page des regles
    HomePage.prototype.goToRegles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regles_regles__["a" /* ReglesPage */]);
    };
    //redirige vers la page de début du jeu
    HomePage.prototype.goToJouers = function () {
        var _this = this;
        //si pas de connecxion => pas d'accès a la page jouer
        if (this.etatConnect == "offline") {
            var alertInternet = this.alertCtrl.create({
                title: 'Impossible de se connecter',
                message: 'Vous avez besoin d\'une connexion internet pour cette application.S\'il vous plait, activez la WiFi ou les données mobles dans les Paramètres du téléphone',
                buttons: [
                    {
                        text: 'Retour'
                    }, {
                        text: 'Paramètres',
                        handler: function () {
                            _this.diagnostic.switchToWirelessSettings();
                        }
                    }
                ]
            });
            alertInternet.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__jouer_jouer__["a" /* JouerPage */]);
        }
    };
    //redirige vers la page des parametres
    HomePage.prototype.goToParametres = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__parametres_parametres__["a" /* ParametresPage */]);
    };
    //vérifie si la wifi ou les données mobiles sont activées
    HomePage.prototype.etatConnexion = function (connectionState) {
        var _this = this;
        this.etatConnect = connectionState;
        //test si le téléphone est bien connecté à internet
        if (this.etatConnect !== "online") {
            var alertInternet = this.alertCtrl.create({
                title: 'Impossible de se connecter',
                message: 'Vous avez besoin d\'une connexion internet pour cette application.S\'il vous plait, activez la WiFi ou les données mobles dans les Paramètres du téléphone',
                buttons: [
                    {
                        text: 'Retour'
                    }, {
                        text: 'Paramètres',
                        handler: function () {
                            _this.diagnostic.switchToWirelessSettings();
                        }
                    }
                ]
            });
            alertInternet.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7__timer_timer__["a" /* TimerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__timer_timer__["a" /* TimerComponent */])
    ], HomePage.prototype, "timer", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\home\home.html"*/'<ion-content>\n\n  \n\n    <ion-grid class="logomenu">\n\n      <ion-row>\n\n    \n\n        <ion-col col-4></ion-col>\n\n        <ion-col col-4>\n\n          <img class="image" src="assets/imgs/slip.png">\n\n        </ion-col>\n\n        <ion-col col-4></ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n    \n\n    <ion-grid class="boutonsmenu">\n\n      <ion-row>\n\n      \n\n        <ion-col col-2></ion-col>\n\n      \n\n        <ion-col col-2>\n\n          <button col-12 ion-button color="danger" (click)="goToRegles()">Règles</button>\n\n        </ion-col>\n\n      \n\n        <ion-col col-1></ion-col>\n\n      \n\n        <ion-col col-2>\n\n          <button col-12 ion-button color="danger" (click)="goToJouers()">Jouer</button>\n\n        </ion-col>\n\n      \n\n        <ion-col col-1></ion-col>\n\n      \n\n        <ion-col col-2>\n\n          <button col-12 ion-button color="danger" (click)="goToParametres()">Choix Musique</button>\n\n        </ion-col>\n\n      \n\n        <ion-col col-2>\n\n      \n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>  \n\n</ion-content> '/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__["a" /* Media */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JouerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_timer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JouerPage = (function () {
    function JouerPage(navCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        //lance l'api pour le debut de la partie  
        this.apiProvider.play();
    }
    //lance le timer à l'initialisation
    JouerPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.timer.startTimer();
        }, 1000);
    };
    JouerPage.prototype.ionViewDidEnter = function () {
    };
    JouerPage.prototype.ionViewDidLeave = function () {
        this.timer.pauseTimer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__timer_timer__["a" /* TimerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__timer_timer__["a" /* TimerComponent */])
    ], JouerPage.prototype, "timer", void 0);
    JouerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jouer',template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\jouer\jouer.html"*/'<ion-content padding>\n\n  <ion-grid class="carte">\n    <ion-row style="margin-left:60px;"> \n        \n      <ion-col col-4>\n        <img height="120%" width="110%" src="assets/imgs/bluecard.png"><strong class="textcarte">{{ apiProvider.name }}</strong>\n      </ion-col>\n\n  \n\n      <ion-col col-2>\n        <img class="circle" height="100px" width="100px" src="assets/imgs/circle.png">\n        <timer #timer timeInSeconds="90"></timer>\n      </ion-col>\n\n\n      <ion-col col-4>\n          <img height="120%" width="110%" src="assets/imgs/redcard.png">\n          <strong class="textcarte">{{ apiProvider.activity }}</strong>\n      </ion-col>\n      \n    \n      \n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\pages\jouer\jouer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], JouerPage);
    return JouerPage;
}());

//# sourceMappingURL=jouer.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_regles_regles__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_parametres_parametres__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_jouer_jouer__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_api_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_timer_timer__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_regles_regles__["a" /* ReglesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_parametres_parametres__["a" /* ParametresPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_jouer_jouer__["a" /* JouerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_timer_timer__["a" /* TimerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/parametres/parametres.module#ParametresPageModule', name: 'ParametresPage', segment: 'parametres', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regles/regles.module#ReglesPageModule', name: 'ReglesPage', segment: 'regles', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_regles_regles__["a" /* ReglesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_parametres_parametres__["a" /* ParametresPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_jouer_jouer__["a" /* JouerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__["a" /* Vibration */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Documents\Cours\M1\ANDROID\Mini Projet\Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map