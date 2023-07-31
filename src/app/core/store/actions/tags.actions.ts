import {createAction, props} from "@ngrx/store";
import {BackendErrorsInterface} from "../../../shared/models/backendErrors.interface";

export const GetTagsAction = createAction(
  '[Tags] Get Tags',
  props<{url: string}>()
);

export const GetTagsSuccessAction = createAction(
  '[Tags] Get Tags Success',
  props<{tagsList: string[]}>()
);

export const GetTagsErrorAction = createAction(
  '[Tags] Get Tags Error',
  props<{errors: BackendErrorsInterface}>()
);
