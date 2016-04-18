"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var lang_1 = require('angular2/src/facade/lang');
var Raven = require('raven-js');
var SentryExceptionHandler = (function (_super) {
    __extends(SentryExceptionHandler, _super);
    function SentryExceptionHandler(_config) {
        _super.call(this, dom_adapter_1.DOM, !lang_1.IS_DART);
        this._config = _config;
        Raven.config(_config.dsn, _config.options).install();
    }
    SentryExceptionHandler.prototype.setUserContext = function (data) {
        Raven.setUserContext(data);
    };
    SentryExceptionHandler.prototype.setExtraContext = function (data) {
        Raven.setExtraContext(data);
    };
    SentryExceptionHandler.prototype.wrap = function (fn, context) {
        return Raven.wrap(context, fn);
    };
    SentryExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
        Raven.captureException(exception);
        console.log(exception, stackTrace, reason);
    };
    SentryExceptionHandler = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], SentryExceptionHandler);
    return SentryExceptionHandler;
}(core_1.ExceptionHandler));
exports.SentryExceptionHandler = SentryExceptionHandler;
//# sourceMappingURL=exceptionHandler.js.map