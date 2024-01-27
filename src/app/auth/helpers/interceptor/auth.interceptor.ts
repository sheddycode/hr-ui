import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../../service/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var token: string = '';
    if (this.sessionService.getToken()) {
      token = 'Bearer ' + this.sessionService.getToken();
    }
    const authReq = req.clone({
      setHeaders: {
        'Authorization': token,
      },
    });
    return next.handle(authReq);
  }
}
