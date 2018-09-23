(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/joken/components/game/game.component.html":
/*!*******************************************************!*\
  !*** ./src/joken/components/game/game.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"joken\">\n  <joken-rooms [rooms]=\"rooms\"></joken-rooms>\n</div>"

/***/ }),

/***/ "./src/joken/components/game/game.component.scss":
/*!*******************************************************!*\
  !*** ./src/joken/components/game/game.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#joken {\n  width: 100%;\n  height: 100vh;\n  background: url(\"/assets/background-blue.gif\");\n  background-size: cover;\n  background-position: center; }\n"

/***/ }),

/***/ "./src/joken/components/game/game.component.ts":
/*!*****************************************************!*\
  !*** ./src/joken/components/game/game.component.ts ***!
  \*****************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/rooms.service */ "./src/joken/services/rooms.service.ts");
/* harmony import */ var _services_guid_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/guid.generator */ "./src/joken/services/guid.generator.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/player.service */ "./src/joken/services/player.service.ts");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/player.model */ "./src/joken/models/player.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameComponent = /** @class */ (function () {
    function GameComponent(roomService, playerService, guidGenerator) {
        var _this = this;
        this.roomService = roomService;
        this.playerService = playerService;
        this.guidGenerator = guidGenerator;
        this.fillRooms = function (rooms) {
            _this.rooms = rooms;
        };
        this.roomService.fetchRooms().subscribe(this.fillRooms);
        var guid = this.guidGenerator.guid();
        var newPlayer = new _models_player_model__WEBPACK_IMPORTED_MODULE_4__["default"](guid, "Player " + guid);
        this.playerService.setSessionPlayer(newPlayer);
    }
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'joken-po',
            template: __webpack_require__(/*! ./game.component.html */ "./src/joken/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/joken/components/game/game.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_rooms_service__WEBPACK_IMPORTED_MODULE_1__["default"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_3__["default"],
            _services_guid_generator__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/joken/components/match/match.component.html":
/*!*********************************************************!*\
  !*** ./src/joken/components/match/match.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"overlay\">\n\n  <video #video id=\"match-video\" [hidden]=\"!isMatchRunning\">\n    <source src=\"/assets/Batman-vs-Superman.mp4\" type=\"video/mp4\" />\n    Browser não suportado\n  </video>\n\n  <div class=\"modal fade show d-block\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n\n      <div class=\"modal-content\" *ngIf=\"gameEnded else playingTemplate\">\n        <div class=\"modal-body\">\n          <h1>{{matchResult | translate }}</h1>\n          <h3>Sua escolha: {{ myChoice | choice }}</h3>\n          <h3>Escolha adversária: {{ enemyChoice | choice }}</h3>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" (click)=\"getOut()\">Sair</button>\n        </div>\n      </div>\n\n      <ng-template #playingTemplate>\n        <div class=\"modal-content\" *ngIf=\"!gameEnded\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">{{ room.name }}</h5>\n            <h5 class=\"modal-title\">{{ room.players.length }}/2</h5>\n          </div>\n\n\n          <div class=\"modal-body\" *ngIf=\"room.players.length < 2\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h2>Esperando outro jogador...</h2>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"modal-body\" *ngIf=\"room.players.length >= 2\">\n            <div class=\"row\">\n              <h3 class=\"col\">Sua Jogada: {{ myChoice | choice }}</h3>\n            </div>\n            <div class=\"row\" id=\"match-play-selection\">\n              <div class=\"col\">\n                <button class=\"btn btn-primary item-btn\" (click)=\"chooseOption('rock', 'Pedra')\" [disabled]=\"choiceLabel\">\n                  <img class=\"card-img-top joken-po-img-title animated bounce\" src=\"/assets/rock-item.png\" alt=\"Pedra\" />\n                </button>\n              </div>\n              <div class=\"col\">\n                <button class=\"btn btn-primary item-btn bounce\" (click)=\"chooseOption('paper', 'Papel')\" [disabled]=\"choiceLabel\">\n                  <img class=\"card-img-top joken-po-img-title animated bounce\" src=\"/assets/paper-item.png\" alt=\"Papel\" />\n                </button>\n              </div>\n              <div class=\"col\">\n                <button class=\"btn btn-primary item-btn bounce\" (click)=\"chooseOption('scissor', 'Tesoura')\" [disabled]=\"choiceLabel\">\n                  <img class=\"card-img-top joken-po-img-title animated bounce\" src=\"/assets/scissor-item.png\" alt=\"Tesoura\" />\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button *ngIf=\"room.players.length >= 2\" type=\"button\" class=\"btn btn-lg btn-block btn-primary\" disabled>\n              <span *ngIf=\"!allPlayersChoose()\"> Façam suas escolhas... </span>\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getOut()\">Sair</button>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/joken/components/match/match.component.scss":
/*!*********************************************************!*\
  !*** ./src/joken/components/match/match.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".animated {\n  -webkit-animation-duration: .5s;\n  animation-duration: .5s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite; }\n\n@-webkit-keyframes bounce {\n  0%, 100% {\n    -webkit-transform: translateY(0); }\n  50% {\n    -webkit-transform: translateY(-5px); } }\n\n@keyframes bounce {\n  0%, 100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  50% {\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px); } }\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce; }\n\n#overlay {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.9);\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n#match-play-selection .item-btn {\n  height: 250px; }\n\n#match-play-selection .item-btn:hover {\n  padding: 0px; }\n\n.match-option-button {\n  width: 250px;\n  height: 200px; }\n\n.match-option-button img {\n  width: 250px;\n  height: 200px; }\n\n#match-video {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 9999; }\n"

/***/ }),

/***/ "./src/joken/components/match/match.component.ts":
/*!*******************************************************!*\
  !*** ./src/joken/components/match/match.component.ts ***!
  \*******************************************************/
/*! exports provided: MatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchComponent", function() { return MatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_game_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/game-socket.service */ "./src/joken/services/game-socket.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/player.service */ "./src/joken/services/player.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatchComponent = /** @class */ (function () {
    function MatchComponent(gameSocketService, playerService) {
        var _this = this;
        this.gameSocketService = gameSocketService;
        this.playerService = playerService;
        this.room$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.match = {
            id: undefined,
            room: undefined,
            players: [],
            result: undefined
        };
        this.isMatchRunning = false;
        this.gameEnded = false;
        this.timer = 1;
        this.waitPlayersToStartMatch = function (room) {
            if (room.players.length === 2) {
                _this.gameSocketService.startMatch(room);
            }
        };
        this.playerChoosedValue = function (_a) {
            var match = _a.match;
            _this.match = match;
            if (_this.allPlayersChoose()) {
                _this.start();
            }
        };
        this.enableMatchPlay = function (match) {
            _this.match = match;
        };
    }
    Object.defineProperty(MatchComponent.prototype, "room", {
        get: function () {
            return this.room$.getValue();
        },
        set: function (value) {
            this.room$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    MatchComponent.prototype.ngOnInit = function () {
        this.room$.subscribe(this.waitPlayersToStartMatch);
        this.onMatchStartedSubscription = this.gameSocketService.onMatchStarted(this.room).subscribe(this.enableMatchPlay);
        this.playerChoosedSubscription = this.gameSocketService.onPlayerChoosed(this.room).subscribe(this.playerChoosedValue);
    };
    MatchComponent.prototype.ngOnDestroy = function () {
        this.room$.unsubscribe();
        this.onMatchStartedSubscription.unsubscribe();
        this.playerChoosedSubscription.unsubscribe();
    };
    MatchComponent.prototype.getOut = function () {
        location.reload();
    };
    MatchComponent.prototype.updateMatchPlayerInfo = function (match, player) {
        var _this = this;
        var playerIndex = match.players.findIndex(function (x) { return x.id === _this.playerService.getSessionPlayer().id; });
        match.players[playerIndex] = player;
    };
    MatchComponent.prototype.chooseOption = function (choice, label) {
        var player = __assign({}, this.playerService.getSessionPlayer(), { choice: choice });
        this.updateMatchPlayerInfo(this.match, player);
        this.gameSocketService.emitPlayerChoose(player, this.match, choice);
        this.myChoice = choice;
    };
    MatchComponent.prototype.allPlayersChoose = function () {
        return this.match ? this.match.players.every(function (player) { return !!player.choice; }) : false;
    };
    MatchComponent.prototype.getEnemyChoice = function () {
        var myself = this.playerService.getSessionPlayer();
        var enemy = this.match.players.filter(function (player) { return player.id !== myself.id; })[0];
        return enemy.choice;
    };
    MatchComponent.prototype.start = function () {
        var _this = this;
        this.isMatchRunning = true;
        this.video.nativeElement.play();
        setTimeout(function () {
            _this.isMatchRunning = false;
            _this.gameEnded = true;
            var player = _this.playerService.getSessionPlayer();
            _this.matchResult = _this.match.result[player.id];
            _this.enemyChoice = _this.getEnemyChoice();
            _this.gameSocketService.disconnect();
        }, 4600);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('video'),
        __metadata("design:type", Object)
    ], MatchComponent.prototype, "video", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatchComponent.prototype, "room", null);
    MatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'joken-match',
            template: __webpack_require__(/*! ./match.component.html */ "./src/joken/components/match/match.component.html"),
            styles: [__webpack_require__(/*! ./match.component.scss */ "./src/joken/components/match/match.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_game_socket_service__WEBPACK_IMPORTED_MODULE_2__["default"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_3__["default"]])
    ], MatchComponent);
    return MatchComponent;
}());



/***/ }),

/***/ "./src/joken/components/rooms/rooms.component.html":
/*!*********************************************************!*\
  !*** ./src/joken/components/rooms/rooms.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row align-items-center room-box-container\">\n    <div class=\"col\"></div>\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <img class=\"card-img-top joken-po-img-title\" src=\"/assets/joken-title-no-background.png\" alt=\"Card image cap\" />\n          <h3 class=\"card-title text-center mt-5\">Rooms</h3>\n          <div class=\"row mb-2\" *ngFor=\"let room of rooms\">\n            <div class=\"col align-self-center\">\n              <span>{{room.name}}</span>\n            </div>\n            <div class=\"col align-self-center\">\n              <span>{{room.players.length}}/2 Players</span>\n            </div>\n            <div class=\"col\">\n              <button class=\"btn btn-lg btn-block btn-primary\" (click)=\"enterRoom($event, room)\" [disabled]=\"room.players.length >= 2\">Entrar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/joken/components/rooms/rooms.component.scss":
/*!*********************************************************!*\
  !*** ./src/joken/components/rooms/rooms.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".room-box-container {\n  height: 100vh; }\n\n.joken-po-img-title {\n  margin-top: -100px; }\n"

/***/ }),

