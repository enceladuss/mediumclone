import {createAction, props} from "@ngrx/store";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";
import {ArticleInterface} from "../../../../shared/models/article.interface";

export const GetArticleAction = createAction(
  '[Article] Get Article',
  props<{ slug: string }>()
);

export const GetArticleSuccessAction = createAction(
  '[Article] Get Article Success',
  props<{ article: ArticleInterface }>()
);

export const GetArticleErrorAction = createAction(
  '[Article] Get Article Error',
  props<{ errors: BackendErrorsInterface }>()
);
