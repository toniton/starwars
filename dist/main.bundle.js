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

module.exports = "/*------------------------------------------------------------------\n * Project Name: Pawa Responsive Template\n * Project URI: http://pawa.paytron.com.ng\n * Author: Siliconbear\n * Author URI: http://siliconbear.com/\n * Description: An application that helps you buy light accross Africa\n * Version: 1.0\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Bootstrap v4 (http://getbootstrap.com)\n * Copyright 2017 Paytron.\n -------------------------------------------------------------------*/\n/*------------------------------------------------------------------\n[Table of contents]\n\n1. General Styles.\n2. Header Styles.\n3. Top Content Styles.\n4. info Section Styles.\n5. Services Section Styles.\n6. Message Section Styles.\n7. Pricing Section Styles.\n8. Custom Plan Section Styles.\n9. Features Section Styles.\n10. Testimonials Section Styles.\n11. More Features Section Styles.\n12. Footer Section Styles.\n13. Sign in - Sign up Pages Styles.\n14. Inner Pages Styles.\n15. Responsive Styles.\n-------------------------------------------------------------------*/\n/*------------------------------------------------------------------\n\t1. General Styles\n-------------------------------------------------------------------*/\n@media (min-width: 768px) {\n  .container-fluid {\n    padding-right: 64px !important;\n    padding-left: 64px !important; } }\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  height: 100vh; }\n:host main {\n    position: relative; }\n:host router-outlet ~ * {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n.logo {\n  text-decoration: none !important; }\n.topbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 9999; }\n.topbar .alert {\n    text-align: center;\n    margin-bottom: 0 !important; }\n.navbar {\n  background-color: #1b1b1b;\n  background-image: url('header-background.863e76e93f57cfda1cb3.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-clip: border-box;\n  color: #fff !important;\n  padding-bottom: 6px !important;\n  padding-top: 6px !important; }\n.navbar-toggler-right {\n  margin-top: 12px;\n  right: 0px; }\nbody {\n  background: #fee588;\n  -webkit-transition: opacity 0.3s ease-in;\n  transition: opacity 0.3s ease-in; }\n@media (max-width: 768px) {\n  #bulb-header .navbar-nav .nav-link {\n    color: #001f39; } }\n.card, .search-bar {\n  border: 1px solid rgba(232, 206, 101, 0.55) !important; }\n.card:hover {\n  background: #f7f7f7 !important;\n  -webkit-box-shadow: 0 0 4px #e8ce65;\n  box-shadow: 0 0 4px #e8ce65;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01); }\n.display-1, .display-2, .display-3, .display-4, .display-5, .display-6 {\n  letter-spacing: -2px; }\nform {\n  margin-top: 36px; }\nform .input-group-prepend > .btn {\n    padding-left: 0.75rem !important;\n    padding-right: 0.5rem !important; }\nform .form-action a {\n    margin-top: 12px;\n    color: #a5a5a5;\n    text-decoration: underline; }\nform .form-action .form-check .form-check-input {\n    height: 30px;\n    width: 30px; }\nform .form-action .form-check .form-check-text {\n    display: block;\n    margin-left: 30px; }\n.dataTables_wrapper.container-fluid {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n.dataTables_wrapper.container-fluid .dataTables_scrollBody {\n    min-height: 320px; }\n.inner-footer {\n  padding: 15px 0;\n  margin-left: auto;\n  margin-right: auto; }\n.inner-footer .media {\n    max-width: 460px; }\n.inner-footer .media .media-body {\n      font-size: 11px; }\n@media (max-width: 768px) {\n  .inner-footer {\n    position: relative;\n    margin-top: 60px; }\n    .inner-footer .container {\n      padding: 0; } }\n@media (max-width: 768px) {\n  .navbar {\n    background: #ffffff !important; }\n  .container {\n    margin-left: 0 !important;\n    margin-right: 0 !important; } }\n@media (max-width: 991px) {\n  .navbar-toggleable-md .navbar-nav .dropdown-menu {\n    display: block !important; } }\n@supports (zoom: 2) {\n  input[type=\"radio\"], input[type=\"checkbox\"] {\n    zoom: 1.1; } }\n@supports not (zoom: 2) {\n  input[type=\"radio\"], input[type=\"checkbox\"] {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    margin: 15px; } }\n"

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
/* harmony export (immutable) */ __webpack_exports__["c"] = ROUTER_FADE_ANIMATION;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: 'translateY(0)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0,
                transform: 'translateY(15%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => void', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s 0.2s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                opacity: 0,
                transform: 'translateY(-50%)'
            }))
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
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])(160, [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s ease-in')
                ])
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])(80, [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s 0.2s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                        opacity: 0,
                        transform: 'translateY(60%)'
                    }))
                ])
            ], { optional: true })
        ])
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

