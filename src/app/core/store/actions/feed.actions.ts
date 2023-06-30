import {createAction, props} from "@ngrx/store";
import {BackendErrorsInterface} from "../../../shared/models/backendErrors.interface";
import {GetFeedResponseInterface} from "../../models/getFeedResponse.interface";

export const GetFeedAction = createAction(
  '[Feed] GetFeed',
  props<{ url: string }>()
);

export const GetFeedSuccessAction = createAction(
  '[Feed] GetFeed Success',
  props<{ feed: GetFeedResponseInterface }>()
);

export const GetFeedErrorAction = createAction(
  '[Feed] GetFeed Error',
  props<{ errors: BackendErrorsInterface }>()
);
