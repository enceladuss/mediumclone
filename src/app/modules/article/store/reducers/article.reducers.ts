import {Action, createReducer, on} from "@ngrx/store";
import {ArticleStateInterface} from "../../models/articleState.interface";
import {ArticleActions} from "../actions";

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const articleReducer = createReducer(
  initialState,
  on(ArticleActions.GetArticleAction, (state): ArticleStateInterface => (
    {
      ...state,
      isLoading: true,
      data: null,
      error: null
    })
  ),
  on(ArticleActions.GetArticleSuccessAction, (state, action): ArticleStateInterface => (
    {
      ...state,
      isLoading: false,
      data: action.article
    })
  ),
  on(ArticleActions.GetArticleErrorAction, (state, action): ArticleStateInterface => (
    {
      ...state,
      isLoading: false,
      error: action.errors
    })
  ),
)

export function articleReducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
