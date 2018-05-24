webpackJsonp(["details.module"],{

/***/ "./src/app/main/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"details\" class=\"mt-3\">\n  <div class=\"content\">\n    <div class=\"row\" *ngIf=\"(person$ | async); let person; else loadingPerson\">\n      <div class=\"col-md-3\">\n        <img src=\"https://api.adorable.io/avatars/180/abott@adorable.png\" alt=\"adorable\" class=\"rounded-right\">\n      </div>\n      <div class=\"col-md-9\">\n        <h1 class=\"display-4\"> {{ person.name }} </h1>\n        <div class=\"planet-section\" *ngIf=\"(planet$ | async); let planet; else planetLoading\">\n          <p class=\"planet-name lead\">Planet: {{ planet.name }}</p>\n          <ul class=\"planet-details-list d-flex list-unstyled\">\n              <li>\n                <i class=\"fa fa-globe\"></i>\n                  {{ planet.terrain }}\n              </li>\n              <li>\n                <i class=\"fa fa-cloud\"></i>\n                  {{ planet.climate }}\n              </li>\n              <li>\n                <i class=\"fa fa-users\"></i>\n                  {{ planet.population }}\n              </li>\n          </ul>\n        </div>\n        <ng-template #planetLoading>\n          <div class=\"planet-section\">\n            <div class=\"lead my-5\">\n              <div class=\"loader\">Loading\n                <span class=\"loader-dot\">.</span>\n                <span class=\"loader-dot\">.</span>\n                <span class=\"loader-dot\">.</span>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"row mt-3\">\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Skin Color</label>\n              <input type=\"text\" readonly class=\"form-control-plaintext h5\" [value]=\"person.skin_color\">\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Gender</label>\n              <input type=\"text\" readonly class=\"form-control-plaintext h5\" [value]=\"person.gender\">\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Eye Color</label>\n              <input type=\"text\" readonly class=\"form-control-plaintext h5\" [value]=\"person.eye_color\">\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Mass</label>\n              <input type=\"text\" readonly class=\"form-control-plaintext h5\" [value]=\"person.mass\">\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Height</label>\n              <input type=\"text\" readonly class=\"form-control-plaintext h5\" [value]=\"person.height\">\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Hair Color</label>\n              <input type=\"text\" readonly class=\"form-control-plaintext h5\" [value]=\"person.hair_color\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row my-3\" *ngIf=\"(planet$ | async); let planet\">\n          <div class=\"col\">\n            <div class=\"card\">\n              <div class=\"card-header h4\">\n                Neighbours\n              </div>\n              <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\" *ngFor=\"let occupant of planet.residents\">\n                  <a href=\"javascript:;\" (click)=\"gotoDetails(occupant)\">\n                    <app-resident [url]=\"occupant\"></app-resident>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <ng-template #loadingPerson>\n      <div class=\"lead my-5\">\n        <div class=\"loader\">Loading\n          <span class=\"loader-dot\">.</span>\n          <span class=\"loader-dot\">.</span>\n          <span class=\"loader-dot\">.</span>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = "#details .planet-section {\n  background: #a1a1a1;\n  padding: 15px;\n  color: #fafafa; }\n  #details .planet-section ul.planet-details-list li {\n    padding: 8px; }\n  #details .planet-section ul.planet-details-list li i {\n      margin-right: 6px;\n      font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/main/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_starwars_service__ = __webpack_require__("./src/app/services/starwars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, router, starwarsService) {
        this.route = route;
        this.router = router;
        this.starwarsService = starwarsService;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.person$ = _this.starwarsService.fetchPerson(params.id);
                _this.person$.subscribe(function (data) {
                    if (data.homeworld) {
                        _this.planet$ = _this.starwarsService.planet(data.homeworld);
                    }
                });
            }
        });
    };
    DetailsComponent.prototype.gotoDetails = function (url) {
        var urlId = url.replace('https://swapi.co/api/people/', '').replace('/', '');
        this.router.navigate(['/details', urlId]);
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-details',
            template: __webpack_require__("./src/app/main/details/details.component.html"),
            styles: [__webpack_require__("./src/app/main/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_starwars_service__["a" /* StarwarsService */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/details/details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_component__ = __webpack_require__("./src/app/main/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_routing__ = __webpack_require__("./src/app/main/details/details.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resident_resident_component__ = __webpack_require__("./src/app/main/details/resident/resident.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DetailsModule = /** @class */ (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__details_routing__["a" /* DetailsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__details_component__["a" /* DetailsComponent */], __WEBPACK_IMPORTED_MODULE_4__resident_resident_component__["a" /* ResidentComponent */]]
        })
    ], DetailsModule);
    return DetailsModule;
}());



/***/ }),

/***/ "./src/app/main/details/details.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_component__ = __webpack_require__("./src/app/main/details/details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: ':id',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__details_component__["a" /* DetailsComponent */]
    }
];
var DetailsRoutingModule = /** @class */ (function () {
    function DetailsRoutingModule() {
    }
    DetailsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], DetailsRoutingModule);
    return DetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/details/resident/resident.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(person$ | async); let person\">\n  <h5> {{ person.name }} </h5>\n</div>"

/***/ }),

/***/ "./src/app/main/details/resident/resident.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/details/resident/resident.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResidentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_starwars_service__ = __webpack_require__("./src/app/services/starwars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_animations__ = __webpack_require__("./src/app/config/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResidentComponent = /** @class */ (function () {
    function ResidentComponent(starwarsService) {
        this.starwarsService = starwarsService;
        this.url = '';
        this.slideInOutAnimation = 'out';
    }
    ResidentComponent.prototype.ngOnInit = function () {
        this.person$ = this.starwarsService.fetchPersonByUrl(this.url);
        // .do(() => this.slideInOutAnimation = 'in');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ResidentComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@flyInOut'),
        __metadata("design:type", Object)
    ], ResidentComponent.prototype, "slideInOutAnimation", void 0);
    ResidentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resident',
            template: __webpack_require__("./src/app/main/details/resident/resident.component.html"),
            styles: [__webpack_require__("./src/app/main/details/resident/resident.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__config_animations__["a" /* FLY_IN_OUT */])()
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_starwars_service__["a" /* StarwarsService */]])
    ], ResidentComponent);
    return ResidentComponent;
}());



/***/ })

});
//# sourceMappingURL=details.module.chunk.js.map