/***/ "./src/joken/components/rooms/rooms.component.ts":
/*!*******************************************************!*\
  !*** ./src/joken/components/rooms/rooms.component.ts ***!
  \*******************************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_room_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/room.model */ "./src/joken/models/room.model.ts");
/* harmony import */ var _services_game_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/game-socket.service */ "./src/joken/services/game-socket.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/player.service */ "./src/joken/services/player.service.ts");
/* harmony import */ var _services_match_dom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/match-dom.service */ "./src/joken/services/match-dom.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomsComponent = /** @class */ (function () {
    function RoomsComponent(matchService, gameSocketService, playerService) {
        var _this = this;
        this.matchService = matchService;
        this.gameSocketService = gameSocketService;
        this.playerService = playerService;
        this.rooms$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.matchRoom = new _models_room_model__WEBPACK_IMPORTED_MODULE_2__["default"]('', []);
        this.updateRooms = function (rooms) {
            _this.rooms = rooms;
            if (_this.matchRoom) {
                _this.matchRoom = rooms.find(function (room) { return room.id === _this.matchRoom.id; });
                _this.matchService.updateMatchRoom(_this.matchRoom);
            }
        };
    }
    Object.defineProperty(RoomsComponent.prototype, "rooms", {
        get: function () {
            return this.rooms$.getValue();
        },
        set: function (rooms) {
            this.rooms$.next(rooms);
        },
        enumerable: true,
        configurable: true
    });
    RoomsComponent.prototype.ngOnInit = function () {
        this.gameSocketService.connect();
        this.gameSocketService.onRoomsUpdate().subscribe(this.updateRooms);
    };
    RoomsComponent.prototype.ngOnDestroy = function () {
        this.rooms$.unsubscribe();
        this.gameSocketSubscription.unsubscribe();
        this.gameSocketService.disconnect();
    };
    RoomsComponent.prototype.enterRoom = function (e, room) {
        var player = this.playerService.getSessionPlayer();
        this.matchRoom = room;
        this.gameSocketService.emitEnteredRoom(room, player);
        this.matchService.startMatchRoom(room);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RoomsComponent.prototype, "rooms", null);
    RoomsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'joken-rooms',
            template: __webpack_require__(/*! ./rooms.component.html */ "./src/joken/components/rooms/rooms.component.html"),
            styles: [__webpack_require__(/*! ./rooms.component.scss */ "./src/joken/components/rooms/rooms.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_match_dom_service__WEBPACK_IMPORTED_MODULE_5__["default"],
            _services_game_socket_service__WEBPACK_IMPORTED_MODULE_3__["default"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_4__["default"]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/joken/joken.component.css":
/*!***************************************!*\
  !*** ./src/joken/joken.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/joken/joken.component.html":
/*!****************************************!*\
  !*** ./src/joken/joken.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<joken-po id=\"main\"></joken-po>   "

/***/ }),

/***/ "./src/joken/joken.component.ts":
/*!**************************************!*\
  !*** ./src/joken/joken.component.ts ***!
  \**************************************/
/*! exports provided: JokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokenComponent", function() { return JokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JokenComponent = /** @class */ (function () {
    function JokenComponent() {
    }
    JokenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'joken-root',
            template: __webpack_require__(/*! ./joken.component.html */ "./src/joken/joken.component.html"),
            styles: [__webpack_require__(/*! ./joken.component.css */ "./src/joken/joken.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JokenComponent);
    return JokenComponent;
}());



/***/ }),

/***/ "./src/joken/joken.module.ts":
/*!***********************************!*\
  !*** ./src/joken/joken.module.ts ***!
  \***********************************/
/*! exports provided: JokenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokenModule", function() { return JokenModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _joken_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./joken.component */ "./src/joken/joken.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/game/game.component */ "./src/joken/components/game/game.component.ts");
/* harmony import */ var _components_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/rooms/rooms.component */ "./src/joken/components/rooms/rooms.component.ts");
/* harmony import */ var _components_match_match_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/match/match.component */ "./src/joken/components/match/match.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/translate.pipe */ "./src/joken/pipes/translate.pipe.ts");
/* harmony import */ var _pipes_choice_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/choice.pipe */ "./src/joken/pipes/choice.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var JokenModule = /** @class */ (function () {
    function JokenModule() {
    }
    JokenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _joken_component__WEBPACK_IMPORTED_MODULE_2__["JokenComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
                _components_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_4__["RoomsComponent"],
                _components_match_match_component__WEBPACK_IMPORTED_MODULE_5__["MatchComponent"],
                _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"],
                _pipes_choice_pipe__WEBPACK_IMPORTED_MODULE_8__["ChoicePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_joken_component__WEBPACK_IMPORTED_MODULE_2__["JokenComponent"]],
            entryComponents: [_components_match_match_component__WEBPACK_IMPORTED_MODULE_5__["MatchComponent"]]
        })
    ], JokenModule);
    return JokenModule;
}());



