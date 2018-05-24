webpackJsonp(["common"],{

/***/ "./src/app/config/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FADE_IN_SCALEUP */
/* harmony export (immutable) */ __webpack_exports__["b"] = SLIDE_IN_OUT;
/* unused harmony export SLIDE_IN_DOWN */
/* unused harmony export SLIDE_IN_LEFT */
/* harmony export (immutable) */ __webpack_exports__["a"] = FLY_IN_OUT;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

function FADE_IN_SCALEUP() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('fadeInScaleUp', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'scale(0.8)', opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'scale(1.0)', opacity: 1 }))
        ])
    ]);
}
;
function SLIDE_IN_OUT() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slideInOutAnimation', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(100%)' }), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* sequence */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(0%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(-100%)' }))
                    ], { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(0%)' })),
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
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slideInDownAnimation', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);
}
function SLIDE_IN_LEFT() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slideInLeftAnimation', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('* <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            opacity: 0,
            transform: 'translateX(0)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.8s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);
}
function FLY_IN_OUT() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('flyInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateY(0)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('void => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 0,
                transform: 'translateY(15%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('* => void', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.4s 0.2s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
                opacity: 0,
                transform: 'translateY(-50%)'
            }))
        ])
    ]);
}


/***/ })

});
//# sourceMappingURL=common.chunk.js.map