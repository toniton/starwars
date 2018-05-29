webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/details/details.module": [
		"./src/app/main/details/details.module.ts",
		"details.module"
	],
	"./main/home/home.module": [
		"./src/app/main/home/home.module.ts",
		"home.module"
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
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_alert_alert_service__ = __webpack_require__("./src/app/widgets/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widgets_alert_alert__ = __webpack_require__("./src/app/widgets/alert/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, alertService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.alertService = alertService;
        this.watchInternetConnectivity();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { return _this.titleService.setTitle('Starwars | ' + event['title']); });
    };
    AppComponent.prototype.watchInternetConnectivity = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].merge(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(navigator.onLine), __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'online').mapTo(true), __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'offline').mapTo(false)).do(function (response) {
            if (response) {
                _this.alertService.alert(null, __WEBPACK_IMPORTED_MODULE_4__widgets_alert_alert__["a" /* AlertType */].Success, 'Connection Ok.', false, 'icon-close', true);
            }
            else {
                _this.alertService.alert(null, __WEBPACK_IMPORTED_MODULE_4__widgets_alert_alert__["a" /* AlertType */].Error, 'Internet error, please check your connection.', false, 'icon-close', true);
            }
        }).debounceTime(400).distinctUntilChanged().subscribe();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            styles: [__webpack_require__("./src/app/app.scss")],
            selector: 'app-root',
            template: "<div class=\"topbar\"><app-alert></app-alert></div>\n  <router-outlet></router-outlet><app-loader></app-loader><app-badge></app-badge>",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__widgets_alert_alert_service__["a" /* AlertService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthServiceConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__ = __webpack_require__("./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_guards_module__ = __webpack_require__("./src/app/guards/guards.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resolvers_resolvers_module__ = __webpack_require__("./src/app/resolvers/resolvers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_services_module__ = __webpack_require__("./src/app/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__widgets_widgets_module__ = __webpack_require__("./src/app/widgets/widgets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__widgets_alert_alert_service__ = __webpack_require__("./src/app/widgets/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_directives_module__ = __webpack_require__("./src/app/directives/directives.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Routing Module

// Services



// Modules







function getAuthServiceConfigs() {
    // TODO: move key to config
    var config = new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["GoogleLoginProvider"]('916269502837-k1ngpanseef3gd8cted87kgk24nikoeg.apps.googleusercontent.com')
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["FacebookLoginProvider"]('341103606397398')
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["g" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_10__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_16__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_11__guards_guards_module__["a" /* GuardsModule */],
                __WEBPACK_IMPORTED_MODULE_12__resolvers_resolvers_module__["a" /* ResolversModule */],
                __WEBPACK_IMPORTED_MODULE_14__widgets_widgets_module__["a" /* WidgetsModule */],
                __WEBPACK_IMPORTED_MODULE_13__services_services_module__["a" /* ServicesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__widgets_alert_alert_service__["a" /* AlertService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"],
                    useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["PathLocationStrategy"]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_layouts_partial_layout_partial_layout_component__ = __webpack_require__("./src/app/core/layouts/partial-layout/partial-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_errors_not_found_not_found_component__ = __webpack_require__("./src/app/core/errors/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__core_layouts_partial_layout_partial_layout_component__["a" /* PartialLayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: './main/home/home.module#HomeModule',
                pathMatch: 'full',
                data: {
                    title: 'Home'
                }
            },
            {
                path: 'details',
                loadChildren: './main/details/details.module#DetailsModule',
                data: {
                    title: 'Details'
                }
            }
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_3__core_errors_not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* PreloadAllModules */], enableTracing: false })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.scss":
/***/ (function(module, exports) {

module.exports = "/*------------------------------------------------------------------\n * Project Name: Pawa Responsive Template\n * Project URI: http://pawa.paytron.com.ng\n * Author: Siliconbear\n * Author URI: http://siliconbear.com/\n * Description: An application that helps you buy light accross Africa\n * Version: 1.0\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Bootstrap v4 (http://getbootstrap.com)\n * Copyright 2017 Paytron.\n -------------------------------------------------------------------*/\n/*------------------------------------------------------------------\n[Table of contents]\n\n1. General Styles.\n2. Header Styles.\n3. Top Content Styles.\n4. info Section Styles.\n5. Services Section Styles.\n6. Message Section Styles.\n7. Pricing Section Styles.\n8. Custom Plan Section Styles.\n9. Features Section Styles.\n10. Testimonials Section Styles.\n11. More Features Section Styles.\n12. Footer Section Styles.\n13. Sign in - Sign up Pages Styles.\n14. Inner Pages Styles.\n15. Responsive Styles.\n-------------------------------------------------------------------*/\n/*------------------------------------------------------------------\n\t1. General Styles\n-------------------------------------------------------------------*/\n@media (min-width: 768px) {\n  .container-fluid {\n    padding-right: 64px !important;\n    padding-left: 64px !important; } }\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  height: 100vh; }\n:host main {\n    position: relative; }\n:host router-outlet ~ * {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n.logo {\n  text-decoration: none !important; }\n.topbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 9999; }\n.topbar .alert {\n    text-align: center;\n    margin-bottom: 0 !important; }\n.navbar {\n  background-color: #1b1b1b;\n  background-image: url('header-background.863e76e93f57cfda1cb3.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-clip: border-box;\n  color: #fff !important;\n  padding-bottom: 6px !important;\n  padding-top: 6px !important; }\n.navbar-toggler-right {\n  margin-top: 12px;\n  right: 0px; }\nbody {\n  background: #fee588;\n  -webkit-transition: opacity 0.3s ease-in;\n  transition: opacity 0.3s ease-in; }\n.card, .search-bar {\n  border: 1px solid rgba(232, 206, 101, 0.55) !important; }\n.card:hover, .list-group-item:hover {\n  background: #f7f7f7 !important;\n  -webkit-box-shadow: 0 0 4px #e8ce65;\n  box-shadow: 0 0 4px #e8ce65;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01); }\n.display-1, .display-2, .display-3, .display-4, .display-5, .display-6 {\n  letter-spacing: -2px; }\nform {\n  margin-top: 36px; }\nform .input-group-prepend > .btn {\n    padding-left: 0.75rem !important;\n    padding-right: 0.5rem !important; }\nform .form-action a {\n    margin-top: 12px;\n    color: #a5a5a5;\n    text-decoration: underline; }\nform .form-action .form-check .form-check-input {\n    height: 30px;\n    width: 30px; }\nform .form-action .form-check .form-check-text {\n    display: block;\n    margin-left: 30px; }\n.dataTables_wrapper.container-fluid {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n.dataTables_wrapper.container-fluid .dataTables_scrollBody {\n    min-height: 320px; }\n.inner-footer {\n  padding: 15px 0;\n  margin-left: auto;\n  margin-right: auto; }\n.inner-footer .media {\n    max-width: 460px; }\n.inner-footer .media .media-body {\n      font-size: 11px; }\n@media (max-width: 768px) {\n  .inner-footer {\n    position: relative;\n    margin-top: 60px; }\n    .inner-footer .container {\n      padding: 0; } }\n@media (max-width: 768px) {\n  .container {\n    margin-left: 0 !important;\n    margin-right: 0 !important; } }\n@media (max-width: 991px) {\n  .navbar-toggleable-md .navbar-nav .dropdown-menu {\n    display: block !important; } }\n@supports (zoom: 2) {\n  input[type=\"radio\"], input[type=\"checkbox\"] {\n    zoom: 1.1; } }\n@supports not (zoom: 2) {\n  input[type=\"radio\"], input[type=\"checkbox\"] {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    margin: 15px; } }\n"

/***/ }),

