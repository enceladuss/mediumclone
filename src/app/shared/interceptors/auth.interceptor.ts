import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {AuthService} from "../../modules/auth/services/auth.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.accessToken) {
      request = this.addToken(request, this.authService.accessToken);
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/sign-in']);
          }
        }
        return throwError(err);
      })
    )
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<Object> {
    return request.clone({
      setHeaders: {
        Authorization: `Token ${token}`
      }
    });
  }
}
