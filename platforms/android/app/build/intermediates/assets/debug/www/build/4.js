webpackJsonp([4],{

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewAddressPageModule", function() { return AddNewAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_new_address__ = __webpack_require__(618);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddNewAddressPageModule = /** @class */ (function () {
    function AddNewAddressPageModule() {
    }
    AddNewAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_new_address__["a" /* AddNewAddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_new_address__["a" /* AddNewAddressPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_new_address__["a" /* AddNewAddressPage */]
            ]
        })
    ], AddNewAddressPageModule);
    return AddNewAddressPageModule;
}());

//# sourceMappingURL=add-new-address.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instamojo_new_transaction__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(621);
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
 * Generated class for the AddNewAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNewAddressPage = /** @class */ (function () {
    function AddNewAddressPage(navCtrl, navParams, geolocation, zone, service, locationAccuracy, api, diagnostic) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.zone = zone;
        this.service = service;
        this.locationAccuracy = locationAccuracy;
        this.api = api;
        this.diagnostic = diagnostic;
        this.address = '';
        this.fname = '';
        this.lname = '';
        this.phno = '';
        this.city = '';
        this.pin = '';
        this.type = '';
    }
    AddNewAddressPage.prototype.newTransaction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__instamojo_new_transaction__["a" /* NewTransactionPage */], {
            amount: 10
        });
    };
    AddNewAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNewAddressPage');
        var base = this;
        setTimeout(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('myloc'));
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    window.alert(this.TranslateService.instant('No details available for input') + place.name + "'");
                    return;
                }
                else {
                    base.address = place.formatted_address;
                }
            });
        }, 2000);
    };
    AddNewAddressPage.prototype.getLocation = function () {
        var _this = this;
        this.diagnostic.isLocationEnabled().then(function (enabled) {
            if (enabled) {
                var options = { enableHighAccuracy: true };
                _this.service.LoaderShowmsg("Getting your location...");
                _this.geolocation.getCurrentPosition(options).then(function (success) {
                    console.log(success);
                    var center = new google.maps.LatLng(success.coords.latitude, success.coords.longitude);
                    var geocoder = new google.maps.Geocoder();
                    var base = _this;
                    geocoder.geocode({ 'latLng': center }, function (results, status) {
                        console.log(status);
                        console.log(results);
                        base.service.LoaderHide();
                        if (status == google.maps.GeocoderStatus.OK) {
                            base.zone.run(function () {
                                base.address = results[0].formatted_address;
                                console.log(base.address);
                            });
                        }
                    });
                });
            }
            else {
                _this.locationAccuracy.canRequest().then(function (canRequest) {
                    if (canRequest) {
                        // the accuracy option will be ignored by iOS
                        _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { _this.getLocation(); }, function (error) { return console.log(JSON.stringify(error)); });
                    }
                });
            }
        });
    };
    AddNewAddressPage.prototype.save = function () {
        if (this.fname == '') {
            this.service.Warning("Enter your first name");
        }
        else if (this.lname == '') {
            this.service.Warning("Enter your last name");
        }
        else if (this.address == '') {
            this.service.Warning("Enter your address");
        }
        else if (this.phno == '') {
            this.service.Warning("Enter your phone number");
        }
        else if (this.city == '') {
            this.service.Warning("Enter your city");
        }
        else if (this.pin == '') {
            this.service.Warning("Enter your pin");
        }
        else if (this.type == '') {
            this.service.Warning("Choose your address type");
        }
        else {
            var base_1 = this;
            base_1.service.LoaderShowmsg("Adding your address");
            base_1.api.POST("/addAddresses", {
                firstname: base_1.fname,
                lastname: base_1.lname,
                mobile: base_1.phno,
                address1: base_1.address,
                city: base_1.city,
                pin: base_1.pin,
                type: base_1.type
            }).then(function (success) {
                console.log(success);
                base_1.service.LoaderHide();
                if (success.status == 'success') {
                    base_1.service.Success(success.data);
                    base_1.fname = '';
                    base_1.lname = '';
                    base_1.phno = '';
                    base_1.address = '';
                    base_1.type = '';
                }
            }).catch(function (error) {
                base_1.service.LoaderHide();
                base_1.service.Success('Something went wrong. Try again later');
            });
        }
    };
    AddNewAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-new-address',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\add-new-address\add-new-address.html"*/'<!--\n  Generated template for the AddNewAddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header mode="md" no-border="">\n  <ion-navbar mode="md" color="primary">\n    <ion-title mode="ios" text-capitalize="">Add a new address</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="product_details">\n    <div>\n      <button ion-button block icon-start style="background-color: #f6f7f7;\n      color: #0ec0ed;" (click)="getLocation()">\n        <ion-icon name="ios-locate-outline"></ion-icon>\n        Use my current location\n      </button>\n      <p style="text-align: center;color: grey;margin-top: 0px;">Tap to auto fill address</p>\n    </div>\n    <div class="form_area">\n      <input type="text" placeholder="First Name" [(ngModel)]="fname" class="animated fadeInUp">\n      <input type="text" placeholder="Last Name" [(ngModel)]="lname" class="animated fadeInUp">\n      <input type="tel" placeholder="Phone Number" [(ngModel)]="phno" class="animated fadeInUp">\n      <input type="text" id="myloc" placeholder="Address" [(ngModel)]="address" class="animated fadeInUp">\n      <input type="text" placeholder="City" [(ngModel)]="city" class="animated fadeInUp">\n      <input type="number" placeholder="Postal Pin Number" [(ngModel)]="pin" class="animated fadeInUp">\n      <ion-item no-lines="" mode="md">\n        <ion-label mode="md">Type</ion-label>\n        <ion-select [(ngModel)]="type" mode="md">\n          <ion-option mode="md" value="default">Default</ion-option>\n          <ion-option mode="md" value="normal">Normal</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <button ion-button block (click)="save()">Save</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\add-new-address\add-new-address.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], AddNewAddressPage);
    return AddNewAddressPage;
}());