/***/ "./src/app/config/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FADE_IN_SCALEUP */
/* unused harmony export SLIDE_IN_OUT */
/* unused harmony export SLIDE_IN_DOWN */
/* unused harmony export SLIDE_IN_LEFT */
/* harmony export (immutable) */ __webpack_exports__["a"] = FLY_IN_OUT;
/* harmony export (immutable) */ __webpack_exports__["b"] = FLY_IN_OUT_LIST;
/* harmony export (immutable) */ __webpack_exports__["c"] = FLY_IN_OUT_LIST_PARENT;
/* harmony export (immutable) */ __webpack_exports__["d"] = ROUTER_FADE_ANIMATION;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

function FADE_IN_SCALEUP() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('fadeInScaleUp', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'scale(0.8)', opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'scale(1.0)', opacity: 1 }))
        ])
    ]);
}
;
function SLIDE_IN_OUT() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('slideInOutAnimation', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(100%)' }), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* sequence */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(-100%)' }))
                    ], { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' })),
                    ], { optional: true }),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
            ])
        ])
    ]);
}
;
// Component transition animations
function SLIDE_IN_DOWN() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('slideInDownAnimation', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);
}
function SLIDE_IN_LEFT() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('slideInLeftAnimation', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('* <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
            opacity: 0,
            transform: 'translateX(0)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.8s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);
}
function FLY_IN_OUT() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('flyInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: 'translateY(0)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('out => in', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 1,
                transform: 'translateY(15%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('in => out', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0,
                transform: 'translateY(-15%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.3s ease-out')
        ])
    ]);
}
function FLY_IN_OUT_LIST() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('flyInOutList', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: 'translateY(0)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    opacity: 0,
                    transform: 'translateY(15%)'
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])(180, [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s ease-in')
                ])
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])(-60, [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s 0.2s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        opacity: 0,
                        transform: 'translateY(60%)'
                    }))
                ])
            ], { optional: true })
        ])
    ]);
}
function FLY_IN_OUT_LIST_PARENT() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('flyInOutListParent', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
            // style({ transform: 'translate(-100px)' }),
            // animate('500ms', style({ transform: 'translate(0px)' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])(180, [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()
                ])
            ], { optional: true })
        ]))
    ]);
}
function ROUTER_FADE_ANIMATION() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('routerFadeAnimation', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1 }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.1s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }))
            ], { optional: true })
        ])
    ]);
}


