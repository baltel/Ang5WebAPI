webpackJsonp([0],{

/***/ 130:
/***/ (function(module, exports) {

module.exports = "<h1>Web API values</h1>\n\n<div class=\"resources-card-container\">\n\n    <mat-card *ngFor=\"let value of values\">\n        <mat-card-content>\n            {{ value }}\n        </mat-card-content>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

module.exports = ".resources-card-container {\n  display: flex;\n  flex-direction: column; }\n  .resources-card-container mat-card {\n    margin: 8px 0 8px 0;\n    max-width: 400px; }\n"

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@angular/router/esm5/router.js + 6 modules
var router = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/angular2-jwt/angular2-jwt.js
var angular2_jwt = __webpack_require__(37);
var angular2_jwt_default = /*#__PURE__*/__webpack_require__.n(angular2_jwt);

// CONCATENATED MODULE: ./app/resources/resources.component.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var resources_component_ResourcesComponent = (function () {
    function ResourcesComponent(authHttp) {
        this.authHttp = authHttp;
    }
    ResourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authHttp.get("/api/values")
            .subscribe(function (res) {
            _this.values = res.json();
        }, function (error) {
            console.log(error);
        });
    };
    ResourcesComponent = __decorate([
        Object(core["Component"])({
            template: __webpack_require__(130),
            styles: [__webpack_require__(131)]
        }),
        __metadata("design:paramtypes", [angular2_jwt["AuthHttp"]])
    ], ResourcesComponent);
    return ResourcesComponent;
}());


// EXTERNAL MODULE: ./app/services/auth.guard.ts
var auth_guard = __webpack_require__(98);

// CONCATENATED MODULE: ./app/resources/resources-routing.module.ts
var resources_routing_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: resources_component_ResourcesComponent, pathMatch: 'full', canActivate: [auth_guard["a" /* AuthGuard */]] }
];
var resources_routing_module_ResourcesRoutingModule = (function () {
    function ResourcesRoutingModule() {
    }
    ResourcesRoutingModule = resources_routing_module___decorate([
        Object(core["NgModule"])({
            imports: [router["c" /* RouterModule */].forChild(routes)],
            exports: [router["c" /* RouterModule */]]
        })
    ], ResourcesRoutingModule);
    return ResourcesRoutingModule;
}());


// EXTERNAL MODULE: ./app/shared/shared.module.ts + 58 modules
var shared_module = __webpack_require__(96);

// CONCATENATED MODULE: ./app/resources/resources.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesModule", function() { return resources_module_ResourcesModule; });
var resources_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var resources_module_ResourcesModule = (function () {
    function ResourcesModule() {
    }
    ResourcesModule = resources_module___decorate([
        Object(core["NgModule"])({
            imports: [
                resources_routing_module_ResourcesRoutingModule,
                shared_module["a" /* SharedModule */]
            ],
            declarations: [
                resources_component_ResourcesComponent
            ]
        })
    ], ResourcesModule);
    return ResourcesModule;
}());



/***/ })

});
//# sourceMappingURL=0.chunk.js.map