//# sourceMappingURL=add-new-address.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Geolocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
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



/**
 * @name Geolocation
 * @description
 * This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
 *
 *  This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.
 *
 * For iOS you have to add this configuration to your configuration.xml file
 * ```xml
 * <edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
 *    <string>We use your location for full functionality of certain app features.</string>
 * </edit-config>
 * ```
 *
 *
 * @usage
 *
 * ```typescript
 * import { Geolocation } from '@ionic-native/geolocation';
 *
 * ...
 *
 * constructor(private geolocation: Geolocation) {}
 *
 * ...
 *
 * this.geolocation.getCurrentPosition().then((resp) => {
 *  // resp.coords.latitude
 *  // resp.coords.longitude
 * }).catch((error) => {
 *   console.log('Error getting location', error);
 * });
 *
 * let watch = this.geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  // data can be a set of coordinates, or an error (if an error occurred).
 *  // data.coords.latitude
 *  // data.coords.longitude
 * });
 * ```
 * @interfaces
 * Coordinates
 * Geoposition
 * PositionError
 * GeolocationOptions
 */
var Geolocation = (function (_super) {
    __extends(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device's current position.
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Promise<Geoposition>} Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
     */
    /**
       * Get the device's current position.
       *
       * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
       * @returns {Promise<Geoposition>} Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
       */
    Geolocation.prototype.getCurrentPosition = /**
       * Get the device's current position.
       *
       * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
       * @returns {Promise<Geoposition>} Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
       */
    function (options) {
        return;
    };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    /**
       * Watch the current device's position.  Clear the watch by unsubscribing from
       * Observable changes.
       *
       * ```typescript
       * const subscription = this.geolocation.watchPosition()
       *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
       *                               .subscribe(position => {
       *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
       * });
       *
       * // To stop notifications
       * subscription.unsubscribe();
       * ```
       *
       * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
       * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
       */
    Geolocation.prototype.watchPosition = /**
       * Watch the current device's position.  Clear the watch by unsubscribing from
       * Observable changes.
       *
       * ```typescript
       * const subscription = this.geolocation.watchPosition()
       *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
       *                               .subscribe(position => {
       *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
       * });
       *
       * // To stop notifications
       * subscription.unsubscribe();
       * ```
       *
       * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
       * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
       */
    function (options) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    Geolocation.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Geolocation.prototype, "getCurrentPosition", null);
    /**
     * @name Geolocation
     * @description
     * This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
     *
     *  This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.
     *
     * For iOS you have to add this configuration to your configuration.xml file
     * ```xml
     * <edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
     *    <string>We use your location for full functionality of certain app features.</string>
     * </edit-config>
     * ```
     *
     *
     * @usage
     *
     * ```typescript
     * import { Geolocation } from '@ionic-native/geolocation';
     *
     * ...
     *
     * constructor(private geolocation: Geolocation) {}
     *
     * ...
     *
     * this.geolocation.getCurrentPosition().then((resp) => {
     *  // resp.coords.latitude
     *  // resp.coords.longitude
     * }).catch((error) => {
     *   console.log('Error getting location', error);
     * });
     *
     * let watch = this.geolocation.watchPosition();
     * watch.subscribe((data) => {
     *  // data can be a set of coordinates, or an error (if an error occurred).
     *  // data.coords.latitude
     *  // data.coords.longitude
     * });
     * ```
     * @interfaces
     * Coordinates
     * Geoposition
     * PositionError
     * GeolocationOptions
     */
    Geolocation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'Geolocation',
            plugin: 'cordova-plugin-geolocation',
            pluginRef: 'navigator.geolocation',
            repo: 'https://github.com/apache/cordova-plugin-geolocation',
            install: 'ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"',
            installVariables: ['GEOLOCATION_USAGE_DESCRIPTION'],
            platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows']
        })
    ], Geolocation);
    return Geolocation;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationAccuracy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(19);
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


/**
 * @name Location Accuracy
 * @description
 * This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.
 *
 * @usage
 * ```typescript
 * import { LocationAccuracy } from '@ionic-native/location-accuracy';
 *
 * constructor(private locationAccuracy: LocationAccuracy) { }
 *
 * ...
 *
 * this.locationAccuracy.canRequest().then((canRequest: boolean) => {
 *
 *   if(canRequest) {
 *     // the accuracy option will be ignored by iOS
 *     this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
 *       () => console.log('Request successful'),
 *       error => console.log('Error requesting location permissions', error)
 *     );
 *   }
 *
 * });
 *
 * ```
 */