/***/ }),

/***/ "./src/app/config/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_URL; });
/* unused harmony export SIGN_UP_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_JSON_KEY_STRING; });
/* unused harmony export JWT_TOKEN_KEY_STRING */
/* unused harmony export SUPPORTED_LANGUAGES */
var LOGIN_URL = '/login';
var SIGN_UP_URL = '/signup';
var CURRENT_USER_JSON_KEY_STRING = 'currentUser';
var JWT_TOKEN_KEY_STRING = 'jwtToken';
var SUPPORTED_LANGUAGES = [
    {
        name: 'English',
        lang: 'en-US'
    },
    {
        name: 'Hausa',
        lang: 'ha-NG'
    },
    {
        name: 'Igbo',
        lang: 'ig-NG'
    },
    {
        name: 'Yoruba',
        lang: 'yor-NG'
    }
];


/***/ }),

/***/ "./src/app/config/endpoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endpoints; });
var endpoints = {
    PEOPLE: 'people/',
    PLANETS: 'planet/',
    STARSHIPS: 'starships/',
};


/***/ }),

/***/ "./src/app/config/loading-messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadingMessages; });
var loadingMessages = [
    'You look nice today',
    'Take a chill pill',
    'It shouldn\'t take much longer anymore',
    'Patience is virtue',
    'Wait for it',
    'Coming soon, like a new movie',
    'Our country is amazing, no doubt',
    'Education is power, not light',
    'I\'m not here to waste time',
    'Up nepa!!! remember that?',
    'I think I\'m much more reliable',
    'You have a great spirit called patience',
    'Great people wait for their turn',
    'There is light at the end of the tunnel',
    'I\'m grateful you can wait',
    'Just a moment please',
    'Benefits of waiting',
    'The patient dog, isn\'t hungry just yet',
    'Love is waiting for no reason',
    'Don\'t give up on me just yet',
    'Let\'s play a game called: \'Wait on me\'',
    'Who do you think invented Electricity?',
    'Seems like you like my spinner',
    'You dont have to see progress all the time',
    'Grab a snack, while you chill',
    'I normally don\'t take this long',
    'I\'m not a late comer, please hold',
    'Hold on dear',
    'I think i\'m loving your company already',
    'Make sure you try me next time',
    'It\'s going to be alright, very soon',
    'Don\'t give up on your dreams',
    'Don\'t give up on me',
    'Thank God, you have chill',
    'Remember to be nice to people',
    'Put a smile on your face :-)',
    'Patient people live longer',
    'Do not be discouraged',
    'The future is bright, hold on',
    'Let God be your inspiration',
    'Never stop waiting, never stop praying',
    'Read a book, once a month',
    'Learn patience, get understanding',
    'It may seem far, but please wait',
    'Hold on a bit',
    'Amazing things come to those who wait',
    'Wait for that which is worth waiting for',
    'Don\'t wait for opportunity, Create it.',
    'Don\'t wait for the perfect moment.',
    'Take the moment and make it perfect.',
    'We\'re just getting ready',
    'Enjoy the sunshine',
    'Wait, the storm will be over soon.',
    'Please wait responsibly',
    'Hey you. Welcome back!'
];