/***/ }),

/***/ "./src/joken/models/player.model.ts":
/*!******************************************!*\
  !*** ./src/joken/models/player.model.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Player = /** @class */ (function () {
    function Player(id, name) {
        this.choice = undefined;
        this.id = id;
        this.name = name;
    }
    return Player;
}());
/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./src/joken/models/room.model.ts":
/*!****************************************!*\
  !*** ./src/joken/models/room.model.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Room = /** @class */ (function () {
    function Room(name, players) {
        this._name = name;
        this._players = players;
    }
    Object.defineProperty(Room.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "players", {
        get: function () {
            return this._players;
        },
        set: function (players) {
            this._players = players;
        },
        enumerable: true,
        configurable: true
    });
    return Room;
}());
/* harmony default export */ __webpack_exports__["default"] = (Room);


/***/ }),

/***/ "./src/joken/pipes/choice.pipe.ts":
/*!****************************************!*\
  !*** ./src/joken/pipes/choice.pipe.ts ***!
  \****************************************/
/*! exports provided: ChoicePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicePipe", function() { return ChoicePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var translationMap = {
    'rock': 'Pedra',
    'paper': 'Papel',
    'scissor': 'Tesoura'
};
var ChoicePipe = /** @class */ (function () {
    function ChoicePipe() {
    }
    ChoicePipe.prototype.transform = function (value) {
        return translationMap[value];
    };
    ChoicePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'choice'
        })
    ], ChoicePipe);
    return ChoicePipe;
}());