var LocationAccuracy = (function (_super) {
    __extends(LocationAccuracy, _super);
    function LocationAccuracy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.SUCCESS_USER_AGREED = 1;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.ERROR_INVALID_ACTION = 0;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.ERROR_INVALID_ACCURACY = 1;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.ERROR_EXCEPTION = 1;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.ERROR_USER_DISAGREED = 4;
        /**
           * Convenience constant
           * @type {number}
           */
        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
    }
    /**
     * Indicates if you can request accurate location
     * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
     */
    /**
       * Indicates if you can request accurate location
       * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
       */
    LocationAccuracy.prototype.canRequest = /**
       * Indicates if you can request accurate location
       * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
       */
    function () { return; };
    /**
     * Indicates if a request is currently in progress
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
     */
    /**
       * Indicates if a request is currently in progress
       * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
       */
    LocationAccuracy.prototype.isRequesting = /**
       * Indicates if a request is currently in progress
       * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
       */
    function () { return; };
    /**
     * Requests accurate location
     * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
     */
    /**
       * Requests accurate location
       * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
       * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
       */
    LocationAccuracy.prototype.request = /**
       * Requests accurate location
       * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
       * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
       */
    function (accuracy) { return; };
    LocationAccuracy.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocationAccuracy.prototype, "canRequest", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LocationAccuracy.prototype, "isRequesting", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], LocationAccuracy.prototype, "request", null);
    /**
     * @name Location Accuracy
     * @description
     * This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.
     *
     * @usage
     * ```typescript
     * import { LocationAccuracy } from '@ionic-native/location-accuracy';
     *
     * constructor(private locationAccuracy: LocationAccuracy) { }
     *
     * ...
     *
     * this.locationAccuracy.canRequest().then((canRequest: boolean) => {
     *
     *   if(canRequest) {
     *     // the accuracy option will be ignored by iOS
     *     this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
     *       () => console.log('Request successful'),
     *       error => console.log('Error requesting location permissions', error)
     *     );
     *   }
     *
     * });
     *
     * ```
     */
    LocationAccuracy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'LocationAccuracy',
            plugin: 'cordova-plugin-request-location-accuracy',
            pluginRef: 'cordova.plugins.locationAccuracy',
            repo: 'https://github.com/dpa99c/cordova-plugin-request-location-accuracy',
            platforms: ['Android', 'iOS']
        })
    ], LocationAccuracy);
    return LocationAccuracy;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagnostic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(19);
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