/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_layouts_full_layout_full_layout_component__ = __webpack_require__("./src/app/core/layouts/full-layout/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_layouts_partial_layout_partial_layout_component__ = __webpack_require__("./src/app/core/layouts/partial-layout/partial-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__errors_not_found_not_found_component__ = __webpack_require__("./src/app/core/errors/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__headers_partial_header_partial_header_component__ = __webpack_require__("./src/app/core/headers/partial-header/partial-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__core_layouts_full_layout_full_layout_component__["a" /* FullLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_3__core_layouts_partial_layout_partial_layout_component__["a" /* PartialLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__errors_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_6__headers_partial_header_partial_header_component__["a" /* PartialHeaderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__core_layouts_full_layout_full_layout_component__["a" /* FullLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_3__core_layouts_partial_layout_partial_layout_component__["a" /* PartialLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__errors_not_found_not_found_component__["a" /* NotFoundComponent */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/errors/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container-fluid\">\n    <div class=\"jumbotron mt-5\">\n      <h1 class=\"display-4\">404, Not Found!</h1>\n      <p class=\"lead\">Oh shit, this page could not be found. You are probably looking the wrong way.</p>\n      <p>Not to worry, it is not you, it is us.</p>\n      <a class=\"btn btn-primary\" routerLink=\"/\" role=\"button\">Go Home</a>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/core/errors/not-found/not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/errors/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/core/errors/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/core/errors/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/headers/partial-header/partial-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <div class=\"display-5\">\n        <img src=\"assets/images/starwars-logo.svg\" height=\"60px\"/>\n      </div>\n    </a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/core/headers/partial-header/partial-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartialHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartialHeaderComponent = /** @class */ (function () {
    function PartialHeaderComponent() {
    }
    PartialHeaderComponent.prototype.ngOnInit = function () {
    };
    PartialHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-partial-header',
            template: __webpack_require__("./src/app/core/headers/partial-header/partial-header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PartialHeaderComponent);
    return PartialHeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/layouts/full-layout/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page vertical-align text-xs-center\" data-animsition-in=\"fade-in\" data-animsition-out=\"fade-out\">\n    <div class=\"page-content vertical-align-middle animation-slide-top animation-duration-1\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/layouts/full-layout/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent() {
        this.title = "";
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () {
    };
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'full-layout',
            template: __webpack_require__("./src/app/core/layouts/full-layout/full-layout.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/layouts/partial-layout/partial-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header-holder\">\n    <app-partial-header></app-partial-header>\n</header>\n<main>\n    <div class=\"container-fluid\" [@routerFadeAnimation]=\"getRouterOutletState(o)\">\n        <router-outlet #o=\"outlet\"></router-outlet>\n    </div>\n</main>"

/***/ }),

/***/ "./src/app/core/layouts/partial-layout/partial-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartialLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_animations__ = __webpack_require__("./src/app/config/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartialLayoutComponent = /** @class */ (function () {
    function PartialLayoutComponent() {
    }
    PartialLayoutComponent.prototype.ngOnInit = function () {
    };
    PartialLayoutComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    PartialLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-body',
            template: __webpack_require__("./src/app/core/layouts/partial-layout/partial-layout.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__config_animations__["d" /* ROUTER_FADE_ANIMATION */])()
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PartialLayoutComponent);
    return PartialLayoutComponent;
}());



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_trim_directive__ = __webpack_require__("./src/app/directives/trim.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_numbers_only_directive__ = __webpack_require__("./src/app/directives/numbers-only.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_equal_validator_directive__ = __webpack_require__("./src/app/directives/equal-validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__directives_trim_directive__["a" /* TrimDirective */], __WEBPACK_IMPORTED_MODULE_3__directives_numbers_only_directive__["a" /* NumbersOnlyDirective */], __WEBPACK_IMPORTED_MODULE_4__directives_equal_validator_directive__["a" /* EqualValidator */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__directives_trim_directive__["a" /* TrimDirective */], __WEBPACK_IMPORTED_MODULE_3__directives_numbers_only_directive__["a" /* NumbersOnlyDirective */], __WEBPACK_IMPORTED_MODULE_4__directives_equal_validator_directive__["a" /* EqualValidator */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/directives/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var f = c.root;
        var e = f.controls[this.validateEqual];
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][ngModel]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: EqualValidator_1, multi: true }]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./src/app/directives/numbers-only.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumbersOnlyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NumbersOnlyDirective = /** @class */ (function () {
    function NumbersOnlyDirective() {
    }
    NumbersOnlyDirective_1 = NumbersOnlyDirective;
    NumbersOnlyDirective.prototype.onKeyDown = function (event) {
        var e = event;
        var keyCode = e.which || e.keyCode || e.code || e.charCode;
        // if(typeof)
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(parseInt(keyCode, 10)) !== -1 ||
            // Allow: Ctrl+A
            (keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (keyCode >= 35 && keyCode <= 39)) {
            // let it happen, don't do anything
            return true;
        }
        // // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (keyCode < 48 || keyCode > 57)) && (keyCode < 96 || keyCode > 105)) {
            e.preventDefault();
            return false;
        }
        return true;
    };
    NumbersOnlyDirective.prototype.onInputChange = function (e) {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').trim();
        e.target.focus();
    };
    NumbersOnlyDirective.prototype.validate = function (c) {
        if ((/[^\dA-Z]/g.test(c.value))) {
            return {
                numbersOnly: {
                    valid: false
                }
            };
        }
        return null;
    };
    NumbersOnlyDirective.prototype.registerOnValidatorChange = function (fn) {
        console.log('validator changed');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], NumbersOnlyDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NumbersOnlyDirective.prototype, "onInputChange", null);
    NumbersOnlyDirective = NumbersOnlyDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: 'input[numbersOnly]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: NumbersOnlyDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], NumbersOnlyDirective);
    return NumbersOnlyDirective;
    var NumbersOnlyDirective_1;
}());