/***/ }),

/***/ "./src/joken/pipes/translate.pipe.ts":
/*!*******************************************!*\
  !*** ./src/joken/pipes/translate.pipe.ts ***!
  \*******************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var translationMap = {
    'Winner': 'Você VENCEU!!',
    'Loser': 'Você PERDEU!',
    'Draw': 'Empate!'
};
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe() {
    }
    TranslatePipe.prototype.transform = function (value) {
        return translationMap[value];
    };
    TranslatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'translate'
        })
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/joken/services/dom.service.ts":
/*!*******************************************!*\
  !*** ./src/joken/services/dom.service.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DomService = /** @class */ (function () {
    function DomService(componentFactory, injector, applicationReference) {
        this.componentFactory = componentFactory;
        this.injector = injector;
        this.applicationReference = applicationReference;
        this.activeComponents = new Map();
    }
    DomService.prototype.addComponent = function (component, identifier, DOMIdToAppendComponent, data) {
        var componentReference = this.componentFactory
            .resolveComponentFactory(component)
            .create(this.injector);
        this.applicationReference.attachView(componentReference.hostView);
        var domElement = componentReference.hostView
            .rootNodes[0];
        this.activeComponents.set(identifier, { componentReference: componentReference, domElement: domElement });
        domElement.classList.add(identifier);
        document.getElementById(DOMIdToAppendComponent).appendChild(domElement);
        if (data) {
            Object.entries(data).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                componentReference.instance[key] = value;
            });
        }
    };
    DomService.prototype.updateComponentData = function (identifier, data) {
        var activeComponent = this.activeComponents.get(identifier);
        if (activeComponent) {
            Object.entries(data).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                activeComponent.componentReference.instance[key] = value;
            });
        }
    };
    DomService.prototype.removeComponent = function (identifier) {
        var activeComponent = this.activeComponents.get(identifier);
        this.applicationReference
            .detachView(activeComponent.componentReference.hostView);
        activeComponent.domElement.remove();
    };
    DomService.prototype.removeAllComponents = function () {
        var _this = this;
        this.activeComponents.forEach(function (activeComponent, identifier) {
            _this.applicationReference.detachView(activeComponent.componentReference.hostView);
            activeComponent.domElement.remove();
        });
    };
    DomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]])
    ], DomService);
    return DomService;
}());
/* harmony default export */ __webpack_exports__["default"] = (DomService);


