import {ExceptionHandler, Injectable, Inject} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {IS_DART} from 'angular2/src/facade/lang';
import RavenClient = RavenType.RavenClient;
import * as Raven from 'raven-js/src/raven.js';


@Injectable()
export class SentryExceptionHandler extends ExceptionHandler {

  private _RavenClient: RavenClient;

  constructor(@Inject('AppConfig') private _config) {
    super(DOM, !IS_DART);
  }

  call(exception: any, stackTrace?: any, reason?: string) {

    debugger;

  }
}