/***/ }),

/***/ "./src/app/directives/trim.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TRIM_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TRIM_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return TrimDirective; }),
    multi: true
};
var TrimDirective = /** @class */ (function (_super) {
    __extends(TrimDirective, _super);
    function TrimDirective(renderer, elementRef) {
        var _this = _super.call(this, renderer, elementRef, false) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.strip = false;
        _this.onChange = function (_) { };
        _this.onTouched = function () { };
        return _this;
    }
    TrimDirective.prototype.onPaste = function (event) {
        var element = event.target;
        var content = event.clipboardData.getData('text/plain');
        var val = content.trim();
        if (this.strip) {
            val = this.stripText(val);
        }
        this.renderer.setAttribute(this.elementRef.nativeElement, 'value', val);
        this.onChange(val);
        return false;
    };
    TrimDirective.prototype.onInput = function (event) {
        var element = event.target;
        var content = element.value;
        var val = content.trim();
        if (this.strip) {
            val = this.stripText(val);
        }
        this.renderer.setAttribute(this.elementRef.nativeElement, 'value', val);
        this.onChange(val);
        return;
    };
    TrimDirective.prototype.stripText = function (text) {
        return text.replace(/\s/g, '');
    };
    TrimDirective.prototype.writeValue = function (value) {
        if (value != null) {
            _super.prototype.writeValue.call(this, value.toString().trim());
        }
    };
    TrimDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TrimDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TrimDirective.prototype, "strip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Object)
    ], TrimDirective.prototype, "onTouched", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TrimDirective.prototype, "onPaste", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TrimDirective.prototype, "onInput", null);
    TrimDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: 'input[trim]',
            providers: [TRIM_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], TrimDirective);
    return TrimDirective;
}(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* DefaultValueAccessor */]));



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_constants__ = __webpack_require__("./src/app/config/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__config_constants__["a" /* CURRENT_USER_JSON_KEY_STRING */])) {
            return true;
        }
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__config_constants__["b" /* LOGIN_URL */]], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/guards.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GuardsModule = /** @class */ (function () {
    function GuardsModule() {
    }
    GuardsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]
            ]
        })
    ], GuardsModule);
    return GuardsModule;
}());



/***/ }),

/***/ "./src/app/resolvers/resolvers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolversModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ResolversModule = /** @class */ (function () {
    function ResolversModule() {
    }
    ResolversModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: []
        })
    ], ResolversModule);
    return ResolversModule;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__starwars_service__ = __webpack_require__("./src/app/services/starwars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__starwars_service__["a" /* StarwarsService */]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/starwars.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarwarsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_endpoint__ = __webpack_require__("./src/app/config/endpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StarwarsService = /** @class */ (function () {
    function StarwarsService(http) {
        this.http = http;
    }
    ;
    StarwarsService.prototype.getPersonIdFromUrl = function (url) {
        return url.replace('https://swapi.co/api/people/', '').replace('/', '');
    };
    StarwarsService.prototype.getPageNumberFromUrl = function (url) {
        return parseInt(url.replace('https://swapi.co/api/people/?page=', ''), 10);
    };
    StarwarsService.prototype.people = function (page) {
        if (page === void 0) { page = null; }
        if (page !== null) {
            return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL, '/', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PREFIX, '/', __WEBPACK_IMPORTED_MODULE_2__config_endpoint__["a" /* endpoints */].PEOPLE), {
                params: {
                    page: page
                }
            });
        }
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL, '/', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PREFIX, '/', __WEBPACK_IMPORTED_MODULE_2__config_endpoint__["a" /* endpoints */].PEOPLE));
    };
    ;
    StarwarsService.prototype.findPeople = function (name) {
        if (name === void 0) { name = ''; }
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL, '/', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PREFIX, '/', __WEBPACK_IMPORTED_MODULE_2__config_endpoint__["a" /* endpoints */].PEOPLE), {
            params: {
                search: name
            }
        });
    };
    ;
    StarwarsService.prototype.fetchPerson = function (id) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL, '/', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PREFIX, '/', __WEBPACK_IMPORTED_MODULE_2__config_endpoint__["a" /* endpoints */].PEOPLE, id));
    };
    ;
    StarwarsService.prototype.fetchPersonByUrl = function (url) {
        return this.http.get(url);
    };
    ;
    StarwarsService.prototype.findPlanet = function (id) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL, '/', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PREFIX, '/', __WEBPACK_IMPORTED_MODULE_2__config_endpoint__["a" /* endpoints */].PLANETS, id));
    };
    ;
    StarwarsService.prototype.fetchPlanetByUrl = function (url) {
        return this.http.get(url);
    };
    ;
    StarwarsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], StarwarsService);
    return StarwarsService;
}());