/***/ }),

/***/ "./src/joken/services/game-socket.service.ts":
/*!***************************************************!*\
  !*** ./src/joken/services/game-socket.service.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/socket.service */ "./src/joken/services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameSocketService = /** @class */ (function () {
    function GameSocketService(socketService) {
        this.socketService = socketService;
    }
    GameSocketService.prototype.connect = function () {
        this.socketService.connect();
    };
    GameSocketService.prototype.disconnect = function () {
        this.socketService.disconnect();
    };
    GameSocketService.prototype.onRoomsUpdate = function () {
        return this.socketService.onEvent("room-update" /* ROOM_UPDATE */);
    };
    GameSocketService.prototype.emitEnteredRoom = function (room, player) {
        this.socketService.emit("player-enter-room" /* PLAYER_ENTER_ROOM */, { room: room, player: player });
    };
    GameSocketService.prototype.startMatch = function (room) {
        this.socketService.emit("start-match" /* START_MATCH */, room);
    };
    GameSocketService.prototype.onMatchStarted = function (room) {
        return this.socketService.onEvent("match-started" /* MATCH_STARTED */ + "-" + room.id);
    };
    GameSocketService.prototype.emitPlayerChoose = function (player, match, choice) {
        this.socketService.emit("player-choose-value" /* PLAYER_CHOOSE_VALUE */, { player: player, match: match, choice: choice });
    };
    GameSocketService.prototype.onPlayerChoosed = function (room) {
        return this.socketService.onEvent("player-choose-value" /* PLAYER_CHOOSE_VALUE */ + "-" + room.id);
    };
    GameSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["default"]])
    ], GameSocketService);
    return GameSocketService;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameSocketService);