/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from '@ionic-native/diagnostic';
 *
 * constructor(private diagnostic: Diagnostic) { }
 *
 * ...
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
 * let errorCallback = (e) => console.error(e);
 *
 * this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
 *
 * this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
 *
 *
 * this.diagnostic.getBluetoothState()
 *   .then((state) => {
 *     if (state == this.diagnostic.bluetoothState.POWERED_ON){
 *       // do something
 *     } else {
 *       // do something else
 *     }
 *   }).catch(e => console.error(e));
 *
 * ```
 *
 */
var Diagnostic = (function (_super) {
    __extends(Diagnostic, _super);
    function Diagnostic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permission = {
            READ_CALENDAR: 'READ_CALENDAR',
            WRITE_CALENDAR: 'WRITE_CALENDAR',
            CAMERA: 'CAMERA',
            READ_CONTACTS: 'READ_CONTACTS',
            WRITE_CONTACTS: 'WRITE_CONTACTS',
            GET_ACCOUNTS: 'GET_ACCOUNTS',
            ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
            ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
            RECORD_AUDIO: 'RECORD_AUDIO',
            READ_PHONE_STATE: 'READ_PHONE_STATE',
            CALL_PHONE: 'CALL_PHONE',
            ADD_VOICEMAIL: 'ADD_VOICEMAIL',
            USE_SIP: 'USE_SIP',
            PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
            READ_CALL_LOG: 'READ_CALL_LOG',
            WRITE_CALL_LOG: 'WRITE_CALL_LOG',
            SEND_SMS: 'SEND_SMS',
            RECEIVE_SMS: 'RECEIVE_SMS',
            READ_SMS: 'READ_SMS',
            RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
            RECEIVE_MMS: 'RECEIVE_MMS',
            WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
            READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
            BODY_SENSORS: 'BODY_SENSORS'
        };
        _this.locationAuthorizationMode = {
            ALWAYS: 'always',
            WHEN_IN_USE: 'when_in_use'
        };
        _this.permissionGroups = {
            CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
            CAMERA: ['CAMERA'],
            CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
            LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            MICROPHONE: ['RECORD_AUDIO'],
            PHONE: [
                'READ_PHONE_STATE',
                'CALL_PHONE',
                'ADD_VOICEMAIL',
                'USE_SIP',
                'PROCESS_OUTGOING_CALLS',
                'READ_CALL_LOG',
                'WRITE_CALL_LOG'
            ],
            SENSORS: ['BODY_SENSORS'],
            SMS: [
                'SEND_SMS',
                'RECEIVE_SMS',
                'READ_SMS',
                'RECEIVE_WAP_PUSH',
                'RECEIVE_MMS'
            ],
            STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
        };
        _this.locationMode = {
            HIGH_ACCURACY: 'high_accuracy',
            DEVICE_ONLY: 'device_only',
            BATTERY_SAVING: 'battery_saving',
            LOCATION_OFF: 'location_off'
        };
        _this.bluetoothState = {
            UNKNOWN: 'unknown',
            RESETTING: 'resetting',
            // iOS
            UNSUPPORTED: 'unsupported',
            // iOS
            UNAUTHORIZED: 'unauthorized',
            // iOS
            POWERED_OFF: 'powered_off',
            POWERED_ON: 'powered_on',
            POWERING_OFF: 'powering_off',
            POWERING_ON: 'powering_on'
        };
        return _this;
    }
    /**
     * Checks if app is able to access device location.
     * @returns {Promise<any>}
     */
    /**
       * Checks if app is able to access device location.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isLocationAvailable = /**
       * Checks if app is able to access device location.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
     * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
     * @returns {Promise<any>}
     */
    /**
       * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
       * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isWifiAvailable = /**
       * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
       * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
     * application is authorized to use it.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    /**
       * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
       * application is authorized to use it.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isCameraAvailable = /**
       * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
       * application is authorized to use it.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    function (externalStorage) {
        return;
    };
    /**
     * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
     * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
     * @returns {Promise<any>}
     */
    /**
       * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
       * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isBluetoothAvailable = /**
       * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
       * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Displays the device location settings to allow user to enable location services/change location mode.
     */
    /**
       * Displays the device location settings to allow user to enable location services/change location mode.
       */
    Diagnostic.prototype.switchToLocationSettings = /**
       * Displays the device location settings to allow user to enable location services/change location mode.
       */
    function () { };
    /**
     * Displays mobile settings to allow user to enable mobile data.
     */
    /**
       * Displays mobile settings to allow user to enable mobile data.
       */
    Diagnostic.prototype.switchToMobileDataSettings = /**
       * Displays mobile settings to allow user to enable mobile data.
       */
    function () { };
    /**
     * Displays Bluetooth settings to allow user to enable Bluetooth.
     */
    /**
       * Displays Bluetooth settings to allow user to enable Bluetooth.
       */
    Diagnostic.prototype.switchToBluetoothSettings = /**
       * Displays Bluetooth settings to allow user to enable Bluetooth.
       */
    function () { };
    /**
     * Displays WiFi settings to allow user to enable WiFi.
     */
    /**
       * Displays WiFi settings to allow user to enable WiFi.
       */
    Diagnostic.prototype.switchToWifiSettings = /**
       * Displays WiFi settings to allow user to enable WiFi.
       */
    function () { };
    /**
     * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
     * @returns {Promise<boolean>}
     */
    /**
       * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isWifiEnabled = /**
       * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Enables/disables WiFi on the device.
     * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
     * @param {boolean} state
     * @returns {Promise<any>}
     */
    /**
       * Enables/disables WiFi on the device.
       * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
       * @param {boolean} state
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.setWifiState = /**
       * Enables/disables WiFi on the device.
       * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
       * @param {boolean} state
       * @returns {Promise<any>}
       */
    function (state) {
        return;
    };
    /**
     * Enables/disables Bluetooth on the device.
     * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
     * @param {boolean} state
     * @returns {Promise<any>}
     */
    /**
       * Enables/disables Bluetooth on the device.
       * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
       * @param {boolean} state
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.setBluetoothState = /**
       * Enables/disables Bluetooth on the device.
       * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
       * @param {boolean} state
       * @returns {Promise<any>}
       */
    function (state) {
        return;
    };
    // ANDROID AND IOS ONLY
    /**
     * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
     * @returns {Promise<boolean>}
     */
    // ANDROID AND IOS ONLY
    /**
       * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isLocationEnabled = 
    // ANDROID AND IOS ONLY
    /**
       * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use location.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    /**
       * Checks if the application is authorized to use location.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isLocationAuthorized = /**
       * Checks if the application is authorized to use location.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the location authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the location authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getLocationAuthorizationStatus = /**
       * Returns the location authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the location authorization status for the application.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     *
     * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
     * @returns {Promise<any>}
     */
    /**
       * Returns the location authorization status for the application.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       *
       * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestLocationAuthorization = /**
       * Returns the location authorization status for the application.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       *
       * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
       * @returns {Promise<any>}
       */
    function (mode) {
        return;
    };
    /**
     * Checks if camera hardware is present on device.
     * @returns {Promise<any>}
     */
    /**
       * Checks if camera hardware is present on device.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isCameraPresent = /**
       * Checks if camera hardware is present on device.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use the camera.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    /**
       * Checks if the application is authorized to use the camera.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isCameraAuthorized = /**
       * Checks if the application is authorized to use the camera.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    function (externalStorage) {
        return;
    };
    /**
     * Returns the camera authorization status for the application.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    /**
       * Returns the camera authorization status for the application.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getCameraAuthorizationStatus = /**
       * Returns the camera authorization status for the application.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    function (externalStorage) {
        return;
    };
    /**
     * Requests camera authorization for the application.
     * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    /**
       * Requests camera authorization for the application.
       * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestCameraAuthorization = /**
       * Requests camera authorization for the application.
       * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    function (externalStorage) {
        return;
    };
    /**
     * Checks if the application is authorized to use the microphone.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use the microphone.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isMicrophoneAuthorized = /**
       * Checks if the application is authorized to use the microphone.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the microphone authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the microphone authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getMicrophoneAuthorizationStatus = /**
       * Returns the microphone authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests microphone authorization for the application.
     * @returns {Promise<any>}
     */
    /**
       * Requests microphone authorization for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestMicrophoneAuthorization = /**
       * Requests microphone authorization for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use contacts (address book).
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use contacts (address book).
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isContactsAuthorized = /**
       * Checks if the application is authorized to use contacts (address book).
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the contacts authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the contacts authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getContactsAuthorizationStatus = /**
       * Returns the contacts authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests contacts authorization for the application.
     * @returns {Promise<any>}
     */
    /**
       * Requests contacts authorization for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestContactsAuthorization = /**
       * Requests contacts authorization for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use the calendar.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use the calendar.
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
       *
       * Notes for iOS:
       *   - This relates to Calendar Events (not Calendar Reminders)
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isCalendarAuthorized = /**
       * Checks if the application is authorized to use the calendar.
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
       *
       * Notes for iOS:
       *   - This relates to Calendar Events (not Calendar Reminders)
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the calendar authorization status for the application.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * @returns {Promise<any>}
     */
    /**
       * Returns the calendar authorization status for the application.
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
       *
       * Notes for iOS:
       *   - This relates to Calendar Events (not Calendar Reminders)
       *
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getCalendarAuthorizationStatus = /**
       * Returns the calendar authorization status for the application.
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
       *
       * Notes for iOS:
       *   - This relates to Calendar Events (not Calendar Reminders)
       *
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests calendar authorization for the application.
     *
     * Notes for iOS:
     *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     *   - This requests permission for `READ_CALENDAR` run-time permission
     *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
     *
     * @returns {Promise<any>}
     */
    /**
       * Requests calendar authorization for the application.
       *
       * Notes for iOS:
       *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
       *   - This relates to Calendar Events (not Calendar Reminders)
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
       *   - This requests permission for `READ_CALENDAR` run-time permission
       *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
       *
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestCalendarAuthorization = /**
       * Requests calendar authorization for the application.
       *
       * Notes for iOS:
       *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
       *   - This relates to Calendar Events (not Calendar Reminders)
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
       *   - This requests permission for `READ_CALENDAR` run-time permission
       *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
       *
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Opens settings page for this app.
     * On Android, this opens the "App Info" page in the Settings app.
     * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
     * @returns {Promise<any>}
     */
    /**
       * Opens settings page for this app.
       * On Android, this opens the "App Info" page in the Settings app.
       * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.switchToSettings = /**
       * Opens settings page for this app.
       * On Android, this opens the "App Info" page in the Settings app.
       * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the state of Bluetooth on the device.
     * @returns {Promise<any>}
     */
    /**
       * Returns the state of Bluetooth on the device.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getBluetoothState = /**
       * Returns the state of Bluetooth on the device.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Registers a function to be called when a change in Bluetooth state occurs.
     * @param {Function} handler
     */
    /**
       * Registers a function to be called when a change in Bluetooth state occurs.
       * @param {Function} handler
       */
    Diagnostic.prototype.registerBluetoothStateChangeHandler = /**
       * Registers a function to be called when a change in Bluetooth state occurs.
       * @param {Function} handler
       */
    function (handler) { };
    /**
     * Registers a function to be called when a change in Location state occurs.
     * @param {Function} handler
     */
    /**
       * Registers a function to be called when a change in Location state occurs.
       * @param {Function} handler
       */
    Diagnostic.prototype.registerLocationStateChangeHandler = /**
       * Registers a function to be called when a change in Location state occurs.
       * @param {Function} handler
       */
    function (handler) { };
    // ANDROID ONLY
    /**
     * Checks if high-accuracy locations are available to the app from GPS hardware.
     * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorized to use location.
     * @returns {Promise<boolean>}
     */
    // ANDROID ONLY
    /**
       * Checks if high-accuracy locations are available to the app from GPS hardware.
       * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorized to use location.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isGpsLocationAvailable = 
    // ANDROID ONLY
    /**
       * Checks if high-accuracy locations are available to the app from GPS hardware.
       * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorized to use location.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if location mode is set to return high-accuracy locations from GPS hardware.
     *   Returns true if Location mode is enabled and is set to either:
     *   - Device only = GPS hardware only (high accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    /**
       * Checks if location mode is set to return high-accuracy locations from GPS hardware.
       *   Returns true if Location mode is enabled and is set to either:
       *   - Device only = GPS hardware only (high accuracy)
       *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isGpsLocationEnabled = /**
       * Checks if location mode is set to return high-accuracy locations from GPS hardware.
       *   Returns true if Location mode is enabled and is set to either:
       *   - Device only = GPS hardware only (high accuracy)
       *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorized to use location.
     * @returns {Promise<any>}
     */
    /**
       * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
       * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorized to use location.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isNetworkLocationAvailable = /**
       * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
       * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorized to use location.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to either:
     *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    /**
       * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
       * Returns true if Location mode is enabled and is set to either:
       *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
       *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isNetworkLocationEnabled = /**
       * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
       * Returns true if Location mode is enabled and is set to either:
       *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
       *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the current location mode setting for the device.
     * @returns {Promise<any>}
     */
    /**
       * Returns the current location mode setting for the device.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getLocationMode = /**
       * Returns the current location mode setting for the device.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the current authorization status for a given permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    /**
       * Returns the current authorization status for a given permission.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param permission
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getPermissionAuthorizationStatus = /**
       * Returns the current authorization status for a given permission.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param permission
       * @returns {Promise<any>}
       */
    function (permission) {
        return;
    };
    /**
     * Returns the current authorization status for multiple permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param {any[]} permissions
     * @returns {Promise<any>}
     */
    /**
       * Returns the current authorization status for multiple permissions.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param {any[]} permissions
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getPermissionsAuthorizationStatus = /**
       * Returns the current authorization status for multiple permissions.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param {any[]} permissions
       * @returns {Promise<any>}
       */
    function (permissions) {
        return;
    };
    /**
     * Requests app to be granted authorization for a runtime permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    /**
       * Requests app to be granted authorization for a runtime permission.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
       * @param permission
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestRuntimePermission = /**
       * Requests app to be granted authorization for a runtime permission.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
       * @param permission
       * @returns {Promise<any>}
       */
    function (permission) {
        return;
    };
    /**
     * Requests app to be granted authorization for multiple runtime permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param {any[]} permissions
     * @returns {Promise<any>}
     */
    /**
       * Requests app to be granted authorization for multiple runtime permissions.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param {any[]} permissions
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestRuntimePermissions = /**
       * Requests app to be granted authorization for multiple runtime permissions.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param {any[]} permissions
       * @returns {Promise<any>}
       */
    function (permissions) {
        return;
    };
    /**
     * Indicates if the plugin is currently requesting a runtime permission via the native API.
     * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
     * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
     * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
     * @returns {boolean}
     */
    /**
       * Indicates if the plugin is currently requesting a runtime permission via the native API.
       * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
       * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
       * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
       * @returns {boolean}
       */
    Diagnostic.prototype.isRequestingPermission = /**
       * Indicates if the plugin is currently requesting a runtime permission via the native API.
       * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
       * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
       * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
       * @returns {boolean}
       */
    function () {
        return;
    };
    /**
     * Registers a function to be called when a runtime permission request has completed.
     * Pass in a falsy value to de-register the currently registered function.
     * @param {Function} handler
     */
    /**
       * Registers a function to be called when a runtime permission request has completed.
       * Pass in a falsy value to de-register the currently registered function.
       * @param {Function} handler
       */
    Diagnostic.prototype.registerPermissionRequestCompleteHandler = /**
       * Registers a function to be called when a runtime permission request has completed.
       * Pass in a falsy value to de-register the currently registered function.
       * @param {Function} handler
       */
    function (handler) {
        return;
    };
    /**
     * Checks if the device setting for Bluetooth is switched on.
     * This requires `BLUETOOTH` permission on Android
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device setting for Bluetooth is switched on.
       * This requires `BLUETOOTH` permission on Android
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isBluetoothEnabled = /**
       * Checks if the device setting for Bluetooth is switched on.
       * This requires `BLUETOOTH` permission on Android
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device has Bluetooth capabilities.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device has Bluetooth capabilities.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.hasBluetoothSupport = /**
       * Checks if the device has Bluetooth capabilities.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device has Bluetooth Low Energy (LE) capabilities.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device has Bluetooth Low Energy (LE) capabilities.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.hasBluetoothLESupport = /**
       * Checks if the device has Bluetooth Low Energy (LE) capabilities.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.hasBluetoothLEPeripheralSupport = /**
       * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use external storage.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use external storage.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isExternalStorageAuthorized = /**
       * Checks if the application is authorized to use external storage.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * CReturns the external storage authorization status for the application.
     * @returns {Promise<boolean>}
     */
    /**
       * CReturns the external storage authorization status for the application.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.getExternalStorageAuthorizationStatus = /**
       * CReturns the external storage authorization status for the application.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Requests external storage authorization for the application.
     * @returns {Promise<any>}
     */
    /**
       * Requests external storage authorization for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestExternalStorageAuthorization = /**
       * Requests external storage authorization for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns details of external SD card(s): absolute path, is writable, free space.
     *
     * The intention of this method is to return the location and details of removable external SD cards.
     * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
     *
     * @returns {Promise<any>}
     */
    /**
       * Returns details of external SD card(s): absolute path, is writable, free space.
       *
       * The intention of this method is to return the location and details of removable external SD cards.
       * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
       *
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getExternalSdCardDetails = /**
       * Returns details of external SD card(s): absolute path, is writable, free space.
       *
       * The intention of this method is to return the location and details of removable external SD cards.
       * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
       *
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
     */
    /**
       * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
       */
    Diagnostic.prototype.switchToWirelessSettings = /**
       * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
       */
    function () { };
    /**
     * Displays NFC settings to allow user to enable NFC.
     */
    /**
       * Displays NFC settings to allow user to enable NFC.
       */
    Diagnostic.prototype.switchToNFCSettings = /**
       * Displays NFC settings to allow user to enable NFC.
       */
    function () { };
    /**
     * Checks if NFC hardware is present on device.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if NFC hardware is present on device.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isNFCPresent = /**
       * Checks if NFC hardware is present on device.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device setting for NFC is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device setting for NFC is switched on.
       * Note: this operation does not require NFC permission in the manifest.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isNFCEnabled = /**
       * Checks if the device setting for NFC is switched on.
       * Note: this operation does not require NFC permission in the manifest.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<any>}
     */
    /**
       * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
       * Note: this operation does not require NFC permission in the manifest.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isNFCAvailable = /**
       * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
       * Note: this operation does not require NFC permission in the manifest.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Registers a function to be called when a change in NFC state occurs. Pass in a falsy value to de-register the currently registered function.
     * @param {Function} hander callback function to be called when NFC state changes
     * @returns {Promise<any>}
     */
    /**
       * Registers a function to be called when a change in NFC state occurs. Pass in a falsy value to de-register the currently registered function.
       * @param {Function} hander callback function to be called when NFC state changes
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.registerNFCStateChangeHandler = /**
       * Registers a function to be called when a change in NFC state occurs. Pass in a falsy value to de-register the currently registered function.
       * @param {Function} hander callback function to be called when NFC state changes
       * @returns {Promise<any>}
       */
    function (handler) { };
    /**
     * Checks if the device data roaming setting is enabled.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device data roaming setting is enabled.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isDataRoamingEnabled = /**
       * Checks if the device data roaming setting is enabled.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device setting for ADB(debug) is switched on.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device setting for ADB(debug) is switched on.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isADBModeEnabled = /**
       * Checks if the device setting for ADB(debug) is switched on.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device is rooted.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device is rooted.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isDeviceRooted = /**
       * Checks if the device is rooted.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    // IOS ONLY
    /**
     * Checks if the application is authorized to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    // IOS ONLY
    /**
       * Checks if the application is authorized to use the Camera Roll in Photos app.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isCameraRollAuthorized = 
    // IOS ONLY
    /**
       * Checks if the application is authorized to use the Camera Roll in Photos app.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the authorization status for the application to use the Camera Roll in Photos app.
     * @returns {Promise<string>}
     */
    /**
       * Returns the authorization status for the application to use the Camera Roll in Photos app.
       * @returns {Promise<string>}
       */
    Diagnostic.prototype.getCameraRollAuthorizationStatus = /**
       * Returns the authorization status for the application to use the Camera Roll in Photos app.
       * @returns {Promise<string>}
       */
    function () {
        return;
    };
    /**
     * Requests camera roll authorization for the application.
     * Should only be called if authorization status is NOT_REQUESTED.
     * Calling it when in any other state will have no effect.
     * @returns {Promise<any>}
     */
    /**
       * Requests camera roll authorization for the application.
       * Should only be called if authorization status is NOT_REQUESTED.
       * Calling it when in any other state will have no effect.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestCameraRollAuthorization = /**
       * Requests camera roll authorization for the application.
       * Should only be called if authorization status is NOT_REQUESTED.
       * Calling it when in any other state will have no effect.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if remote (push) notifications are enabled.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if remote (push) notifications are enabled.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isRemoteNotificationsEnabled = /**
       * Checks if remote (push) notifications are enabled.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Indicates if the app is registered for remote (push) notifications on the device.
     * @returns {Promise<boolean>}
     */
    /**
       * Indicates if the app is registered for remote (push) notifications on the device.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isRegisteredForRemoteNotifications = /**
       * Indicates if the app is registered for remote (push) notifications on the device.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the authorization status for the application to use Remote Notifications.
     * Note: Works on iOS 10+ only (iOS 9 and below will invoke the error callback).
     * @returns {Promise<string>}
     */
    /**
       * Returns the authorization status for the application to use Remote Notifications.
       * Note: Works on iOS 10+ only (iOS 9 and below will invoke the error callback).
       * @returns {Promise<string>}
       */
    Diagnostic.prototype.getRemoteNotificationsAuthorizationStatus = /**
       * Returns the authorization status for the application to use Remote Notifications.
       * Note: Works on iOS 10+ only (iOS 9 and below will invoke the error callback).
       * @returns {Promise<string>}
       */
    function () {
        return;
    };
    /**
     * Indicates the current setting of notification types for the app in the Settings app.
     * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
     * @returns {Promise<any>}
     */
    /**
       * Indicates the current setting of notification types for the app in the Settings app.
       * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getRemoteNotificationTypes = /**
       * Indicates the current setting of notification types for the app in the Settings app.
       * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use reminders.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use reminders.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isRemindersAuthorized = /**
       * Checks if the application is authorized to use reminders.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the reminders authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the reminders authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getRemindersAuthorizationStatus = /**
       * Returns the reminders authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests reminders authorization for the application.
     * @returns {Promise<any>}
     */
    /**
       * Requests reminders authorization for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestRemindersAuthorization = /**
       * Requests reminders authorization for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized for background refresh.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized for background refresh.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isBackgroundRefreshAuthorized = /**
       * Checks if the application is authorized for background refresh.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the background refresh authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the background refresh authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getBackgroundRefreshStatus = /**
       * Returns the background refresh authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests Bluetooth authorization for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
     * @return {Promise<any>}
     */
    /**
       * Requests Bluetooth authorization for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
       * @return {Promise<any>}
       */
    Diagnostic.prototype.requestBluetoothAuthorization = /**
       * Requests Bluetooth authorization for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if motion tracking is available on the current device.
     * @return {Promise<boolean>}
     */
    /**
       * Checks if motion tracking is available on the current device.
       * @return {Promise<boolean>}
       */
    Diagnostic.prototype.isMotionAvailable = /**
       * Checks if motion tracking is available on the current device.
       * @return {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
     * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
     * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
     *
     * @return {Promise<boolean>}
     */
    /**
       * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
       * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
       * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
       *
       * @return {Promise<boolean>}
       */
    Diagnostic.prototype.isMotionRequestOutcomeAvailable = /**
       * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
       * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
       * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
       *
       * @return {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Requests motion tracking authorization for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestmotionauthorization)
     *
     * @return {Promise<string>}
     */
    /**
       * Requests motion tracking authorization for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestmotionauthorization)
       *
       * @return {Promise<string>}
       */
    Diagnostic.prototype.requestMotionAuthorization = /**
       * Requests motion tracking authorization for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestmotionauthorization)
       *
       * @return {Promise<string>}
       */
    function () {
        return;
    };
    /**
     * Checks motion authorization status for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getmotionauthorizationstatus)
     *
     * @return {Promise<string>}
     */
    /**
       * Checks motion authorization status for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getmotionauthorizationstatus)
       *
       * @return {Promise<string>}
       */
    Diagnostic.prototype.getMotionAuthorizationStatus = /**
       * Checks motion authorization status for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getmotionauthorizationstatus)
       *
       * @return {Promise<string>}
       */
    function () {
        return;
    };
    Diagnostic.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", Object)
    ], Diagnostic.prototype, "permissionStatus", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", Object)
    ], Diagnostic.prototype, "NFCState", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", Object)
    ], Diagnostic.prototype, "motionStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isLocationAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isWifiAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCameraAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isBluetoothAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToLocationSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToMobileDataSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToBluetoothSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToWifiSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isWifiEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "setWifiState", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "setBluetoothState", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isLocationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isLocationAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getLocationAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestLocationAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCameraPresent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCameraAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getCameraAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestCameraAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isMicrophoneAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getMicrophoneAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestMicrophoneAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isContactsAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getContactsAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestContactsAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCalendarAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getCalendarAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestCalendarAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "switchToSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getBluetoothState", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "registerBluetoothStateChangeHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "registerLocationStateChangeHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isGpsLocationAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isGpsLocationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNetworkLocationAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNetworkLocationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getLocationMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getPermissionAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getPermissionsAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestRuntimePermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestRuntimePermissions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Diagnostic.prototype, "isRequestingPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "registerPermissionRequestCompleteHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isBluetoothEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "hasBluetoothSupport", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "hasBluetoothLESupport", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "hasBluetoothLEPeripheralSupport", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isExternalStorageAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getExternalStorageAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestExternalStorageAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getExternalSdCardDetails", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android'],
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToWirelessSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android'],
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToNFCSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNFCPresent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNFCEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNFCAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android'],
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "registerNFCStateChangeHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isDataRoamingEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isADBModeEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isDeviceRooted", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCameraRollAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getCameraRollAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestCameraRollAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS', 'Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isRemoteNotificationsEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isRegisteredForRemoteNotifications", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getRemoteNotificationsAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getRemoteNotificationTypes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isRemindersAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getRemindersAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestRemindersAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isBackgroundRefreshAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getBackgroundRefreshStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestBluetoothAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isMotionAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isMotionRequestOutcomeAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestMotionAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getMotionAuthorizationStatus", null);
    /**
     * @name Diagnostic
     * @description
     * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
     *
     * @usage
     * ```typescript
     * import { Diagnostic } from '@ionic-native/diagnostic';
     *
     * constructor(private diagnostic: Diagnostic) { }
     *
     * ...
     *
     * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
     * let errorCallback = (e) => console.error(e);
     *
     * this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
     *
     * this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
     *
     *
     * this.diagnostic.getBluetoothState()
     *   .then((state) => {
     *     if (state == this.diagnostic.bluetoothState.POWERED_ON){
     *       // do something
     *     } else {
     *       // do something else
     *     }
     *   }).catch(e => console.error(e));
     *
     * ```
     *
     */
    Diagnostic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'Diagnostic',
            plugin: 'cordova.plugins.diagnostic',
            pluginRef: 'cordova.plugins.diagnostic',
            repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], Diagnostic);
    return Diagnostic;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=4.js.map