/***/ }),

/***/ "./src/app/widgets/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\" [@flyInOut]>\n  {{alert.message}}\n  <a class=\"close\" (click)=\"removeAlert(alert)\" *ngIf=\"alert.customIcon !==''; else closeIcon\">\n    <i [class]=\"alert.customIcon\"></i>\n  </a>\n  <ng-template #closeIcon>\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/widgets/alert/alert.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widgets/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_alert_alert__ = __webpack_require__("./src/app/widgets/alert/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert_service__ = __webpack_require__("./src/app/widgets/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
        this.isSuccess = false;
        this.state = 'in';
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                _this.alerts = [];
                return;
            }
            if ((typeof (_this.alertId) === 'undefined') && (alert.id === null)) {
                _this.alerts.push(alert);
                setTimeout(function () { return _this.removeAlert(alert); }, 6000);
                return;
            }
            if (_this.alertId === alert.id) {
                _this.alerts.push(alert);
                setTimeout(function () { return _this.removeAlert(alert); }, 6000);
            }
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        if (alert.dismissable) {
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        }
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__widgets_alert_alert__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__widgets_alert_alert__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__widgets_alert_alert__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__widgets_alert_alert__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "alertId", void 0);
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/widgets/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/widgets/alert/alert.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["n" /* trigger */])('flyInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* state */])('', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* style */])({ opacity: 1, transform: 'translateY(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* style */])({
                            opacity: 0,
                            transform: 'translateY(-50%)'
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('0.4s ease-in')
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('0.4s 0.2s ease-out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* style */])({
                            opacity: 0,
                            transform: 'translateY(-50%)'
                        }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/widgets/alert/alert.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_component__ = __webpack_require__("./src/app/widgets/alert/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]
            ]
        })
    ], AlertModule);
    return AlertModule;
}());



/***/ }),

