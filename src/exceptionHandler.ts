import {Injectable, ExceptionHandler} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {IS_DART} from 'angular2/src/facade/lang';
import Raven from 'raven-js';

@Injectable()
export class SentryExceptionHandler extends ExceptionHandler {

  constructor (private _config) {
    super(DOM , ! IS_DART);
    Raven.config(_config.dsn , _config.options).install();
  }

  setUserContext(data?: any) {
    Raven.setUserContext(data);
  }

  setExtraContext(data?: any) {
    Raven.setExtraContext(data);
  }

  wrap(fn: Function, context?:any): Function {
    return Raven.wrap(context, fn);
  }

  call (exception: any , stackTrace?: any , reason?: string) {

    Raven.captureException(exception);
    console.log(exception , stackTrace , reason);

  }
}
