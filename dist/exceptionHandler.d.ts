import { ExceptionHandler } from 'angular2/core';
export declare class SentryExceptionHandler extends ExceptionHandler {
    private _config;
    constructor(_config: any);
    setUserContext(data?: any): void;
    setExtraContext(data?: any): void;
    wrap(fn: Function, context?: any): Function;
    call(exception: any, stackTrace?: any, reason?: string): void;
}