/***/ "./src/app/widgets/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert__ = __webpack_require__("./src/app/widgets/alert/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](null);
        this.keepAfterRouteChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationStart */]) {
                if (_this.keepAfterRouteChange) {
                    _this.keepAfterRouteChange = false;
                }
                else {
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (id, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(id, __WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (id, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(id, __WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (id, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(id, __WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (id, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(id, __WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (id, type, message, keepAfterRouteChange, customIcon, dismissable) {
        if (id === void 0) { id = null; }
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        if (customIcon === void 0) { customIcon = ''; }
        if (dismissable === void 0) { dismissable = true; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ id: id, type: type, message: message, customIcon: customIcon, dismissable: dismissable });
    };
    AlertService.prototype.clear = function () {
        this.subject.next(null);
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/widgets/alert/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/widgets/badge/badge.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"beta-badge\" class=\"left\">\n  <a href=\"javascript:;\">Pawa Beta Version</a>\n</div>"

/***/ }),

/***/ "./src/app/widgets/badge/badge.component.scss":
/***/ (function(module, exports) {

module.exports = "#beta-badge {\n  top: 200px;\n  position: fixed;\n  z-index: 9999; }\n  #beta-badge.left {\n    left: 0;\n    margin-left: -1px; }\n  #beta-badge.left a {\n      background-image: url(\"data:image/svg+xml,%3Csvg id%3D%22Layer_1%22 data-name%3D%22Layer 1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 51.64 51.83%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23569e4d%3B%7D.cls-2%7Bfont-size%3A9.85px%3Bfont-family%3ANexaLight%2C Nexa Light%3B%7D.cls-2%2C.cls-4%7Bfill%3A%23f7f7f7%3B%7D.cls-3%7Bletter-spacing%3A0.01em%3B%7D.cls-4%7Bfont-size%3A12px%3Bfont-family%3ANexaBold%2C Nexa Bold%3B%7D.cls-5%7Bletter-spacing%3A0.04em%3B%7D.cls-6%7Bfill%3A%2340683a%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Ebeta-badge%3C%2Ftitle%3E%3Cpolygon class%3D%22cls-1%22 points%3D%2251.64 0.09 42.25 26.34 51.55 51.83 0 51.74 0.09 0 51.64 0.09%22%2F%3E%3Ctext class%3D%22cls-2%22 transform%3D%22translate(5.05 35.58)%22%3Emo%3Ctspan class%3D%22cls-3%22 x%3D%2214.88%22 y%3D%220%22%3Ed%3C%2Ftspan%3E%3Ctspan x%3D%2221.04%22 y%3D%220%22%3Ee%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext class%3D%22cls-4%22 transform%3D%22translate(5.27 26.92)%22%3EB%3Ctspan class%3D%22cls-5%22 x%3D%228.2%22 y%3D%220%22%3EE%3C%2Ftspan%3E%3Ctspan x%3D%2216.18%22 y%3D%220%22%3ETA%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpolygon class%3D%22cls-6%22 points%3D%2238.45 17.14 36.91 16.38 35.36 17.11 35.67 15.53 34.43 14.39 36.16 14.18 36.95 12.74 37.7 14.19 39.43 14.44 38.17 15.55 38.45 17.14%22%2F%3E%3C%2Fsvg%3E\");\n      background-repeat: no-repeat;\n      background-size: contain; }\n  #beta-badge a {\n    width: 36px;\n    height: 58px;\n    display: block;\n    text-indent: -8e3px;\n    background-repeat: no-repeat;\n    background-position: 0 0;\n    overflow: hidden; }\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.5), not all, not all, not all {\n  #beta-badge.left a {\n    background-image: url(\"data:image/svg+xml,%3Csvg id%3D%22Layer_1%22 data-name%3D%22Layer 1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 51.64 51.83%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23569e4d%3B%7D.cls-2%7Bfont-size%3A9.85px%3Bfont-family%3ANexaLight%2C Nexa Light%3B%7D.cls-2%2C.cls-4%7Bfill%3A%23f7f7f7%3B%7D.cls-3%7Bletter-spacing%3A0.01em%3B%7D.cls-4%7Bfont-size%3A12px%3Bfont-family%3ANexaBold%2C Nexa Bold%3B%7D.cls-5%7Bletter-spacing%3A0.04em%3B%7D.cls-6%7Bfill%3A%2340683a%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Ebeta-badge%3C%2Ftitle%3E%3Cpolygon class%3D%22cls-1%22 points%3D%2251.64 0.09 42.25 26.34 51.55 51.83 0 51.74 0.09 0 51.64 0.09%22%2F%3E%3Ctext class%3D%22cls-2%22 transform%3D%22translate(5.05 35.58)%22%3Emo%3Ctspan class%3D%22cls-3%22 x%3D%2214.88%22 y%3D%220%22%3Ed%3C%2Ftspan%3E%3Ctspan x%3D%2221.04%22 y%3D%220%22%3Ee%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext class%3D%22cls-4%22 transform%3D%22translate(5.27 26.92)%22%3EB%3Ctspan class%3D%22cls-5%22 x%3D%228.2%22 y%3D%220%22%3EE%3C%2Ftspan%3E%3Ctspan x%3D%2216.18%22 y%3D%220%22%3ETA%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpolygon class%3D%22cls-6%22 points%3D%2238.45 17.14 36.91 16.38 35.36 17.11 35.67 15.53 34.43 14.39 36.16 14.18 36.95 12.74 37.7 14.19 39.43 14.44 38.17 15.55 38.45 17.14%22%2F%3E%3C%2Fsvg%3E\"); } }\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.5), not all, not all, not all {\n  #beta-badge a {\n    -ie-background-size: 70px 105px;\n    background-size: 70px 105px; } }\n"

/***/ }),

/***/ "./src/app/widgets/badge/badge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    BadgeComponent.prototype.ngOnInit = function () {
    };
    BadgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-badge',
            template: __webpack_require__("./src/app/widgets/badge/badge.component.html"),
            styles: [__webpack_require__("./src/app/widgets/badge/badge.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/widgets/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pageLoading\" id=\"loader\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 justify-content-center align-items-center\">\n      <div class=\"loading-spinner\"></div>\n      <p class=\"lead loading-message\">\n        {{ message }}\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/widgets/loader/loader.component.scss":
/***/ (function(module, exports) {

module.exports = "#loader {\n  background: #ffffff;\n  opacity: 0.9;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0; }\n  #loader .loading-message {\n    margin-top: 6.5em; }\n  #loader .loading-spinner {\n    position: absolute !important;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 2.5em !important;\n    height: 2.5em !important; }\n  #loader .loading-spinner:after {\n    width: 2.5em !important;\n    height: 2.5em !important;\n    margin-top: -1.25em;\n    top: 50%; }\n  #loader .loading-spinner, .input-loading .loading-spinner {\n  cursor: default;\n  pointer-events: none;\n  width: 1.25em;\n  height: 1.25em;\n  background: transparent;\n  border-radius: 100rem;\n  margin: auto; }\n  #loader .loading-spinner:before, .input-loading .loading-spinner:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  opacity: .8;\n  z-index: 100; }\n  #loader .loading-spinner:after, .input-loading .loading-spinner:after {\n  content: '';\n  display: block;\n  width: 1.25em;\n  height: 1.25em;\n  position: absolute;\n  left: 50%;\n  margin-left: -1.25em;\n  border-width: .2em;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2) rgba(0, 0, 0, 0.24) rgba(0, 0, 0, 0.28) rgba(0, 0, 0, 0.3);\n  border-radius: 100rem;\n  -webkit-animation: loading-spin .6s infinite linear;\n  animation: loading-spin .6s infinite linear;\n  z-index: 101;\n  -webkit-box-shadow: 0 0 0 1px transparent;\n          box-shadow: 0 0 0 1px transparent; }\n  @-webkit-keyframes loading-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes loading-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/widgets/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_loading_messages__ = __webpack_require__("./src/app/config/loading-messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widgets_loader_loader_service__ = __webpack_require__("./src/app/widgets/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(router, activatedRoute, loaderService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loaderService = loaderService;
        this.pageLoading = true;
        this.currentLoaderIndex = -1;
        this.messages = __WEBPACK_IMPORTED_MODULE_3__config_loading_messages__["a" /* loadingMessages */];
        this.message = 'loading...';
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.getLoadingState().subscribe(function (showLoading) {
            setTimeout(function () {
                showLoading === true ? _this.getLoadingMessage() : clearInterval(_this.interval);
                _this.pageLoading = showLoading;
            }, 100);
        });
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]; })
            .map(function () { return _this.activatedRoute; })
            .subscribe(function () {
            _this.loaderService.getLoadingState().next(true);
        });
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .subscribe(function () {
            _this.loaderService.getLoadingState().next(false);
        });
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationCancel */]; })
            .subscribe(function () {
            _this.loaderService.getLoadingState().next(false);
            _this.message = 'page encountered error while loading';
        });
    };
    LoaderComponent.prototype.ngAfterViewInit = function () {
        this.getLoadingMessage();
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    LoaderComponent.prototype.loadComponent = function () {
        this.currentLoaderIndex = Math.floor(Math.random() * (this.messages.length - 0 + 1)) + 0;
        this.message = this.messages[this.currentLoaderIndex];
    };
    LoaderComponent.prototype.getLoadingMessage = function () {
        var _this = this;
        this.loadComponent();
        this.interval = setInterval(function () {
            _this.loadComponent();
        }, 5000);
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/widgets/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/widgets/loader/loader.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["n" /* trigger */])('show', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(150, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__widgets_loader_loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/widgets/loader/loader.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_loader_loader_service__ = __webpack_require__("./src/app/widgets/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_loader_loader_component__ = __webpack_require__("./src/app/widgets/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoaderModule = /** @class */ (function () {
    function LoaderModule() {
    }
    LoaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__widgets_loader_loader_component__["a" /* LoaderComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__widgets_loader_loader_component__["a" /* LoaderComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__widgets_loader_loader_service__["a" /* LoaderService */]
            ]
        })
    ], LoaderModule);
    return LoaderModule;
}());



/***/ }),

/***/ "./src/app/widgets/loader/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    LoaderService.prototype.showLoading = function (load) {
        this.loaderSubject.next(load);
    };
    LoaderService.prototype.getLoadingState = function () {
        return this.loaderSubject;
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/widgets/widgets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert_module__ = __webpack_require__("./src/app/widgets/alert/alert.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_loader_loader_module__ = __webpack_require__("./src/app/widgets/loader/loader.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__badge_badge_component__ = __webpack_require__("./src/app/widgets/badge/badge.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert_module__["a" /* AlertModule */],
                __WEBPACK_IMPORTED_MODULE_3__widgets_loader_loader_module__["a" /* LoaderModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__badge_badge_component__["a" /* BadgeComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__badge_badge_component__["a" /* BadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_2__widgets_alert_alert_module__["a" /* AlertModule */],
                __WEBPACK_IMPORTED_MODULE_3__widgets_loader_loader_module__["a" /* LoaderModule */]
            ]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    API_URL: 'https://swapi.co',
    API_PORT: '443',
    PREFIX: 'api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map