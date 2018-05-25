webpackJsonp(["home.module"],{

/***/ "../angular-minmax-validators/dist/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinMaxModule; });
/* unused harmony export MIN_VALUE_VALIDATOR */
/* unused harmony export MinValueValidator */
/* unused harmony export MAX_VALUE_VALIDATOR */
/* unused harmony export MaxValueValidator */
/* unused harmony export NUMBERS_ONLY_VALIDATOR */
/* unused harmony export NumbersOnlyValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MIN_VALUE_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALIDATORS */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MinValueValidator; }),
    multi: true
};
var MinValueValidator = /** @class */ (function () {
    function MinValueValidator(mn) {
        this.min = '0';
        if (mn !== undefined && mn !== null) {
            var /** @type {?} */ attrValue = parseInt(mn, 10);
            if (!isNaN(attrValue)) {
                this.min = mn;
                this._createValidator();
            }
        }
    }
    /**
     * @param {?} mn
     * @return {?}
     */
    MinValueValidator.min = /**
     * @param {?} mn
     * @return {?}
     */
    function (mn) {
        /**
         * @param {?} control
         * @return {?}
         */
        function foo(control) {
            var /** @type {?} */ v = +control.value;
            return (v < mn ? { 'min': { 'minValue': mn, 'actualValue': v } } : null);
        }
        return foo;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MinValueValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ minChange = changes['min'];
        if (minChange) {
            this._createValidator();
        }
    };
    /**
     * @return {?}
     */
    MinValueValidator.prototype._createValidator = /**
     * @return {?}
     */
    function () {
        this._validator = MinValueValidator.min(parseInt(this.min, 10));
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinValueValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator(c);
    };
    MinValueValidator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[min],[min][ngModel]',
                    providers: [MIN_VALUE_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    MinValueValidator.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"], args: ['min',] },] },
    ]; };
    MinValueValidator.propDecorators = {
        "min": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.min',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return MinValueValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MAX_VALUE_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALIDATORS */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MaxValueValidator; }),
    multi: true
};
var MaxValueValidator = /** @class */ (function () {
    function MaxValueValidator(mx) {
        this.max = '0';
        if (mx !== undefined && mx !== null) {
            var /** @type {?} */ attrValue = parseInt(mx, 10);
            if (!isNaN(attrValue)) {
                this.max = mx;
                this._createValidator();
            }
        }
    }
    /**
     * @param {?} mx
     * @return {?}
     */
    MaxValueValidator.max = /**
     * @param {?} mx
     * @return {?}
     */
    function (mx) {
        /**
         * @param {?} control
         * @return {?}
         */
        function foo(control) {
            var /** @type {?} */ v = +control.value;
            return (v > mx ? { 'max': { 'maxValue': mx, 'actualValue': v } } : null);
        }
        return foo;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxValueValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ maxChange = changes['max'];
        if (maxChange) {
            this._createValidator();
        }
    };
    /**
     * @return {?}
     */
    MaxValueValidator.prototype._createValidator = /**
     * @return {?}
     */
    function () {
        this._validator = MaxValueValidator.max(parseInt(this.max, 10));
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxValueValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator(c);
    };
    MaxValueValidator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[max],[max][ngModel]',
                    providers: [MAX_VALUE_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    MaxValueValidator.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"], args: ['max',] },] },
    ]; };
    MaxValueValidator.propDecorators = {
        "max": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.max',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return MaxValueValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NUMBERS_ONLY_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALIDATORS */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NumbersOnlyValidator; }),
    multi: true
};
var NumbersOnlyValidator = /** @class */ (function () {
    function NumbersOnlyValidator(el, renderer, defaultValue) {
        this.el = el;
        this.inputValue = '';
        this.numbersOnly = true;
        this._createValidator();
    }
    /**
     * @param {?} numbers
     * @return {?}
     */
    NumbersOnlyValidator.numbersOnly = /**
     * @param {?} numbers
     * @return {?}
     */
    function (numbers) {
        /**
         * @param {?} control
         * @return {?}
         */
        function foo(control) {
            this.inputValue = this.sanitizeNumbers(control.value);
            return null;
        }
        return foo;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NumbersOnlyValidator.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
            e.stopPropagation();
        }
        return e.charCode >= 48 && e.charCode <= 57;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NumbersOnlyValidator.prototype.onPaste = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        var /** @type {?} */ pasteItem = e.clipboardData.getData('Text');
        this.inputValue = this.sanitizeNumbers(pasteItem);
        return;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NumbersOnlyValidator.prototype.sanitizeNumbers = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (text !== null && text !== undefined) {
            return text.replace(new RegExp(/\D/g), '');
        }
        return '';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NumbersOnlyValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ numbersOnlyChange = changes['numbersOnly'];
        if (numbersOnlyChange) {
            this._createValidator();
        }
    };
    /**
     * @return {?}
     */
    NumbersOnlyValidator.prototype._createValidator = /**
     * @return {?}
     */
    function () {
        this._validator = NumbersOnlyValidator.numbersOnly(this.inputValue);
    };
    /**
     * @param {?} c
     * @return {?}
     */
    NumbersOnlyValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumbersOnlyValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._createValidator();
    };
    NumbersOnlyValidator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[numbersOnly]',
                    providers: [NUMBERS_ONLY_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    NumbersOnlyValidator.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"], args: ['value',] },] },
    ]; };
    NumbersOnlyValidator.propDecorators = {
        "inputValue": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['value',] },],
        "numbersOnly": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.numbersOnly',] },],
        "onKeyDown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keypress', ['$event'],] },],
        "onPaste": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['paste', ['$event'],] },],
    };
    return NumbersOnlyValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MinMaxModule = /** @class */ (function () {
    function MinMaxModule() {
    }
    /**
     * @return {?}
     */
    MinMaxModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MinMaxModule,
            providers: []
        };
    };
    MinMaxModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
                    ],
                    declarations: [
                        MinValueValidator,
                        MaxValueValidator,
                        NumbersOnlyValidator
                    ],
                    exports: [
                        MinValueValidator,
                        MaxValueValidator,
                        NumbersOnlyValidator
                    ]
                },] },
    ];
    return MinMaxModule;
}());




