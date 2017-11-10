webpackJsonp([1],{

/***/ 132:
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1>\n\n<div class=\"dashboard-container\">\n\n    <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z2\">\n        <ng-container cdkColumnDef=\"email\">\n            <mat-header-cell *cdkHeaderCellDef> Email </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{ row.email }} </mat-cell>\n        </ng-container>\n\n        <ng-container cdkColumnDef=\"givenName\">\n            <mat-header-cell *cdkHeaderCellDef> Given name </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{ row.givenName }} </mat-cell>\n        </ng-container>\n\n        <ng-container cdkColumnDef=\"familyName\">\n            <mat-header-cell *cdkHeaderCellDef> Family name </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{ row.familyName }} </mat-cell>\n        </ng-container>\n\n        <ng-container cdkColumnDef=\"actions\">\n            <mat-header-cell *cdkHeaderCellDef> </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> <button mat-icon-button color=\"warn\" (click)=\"delete(row.userName)\"><mat-icon>delete</mat-icon></button> </mat-cell>\n        </ng-container>\n\n        <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n</div>"

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports = ".dashboard-container {\n  display: flex;\n  flex-direction: column; }\n  .dashboard-container .mat-table {\n    overflow: hidden; }\n"

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@angular/router/esm5/router.js + 6 modules
var router = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@angular/cdk/esm5/collections.es5.js
var collections_es5 = __webpack_require__(19);

// EXTERNAL MODULE: ./app/services/identity.service.ts
var identity_service = __webpack_require__(97);

// CONCATENATED MODULE: ./app/dashboard/dashboard.component.ts
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



var dashboard_component_DashboardComponent = (function () {
    function DashboardComponent(identityService) {
        this.identityService = identityService;
        this.displayedColumns = ['email', 'givenName', 'familyName', 'actions'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.identityService.getAll();
        this.dataSource = new UsersDataSource(this.identityService);
    };
    DashboardComponent.prototype.delete = function (username) {
        this.identityService.delete(username);
    };
    DashboardComponent = __decorate([
        Object(core["Component"])({
            template: __webpack_require__(132),
            styles: [__webpack_require__(133)]
        }),
        __metadata("design:paramtypes", [identity_service["a" /* IdentityService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var UsersDataSource = (function (_super) {
    __extends(UsersDataSource, _super);
    function UsersDataSource(identityService) {
        var _this = _super.call(this) || this;
        _this.identityService = identityService;
        return _this;
    }
    UsersDataSource.prototype.connect = function () {
        return this.identityService.users;
    };
    UsersDataSource.prototype.disconnect = function () {
    };
    return UsersDataSource;
}(collections_es5["a" /* DataSource */]));


// EXTERNAL MODULE: ./app/services/auth.guard.ts
var auth_guard = __webpack_require__(98);

// CONCATENATED MODULE: ./app/dashboard/dashboard-routing.module.ts
var dashboard_routing_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: dashboard_component_DashboardComponent, pathMatch: 'full', canActivate: [auth_guard["a" /* AuthGuard */]] }
];
var dashboard_routing_module_DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = dashboard_routing_module___decorate([
        Object(core["NgModule"])({
            imports: [router["c" /* RouterModule */].forChild(routes)],
            exports: [router["c" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());


// EXTERNAL MODULE: ./app/shared/shared.module.ts + 58 modules
var shared_module = __webpack_require__(96);

// CONCATENATED MODULE: ./app/dashboard/dashboard.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return dashboard_module_DashboardModule; });
var dashboard_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var dashboard_module_DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = dashboard_module___decorate([
        Object(core["NgModule"])({
            imports: [
                dashboard_routing_module_DashboardRoutingModule,
                shared_module["a" /* SharedModule */]
            ],
            declarations: [
                dashboard_component_DashboardComponent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=1.chunk.js.map