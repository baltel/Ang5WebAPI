webpackJsonp([2],{

/***/ 128:
/***/ (function(module, exports) {

module.exports = "<div class=\"account-card-container\">\n\n    <mat-card>\n        <mat-toolbar color=\"primary\">Sign in</mat-toolbar>\n        <mat-card-content>\n            <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && signin()\" novalidate>\n                <div>\n                    <br />\n                    <br />\n                    <mat-form-field class=\"full-width\">\n                        <input type=\"text\" matInput [(ngModel)]=\"model.username\" name=\"username\" #username=\"ngModel\" placeholder=\"email\" (keyup)=\"clearMessages()\" required>\n                        <mat-error>\n                            Required\n                        </mat-error>\n                    </mat-form-field>\n                    <br />\n                    <br />\n                    <mat-form-field class=\"full-width\">\n                        <input type=\"password\" matInput [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\" placeholder=\"password\" (keyup)=\"clearMessages()\" required>\n                        <mat-error>\n                            Required\n                        </mat-error>\n                    </mat-form-field>\n                    <br />\n                    <div *ngIf=\"errorMessages.length > 0\" class=\"has-error\">\n                        <div *ngFor=\"let errorMessage of errorMessages\">\n                            <small>{{ errorMessage.description }}</small>\n                        </div>\n                    </div>\n                    <br />\n                </div>\n                <div>\n                    <button mat-raised-button color=\"accent\" type=\"submit\" class=\"full-width\">Sign in</button>\n                </div>\n            </form>\n        </mat-card-content>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports = "<div class=\"account-card-container\">\n\n    <mat-card>\n        <mat-toolbar color=\"primary\">Sign up</mat-toolbar>\n        <mat-card-content>\n            <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && signup()\" novalidate>\n                <div>\n                    <br />\n                    <br />\n                    <mat-form-field class=\"full-width\">\n                        <input type=\"text\" matInput [(ngModel)]=\"model.givenName\" name=\"givenName\" #givenName=\"ngModel\" placeholder=\"first name\" (keyup)=\"clearMessages()\" required>\n                        <mat-error>\n                            Required\n                        </mat-error>\n                    </mat-form-field>\n                    <br />\n                    <br />\n                    <mat-form-field class=\"full-width\">\n                        <input type=\"text\" matInput [(ngModel)]=\"model.familyName\" name=\"familyName\" #familyName=\"ngModel\" placeholder=\"last name\" (keyup)=\"clearMessages()\" required>\n                        <mat-error>\n                            Required\n                        </mat-error>\n                    </mat-form-field>\n                    <br />\n                    <br />\n                    <mat-form-field class=\"full-width\">\n                        <input type=\"text\" matInput [(ngModel)]=\"model.username\" name=\"username\" #username=\"ngModel\" placeholder=\"email\" (keyup)=\"clearMessages()\"\n                               pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\" required>\n                        <mat-error *ngIf=\"username.hasError('required')\">\n                            Required\n                        </mat-error>\n                        <mat-error *ngIf=\"username.hasError('pattern')\">\n                            Invalid format\n                        </mat-error>\n                    </mat-form-field>\n                    <br />\n                    <br />\n                    <mat-form-field class=\"full-width\">\n                        <input type=\"password\" matInput [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\" placeholder=\"password\" (keyup)=\"clearMessages()\" required>\n                        <mat-error>\n                            Required\n                        </mat-error>\n                    </mat-form-field>\n                    <br />\n                    <div *ngIf=\"errorMessages.length > 0\" class=\"has-error\">\n                        <div *ngFor=\"let errorMessage of errorMessages\">\n                            <small>{{ errorMessage.description }}</small>\n                        </div>\n                    </div>\n                    <br />\n                </div>\n                <div>\n                    <button mat-raised-button color=\"accent\" type=\"submit\" class=\"full-width\">Sign up</button>\n                </div>\n            </form>\n        </mat-card-content>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@angular/router/esm5/router.js + 6 modules
var router = __webpack_require__(27);

// EXTERNAL MODULE: ./app/services/authentication.service.ts + 4 modules
var authentication_service = __webpack_require__(36);

// CONCATENATED MODULE: ./app/account/signin.ts
var Signin = (function () {
    function Signin(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.errorMessages = [];
    }
    Signin.prototype.signin = function () {
        var _this = this;
        this.authenticationService.signin(this.model.username, this.model.password)
            .subscribe(function () {
            _this.authenticationService.scheduleRefresh();
            _this.authenticationService.getUserInfo().subscribe(function (userInfo) {
                _this.authenticationService.changeUser(userInfo);
                var redirect = _this.authenticationService.redirectUrl
                    ? _this.authenticationService.redirectUrl
                    : '/home';
                _this.router.navigate([redirect]);
            });
        }, function (error) {
            if (error.body != "") {
                var body = error.json();
                switch (body.error) {
                    case "invalid_grant":
                        _this.errorMessages.push({ description: "Invalid email or password." });
                        break;
                    default:
                        _this.errorMessages.push({ description: "Unexpected error. Try again." });
                }
            }
            else {
                var errMsg = (error.message) ? error.message :
                    error.status ? error.status + " - " + error.statusText : "Server error";
                console.log(errMsg);
                _this.errorMessages.push({ description: "Server error. Try later." });
            }
        });
    };
    Signin.prototype.clearMessages = function () {
        this.errorMessages = [];
    };
    return Signin;
}());


// CONCATENATED MODULE: ./app/account/signin/signin.component.ts
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




var signin_component_SigninComponent = (function (_super) {
    __extends(SigninComponent, _super);
    function SigninComponent(router, authenticationService) {
        var _this = _super.call(this, router, authenticationService) || this;
        _this.router = router;
        _this.authenticationService = authenticationService;
        _this.model.username = "admin@gmail.com";
        _this.model.password = "Admin01*";
        return _this;
    }
    SigninComponent = __decorate([
        Object(core["Component"])({
            template: __webpack_require__(128)
        }),
        __metadata("design:paramtypes", [router["b" /* Router */],
            authentication_service["a" /* AuthenticationService */]])
    ], SigninComponent);
    return SigninComponent;
}(Signin));


// EXTERNAL MODULE: ./app/services/identity.service.ts
var identity_service = __webpack_require__(97);

// CONCATENATED MODULE: ./app/account/signup/signup.component.ts
var signup_component___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var signup_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var signup_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var signup_component_SignupComponent = (function (_super) {
    signup_component___extends(SignupComponent, _super);
    function SignupComponent(router, authenticationService, identityService) {
        var _this = _super.call(this, router, authenticationService) || this;
        _this.router = router;
        _this.authenticationService = authenticationService;
        _this.identityService = identityService;
        return _this;
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.identityService.create(this.model)
            .subscribe(function (res) {
            if (res.succeeded) {
                _this.signin();
            }
            else {
                _this.errorMessages = res.errors;
            }
        }, function (error) {
            var errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : "Server error";
            console.log(errMsg);
            _this.errorMessages.push({ description: "Server error. Try later." });
        });
    };
    SignupComponent = signup_component___decorate([
        Object(core["Component"])({
            template: __webpack_require__(129)
        }),
        signup_component___metadata("design:paramtypes", [router["b" /* Router */],
            authentication_service["a" /* AuthenticationService */],
            identity_service["a" /* IdentityService */]])
    ], SignupComponent);
    return SignupComponent;
}(Signin));


// CONCATENATED MODULE: ./app/account/account-routing.module.ts
var account_routing_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'signin', component: signin_component_SigninComponent },
    { path: 'signup', component: signup_component_SignupComponent }
];
var account_routing_module_AccountRoutingModule = (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = account_routing_module___decorate([
        Object(core["NgModule"])({
            imports: [router["c" /* RouterModule */].forChild(routes)],
            exports: [router["c" /* RouterModule */]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());


// EXTERNAL MODULE: ./app/shared/shared.module.ts + 58 modules
var shared_module = __webpack_require__(96);

// CONCATENATED MODULE: ./app/account/account.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return account_module_AccountModule; });
var account_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var account_module_AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = account_module___decorate([
        Object(core["NgModule"])({
            imports: [
                account_routing_module_AccountRoutingModule,
                shared_module["a" /* SharedModule */]
            ],
            declarations: [
                signin_component_SigninComponent,
                signup_component_SignupComponent
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ })

});
//# sourceMappingURL=2.chunk.js.map