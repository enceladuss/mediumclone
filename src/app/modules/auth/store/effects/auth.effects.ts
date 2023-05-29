import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthActions} from "../actions"
import {AuthService} from "../../services/auth.service";
import {catchError, map, of, switchMap} from "rxjs";
import {CurrentUserInterface} from "../../../../shared/models/currentUser.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService) {
  }

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RegisterAction),
      switchMap(({request}) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return AuthActions.RegisterSuccessAction({currentUser})
          }),
          catchError((err) => {
            return of(AuthActions.RegisterErrorAction({error: err}))
          })
        )
      )
    ))
}
