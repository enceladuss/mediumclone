import {createAction, props} from "@ngrx/store";
import {RegisterRequestInterface} from "../../models/registerRequest.interface";
import {CurrentUserInterface} from "../../../../shared/models/currentUser.interface";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";

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
  props<{ errors: BackendErrorsInterface }>()
);
