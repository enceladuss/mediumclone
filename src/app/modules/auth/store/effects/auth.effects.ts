import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthActions} from "../actions"
import {AuthService} from "../../services/auth.service";
import {catchError, map, of, switchMap} from "rxjs";
import {CurrentUserInterface} from "../../../../shared/models/currentUser.interface";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RegisterAction),
      switchMap(({request}) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.authService.setUserAccessToken(currentUser.token);
            this.router.navigate(['']);
            return AuthActions.RegisterSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(AuthActions.RegisterErrorAction({errors: errorResponse.error.errors}))
          })
        )
      )
    ))

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LoginAction),
      switchMap(({request}) =>
        this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.authService.setUserAccessToken(currentUser.token);
            this.router.navigate(['']);
            return AuthActions.LoginSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(AuthActions.LoginErrorAction({errors: errorResponse.error.errors}))
          })
        )
      )
    ))

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.GetCurrentUserAction),
      switchMap(() => {
          const token = this.authService.getUserAccessToken();
          if (!token) {
            return of(AuthActions.GetCurrentUserErrorAction())
          }
          return this.authService.getCurrentUser().pipe(
            map((currentUser: CurrentUserInterface) => {
              return AuthActions.GetCurrentUserSuccessAction({currentUser})
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(AuthActions.GetCurrentUserErrorAction())
            })
          )
        }
      )
    ))

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {
  }
}