/***/ }),

/***/ "./src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"mt-3\">\n    <div class=\"content\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <form class=\"form\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" novalidate>\n                    <div class=\"form-group\">\n                        <div class=\"form-row\">\n                            <label class=\"form-control-label\" for=\"person\">Search Person</label>\n                            <div class=\"input-group\" [class.is-invalid]=\"(person.errors && person.dirty) || (person.errors && person.touched)\">\n                                <input aria-describedby=\"personHelp\" class=\"form-control\" [class.is-invalid]=\"(person.errors && person.dirty) || (person.errors && person.touched)\"\n                                    id=\"person\" name=\"person\" type=\"search\" [(ngModel)]=\"model.person\" #person=\"ngModel\" required/>\n                                <button class=\"btn btn-primary float-right\" type=\"submit\" loadingButton [changeState]=\"progressEmitter\" [disabled]=\"!form.form.valid || validating\">Search</button>\n                            </div>\n                            <div *ngIf=\"person.errors && person.dirty\" class=\"invalid-feedback\">\n                                <div [hidden]=\"!person.errors.required\">\n                                    Person field is required\n                                </div>\n                            </div>\n                            <div *ngIf=\"person.errors && person.touched\" class=\"invalid-feedback\">\n                                <div [hidden]=\"!person.errors.required\">\n                                    Type in the name of the character you want to search for.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"filter-bar clearfix my-2\">\n        <div class=\"row\">\n            <div class=\"col filter-menu\">\n                <div class=\"float-left\">\n                    <a class=\"btn btn-link\" role=\"button\" data-toggle=\"collapse\" href=\"#filter\" role=\"button\" aria-expanded=\"false\" aria-controls=\"filter\">\n                        <i class=\"fa fa-filter\"></i>Filter\n                    </a>\n                </div>\n                <a class=\"btn btn-link float-right\" href=\"javascript:;\" (click)=\"initPeople()\">Clear</a>\n            </div>\n        </div>\n        <div class=\"row filter-body\">\n            <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"filter\">\n                    <div class=\"btn-group\">\n                        <div class=\"dropdown\">\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                aria-expanded=\"false\">\n                                Sort\n                            </button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"ascending\">\n                                        <label class=\"form-check-label\" for=\"ascending\">\n                                            Ascending\n                                        </label>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"descending\">\n                                        <label class=\"form-check-label\" for=\"descending\">\n                                            Descending\n                                        </label>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"dropdown\">\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                aria-expanded=\"false\">\n                                Skin Color\n                            </button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"black\">\n                                        <label class=\"form-check-label\" for=\"black\">\n                                            Black\n                                        </label>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"yellow\">\n                                        <label class=\"form-check-label\" for=\"yellow\">\n                                            Yellow\n                                        </label>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"blue\">\n                                        <label class=\"form-check-label\" for=\"blue\">\n                                            Blue\n                                        </label>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"red\">\n                                        <label class=\"form-check-label\" for=\"red\">\n                                            Red\n                                        </label>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"dropdown\">\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                aria-expanded=\"false\">\n                                Gender\n                            </button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"male\">\n                                        <label class=\"form-check-label\" for=\"male\">\n                                            Male\n                                        </label>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"female\">\n                                        <label class=\"form-check-label\" for=\"female\">\n                                            Female\n                                        </label>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"dropdown\">\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                aria-expanded=\"false\">\n                                Eye Color\n                            </button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"black\">\n                                        <label class=\"form-check-label\" for=\"black\">\n                                            Black\n                                        </label>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"yellow\">\n                                        <label class=\"form-check-label\" for=\"yellow\">\n                                            Yellow\n                                        </label>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"blue\">\n                                        <label class=\"form-check-label\" for=\"blue\">\n                                            Blue\n                                        </label>\n                                    </div>\n                                </a>\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <div class=\"form-check\">\n                                        <input type=\"radio\" class=\"form-check-input\" id=\"red\">\n                                        <label class=\"form-check-label\" for=\"red\">\n                                            Red\n                                        </label>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"content\" *ngIf=\"(people$ | async); let people else loadingPeople\">\n        <div class=\"card-columns my-5\">\n            <a class=\"person-box\" href=\"javascript:;\" (click)=\"gotoDetails(person.url)\" *ngFor=\"let person of people.results\">\n                <div class=\"card\" style=\"width: 18rem;\" [@flyInOut]=\"'in'\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">{{ person.name }}</h5>\n                        <h6 class=\"card-subtitle mb-2 text-muted\"> {{ person.height }} Height</h6>\n                        <p class=\"card-text\"> {{ person.birth_year }} Birth Year</p>\n                    </div>\n                </div>\n            </a>\n            <div class=\"display-4\" *ngIf=\"people.length === 0\">No results for people</div>\n        </div>\n        <nav aria-label=\"Page navigation example\">\n            \n            <span class=\"badge float-left\">\n                {{people.count}} Total\n            </span>\n            <ul class=\"pagination justify-content-end\">\n                <li class=\"page-item\" [class.disabled]=\"!people.previous\">\n                    <a class=\"page-link\" href=\"#\" tabindex=\"-1\" (click)=\"loadPage(people.previous)\">Previous</a>\n                </li>\n                <li class=\"page-item\" [class.disabled]=\"!people.next\">\n                    <a class=\"page-link\" href=\"#\" (click)=\"loadPage(people.next)\">Next</a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n    <ng-template #loadingPeople>\n        <div class=\"lead my-5\">\n            <div class=\"loader\">Loading\n                <span class=\"loader-dot\">.</span>\n                <span class=\"loader-dot\">.</span>\n                <span class=\"loader-dot\">.</span>\n            </div>\n        </div>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_animations__ = __webpack_require__("./src/app/config/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_starwars_service__ = __webpack_require__("./src/app/services/starwars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router, starwarsService) {
        this.route = route;
        this.router = router;
        this.starwarsService = starwarsService;
        this.validating = false;
        this.model = {};
        this.progressEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.progressLoading = false;
        this.locationLoading = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initPeople();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.initPeople = function () {
        this.people$ = this.starwarsService.people();
    };
    HomeComponent.prototype.onSubmit = function (form) {
        var data = form.value;
        this.people$ = this.starwarsService.findPeople(data.person);
    };
    HomeComponent.prototype.gotoDetails = function (url) {
        var urlId = url.replace('https://swapi.co/api/people/', '').replace('/', '');
        this.router.navigate(['/details', urlId]);
    };
    HomeComponent.prototype.loadPage = function (url) {
        var pageNumber = url.replace('https://swapi.co/api/people/?page=', '');
        this.people$ = this.starwarsService.people(pageNumber);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
    ], HomeComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@slideInOutAnimation'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "slideInOutAnimation", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/home/home.component.html"),
            styles: [__webpack_require__("./src/app/main/home/home.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__config_animations__["b" /* SLIDE_IN_OUT */])(),
                Object(__WEBPACK_IMPORTED_MODULE_2__config_animations__["a" /* FLY_IN_OUT */])()
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_starwars_service__["a" /* StarwarsService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("./src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing__ = __webpack_require__("./src/app/main/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_minmax_validators__ = __webpack_require__("../angular-minmax-validators/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__ = __webpack_require__("./src/app/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widgets_widgets_module__ = __webpack_require__("./src/app/widgets/widgets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utility_utility_module__ = __webpack_require__("./src/app/utility/utility.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__home_routing__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_7__widgets_widgets_module__["a" /* WidgetsModule */],
                __WEBPACK_IMPORTED_MODULE_8__utility_utility_module__["a" /* UtilityModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_minmax_validators__["a" /* MinMaxModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/main/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/main/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/home/home.scss":
/***/ (function(module, exports) {

module.exports = "#home .filter-bar {\n  clear: both;\n  min-height: 48px;\n  background: #f7f7f7;\n  padding: 8px; }\n  #home .filter-bar .filter-body .btn, #home .filter-bar .filter-body .dropdown-toggle {\n    font-size: 12px;\n    letter-spacing: 1.7px;\n    background: #a1a1a1;\n    line-height: 12px;\n    display: inline-block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: 30px;\n    border-radius: 15px;\n    padding: 9px 15px;\n    border: 0;\n    margin: 10px 8px 0 0;\n    text-decoration: none; }\n  #home .person-box .card:hover {\n  background: #f7f7f7 !important;\n  -webkit-box-shadow: 0 0 4px #ccc;\n  box-shadow: 0 0 4px #ccc;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01); }\n"

/***/ }),

/***/ "./src/app/utility/loading-button.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingButtonDirective; });
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

var LoadingButtonDirective = /** @class */ (function () {
    function LoadingButtonDirective(el, renderer) {
        this.progressLoading = false;
        // el.nativeElement.style.backgroundColor = 'yellow';
    }
    LoadingButtonDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.changeState.subscribe(function (event) {
            switch (event) {
                case ('start'):
                    _this.progressLoading = true;
                    break;
                default:
                    _this.progressLoading = false;
                    break;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], LoadingButtonDirective.prototype, "changeState", void 0);
    LoadingButtonDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[loadingButton]',
            host: {
                '[class.btn-spin-loading]': 'progressLoading',
                '[class.disabled]': 'progressLoading'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], LoadingButtonDirective);
    return LoadingButtonDirective;
}());



/***/ }),

/***/ "./src/app/utility/password-meter.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordMeterDirective; });
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


var PasswordMeterDirective = /** @class */ (function () {
    function PasswordMeterDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.progressLoading = false;
        this.meterStrength = "";
        this.score = "";
    }
    PasswordMeterDirective.prototype.ngOnChanges = function () {
        this.meterStrength = this.checkPassStrength(this.passwordMeter);
    };
    PasswordMeterDirective.prototype.scorePassword = function (pass) {
        var score = 0;
        if (!pass)
            return score;
        // award every unique letter until 5 repetitions
        var letters = new Object();
        for (var i = 0; i < pass.length; i++) {
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
            score += 5.0 / letters[pass[i]];
        }
        // bonus points for mixing it up
        var variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
        };
        var variationCount = 0;
        for (var check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        }
        score += (variationCount - 1) * 10;
        return score;
    };
    PasswordMeterDirective.prototype.checkPassStrength = function (pass) {
        var score = this.scorePassword(pass);
        this.score = score + '%';
        if (score > 75)
            return "strong";
        if (score > 50)
            return "good";
        if (score >= 25)
            return "weak";
        if (score >= 0)
            return "poor";
        return "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgModel */])
    ], PasswordMeterDirective.prototype, "passwordMeter", void 0);
    PasswordMeterDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[passwordMeter]',
            host: {
                '[class.bg-danger]': 'meterStrength=="poor"',
                '[class.bg-warning]': 'meterStrength=="weak"',
                '[class.bg-info]': 'meterStrength=="good"',
                '[class.bg-success]': 'meterStrength=="strong"',
                '[style.width]': 'score',
                '[innerText]': 'meterStrength',
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], PasswordMeterDirective);
    return PasswordMeterDirective;
}());



/***/ }),

/***/ "./src/app/utility/utility.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_loading_button_directive__ = __webpack_require__("./src/app/utility/loading-button.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility_password_meter_directive__ = __webpack_require__("./src/app/utility/password-meter.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UtilityModule = /** @class */ (function () {
    function UtilityModule() {
    }
    UtilityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__utility_loading_button_directive__["a" /* LoadingButtonDirective */], __WEBPACK_IMPORTED_MODULE_3__utility_password_meter_directive__["a" /* PasswordMeterDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__utility_loading_button_directive__["a" /* LoadingButtonDirective */], __WEBPACK_IMPORTED_MODULE_3__utility_password_meter_directive__["a" /* PasswordMeterDirective */]]
        })
    ], UtilityModule);
    return UtilityModule;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map