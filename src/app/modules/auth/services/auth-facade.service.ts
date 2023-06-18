import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppStateInterface} from "../../../shared/models/appState.interface";
import {
  currentUserSelector,
  isLoggedInSelector,
  isSubmittingSelector,
  validationErrorsSelector
} from "../store/selectors/auth.selectors";
import {Observable} from "rxjs";
import * as actions from "../store/actions/auth.actions";
import {RegisterRequestInterface} from "../models/registerRequest.interface";
import {BackendErrorsInterface} from "../../../shared/models/backendErrors.interface";
import {LoginRequestInterface} from "../models/loginRequest.interface";
import {CurrentUserInterface} from "../../../shared/models/currentUser.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private store: Store<AppStateInterface>) { }

  public isLoggedIn$: Observable<boolean | null> = this.store.select(isLoggedInSelector);
  public currentUser$: Observable<CurrentUserInterface | null> = this.store.select(currentUserSelector);
  public isSubmitting$: Observable<boolean> = this.store.select(isSubmittingSelector);
  public validationsErrors$: Observable<BackendErrorsInterface | null> = this.store.select(validationErrorsSelector);

  public register(request: RegisterRequestInterface): void {
    this.store.dispatch(actions.RegisterAction({request}));
  }

  public login(request: LoginRequestInterface): void {
    this.store.dispatch(actions.LoginAction({request}));
  }

}