module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"display-4\">404, Not Found!</h1>\n    <p class=\"lead\">Oh shit, this page could not be found. You are probably looking the wrong way.</p>\n    <p class=\"lead\">Not to worry, it is not you, it is us.</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" routerLink=\"/\" role=\"button\">Go Home</a>\n    </p>\n  </div>"

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
                Object(__WEBPACK_IMPORTED_MODULE_1__config_animations__["c" /* ROUTER_FADE_ANIMATION */])()
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
    StarwarsService.prototype.planets = function (id) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL, '/', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PREFIX, '/', __WEBPACK_IMPORTED_MODULE_2__config_endpoint__["a" /* endpoints */].PLANETS, id));
    };
    ;
    StarwarsService.prototype.planet = function (url) {
        return this.http.get(url);
    };
    ;
    StarwarsService.prototype.starships = function (id) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL, '/', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PREFIX, '/', __WEBPACK_IMPORTED_MODULE_2__config_endpoint__["a" /* endpoints */].STARSHIPS, id));
    };
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

module.exports = "#beta-badge {\n  top: 190px;\n  position: fixed;\n  z-index: 9999; }\n  #beta-badge.left {\n    left: 0;\n    margin-left: -12px; }\n  #beta-badge.left a {\n      background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 356.5 493.2%22 style%3D%22enable-background%3Anew 0 0 356.5 493.2%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3Aurl(%23XMLID_94_)%3B%7D%0D%09.st1%7Bfill%3A%23599E4E%3B%7D%0D%09.st2%7Bfill%3A%23FFFFFF%3B%7D%0D%3C%2Fstyle%3E%0D%3Cg id%3D%22XMLID_156_%22%3E%0D%09%3ClinearGradient id%3D%22XMLID_94_%22 gradientUnits%3D%22userSpaceOnUse%22 x1%3D%2214.3691%22 y1%3D%22327.8944%22 x2%3D%22338.424%22 y2%3D%22385.0341%22%3E%0D%09%09%3Cstop  offset%3D%220%22 style%3D%22stop-color%3A%23599E4D%22%2F%3E%0D%09%09%3Cstop  offset%3D%221%22 style%3D%22stop-color%3A%231E4E1F%22%2F%3E%0D%09%3C%2FlinearGradient%3E%0D%09%3Cpath id%3D%22XMLID_157_%22 class%3D%22st0%22 d%3D%22M1.5%2C493.2L341.8%2C305c9-5%2C14.6-14.5%2C14.6-24.8V229c0-7.5-8-12.3-14.6-8.8L1.5%2C401.1V493.2z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22XMLID_158_%22%3E%0D%09%3Cpath id%3D%22XMLID_159_%22 class%3D%22st1%22 d%3D%22M356.5%2C280.7L1.5%2C84.5V0l340%2C180.6c9.3%2C4.9%2C15%2C14.5%2C15%2C25V280.7z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22XMLID_70_%22%3E%0D%09%3Cpath id%3D%22XMLID_71_%22 class%3D%22st2%22 d%3D%22M114.5%2C101.8c2.7%2C1.6%2C4%2C4.6%2C2.1%2C8.1c-2.2%2C4.1-6.7%2C5-11.7%2C2.4l-12.9-7l12.8-23.8l12.9%2C7%0D%09%09c4.4%2C2.4%2C6%2C6.5%2C3.9%2C10.3c-0.9%2C1.6-2%2C2.6-3.4%2C3c-1.4%2C0.4-2.6%2C0.3-3.7-0.2L114.5%2C101.8z M101.7%2C103.7l4.6%2C2.5c1.6%2C0.9%2C3.1%2C0.4%2C3.9-1%0D%09%09c0.7-1.3%2C0.2-2.7-1.3-3.6l-4.6-2.5L101.7%2C103.7z M108.8%2C90.5l-2.4%2C4.4l4.2%2C2.3c1.5%2C0.8%2C3.1%2C0.5%2C3.8-0.9c0.7-1.3%2C0.1-2.7-1.3-3.5%0D%09%09L108.8%2C90.5z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_75_%22 class%3D%22st2%22 d%3D%22M137.7%2C122.5l-3.1%2C5.7l-18.9-10.2l12.8-23.8l18.8%2C10.1l-3.1%2C5.7l-12-6.4l-1.9%2C3.5l11%2C5.9%0D%09%09l-2.8%2C5.2l-11-5.9l-1.9%2C3.5L137.7%2C122.5z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_77_%22 class%3D%22st2%22 d%3D%22M168%2C123.1l-7.5-4l-9.6%2C17.9l-6.8-3.7l9.6-17.9l-7.5-4l3.2-5.9l21.8%2C11.7L168%2C123.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_79_%22 class%3D%22st2%22 d%3D%22M182.9%2C154.3l-7.3-4l0.6-4.3l-9.4-5l-3.3%2C2.9l-7.3-3.9l22.4-18.6l7.5%2C4.1L182.9%2C154.3z%0D%09%09 M177.2%2C139.2l1.2-8.5l-6.5%2C5.7L177.2%2C139.2z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_82_%22 class%3D%22st2%22 d%3D%22M228.7%2C158.1c0.6%2C2%2C0.4%2C4-0.7%2C6l-6%2C11.2l-3.7-2l5.6-10.5c1.4-2.6%2C0.6-5.1-1.7-6.4%0D%09%09c-2.9-1.6-5.9-0.5-8%2C3.4l-4.7%2C8.7l-3.7-2l5.6-10.5c1.4-2.6%2C0.6-5.1-1.7-6.4c-2.9-1.5-5.8-0.4-7.9%2C3.4l-4.7%2C8.7l-3.7-2l9.5-17.6%0D%09%09l3.7%2C2l-1.1%2C2c2.2-0.9%2C4.6-0.7%2C7%2C0.6c2.6%2C1.4%2C4.1%2C3.7%2C4.1%2C6.4c2.7-1.3%2C5.5-1.2%2C8.3%2C0.3C226.9%2C154.6%2C228.1%2C156.1%2C228.7%2C158.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_84_%22 class%3D%22st2%22 d%3D%22M229.5%2C176.6c-0.9-2.7-0.6-5.4%2C0.8-8.1s3.6-4.4%2C6.3-5.1c2.8-0.7%2C5.5-0.4%2C8.1%2C1%0D%09%09c2.7%2C1.4%2C4.4%2C3.5%2C5.3%2C6.2c0.9%2C2.7%2C0.6%2C5.4-0.8%2C8.1c-1.5%2C2.7-3.6%2C4.4-6.3%2C5.2c-2.7%2C0.8-5.4%2C0.4-8.1-1%0D%09%09C232.2%2C181.4%2C230.5%2C179.3%2C229.5%2C176.6z M241.6%2C180.1c1.8-0.5%2C3.1-1.7%2C4.1-3.4c1-1.8%2C1.2-3.5%2C0.6-5.3c-0.6-1.8-1.6-3.1-3.2-3.9%0D%09%09c-1.6-0.9-3.3-1-5.1-0.5c-1.7%2C0.5-3.1%2C1.6-4%2C3.4c-1%2C1.8-1.2%2C3.5-0.6%2C5.3c0.6%2C1.7%2C1.7%2C3%2C3.3%2C3.9%0D%09%09C238.2%2C180.5%2C239.8%2C180.6%2C241.6%2C180.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_87_%22 class%3D%22st2%22 d%3D%22M279.7%2C173.4L266%2C199l-3.7-2l1.1-2c-2.6%2C0.8-5.1%2C0.4-7.7-1c-2.4-1.3-3.9-3.3-4.7-5.9%0D%09%09c-0.8-2.7-0.5-5.4%2C1-8.1c1.5-2.7%2C3.5-4.5%2C6.2-5.3c2.7-0.8%2C5.2-0.6%2C7.6%2C0.7c2.6%2C1.4%2C4.3%2C3.4%2C5%2C6l5.4-10L279.7%2C173.4z M262.9%2C191.6%0D%09%09c1.8-0.5%2C3.1-1.6%2C4.1-3.4c1-1.8%2C1.2-3.5%2C0.6-5.3c-0.6-1.8-1.6-3.1-3.1-3.9c-1.6-0.9-3.3-1-5-0.5c-1.7%2C0.5-3%2C1.7-4%2C3.5%0D%09%09s-1.2%2C3.6-0.7%2C5.3c0.5%2C1.7%2C1.6%2C3%2C3.2%2C3.8C259.5%2C191.9%2C261.1%2C192.1%2C262.9%2C191.6z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_90_%22 class%3D%22st2%22 d%3D%22M292.2%2C202.9l-14.3-7.7c-1.4%2C3.3-0.2%2C6.6%2C2.5%2C8.1c2.4%2C1.3%2C4.7%2C1.2%2C6.8-0.3l2.9%2C2.5%0D%09%09c-3.4%2C2.9-7.5%2C3.1-11.5%2C1c-2.4-1.3-4.1-3.3-5-6c-0.8-2.7-0.5-5.4%2C1-8.1c1.5-2.7%2C3.6-4.5%2C6.2-5.3c2.7-0.8%2C5.4-0.5%2C7.9%2C0.9%0D%09%09c2.4%2C1.3%2C4%2C3.2%2C4.7%2C5.8c0.8%2C2.6%2C0.5%2C5.2-0.7%2C7.8L292.2%2C202.9z M283.1%2C190.5c-1.4%2C0.2-2.7%2C0.9-3.7%2C2.1l10.4%2C5.6%0D%09%09c0.9-3.1-0.2-5.6-2.7-7C285.9%2C190.6%2C284.5%2C190.4%2C283.1%2C190.5z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cpath id%3D%22XMLID_234_%22 class%3D%22st2%22 d%3D%22M30.9%2C74.1%22%2F%3E%0D%3Cpath id%3D%22XMLID_233_%22 class%3D%22st2%22 d%3D%22M53.1%2C74.1%22%2F%3E%0D%3Cg id%3D%22XMLID_42_%22%3E%0D%09%3Cpath id%3D%22XMLID_43_%22 class%3D%22st2%22 d%3D%22M151.9%2C370.6l1.4-0.8c0.9%2C1.7%2C2.7%2C2.1%2C4.5%2C1.1c1.6-0.9%2C2.2-2.3%2C1.5-3.6c-0.5-0.9-1.6-1-4-0.5%0D%09%09c-2.9%2C0.7-4.4%2C0.3-5.2-1.2c-1.1-1.9-0.3-4%2C1.9-5.2c2.2-1.2%2C4.5-0.7%2C6%2C1.1l-1.1%2C1.1c-1-1.3-2.7-1.6-4.1-0.8c-1.3%2C0.7-1.7%2C2-1.1%2C3.1%0D%09%09c0.4%2C0.8%2C1.3%2C0.9%2C3.3%2C0.4c3.4-0.7%2C5-0.4%2C5.9%2C1.2c1.1%2C2.1%2C0.2%2C4.3-2.3%2C5.8C155.9%2C373.7%2C153.2%2C373%2C151.9%2C370.6z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_45_%22 class%3D%22st2%22 d%3D%22M165.7%2C366.2l3.3-1.8l-4.9-8.8l-3.3%2C1.8l-0.7-1.3l8-4.5l0.7%2C1.3l-3.3%2C1.8l4.9%2C8.8l3.3-1.8%0D%09%09l0.7%2C1.3l-8%2C4.5L165.7%2C366.2z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_47_%22 class%3D%22st2%22 d%3D%22M172.7%2C349.1l1.5-0.8l5.6%2C10.1l5.7-3.2l0.7%2C1.3l-7.2%2C4L172.7%2C349.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_49_%22 class%3D%22st2%22 d%3D%22M189.9%2C352.7l3.3-1.8l-4.9-8.8L185%2C344l-0.7-1.3l8-4.5l0.7%2C1.3l-3.3%2C1.8l4.9%2C8.8l3.3-1.8%0D%09%09l0.7%2C1.3l-8%2C4.5L189.9%2C352.7z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_51_%22 class%3D%22st2%22 d%3D%22M199.3%2C341.8c-2.1-3.8-1.7-6.8%2C1.1-8.3c2.5-1.4%2C4.9-0.7%2C6.8%2C1.9l-1.4%2C0.8%0D%09%09c-1.3-1.8-3-2.3-4.7-1.4c-1.8%2C1-1.9%2C3.2-0.3%2C6.1c1.6%2C2.9%2C3.6%2C4%2C5.4%2C3c1.7-0.9%2C2-2.7%2C1.1-5l1.4-0.8c1.3%2C3.2%2C0.7%2C5.7-1.8%2C7.1%0D%09%09C204.1%2C346.8%2C201.4%2C345.5%2C199.3%2C341.8z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_53_%22 class%3D%22st2%22 d%3D%22M211.4%2C335c-2.1-3.8-1.7-6.8%2C1.1-8.3c2.8-1.6%2C5.5-0.3%2C7.6%2C3.5c2.1%2C3.8%2C1.7%2C6.8-1.1%2C8.3%0D%09%09C216.2%2C340%2C213.5%2C338.8%2C211.4%2C335z M218.6%2C331c-1.6-2.9-3.6-4-5.4-3c-1.8%2C1-1.9%2C3.2-0.3%2C6.1c1.6%2C2.9%2C3.6%2C4%2C5.4%2C3%0D%09%09C220.1%2C336.1%2C220.2%2C333.9%2C218.6%2C331z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_56_%22 class%3D%22st2%22 d%3D%22M220.8%2C322.3l1.6-0.9l9.5%2C6.3l-4.9-8.8l1.5-0.8l6.4%2C11.4l-1.6%2C0.9l-9.5-6.3l4.9%2C8.8l-1.5%2C0.8%0D%09%09L220.8%2C322.3z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_58_%22 class%3D%22st2%22 d%3D%22M245.2%2C308.7l3.5-2c2.2-1.2%2C4-0.8%2C5%2C1c0.5%2C0.9%2C0.5%2C2%2C0%2C3c1.6-0.3%2C3.1%2C0.5%2C3.8%2C1.9%0D%09%09c1.2%2C2.1%2C0.4%2C4-1.7%2C5.2l-4.3%2C2.4L245.2%2C308.7z M251.3%2C311.3c1.2-0.7%2C1.5-1.7%2C1-2.7c-0.6-1.1-1.7-1.2-2.8-0.6l-2%2C1.1l1.8%2C3.3%0D%09%09L251.3%2C311.3z M255.1%2C316.4c1.3-0.7%2C1.6-2%2C0.9-3.2c-0.7-1.3-2-1.6-3.2-1l-2.8%2C1.6l2.3%2C4.1L255.1%2C316.4z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_62_%22 class%3D%22st2%22 d%3D%22M257.4%2C301.8l7.5-4.2l0.7%2C1.3l-6%2C3.4l1.8%2C3.3l5.4-3l0.7%2C1.3l-5.4%2C3l2.3%2C4.1l6-3.4l0.7%2C1.3%0D%09%09l-7.5%2C4.2L257.4%2C301.8z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_64_%22 class%3D%22st2%22 d%3D%22M279.4%2C300.2l-3.7%2C2.1l0.8%2C3.8L275%2C307l-2.7-13.5l1.5-0.8l10%2C9.4l-1.5%2C0.8L279.4%2C300.2z%0D%09%09 M278.3%2C299.1l-4-3.8l1.1%2C5.4L278.3%2C299.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_67_%22 class%3D%22st2%22 d%3D%22M281.6%2C288.3l4.1-2.3c2.3-1.3%2C4-0.7%2C5%2C1.1c0.9%2C1.6%2C0.6%2C3.2-1%2C4.4l6.5%2C3.6l-1.7%2C0.9l-6.5-3.6%0D%09%09l-1.6%2C0.9l3.1%2C5.5l-1.5%2C0.8L281.6%2C288.3z M288.2%2C290.7c1.3-0.8%2C1.5-1.6%2C0.9-2.7c-0.6-1.1-1.4-1.4-2.8-0.6l-2.6%2C1.4l1.8%2C3.3%0D%09%09L288.2%2C290.7z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22XMLID_274_%22%3E%0D%09%3Cpath id%3D%22XMLID_288_%22 class%3D%22st2%22 d%3D%22M118.7%2C398.8l-10.4%2C0l-5.2-9l5.2-9l10.4%2C0l5.2%2C9L118.7%2C398.8z M109.6%2C396.6l7.9%2C0l3.9-6.8%0D%09%09l-3.9-6.8l-7.9%2C0l-3.9%2C6.8L109.6%2C396.6z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_285_%22 class%3D%22st2%22 d%3D%22M118.7%2C398.8l-10.4%2C0l-5.2-9l5.2-9l10.4%2C0l5.2%2C9L118.7%2C398.8z M109.6%2C396.6l7.9%2C0l3.9-6.8%0D%09%09l-3.9-6.8l-7.9%2C0l-3.9%2C6.8L109.6%2C396.6z%22%2F%3E%0D%09%3Cpolygon id%3D%22XMLID_284_%22 class%3D%22st2%22 points%3D%22119.1%2C397.2 117.2%2C398.3 112.9%2C390.9 104.4%2C390.9 104.4%2C388.7 114.2%2C388.7 %09%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_281_%22 class%3D%22st2%22 d%3D%22M123.4%2C406.8l-19.6%2C0l-9.8-17l9.8-17l19.6%2C0l9.8%2C17L123.4%2C406.8z M105%2C404.6l17.1%2C0l8.6-14.8%0D%09%09l-8.6-14.8l-17.1%2C0l-8.6%2C14.8L105%2C404.6z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_278_%22 class%3D%22st2%22 d%3D%22M124.6%2C375l-12.8-0.1l4-6.9l4.8%2C0L124.6%2C375z M115.5%2C372.8l5.3%2C0l-1.6-2.7l-2.3%2C0L115.5%2C372.8%0D%09%09z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_275_%22 class%3D%22st2%22 d%3D%22M95.2%2C392l-4.1-7.1l2.4-4.2l8.2%2C0L95.2%2C392z M93.6%2C384.9l1.6%2C2.8l2.8-4.8l-3.2%2C0L93.6%2C384.9z%22%0D%09%09%2F%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n  #beta-badge a {\n    width: 70px;\n    height: 105px;\n    display: block;\n    text-indent: -8e3px;\n    background-repeat: no-repeat;\n    background-position: 0 0;\n    overflow: hidden; }\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.5), not all, not all, not all {\n  #beta-badge.left a {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 356.5 493.2%22 style%3D%22enable-background%3Anew 0 0 356.5 493.2%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cstyle type%3D%22text%2Fcss%22%3E%0D%09.st0%7Bfill%3Aurl(%23XMLID_94_)%3B%7D%0D%09.st1%7Bfill%3A%23599E4E%3B%7D%0D%09.st2%7Bfill%3A%23FFFFFF%3B%7D%0D%3C%2Fstyle%3E%0D%3Cg id%3D%22XMLID_156_%22%3E%0D%09%3ClinearGradient id%3D%22XMLID_94_%22 gradientUnits%3D%22userSpaceOnUse%22 x1%3D%2214.3691%22 y1%3D%22327.8944%22 x2%3D%22338.424%22 y2%3D%22385.0341%22%3E%0D%09%09%3Cstop  offset%3D%220%22 style%3D%22stop-color%3A%23599E4D%22%2F%3E%0D%09%09%3Cstop  offset%3D%221%22 style%3D%22stop-color%3A%231E4E1F%22%2F%3E%0D%09%3C%2FlinearGradient%3E%0D%09%3Cpath id%3D%22XMLID_157_%22 class%3D%22st0%22 d%3D%22M1.5%2C493.2L341.8%2C305c9-5%2C14.6-14.5%2C14.6-24.8V229c0-7.5-8-12.3-14.6-8.8L1.5%2C401.1V493.2z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22XMLID_158_%22%3E%0D%09%3Cpath id%3D%22XMLID_159_%22 class%3D%22st1%22 d%3D%22M356.5%2C280.7L1.5%2C84.5V0l340%2C180.6c9.3%2C4.9%2C15%2C14.5%2C15%2C25V280.7z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22XMLID_70_%22%3E%0D%09%3Cpath id%3D%22XMLID_71_%22 class%3D%22st2%22 d%3D%22M114.5%2C101.8c2.7%2C1.6%2C4%2C4.6%2C2.1%2C8.1c-2.2%2C4.1-6.7%2C5-11.7%2C2.4l-12.9-7l12.8-23.8l12.9%2C7%0D%09%09c4.4%2C2.4%2C6%2C6.5%2C3.9%2C10.3c-0.9%2C1.6-2%2C2.6-3.4%2C3c-1.4%2C0.4-2.6%2C0.3-3.7-0.2L114.5%2C101.8z M101.7%2C103.7l4.6%2C2.5c1.6%2C0.9%2C3.1%2C0.4%2C3.9-1%0D%09%09c0.7-1.3%2C0.2-2.7-1.3-3.6l-4.6-2.5L101.7%2C103.7z M108.8%2C90.5l-2.4%2C4.4l4.2%2C2.3c1.5%2C0.8%2C3.1%2C0.5%2C3.8-0.9c0.7-1.3%2C0.1-2.7-1.3-3.5%0D%09%09L108.8%2C90.5z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_75_%22 class%3D%22st2%22 d%3D%22M137.7%2C122.5l-3.1%2C5.7l-18.9-10.2l12.8-23.8l18.8%2C10.1l-3.1%2C5.7l-12-6.4l-1.9%2C3.5l11%2C5.9%0D%09%09l-2.8%2C5.2l-11-5.9l-1.9%2C3.5L137.7%2C122.5z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_77_%22 class%3D%22st2%22 d%3D%22M168%2C123.1l-7.5-4l-9.6%2C17.9l-6.8-3.7l9.6-17.9l-7.5-4l3.2-5.9l21.8%2C11.7L168%2C123.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_79_%22 class%3D%22st2%22 d%3D%22M182.9%2C154.3l-7.3-4l0.6-4.3l-9.4-5l-3.3%2C2.9l-7.3-3.9l22.4-18.6l7.5%2C4.1L182.9%2C154.3z%0D%09%09 M177.2%2C139.2l1.2-8.5l-6.5%2C5.7L177.2%2C139.2z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_82_%22 class%3D%22st2%22 d%3D%22M228.7%2C158.1c0.6%2C2%2C0.4%2C4-0.7%2C6l-6%2C11.2l-3.7-2l5.6-10.5c1.4-2.6%2C0.6-5.1-1.7-6.4%0D%09%09c-2.9-1.6-5.9-0.5-8%2C3.4l-4.7%2C8.7l-3.7-2l5.6-10.5c1.4-2.6%2C0.6-5.1-1.7-6.4c-2.9-1.5-5.8-0.4-7.9%2C3.4l-4.7%2C8.7l-3.7-2l9.5-17.6%0D%09%09l3.7%2C2l-1.1%2C2c2.2-0.9%2C4.6-0.7%2C7%2C0.6c2.6%2C1.4%2C4.1%2C3.7%2C4.1%2C6.4c2.7-1.3%2C5.5-1.2%2C8.3%2C0.3C226.9%2C154.6%2C228.1%2C156.1%2C228.7%2C158.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_84_%22 class%3D%22st2%22 d%3D%22M229.5%2C176.6c-0.9-2.7-0.6-5.4%2C0.8-8.1s3.6-4.4%2C6.3-5.1c2.8-0.7%2C5.5-0.4%2C8.1%2C1%0D%09%09c2.7%2C1.4%2C4.4%2C3.5%2C5.3%2C6.2c0.9%2C2.7%2C0.6%2C5.4-0.8%2C8.1c-1.5%2C2.7-3.6%2C4.4-6.3%2C5.2c-2.7%2C0.8-5.4%2C0.4-8.1-1%0D%09%09C232.2%2C181.4%2C230.5%2C179.3%2C229.5%2C176.6z M241.6%2C180.1c1.8-0.5%2C3.1-1.7%2C4.1-3.4c1-1.8%2C1.2-3.5%2C0.6-5.3c-0.6-1.8-1.6-3.1-3.2-3.9%0D%09%09c-1.6-0.9-3.3-1-5.1-0.5c-1.7%2C0.5-3.1%2C1.6-4%2C3.4c-1%2C1.8-1.2%2C3.5-0.6%2C5.3c0.6%2C1.7%2C1.7%2C3%2C3.3%2C3.9%0D%09%09C238.2%2C180.5%2C239.8%2C180.6%2C241.6%2C180.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_87_%22 class%3D%22st2%22 d%3D%22M279.7%2C173.4L266%2C199l-3.7-2l1.1-2c-2.6%2C0.8-5.1%2C0.4-7.7-1c-2.4-1.3-3.9-3.3-4.7-5.9%0D%09%09c-0.8-2.7-0.5-5.4%2C1-8.1c1.5-2.7%2C3.5-4.5%2C6.2-5.3c2.7-0.8%2C5.2-0.6%2C7.6%2C0.7c2.6%2C1.4%2C4.3%2C3.4%2C5%2C6l5.4-10L279.7%2C173.4z M262.9%2C191.6%0D%09%09c1.8-0.5%2C3.1-1.6%2C4.1-3.4c1-1.8%2C1.2-3.5%2C0.6-5.3c-0.6-1.8-1.6-3.1-3.1-3.9c-1.6-0.9-3.3-1-5-0.5c-1.7%2C0.5-3%2C1.7-4%2C3.5%0D%09%09s-1.2%2C3.6-0.7%2C5.3c0.5%2C1.7%2C1.6%2C3%2C3.2%2C3.8C259.5%2C191.9%2C261.1%2C192.1%2C262.9%2C191.6z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_90_%22 class%3D%22st2%22 d%3D%22M292.2%2C202.9l-14.3-7.7c-1.4%2C3.3-0.2%2C6.6%2C2.5%2C8.1c2.4%2C1.3%2C4.7%2C1.2%2C6.8-0.3l2.9%2C2.5%0D%09%09c-3.4%2C2.9-7.5%2C3.1-11.5%2C1c-2.4-1.3-4.1-3.3-5-6c-0.8-2.7-0.5-5.4%2C1-8.1c1.5-2.7%2C3.6-4.5%2C6.2-5.3c2.7-0.8%2C5.4-0.5%2C7.9%2C0.9%0D%09%09c2.4%2C1.3%2C4%2C3.2%2C4.7%2C5.8c0.8%2C2.6%2C0.5%2C5.2-0.7%2C7.8L292.2%2C202.9z M283.1%2C190.5c-1.4%2C0.2-2.7%2C0.9-3.7%2C2.1l10.4%2C5.6%0D%09%09c0.9-3.1-0.2-5.6-2.7-7C285.9%2C190.6%2C284.5%2C190.4%2C283.1%2C190.5z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cpath id%3D%22XMLID_234_%22 class%3D%22st2%22 d%3D%22M30.9%2C74.1%22%2F%3E%0D%3Cpath id%3D%22XMLID_233_%22 class%3D%22st2%22 d%3D%22M53.1%2C74.1%22%2F%3E%0D%3Cg id%3D%22XMLID_42_%22%3E%0D%09%3Cpath id%3D%22XMLID_43_%22 class%3D%22st2%22 d%3D%22M151.9%2C370.6l1.4-0.8c0.9%2C1.7%2C2.7%2C2.1%2C4.5%2C1.1c1.6-0.9%2C2.2-2.3%2C1.5-3.6c-0.5-0.9-1.6-1-4-0.5%0D%09%09c-2.9%2C0.7-4.4%2C0.3-5.2-1.2c-1.1-1.9-0.3-4%2C1.9-5.2c2.2-1.2%2C4.5-0.7%2C6%2C1.1l-1.1%2C1.1c-1-1.3-2.7-1.6-4.1-0.8c-1.3%2C0.7-1.7%2C2-1.1%2C3.1%0D%09%09c0.4%2C0.8%2C1.3%2C0.9%2C3.3%2C0.4c3.4-0.7%2C5-0.4%2C5.9%2C1.2c1.1%2C2.1%2C0.2%2C4.3-2.3%2C5.8C155.9%2C373.7%2C153.2%2C373%2C151.9%2C370.6z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_45_%22 class%3D%22st2%22 d%3D%22M165.7%2C366.2l3.3-1.8l-4.9-8.8l-3.3%2C1.8l-0.7-1.3l8-4.5l0.7%2C1.3l-3.3%2C1.8l4.9%2C8.8l3.3-1.8%0D%09%09l0.7%2C1.3l-8%2C4.5L165.7%2C366.2z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_47_%22 class%3D%22st2%22 d%3D%22M172.7%2C349.1l1.5-0.8l5.6%2C10.1l5.7-3.2l0.7%2C1.3l-7.2%2C4L172.7%2C349.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_49_%22 class%3D%22st2%22 d%3D%22M189.9%2C352.7l3.3-1.8l-4.9-8.8L185%2C344l-0.7-1.3l8-4.5l0.7%2C1.3l-3.3%2C1.8l4.9%2C8.8l3.3-1.8%0D%09%09l0.7%2C1.3l-8%2C4.5L189.9%2C352.7z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_51_%22 class%3D%22st2%22 d%3D%22M199.3%2C341.8c-2.1-3.8-1.7-6.8%2C1.1-8.3c2.5-1.4%2C4.9-0.7%2C6.8%2C1.9l-1.4%2C0.8%0D%09%09c-1.3-1.8-3-2.3-4.7-1.4c-1.8%2C1-1.9%2C3.2-0.3%2C6.1c1.6%2C2.9%2C3.6%2C4%2C5.4%2C3c1.7-0.9%2C2-2.7%2C1.1-5l1.4-0.8c1.3%2C3.2%2C0.7%2C5.7-1.8%2C7.1%0D%09%09C204.1%2C346.8%2C201.4%2C345.5%2C199.3%2C341.8z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_53_%22 class%3D%22st2%22 d%3D%22M211.4%2C335c-2.1-3.8-1.7-6.8%2C1.1-8.3c2.8-1.6%2C5.5-0.3%2C7.6%2C3.5c2.1%2C3.8%2C1.7%2C6.8-1.1%2C8.3%0D%09%09C216.2%2C340%2C213.5%2C338.8%2C211.4%2C335z M218.6%2C331c-1.6-2.9-3.6-4-5.4-3c-1.8%2C1-1.9%2C3.2-0.3%2C6.1c1.6%2C2.9%2C3.6%2C4%2C5.4%2C3%0D%09%09C220.1%2C336.1%2C220.2%2C333.9%2C218.6%2C331z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_56_%22 class%3D%22st2%22 d%3D%22M220.8%2C322.3l1.6-0.9l9.5%2C6.3l-4.9-8.8l1.5-0.8l6.4%2C11.4l-1.6%2C0.9l-9.5-6.3l4.9%2C8.8l-1.5%2C0.8%0D%09%09L220.8%2C322.3z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_58_%22 class%3D%22st2%22 d%3D%22M245.2%2C308.7l3.5-2c2.2-1.2%2C4-0.8%2C5%2C1c0.5%2C0.9%2C0.5%2C2%2C0%2C3c1.6-0.3%2C3.1%2C0.5%2C3.8%2C1.9%0D%09%09c1.2%2C2.1%2C0.4%2C4-1.7%2C5.2l-4.3%2C2.4L245.2%2C308.7z M251.3%2C311.3c1.2-0.7%2C1.5-1.7%2C1-2.7c-0.6-1.1-1.7-1.2-2.8-0.6l-2%2C1.1l1.8%2C3.3%0D%09%09L251.3%2C311.3z M255.1%2C316.4c1.3-0.7%2C1.6-2%2C0.9-3.2c-0.7-1.3-2-1.6-3.2-1l-2.8%2C1.6l2.3%2C4.1L255.1%2C316.4z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_62_%22 class%3D%22st2%22 d%3D%22M257.4%2C301.8l7.5-4.2l0.7%2C1.3l-6%2C3.4l1.8%2C3.3l5.4-3l0.7%2C1.3l-5.4%2C3l2.3%2C4.1l6-3.4l0.7%2C1.3%0D%09%09l-7.5%2C4.2L257.4%2C301.8z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_64_%22 class%3D%22st2%22 d%3D%22M279.4%2C300.2l-3.7%2C2.1l0.8%2C3.8L275%2C307l-2.7-13.5l1.5-0.8l10%2C9.4l-1.5%2C0.8L279.4%2C300.2z%0D%09%09 M278.3%2C299.1l-4-3.8l1.1%2C5.4L278.3%2C299.1z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_67_%22 class%3D%22st2%22 d%3D%22M281.6%2C288.3l4.1-2.3c2.3-1.3%2C4-0.7%2C5%2C1.1c0.9%2C1.6%2C0.6%2C3.2-1%2C4.4l6.5%2C3.6l-1.7%2C0.9l-6.5-3.6%0D%09%09l-1.6%2C0.9l3.1%2C5.5l-1.5%2C0.8L281.6%2C288.3z M288.2%2C290.7c1.3-0.8%2C1.5-1.6%2C0.9-2.7c-0.6-1.1-1.4-1.4-2.8-0.6l-2.6%2C1.4l1.8%2C3.3%0D%09%09L288.2%2C290.7z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg id%3D%22XMLID_274_%22%3E%0D%09%3Cpath id%3D%22XMLID_288_%22 class%3D%22st2%22 d%3D%22M118.7%2C398.8l-10.4%2C0l-5.2-9l5.2-9l10.4%2C0l5.2%2C9L118.7%2C398.8z M109.6%2C396.6l7.9%2C0l3.9-6.8%0D%09%09l-3.9-6.8l-7.9%2C0l-3.9%2C6.8L109.6%2C396.6z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_285_%22 class%3D%22st2%22 d%3D%22M118.7%2C398.8l-10.4%2C0l-5.2-9l5.2-9l10.4%2C0l5.2%2C9L118.7%2C398.8z M109.6%2C396.6l7.9%2C0l3.9-6.8%0D%09%09l-3.9-6.8l-7.9%2C0l-3.9%2C6.8L109.6%2C396.6z%22%2F%3E%0D%09%3Cpolygon id%3D%22XMLID_284_%22 class%3D%22st2%22 points%3D%22119.1%2C397.2 117.2%2C398.3 112.9%2C390.9 104.4%2C390.9 104.4%2C388.7 114.2%2C388.7 %09%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_281_%22 class%3D%22st2%22 d%3D%22M123.4%2C406.8l-19.6%2C0l-9.8-17l9.8-17l19.6%2C0l9.8%2C17L123.4%2C406.8z M105%2C404.6l17.1%2C0l8.6-14.8%0D%09%09l-8.6-14.8l-17.1%2C0l-8.6%2C14.8L105%2C404.6z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_278_%22 class%3D%22st2%22 d%3D%22M124.6%2C375l-12.8-0.1l4-6.9l4.8%2C0L124.6%2C375z M115.5%2C372.8l5.3%2C0l-1.6-2.7l-2.3%2C0L115.5%2C372.8%0D%09%09z%22%2F%3E%0D%09%3Cpath id%3D%22XMLID_275_%22 class%3D%22st2%22 d%3D%22M95.2%2C392l-4.1-7.1l2.4-4.2l8.2%2C0L95.2%2C392z M93.6%2C384.9l1.6%2C2.8l2.8-4.8l-3.2%2C0L93.6%2C384.9z%22%0D%09%09%2F%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); } }\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.5), not all, not all, not all {\n  #beta-badge a {\n    -ie-background-size: 70px 105px;\n    background-size: 70px 105px; } }\n"

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