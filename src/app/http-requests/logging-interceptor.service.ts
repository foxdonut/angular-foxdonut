import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req.clone({
      headers: req.headers.append('My-Custom-Header', 'someValue')
    })).pipe(tap(console.log));
  }
}
