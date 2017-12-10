webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: '/category/:categoryId', component: __WEBPACK_IMPORTED_MODULE_3__category_category_component__["a" /* CategoryComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
        ],
        providers: [],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category_module__ = __webpack_require__("../../../../../src/app/category/category.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_component__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_4__category_category_module__["a" /* CategoryModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main content-wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-3 col-sm-3 sidebar\">\n        <div class=\"sidebar-plugins\"></div>\n      </div>\n      <div class=\"col-xs-9 col-sm-9 col-mxs-12 sidebar-on\">\n        <div id=\"page-content\" itemscope=\"\" itemtype=\"http://schema.org/WebPage\">\n          <ol class=\"breadcrumb no-sb-padded\" itemprop=\"breadcrumb\">\n            <li>\n              <a href=\"/\">Главная</a>\n            </li>\n            <li class=\"active\">12. СИСТЕМА ВЫПУСКА ОТРАБОТАВШИХ ГАЗОВ</li>\n          </ol>\n          <div class=\"no-sb-padded\">\n            <div class=\"catalog-header\"><h1 class=\"category-name\">12. СИСТЕМА ВЫПУСКА ОТРАБОТАВШИХ\n              ГАЗОВ</h1><span class=\"theme-c\"> [205]</span></div>\n            <img src=\"assets/img/category/1.png\">\n            <div class=\"category-sorting clearfix mb-20\">\n              <ul class=\"list-unstyled list-inline\">\n                <li>Выводить по:</li>\n                <li class=\"dropdown mr-30\">\n                  <a href=\"javascript:void(0)\" class=\"dropdown-toggle\"\n                     data-toggle=\"dropdown\">Все<i class=\"fa fa-caret-down\"></i></a>\n                  <ul class=\"dropdown-menu product-count\">\n                    <li><a href=\"javascript:void(0)\" data-perpage=\"10\">10</a></li>\n                    <li><a href=\"javascript:void(0)\" data-perpage=\"20\">20</a></li>\n                    <li><a href=\"javascript:void(0)\" data-perpage=\"30\">30</a></li>\n                    <li><a href=\"javascript:void(0)\" data-perpage=\"40\">40</a></li>\n                    <li class=\"selected\"><a href=\"javascript:void(0)\"\n                                            data-href=\"/category/category_26/\">Все</a></li>\n                  </ul>\n                </li>\n              </ul>\n              <ul class=\"list-unstyled list-inline\">\n                <li>Страница:</li>\n                <li class=\"dropdown\"><a href=\"javascript:void(0)\" class=\"dropdown-toggle\"\n                                        data-toggle=\"dropdown\">1<i class=\"fa fa-caret-down\"></i></a>\n                  <ul class=\"dropdown-menu\">\n                    <li class=\"selected\"><a href=\"/category/category_26/\">1</a></li>\n                    <li><a href=\"/category/category_26/?page=2\">2</a></li>\n                    <li><span>...</span></li>\n                    <li><a href=\"/category/category_26/?page=7\">7</a></li>\n                  </ul>\n                </li>\n                <li>из 7</li>\n              </ul>\n              <ul class=\"list-unstyled list-inline pull-right\">\n                <li class=\"catalog-view\"><span class=\"mdl-button mdl-js-button mdl-button--icon\"\n                                               data-view=\"list\" data-upgraded=\",MaterialButton\"><i\n                  class=\"material-icons\">view_list</i></span><span\n                  class=\"mdl-button mdl-js-button mdl-button--icon active\" data-view=\"thumbs\"\n                  data-upgraded=\",MaterialButton\"><i class=\"material-icons\">view_module</i></span>\n                </li>\n              </ul>\n            </div>\n            <div id=\"product-list\" class=\"mb-20\">\n              <ul class=\"product-list product-list-v7 thumbs clearfix col1\">\n                <li itemscope=\"\" itemtype=\"http://schema.org/Product\" class=\"clearfix product-item\">\n                  <div class=\"product-item-inner md-card\">\n                    <a href=\"/product/1626/\" title=\"Гайка приемной трубы латунь М10х1,5\" class=\"product-link\">\n                      <div class=\"image-wrapper\">\n                        <div class=\"image\">\n                          <img itemprop=\"image\" alt=\"Гайка приемной трубы латунь М10х1,5\"\n                               title=\"Гайка приемной трубы латунь М10х1,5\"\n                               src=\"assets/img/product/01.png\"\n                               width=\"190\" height=\"171\">\n                          <span class=\"align-helper\"></span>\n                          <span class=\"quickoverview\" data-url=\"/product/1626/\">Быстрый просмотр</span>\n                        </div>\n                      </div>\n                      <div class=\"info\">\n                        <span class=\"h5\" itemprop=\"name\">Гайка приемной трубы латунь М10х1,5</span>\n                        <div class=\"visible-list\">\n                                                    <span class=\"rating nowrap\">\n                                                        <i class=\"icon12 star-empty\"></i>\n                                                        <i class=\"icon12 star-empty\"></i>\n                                                        <i class=\"icon12 star-empty\"></i>\n                                                        <i class=\"icon12 star-empty\"></i>\n                                                        <i class=\"icon12 star-empty\"></i>\n                                                    </span>\n                        </div>\n                      </div>\n                    </a>\n                    <div itemprop=\"offers\" class=\"offers\" itemscope=\"\" itemtype=\"http://schema.org/Offer\">\n                      <form class=\"purchase addtocart\" method=\"post\" action=\"/cart/add/\">\n                        <div class=\"prices clearfix\">\n                                                    <span class=\"rating nowrap visible-thumbs-inline\">\n                                                        <i class=\"icon12 star-empty\"></i>\n                                                        <i class=\"icon12 star-empty\"></i><i class=\"icon12 star-empty\"></i>\n                                                        <i class=\"icon12 star-empty\"></i><i class=\"icon12 star-empty\"></i>\n                                                    </span>\n                          <span class=\"price nowrap\">10,80 <span class=\"ruble\">Р</span></span>\n                        </div>\n                        <div class=\"stock visible-list\">\n                          1 В наличии\n                        </div>\n                        <meta itemprop=\"price\" content=\"10,8\">\n                        <meta itemprop=\"priceCurrency\" content=\"UAH\">\n                        <input name=\"product_id\" value=\"1626\" type=\"hidden\">\n                        <button type=\"submit\"\n                                class=\"mdl-button mdl-js-button mdl-button--fab theme-sbg-h\"\n                                data-upgraded=\",MaterialButton\">\n                          <i class=\"material-icons\">add_shopping_cart</i>\n                        </button>\n                        <div class=\"product-data hidden\" data-id=\"1626\"\n                             data-name=\"Гайка приемной трубы латунь М10х1,5\"\n                             data-image96=\"/wa-data/public/shop/products/26/16/1626/images/1579/1579.96x96.jpg\"\n                             data-price=\"10,8\"></div>\n                      </form>\n                      <link itemprop=\"availability\" href=\"http://schema.org/InStock\">\n                      <ul class=\"additional-buttons list-inline float-none clearfix\">\n                        <li class=\"hidden-xs\">\n                          <a href=\"javascript:void(0)\"\n                             class=\"compare compare-checkbox tooltips\" data-product=\"1626\"\n                             title=\"Добавить в сравнение\">\n                                                        <span class=\"mdl-button mdl-js-button mdl-button--icon\" data-upgraded=\",MaterialButton\">\n                                                            <i class=\"material-icons\">check_box_outline_blank</i>\n                                                        </span>\n                            <span>Сравнение</span>\n                          </a>\n                        </li>\n                        <li class=\"favourite-item\">\n                          <a href=\"javascript:void(0)\" class=\"favourite tooltips\"\n                             data-product=\"1626\" title=\"Добавить в избранное\">\n                                                        <span class=\"mdl-button mdl-js-button mdl-button--icon\" data-upgraded=\",MaterialButton\">\n                                                            <i class=\"material-icons\">favorite</i>\n                                                        </span>\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n              <div class=\"block text-center lazyloading-paging\" data-times=\"5\"\n                   data-link-text=\"Загрузить еще\" data-loading-str=\"Загрузка...\">\n                <ul class=\"md-pagination\">\n                  <li class=\"selected\"><a href=\"/category/category_26/\">1</a></li>\n                  <li><a href=\"/category/category_26/?page=2\">2</a></li>\n                  <li><span>...</span></li>\n                  <li><a href=\"/category/category_26/?page=7\">7</a></li>\n                  <li><a class=\"inline-link\" href=\"/category/category_26/?page=2\"><i\n                    class=\"material-icons\">chevron_right</i></a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryComponent = (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category/category.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CategoryComponent);

//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__category_component__["a" /* CategoryComponent */]]
    })
], CategoryModule);

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main content-wrapper\">\n  <div>\n    <div>\n      <div id=\"page-content\" itemscope itemtype=\"http://schema.org/Store\">\n        <meta itemprop=\"name\" content=\"АВТО-КАН - запчасти УАЗ в розницу и оптом с доставкой по России\">\n        <meta itemprop=\"address\" content=\"rus\">\n        <meta itemprop=\"telephone\" content=\"+7(8422)750-565\">\n        <meta itemprop=\"currenciesAccepted\" content=\"RUB\">\n        <div>\n          <div class=\"shop-services service-v7\">\n            <div class=\"container\"><h3 class=\"text-center\">Наши преимущества</h3>\n              <div class=\"row\">\n                <div class=\"col-xs-3 col-sm-3 col-md-3 col-mxs-6 text-center\">\n                  <i class=\"icon_auto icon_auto-20let-green marg_ico_top\"></i>\n                  <div class=\"service\">\n                    <div class=\"desc\">\n                      <span class=\"h4\">20 лет на рынке</span>\n                      <p></p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-xs-3 col-sm-3 col-md-3 col-mxs-6\">\n                  <a href=\"http://auto-kan.ru/dostavka/\">\n                    <i class=\"icon_auto icon_auto-zavodgar-green marg_ico_top\"></i>\n                    <div class=\"service\">\n                      <div class=\"desc\">\n                        <span class=\"h4\">Заводская гарантия</span>\n                        <p></p>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n                <div class=\"col-xs-3 col-sm-3 col-md-3 col-mxs-6\">\n                  <a href=\"http://auto-kan.ru/sposoby-oplaty/\">\n                    <i class=\"icon_auto icon_auto-oplata_green marg_ico_top\"></i>\n                    <div class=\"service\">\n                      <div class=\"desc\">\n                        <span class=\"h4\">Любая форма оплаты</span>\n                        <p></p>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n                <div class=\"col-xs-3 col-sm-3 col-md-3 col-mxs-6\">\n                  <a href=\"http://auto-kan.ru/kak-zakazat/\">\n                    <i class=\"icon_auto icon_auto-dostavka-green marg_ico_top\"></i>\n                    <div class=\"service\">\n                      <div class=\"desc\">\n                        <span class=\"h4\">Быстрая доставка</span>\n                        <p></p>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"container\"><h3 class=\"text-left\">Каталог</h3>\n            <div class=\"catalog catalog-v1 fs-14\">\n              <ul class=\"list-unstyled list-inline\">\n                <li>\n                  <img src='assets/img/category/1.png' alt='01. ТЮНИНГ УАЗ'>\n                  <a href=\"/category/category_1/\" class=\"fs-20 fw-4 mb-10 theme-sc\">01. ТЮНИНГ\n                    УАЗ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/2.png' alt='10. ДВИГАТЕЛЬ'>\n                  <a href=\"/category/category_20/\" class=\"fs-20 fw-4 mb-10 theme-sc\">10.\n                    ДВИГАТЕЛЬ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/3.png'\n                       alt='11. СИСТЕМА ПИТАНИЯ ДВИГАТЕЛЯ'>\n                  <a href=\"/category/category_25/\" class=\"fs-20 fw-4 mb-10 theme-sc\">11. СИСТЕМА\n                    ПИТАНИЯ ДВИГАТЕЛЯ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/4.png'\n                       alt='12. СИСТЕМА ВЫПУСКА ОТРАБОТАВШИХ ГАЗОВ'>\n                  <a href=\"/category/category_26/\" class=\"fs-20 fw-4 mb-10 theme-sc\">12. СИСТЕМА\n                    ВЫПУСКА ОТРАБОТАВШИХ ГАЗОВ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/5.png'\n                       alt='13. СИСТЕМА ОХЛАЖДЕНИЯ ДВИГАТЕЛЯ'>\n                  <a href=\"/category/category_27/\" class=\"fs-20 fw-4 mb-10 theme-sc\">13. СИСТЕМА\n                    ОХЛАЖДЕНИЯ ДВИГАТЕЛЯ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/6.png' alt='16. СЦЕПЛЕНИЕ'>\n                  <a href=\"/category/category_28/\" class=\"fs-20 fw-4 mb-10 theme-sc\">16.\n                    СЦЕПЛЕНИЕ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/7.png' alt='17. КОРОБКА ПЕРЕДАЧ'>\n                  <a href=\"/category/category_29/\" class=\"fs-20 fw-4 mb-10 theme-sc\">17. КОРОБКА\n                    ПЕРЕДАЧ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/8.png'\n                       alt='18. КОРОБКА РАЗДАТОЧНАЯ'>\n                  <a href=\"/category/category_36/\" class=\"fs-20 fw-4 mb-10 theme-sc\">18. КОРОБКА\n                    РАЗДАТОЧНАЯ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/9.png' alt='22. ВАЛЫ КАРДАННЫЕ'>\n                  <a href=\"/category/category_37/\" class=\"fs-20 fw-4 mb-10 theme-sc\">22. ВАЛЫ\n                    КАРДАННЫЕ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/10.png' alt='23. МОСТ ПЕРЕДНИЙ'>\n                  <a href=\"/category/category_38/\" class=\"fs-20 fw-4 mb-10 theme-sc\">23. МОСТ\n                    ПЕРЕДНИЙ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/11.png' alt='24. МОСТ ЗАДНИЙ'>\n                  <a href=\"/category/category_39/\" class=\"fs-20 fw-4 mb-10 theme-sc\">24. МОСТ\n                    ЗАДНИЙ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/12.png' alt='28. РАМА'>\n                  <a href=\"/category/category_40/\" class=\"fs-20 fw-4 mb-10 theme-sc\">28. РАМА</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/13.png' alt='29. ПОДВЕСКА'>\n                  <a href=\"/category/category_41/\" class=\"fs-20 fw-4 mb-10 theme-sc\">29.\n                    ПОДВЕСКА</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/14.png' alt='31. КОЛЕСА И СТУПИЦЫ'>\n                  <a href=\"/category/category_42/\" class=\"fs-20 fw-4 mb-10 theme-sc\">31. КОЛЕСА И\n                    СТУПИЦЫ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/15.png'\n                       alt='34. УПРАВЛЕНИЕ РУЛЕВОЕ'>\n                  <a href=\"/category/category_43/\" class=\"fs-20 fw-4 mb-10 theme-sc\">34.\n                    УПРАВЛЕНИЕ РУЛЕВОЕ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/16.png' alt='35. ТОРМОЗА'>\n                  <a href=\"/category/category_45/\" class=\"fs-20 fw-4 mb-10 theme-sc\">35.\n                    ТОРМОЗА</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/17.png'\n                       alt='37. ЭЛЕКТРОБООРУДОВАНИЕ'>\n                  <a href=\"/category/category_46/\" class=\"fs-20 fw-4 mb-10 theme-sc\">37.\n                    ЭЛЕКТРОБООРУДОВАНИЕ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/18.png' alt='38. ПРИБОРЫ'>\n                  <a href=\"/category/category_47/\" class=\"fs-20 fw-4 mb-10 theme-sc\">38.\n                    ПРИБОРЫ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/19.png'\n                       alt='39. ИНСТРУМЕНТ И ПРИНАДЛЕЖНОСТИ'>\n                  <a href=\"/category/category_48/\" class=\"fs-20 fw-4 mb-10 theme-sc\">39.\n                    ИНСТРУМЕНТ И ПРИНАДЛЕЖНОСТИ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/20.png' alt='50. КУЗОВ'>\n                  <a href=\"/category/category_49/\" class=\"fs-20 fw-4 mb-10 theme-sc\">50. КУЗОВ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/21.png' alt='51. ПОЛ КУЗОВА'>\n                  <a href=\"/category/category_50/\" class=\"fs-20 fw-4 mb-10 theme-sc\">51. ПОЛ\n                    КУЗОВА</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/22.png' alt='52. ОКНО ВЕТРОВОЕ'>\n                  <a href=\"/category/52-okno-vyetrovoye/\" class=\"fs-20 fw-4 mb-10 theme-sc\">52.\n                    ОКНО ВЕТРОВОЕ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/23.png' alt='53. ПЕРЕДОК'>\n                  <a href=\"/category/category_51/\" class=\"fs-20 fw-4 mb-10 theme-sc\">53.\n                    ПЕРЕДОК</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/24.png' alt='54. БОКОВИНА'>\n                  <a href=\"/category/category_52/\" class=\"fs-20 fw-4 mb-10 theme-sc\">54.\n                    БОКОВИНА</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/25.png' alt='56. ЗАДОК'>\n                  <a href=\"/category/56-zadok/\" class=\"fs-20 fw-4 mb-10 theme-sc\">56. ЗАДОК</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/26.png' alt='57. КРЫША'>\n                  <a href=\"/category/category_54/\" class=\"fs-20 fw-4 mb-10 theme-sc\">57. КРЫША</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/27.png' alt='60. ТЕНТ'>\n                  <a href=\"/category/category_55/\" class=\"fs-20 fw-4 mb-10 theme-sc\">60. ТЕНТ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/28.png' alt='61. ДВЕРЬ ПЕРЕДНЯЯ'>\n                  <a href=\"/category/category_56/\" class=\"fs-20 fw-4 mb-10 theme-sc\">61. ДВЕРЬ\n                    ПЕРЕДНЯЯ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/29.png'\n                       alt='62. ДВЕРЬ ЗАДНЯЯ (БОКОВАЯ)'>\n                  <a href=\"/category/category_57/\" class=\"fs-20 fw-4 mb-10 theme-sc\">62. ДВЕРЬ\n                    ЗАДНЯЯ (БОКОВАЯ)</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/30.png' alt='63. ДВЕРЬ ЗАДКА'>\n                  <a href=\"/category/category_58/\" class=\"fs-20 fw-4 mb-10 theme-sc\">63. ДВЕРЬ\n                    ЗАДКА</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/31.png'\n                       alt='65. МЕХАНИЗМЫ УПРАВЛЕНИЯ ЦЕНТРАЛЬНЫЕ'>\n                  <a href=\"/category/category_59/\" class=\"fs-20 fw-4 mb-10 theme-sc\">65. МЕХАНИЗМЫ\n                    УПРАВЛЕНИЯ ЦЕНТРАЛЬНЫЕ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/32.png' alt='68. СИДЕНЬЯ'>\n                  <a href=\"/category/category_60/\" class=\"fs-20 fw-4 mb-10 theme-sc\">68.\n                    СИДЕНЬЯ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/33.png'\n                       alt='81. ВЕНТИЛЯЦИЯ И ОТОПЛЕНИЕ'>\n                  <a href=\"/category/81-vyentilyatsiya-i-otoplyeniye/\"\n                     class=\"fs-20 fw-4 mb-10 theme-sc\">81. ВЕНТИЛЯЦИЯ И ОТОПЛЕНИЕ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/34.png'\n                       alt='82. ПРИНАДЛЕЖНОСТИ КУЗОВА'>\n                  <a href=\"/category/82-prinadlyezhnosti-kuzova/\"\n                     class=\"fs-20 fw-4 mb-10 theme-sc\">82. ПРИНАДЛЕЖНОСТИ КУЗОВА</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/35.png' alt='84. ОПЕРЕНИЕ'>\n                  <a href=\"/category/84-opyeryeniye/\" class=\"fs-20 fw-4 mb-10 theme-sc\">84.\n                    ОПЕРЕНИЕ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/36.png' alt='85. ПЛАТФОРМА'>\n                  <a href=\"/category/85-platforma/\" class=\"fs-20 fw-4 mb-10 theme-sc\">85.\n                    ПЛАТФОРМА</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/37.png'\n                       alt='95. КРЕПЕЖНЫЕ ИЗДЕЛИЯ'>\n                  <a href=\"/category/95-kryepyezhnyye-izdyeliya/\"\n                     class=\"fs-20 fw-4 mb-10 theme-sc\">95. КРЕПЕЖНЫЕ ИЗДЕЛИЯ</a>\n                </li>\n                <li>\n                  <img src='assets/img/category/38.png' alt='96. РАЗНОЕ'>\n                  <a href=\"/category/96-raznoye/\" class=\"fs-20 fw-4 mb-10 theme-sc\">96. РАЗНОЕ</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"shop-services service-v7\"><h3 class=\"text-center\">Мы предлагаем</h3>\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4 col-mxs-12\">\n                  <a href=\"http://auto-kan.ru/dostavka/\">\n                    <i class=\"icon_auto icon_auto-skjidki-green marg_ico_bot\"></i>\n                    <div class=\"service\">\n                      <div class=\"desc\">\n                        <span class=\"h4\">Гибкая система скидок</span>\n                        <p></p>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4 col-mxs-12\">\n                  <a href=\"http://auto-kan.ru/dostavka/\">\n                    <i class=\"icon_auto icon_auto-complect1den-green marg_ico_bot\"></i>\n                    <div class=\"service\">\n                      <div class=\"desc\">\n                        <span class=\"h4\">Комплектация заказа от 1 дня</span>\n                        <p></p>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4 col-mxs-12\">\n                  <a href=\"http://auto-kan.ru/sposoby-oplaty/\">\n                    <i class=\"icon_auto icon_auto-opt-green marg_ico_bot\"></i>\n                    <div class=\"service\">\n                      <div class=\"desc\">\n                        <span class=\"h4\">Оптово-розничные поставки</span>\n                        <p></p>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"container\"><h3 class=\"text-right\">Каталог каталог запчастей по моделям</h3>\n            <div class=\"row\">\n              <div class=\"col-xs-1 col-sm-1 col-md-1 col-mxs-0\"></div>\n              <div class=\"col-xs-2 col-sm-4 col-md-2 col-mxs-6\">\n                <a href=\"/\"><img class=\"img-responsive\"\n                                 src=\"assets/img/models/patriot.jpg\"/>\n                  <p class=\"model_p\">Патриот</p></a>\n              </div>\n              <div class=\"col-xs-2 col-sm-4 col-md-2 col-mxs-6\">\n                <a href=\"/\"><img class=\"img-responsive\"\n                                 src=\"assets/img/models/hunter.jpg\"/>\n                  <p class=\"model_p\">Хантер</p></a>\n              </div>\n              <div class=\"col-xs-2 col-sm-4 col-md-2 col-mxs-6\">\n                <a href=\"/\"><img class=\"img-responsive\"\n                                 src=\"assets/img/models/picup.jpg\"/>\n                  <p class=\"model_p\">Пикап</p></a>\n              </div>\n              <div class=\"col-xs-2 col-sm-4 col-md-2 col-mxs-6\">\n                <a href=\"/\"><img class=\"img-responsive\"\n                                 src=\"assets/img/models/kargo.jpg\"/>\n                  <p class=\"model_p\">Карго</p></a>\n              </div>\n              <div class=\"col-xs-2 col-sm-4 col-md-2 col-mxs-6\">\n                <a href=\"/\"><img class=\"img-responsive\"\n                                 src=\"assets/img/models/comerc.jpg\"/>\n                  <p class=\"model_p\">Коммерческие автомобили</p></a>\n              </div>\n              <div class=\"col-xs-1 col-sm-1 col-md-1 col-mxs-0\"></div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"homepage\">\n            <div class=\"container\">\n\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xs-9 col-sm-7 col-mxs-12\">\n                <div class=\"about about-v1 clearfix\">\n                  <h1>АВТО-КАН - запчасти УАЗ в розницу и оптом с доставкой по России</h1>\n                  <div class=\"tagline\"></div>\n                  <hr>\n                  <div class=\"maintext\">\n                    <p>Более 20 лет компания Авто-Кан реализует запчасти УАз различных брендов и\n                      производителей. Мы имеем широчайший опыт поставок и продаж как в\n                      розницу, так и для малого и среднего бизнеса. Опытные специалисты,\n                      собственная логистика и конкурентные цены делают наше сортрудничество с\n                      Вами взаимовыгодным и перспектинвым. Мы всегда готовы помочь вам с\n                      подбором оборудования и оказать необходимые консультации</p>\n                    <p>Спасибо что выбираете нас!</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xs-3 col-sm-5 col-mxs-12\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-5\">\n        <div class=\"footer-contacts mb-25\">\n          <div class=\"h3 fs-20 fw-5\">Контакты</div>\n          <ul class=\"fs-13\">\n            <li>432045, Россия, г.Ульяновск,</li>\n            <li>Московское шоссе, 36</li>\n            <li>Телефон: +7 (8422) 750-565</li>\n            <li>Факс: +7 (8422) 348-161</li>\n            <li>Email: shop@auto-kan.ru</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-xs-2 col-md-2 col-sm-6 col-mxs-6\">\n        <div class=\"h3 fs-20 fw-5\">Компания</div>\n        <ul class=\"list-unstyled fs-13\">\n          <li><a class=\"white h_size\" href=\"/abouth/\">О магазине</a></li>\n          <li><a class=\"white h_size\" href=\"/delivery/\">Доставка</a></li>\n          <li><a class=\"white h_size\" href=\"/payment/\">Оплата</a></li>\n          <li><a class=\"white h_size\" href=\"/purchase/\">Как купить</a></li>\n          <li><a class=\"white h_size\" href=\"/warranty/\">Гарантия</a></li>\n          <li><a class=\"white h_size\" href=\"/contacts/\">Контакты</a></li>\n          <li><a class=\"white h_size\" href=\"/banking-details/\">Реквизиты</a></li>\n        </ul>\n      </div>\n      <div class=\"col-xs-2 col-md-2 col-sm-6 col-mxs-6\">\n        <div class=\"h3 fs-20 fw-5\">Личный кабинет</div>\n        <ul class=\"list-unstyled fs-13\">\n          <li><a class=\"white h_size\" href=\"/my/profile/\">Мой профиль</a></li>\n          <li><a class=\"white h_size\" href=\"/my/orders/\">Мои заказы</a></li>\n        </ul>\n      </div>\n      <div class=\"col-xs-3 col-md-3 col-sm-6 col-mxs-12 widgets\">\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\"></div>\n    </div>\n  </div>\n</div>\n<div class=\"copyright\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 text-center\">\n        copyright\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n<button id=\"back-top\" class=\"mdl-button mdl-js-button mdl-button--fab\" type=\"button\"><i class=\"material-icons\">keyboard_arrow_up</i>\n</button>\n<div id=\"added\" class=\"added hidden-xs\">\n  <div class=\"added-inner\">Добавлен в <a href=\"javascript:void(0)\" class=\"message\"></a><a href=\"javascript:void(0)\"\n                                                                                          class=\"cancel\">Отмена</a>\n    <button class=\"added-close\"></button>\n  </div>\n</div>\n<div id=\"info\" class=\"added hidden-xs\">\n  <div class=\"added-inner\"><span class=\"message\"></span>\n    <button class=\"added-close\"></button>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginLabel\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\"><i\n          class=\"material-icons\">close</i></span><span class=\"sr-only\">Close</span></button>\n        <span class=\"modal-title\" id=\"loginLabel\">Войти</span></div>\n      <div class=\"modal-body\">\n        <div class=\"authform\">\n          <form action=\"/login/\" method=\"post\">\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"text\" name=\"login\" id=\"frmlogin-email\"/><label\n              class=\"mdl-textfield__label\" for=\"frmlogin-email\">Email</label></div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"text\" name=\"password\" id=\"frmlogin-password\"/><label\n              class=\"mdl-textfield__label\" for=\"frmlogin-password\">Пароль</label></div>\n            <input type=\"hidden\" name=\"wa_auth_login\" value=\"1\">\n            <button class=\"btn-block btn-theme mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\"\n                    type=\"submit\">Войти\n            </button>\n            <p>Впервые на auto-kan.ru? <a href=\"/signup/\" data-signup=\"1\" rel=\"nofollow\">Зарегистрируйтесь\n              сейчас</a></p></form>\n        </div>\n      </div>\n      <div class=\"modal-footer\"><a href=\"javascript:void(0);\" class=\"mdl-button mdl-js-button mdl-button--primary\"\n                                   data-forgot=\"1\">Забыли пароль?</a></div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"signupModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"signupLabel\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\"><i\n          class=\"material-icons\">close</i></span><span class=\"sr-only\">Close</span></button>\n        <span class=\"modal-title\" id=\"signupLabel\">Регистрация</span></div>\n      <div class=\"modal-body\">\n        <div class=\"authform\">\n          <form action=\"/signup/\" method=\"post\">\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"text\" name=\"data[firstname]\"\n              id=\"frmsignup-name\"/><label class=\"mdl-textfield__label\"\n                                          for=\"frmsignup-name\">Имя</label></div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"text\" name=\"data[lastname]\" id=\"frmsignup-lastname\"/><label\n              class=\"mdl-textfield__label\" for=\"frmsignup-lastname\">Фамилия</label></div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"text\" name=\"data[email]\" id=\"frmsignup-email\"/><label\n              class=\"mdl-textfield__label\" for=\"frmsignup-email\">Email</label></div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"password\" name=\"data[password]\"\n              id=\"frmsignup-password\"/><label class=\"mdl-textfield__label\" for=\"frmsignup-password\">Пароль</label>\n            </div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"password\" name=\"data[password_confirm]\"\n              id=\"frmsignup-confirm\"/><label class=\"mdl-textfield__label\" for=\"frmsignup-confirm\">Подтвердите\n              пароль</label></div>\n            <button class=\"btn-block btn-theme mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\"\n                    type=\"submit\">Зарегистрироваться\n            </button>\n            <p>Уже зарегистрированны? Нажмите <a href=\"/login/\" data-auth=\"1\" rel=\"nofollow\">Войти</a>,\n              чтобы зайти в свой аккаунт</p></form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"forgotModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"forgotLabel\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\"><i\n          class=\"material-icons\">close</i></span><span class=\"sr-only\">Close</span></button>\n        <span class=\"modal-title\" id=\"forgotLabel\">Забыли пароль?</span></div>\n      <div class=\"modal-body\">\n        <div class=\"authform\">\n          <form action=\"/forgotpassword/\" method=\"post\">\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"text\" name=\"login\" id=\"frmforgot-login\"/><label\n              class=\"mdl-textfield__label\" for=\"frmforgot-login\">Email</label></div>\n            <button class=\"btn-block btn-theme mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\"\n                    type=\"submit\">Сбросить пароль\n            </button>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\"><a href=\"javascript:void(0);\" class=\"mdl-button mdl-js-button mdl-button--primary\"\n                                   data-auth=\"1\">Я вспомнил пароль!</a></div>\n    </div>\n  </div>\n</div>\n<div class=\"modal modal-product fade\" id=\"product-overview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"overviewLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\"><a href=\"#\" class=\"ov-link mdl-button mdl-js-button\">Страница продукта</a>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\"><i\n          class=\"material-icons\">close</i></span><span class=\"sr-only\">Close</span></button>\n        <div><span class=\"modal-title\" id=\"overviewLabel\"></span></div>\n      </div>\n      <div class=\"modal-body product-page fs-13\">\n        <div class=\"row\">\n          <div class=\"col-xs-7 ov-info\"></div>\n          <div class=\"col-xs-5 ov-image\"><img\n            src=\"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\"\n            alt=\"gif pixel\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal modal-product fade\" id=\"product-quickview\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\"><a href=\"#\" class=\"ov-link mdl-button mdl-js-button\">Страница продукта</a>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\"><i\n          class=\"material-icons\">close</i></span><span class=\"sr-only\">Close</span></button>\n      </div>\n      <div class=\"modal-body product-page fs-13\"></div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"feedbackModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"feedbackLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <div class=\"modal-bordered\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\"><i\n            class=\"material-icons\">close</i></span><span class=\"sr-only\">Close</span></button>\n          <span class=\"modal-title\" id=\"feedbackLabel\">Обратная связь</span></div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"authform\">\n          <form action=\"/feedback/\" method=\"post\">\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"text\" name=\"name\" id=\"frmfeed-name\"/><label\n              class=\"mdl-textfield__label\" for=\"frmfeed-name\">Имя</label></div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><input\n              class=\"mdl-textfield__input\" type=\"email\" name=\"email\" id=\"frmfeed-email\"/><label\n              class=\"mdl-textfield__label\" for=\"frmfeed-email\">Email</label></div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"><textarea name=\"body\"\n                                                                                                class=\"mdl-textfield__input\"\n                                                                                                id=\"frmfeed-text\"></textarea><label\n              class=\"mdl-textfield__label\" for=\"frmfeed-text\">Сообщение</label></div>\n            <div class=\"wa-captcha\">\n              <p>\n                <strong>&rarr;</strong>\n                <input type=\"text\" name=\"captcha\" class=\"wa-captcha-input\" autocomplete=\"off\">\n              </p>\n              <p>\n                <a href=\"#\" class=\"wa-captcha-refresh\">Обновить капчу (CAPTCHA)</a>\n              </p>\n\n            </div>\n            <input name=\"send\" type=\"submit\" value=\"Отправить\" class=\"btn-block\"></form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header header-style-white\">\n  <div class=\"header-v11\">\n    <div class=\"header-content\">\n      <div class=\"container\">\n        <div class=\"row vertical-align\">\n          <div class=\"col-xs-2 logo\">\n            <a routerLink=\"/\">\n              <img src=\"assets/img/mylogo.png\"/>\n            </a></div>\n          <div class=\"col-xs-8 contacts list-column\">\n            <ul>\n              <li>\n                <a routerLink=\"mailto:shop@auto-kan.ru\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>shop@auto-kan.ru</a>\n              </li>\n              <li>\n                <a routerLink=\"tel:+7(8422)750-565\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>+7(8422)750-565</a>\n              </li>\n              <li>\n                Пн—Пт 9:00—17:30\n              </li>\n            </ul>\n            <ul>\n              <li>\n                <a routerLink=\"skype:auto-kan.ru?add\"><i class=\"fa fa-skype fa-fw\"></i>auto-kan.ru</a>\n              </li>\n              <li>\n                <a routerLink=\"#feedbackModal\" data-toggle=\"modal\">\n                  <i class=\"fa fa-comments\" aria-hidden=\"true\"></i>Обратная связь\n                </a>\n              </li>\n            </ul>\n            <div class=\"flexMenu-search\">\n              <form method=\"get\" action=\"/search/\">\n                <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\n                  <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                  </label>\n                  <div class=\"mdl-textfield__expandable-holder\">\n                    <input class=\"mdl-textfield__input\" type=\"search\" name=\"query\"\n                           placeholder=\"Поиск\" id=\"search\"/>\n                  </div>\n                  <button type=\"submit\">\n                    <i class=\"material-icons\">arrow_forward</i>\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"col-xs-2 cart cart-condensed\">\n            <div data-spy=\"affix\" data-offset-top=\"200\" id=\"cartAffix\">\n              <a routerLink=\"/cart/\" id=\"cart\" class=\"rounded-sm\">\n                <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n                <span class=\"cart-count\">0</span> товар(ов) - <span class=\"cart-total\">0 <span\n                class=\"ruble\">Р</span></span>\n              </a>\n              <div id=\"flying-cart\" class=\"empty\">\n                <div class=\"flyingCart-content\">\n                </div>\n                <div class=\"flyingCart-summary\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                      <p class=\"fs-13\"><span class=\"grey\">Итого</span>: <span\n                        class=\"bold fs-14 cart-total\">0 <span\n                        class=\"ruble\">Р</span></span></p>\n                      <a routerLink=\"/cart/\"\n                         class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent btn-block\">Перейти\n                        в корзину</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\">\n            <div class=\"navbar navbar-default navbar-categories\" role=\"navigation\">\n              <ul class=\"nav navbar-nav\">\n                <li class=\"dropdown\">\n                  <a routerLink=\"javascript:void(0)\">\n                    <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n                    <span>Категории</span>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li class=\"dropdown\">\n                      <a routerLink=\"/category/category_1\">ТЮНИНГ УАЗ</a>\n                      <ul class=\"dropdown-menu\">\n                        <li>\n                          <a routerLink=\"/category/category_2\">Багажники</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_3\">Бампера</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_4\">Бары</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_5\">Воздухозаборники</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_6\">Дефлектора</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_7\">Защиты силовые</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_8\">Кенгурины</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_9\">Лифт кузова</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_10\">Люстры</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_11\">Молдинги</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_12\">Наклейки</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_13\">Облицовки радиатора</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_14\">Панели приборов</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_15\">Подножки</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_16\">Полки верхние</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_17\">Разное</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_18\">Спойлера</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_19\">Шноркеля</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a routerLink=\"/category/category_20\">ДВИГАТЕЛЬ</a>\n                      <ul class=\"dropdown-menu\">\n                        <li>\n                          <a routerLink=\"/category/category_21\">Двигатель ANDORIA</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_22\">Двигатель IVECO</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_23\">Двигатель ЗМЗ</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_24\">Двигатель УМЗ</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_25\">СИСТЕМА ПИТАНИЯ ДВИГАТЕЛЯ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_26\">СИСТЕМА ВЫПУСКА ОТРАБОТАВШИХ ГАЗОВ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_27\">СИСТЕМА ОХЛАЖДЕНИЯ ДВИГАТЕЛЯ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_28\">СЦЕПЛЕНИЕ</a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a routerLink=\"/category/category_29\">КОРОБКА ПЕРЕДАЧ</a>\n                      <ul class=\"dropdown-menu\">\n                        <li>\n                          <a routerLink=\"/category/category_30\">КПП 3160</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_31\">КПП 5-ти ступенчатая АДС</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_32\">КПП Dymos Корея</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_33\">КПП Арзамас</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_34\">КПП нового образца</a>\n                        </li>\n                        <li>\n                          <a routerLink=\"/category/category_35\">КПП старого образца</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_36\">КОРОБКА РАЗДАТОЧНАЯ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_37\">ВАЛЫ КАРДАННЫЕ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_38\">МОСТ ПЕРЕДНИЙ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_39\">МОСТ ЗАДНИЙ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_40\">РАМА</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_41\">ПОДВЕСКА</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_42\">КОЛЕСА И СТУПИЦЫ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_43\">УПРАВЛЕНИЕ РУЛЕВОЕ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_45\">ТОРМОЗА</a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a routerLink=\"/category/category_46\">ЭЛЕКТРОБООРУДОВАНИЕ</a>\n                      <ul class=\"dropdown-menu\">\n                        <li>\n                          <a routerLink=\"/category/avtolampy\">Автолампы</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_47\">ПРИБОРЫ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_48\">ИНСТРУМЕНТ И ПРИНАДЛЕЖНОСТИ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_49\">КУЗОВ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_50\">ПОЛ КУЗОВА</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/52-okno-vyetrovoye\">ОКНО ВЕТРОВОЕ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_51\">ПЕРЕДОК</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_52\">БОКОВИНА</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/56-zadok\">ЗАДОК</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_54\">КРЫША</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_55\">ТЕНТ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_56\">ДВЕРЬ ПЕРЕДНЯЯ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_57\">ДВЕРЬ ЗАДНЯЯ (БОКОВАЯ)</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_58\">ДВЕРЬ ЗАДКА</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_59\">МЕХАНИЗМЫ УПРАВЛЕНИЯ ЦЕНТРАЛЬНЫЕ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/category_60\">СИДЕНЬЯ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/81-vyentilyatsiya-i-otoplyeniye\">ВЕНТИЛЯЦИЯ И ОТОПЛЕНИЕ</a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a routerLink=\"/category/82-prinadlyezhnosti-kuzova\">ПРИНАДЛЕЖНОСТИ КУЗОВА</a>\n                      <ul class=\"dropdown-menu\">\n                        <li>\n                          <a routerLink=\"/category/plastik\">Пластик</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/84-opyeryeniye\">ОПЕРЕНИЕ</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/85-platforma\">ПЛАТФОРМА</a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/category/95-kryepyezhnyye-izdyeliya\">КРЕПЕЖНЫЕ ИЗДЕЛИЯ</a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a routerLink=\"/category/96-raznoye/\">РАЗНОЕ</a>\n                      <ul class=\"dropdown-menu\">\n                        <li>\n                          <a routerLink=\"/category/avtokhimiya-i-akkumulyatory\">Автохимия и аккумуляторы</a>\n                        </li>\n                      </ul>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-xs-9 menu\">\n            <div class=\"navbar navbar-default navbar-pages navbar-theme nb-dark nb-black\">\n              <div id=\"navbar-pages\">\n                <ul class=\"nav navbar-nav navbar-flex\" id=\"pages\">\n                  <li><a routerLink=\"/abouth/\">О магазине</a></li>\n                  <li><a routerLink=\"/delivery/\">Доставка</a></li>\n                  <li><a routerLink=\"/payment/\">Оплата</a></li>\n                  <li><a routerLink=\"/purchase/\">Как купить</a></li>\n                  <li><a routerLink=\"/warranty/\">Гарантия</a></li>\n                  <li><a routerLink=\"/contacts/\">Контакты</a></li>\n                  <li><a routerLink=\"/banking-details/\">Реквизиты</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map