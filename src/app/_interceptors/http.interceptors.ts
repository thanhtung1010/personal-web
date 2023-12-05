import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '@environments/environment';
import { Observable } from 'rxjs';
import { filter, tap, timeout } from 'rxjs/operators';

@Injectable()
export class HttpLogInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    return next
      .handle(req)
      .pipe(
        timeout(enviroment.TIME_OUT_MS),
        filter(e => e.type !== 0),
        tap({
          next: (response: any) => {
            if (response instanceof HttpErrorResponse) {
              // console.log('=== [ERR RESPONSE] === \n ', response);
              // console.log('=== [ERR REQUESTS] :: FROM ' + req.url);

              // CHECK STATUS FROM SERVER
              if (response.status === 401) {
                /**
                 * Navigate to the un-authorize routing
                 */
              }
            }
          },
          error: (error: any) => {
            console.error(error, error['status']);
            if (error && error.status > 500) {
              // this.commonService.showSystemError('SYS_MSG.SOMETHING_WRONG');
              return error;
            }
            if (error['status'] === 401) {
            }
          },
        }),
      );
  }
}