/***/ }),

/***/ "./src/joken/services/guid.generator.ts":
/*!**********************************************!*\
  !*** ./src/joken/services/guid.generator.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuidGenerator = /** @class */ (function () {
    function GuidGenerator() {
    }
    GuidGenerator.prototype.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    GuidGenerator.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    GuidGenerator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GuidGenerator);
    return GuidGenerator;
}());
/* harmony default export */ __webpack_exports__["default"] = (GuidGenerator);


/***/ }),

/***/ "./src/joken/services/match-dom.service.ts":
/*!*************************************************!*\
  !*** ./src/joken/services/match-dom.service.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/dom.service */ "./src/joken/services/dom.service.ts");
/* harmony import */ var _components_match_match_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/match/match.component */ "./src/joken/components/match/match.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchDomService = /** @class */ (function () {
    function MatchDomService(domService) {
        this.domService = domService;
        this.COMPONENT_IDENTIFIER = 'match-modal';
    }
    MatchDomService.prototype.startMatchRoom = function (room) {
        this.domService.addComponent(_components_match_match_component__WEBPACK_IMPORTED_MODULE_2__["MatchComponent"], this.COMPONENT_IDENTIFIER, 'main', { room: room });
    };
    MatchDomService.prototype.updateMatchRoom = function (room) {
        this.domService.updateComponentData(this.COMPONENT_IDENTIFIER, { room: room });
    };
    MatchDomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["default"]])
    ], MatchDomService);
    return MatchDomService;
}());
/* harmony default export */ __webpack_exports__["default"] = (MatchDomService);


/***/ }),

/***/ "./src/joken/services/player.service.ts":
/*!**********************************************!*\
  !*** ./src/joken/services/player.service.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.sessionPlayer$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.onSessionPlayerChange = this.sessionPlayer$.asObservable();
    }
    PlayerService.prototype.setSessionPlayer = function (player) {
        this.sessionPlayer$.next(player);
    };
    PlayerService.prototype.getSessionPlayer = function () {
        return this.sessionPlayer$.getValue();
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PlayerService);
    return PlayerService;
}());
/* harmony default export */ __webpack_exports__["default"] = (PlayerService);


/***/ }),

/***/ "./src/joken/services/rooms.service.ts":
/*!*********************************************!*\
  !*** ./src/joken/services/rooms.service.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomService = /** @class */ (function () {
    function RoomService(http) {
        this.http = http;
    }
    RoomService.prototype.fetchRooms = function () {
        return this.http.get("https://jankengularbackend.azurewebsites.net" /* SERVER_ADDRESS */ + '/rooms');
    };
    RoomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoomService);
    return RoomService;
}());
/* harmony default export */ __webpack_exports__["default"] = (RoomService);


/***/ }),

/***/ "./src/joken/services/socket.service.ts":
/*!**********************************************!*\
  !*** ./src/joken/services/socket.service.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.connect = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__("https://jankengularbackend.azurewebsites.net" /* SERVER_ADDRESS */);
        return this.socket;
    };
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on(event, function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.emit = function (event, message) {
        this.socket.emit(event, message);
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());
/* harmony default export */ __webpack_exports__["default"] = (SocketService);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _joken_joken_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./joken/joken.module */ "./src/joken/joken.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_joken_joken_module__WEBPACK_IMPORTED_MODULE_2__["JokenModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\JokenPo\Joken\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map