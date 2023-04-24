import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Dentro de interceptor')
    const authToken = this.authService.getAuthToken();
    if(authToken){
      console.log('si logeado')
      const authReq = request.clone({
        headers: request.headers.set('Authorization',`Bearer ${authToken}`)
      })
      return next.handle(authReq);
    }
    console.log('no logeado')
    return next.handle(request);
  }
}
