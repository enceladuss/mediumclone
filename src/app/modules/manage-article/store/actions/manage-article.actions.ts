import {createAction, props} from "@ngrx/store";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";
import {ArticleInterface} from "../../../../shared/models/article.interface";
import {ManageArticleInterface} from "../../../../shared/models/manage-article.interface";

export const GetArticleAction = createAction(
  '[Manage Article] Get Article',
  props<{ slug: string }>()
);

export const GetArticleSuccessAction = createAction(
  '[Manage Article] Get Article Success',
  props<{ article: ArticleInterface }>()
);

export const CreateArticleAction = createAction(
  '[Manage Article] Create Article',
  props<{ article: ManageArticleInterface }>()
);

export const CreateArticleSuccessAction = createAction(
  '[Manage Article] Create Article Success',
  props<{ article: ArticleInterface }>()
);

export const CreateArticleErrorAction = createAction(
  '[Manage Article] Create Article Error',
  props<{ errors: BackendErrorsInterface }>()
);

export const EditArticleAction = createAction(
  '[Manage Article] Edit Article',
  props<{ id: string, article: ManageArticleInterface }>()
);

export const EditArticleSuccessAction = createAction(
  '[Manage Article] Edit Article Success',
  props<{ article: ArticleInterface }>()
);

export const EditArticleErrorAction = createAction(
  '[Manage Article] Edit Article Error',
  props<{ errors: BackendErrorsInterface }>()
);

export const GetArticleErrorAction = createAction(
  '[Manage Article] Get Article Error',
  props<{ errors: BackendErrorsInterface }>()
);
