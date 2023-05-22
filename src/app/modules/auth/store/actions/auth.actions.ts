import {createAction, props} from "@ngrx/store";
import {registerRequestInterface} from "../../models/registerRequest.interface";
import {IAuthInfo} from "../../models/auth.interface";
import {HttpErrorResponse} from "@angular/common/http";

export const RegisterAction = createAction(
  '[Register] Register',
  props<registerRequestInterface>()
);

export const RegisterSuccessAction = createAction(
  '[Register] Register Success',
  props<{ payload: IAuthInfo }>()
);

export const RegisterErrorAction = createAction(
  '[Register] Register Error',
  props<{ error: HttpErrorResponse }>()
);
