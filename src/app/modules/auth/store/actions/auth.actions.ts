import {createAction, props} from "@ngrx/store";
import {RegisterRequestInterface} from "../../models/registerRequest.interface";
import {CurrentUserInterface} from "../../../../shared/models/currentUser.interface";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";
import {LoginRequestInterface} from "../../models/loginRequest.interface";

export const RegisterAction = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);

export const RegisterSuccessAction = createAction(
  '[Auth] Register Success',
  props<{ currentUser: CurrentUserInterface }>()
);

export const RegisterErrorAction = createAction(
  '[Auth] Register Error',
  props<{ errors: BackendErrorsInterface }>()
);

export const LoginAction = createAction(
  '[Auth] Login',
  props<{ request: LoginRequestInterface }>()
);

export const LoginSuccessAction = createAction(
  '[Auth] Login Success',
  props<{ currentUser: CurrentUserInterface }>()
);

export const LoginErrorAction = createAction(
  '[Auth] Login Error',
  props<{ errors: BackendErrorsInterface }>()
);
