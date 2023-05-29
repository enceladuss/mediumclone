import {createAction, props} from "@ngrx/store";
import {RegisterRequestInterface} from "../../models/registerRequest.interface";
import {IAuthInfo} from "../../models/auth.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {CurrentUserInterface} from "../../../../shared/models/currentUser.interface";

export const RegisterAction = createAction(
  '[Register] Register',
  props<{ request: RegisterRequestInterface }>()
);

export const RegisterSuccessAction = createAction(
  '[Register] Register Success',
  props<{ currentUser: CurrentUserInterface }>()
);

export const RegisterErrorAction = createAction(
  '[Register] Register Error',
  props<{ error: HttpErrorResponse }>()
);
