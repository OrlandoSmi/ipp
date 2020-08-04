function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesServicesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>services</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"txt\">Our Services</p>\n  <ion-list>\n    <ion-item class=\"menuitem\" routerLink=\"\" >Concierge</ion-item>\n    <ion-item class=\"menuitem\" routerLink=\"\" >Water Sport</ion-item>\n    <ion-item class=\"menuitem\" routerLink=\"\" >Retail store</ion-item>\n    <ion-item class=\"menuitem\" routerLink=\"\" >Photo desk</ion-item>\n    <ion-item class=\"menuitem\" routerLink=\"\" >Tour Desk</ion-item>\n   \n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/services/services-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/services-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ServicesPageRoutingModule */

  /***/
  function srcAppServicesServicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesPageRoutingModule", function () {
      return ServicesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services.page */
    "./src/app/services/services.page.ts");

    var routes = [{
      path: '',
      component: _services_page__WEBPACK_IMPORTED_MODULE_3__["ServicesPage"]
    }];

    var ServicesPageRoutingModule = function ServicesPageRoutingModule() {
      _classCallCheck(this, ServicesPageRoutingModule);
    };

    ServicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ServicesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/services/services.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/services.module.ts ***!
    \*********************************************/

  /*! exports provided: ServicesPageModule */

  /***/
  function srcAppServicesServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function () {
      return ServicesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services-routing.module */
    "./src/app/services/services-routing.module.ts");
    /* harmony import */


    var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services.page */
    "./src/app/services/services.page.ts");

    var ServicesPageModule = function ServicesPageModule() {
      _classCallCheck(this, ServicesPageModule);
    };

    ServicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicesPageRoutingModule"]],
      declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
    })], ServicesPageModule);
    /***/
  },

  /***/
  "./src/app/services/services.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/services/services.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesServicesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".txt {\n  text-align: center;\n  font-weight: bold;\n  font-family: \"Roboto\";\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvRDpcXFJheXZvbiBTdGV3YXJ0XFxEb2N1bWVudHNcXElvbmljIFByb2plY3RcXElQUC9zcmNcXGFwcFxcc2VydmljZXNcXHNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59IiwiLnR4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/services/services.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/services.page.ts ***!
    \*******************************************/

  /*! exports provided: ServicesPage */

  /***/
  function srcAppServicesServicesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesPage", function () {
      return ServicesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicesPage = /*#__PURE__*/function () {
      function ServicesPage() {
        _classCallCheck(this, ServicesPage);
      }

      _createClass(ServicesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesPage;
    }();

    ServicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./services.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./services.page.scss */
      "./src/app/services/services.page.scss"))["default"]]
    })], ServicesPage);
    /***/
  }
}]);
//# sourceMappingURL=services-services-module-es5.js.map