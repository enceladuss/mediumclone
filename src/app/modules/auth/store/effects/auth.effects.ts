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

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RegisterAction),
      switchMap(({request}) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.authService.setToken(currentUser.token);
            this.router.navigate(['']);
            return AuthActions.RegisterSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(AuthActions.RegisterErrorAction({errors: errorResponse.error.errors}))
          })
        )
      )
    ))
}
