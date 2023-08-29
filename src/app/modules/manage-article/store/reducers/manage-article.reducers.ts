import {Action, createReducer, on} from "@ngrx/store";
import {ManageArticleActions} from "../actions";
import {ManageArticleStateInterface} from "../../models/manage-article-state.interface";

const initialState: ManageArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const manageArticleReducer = createReducer(
  initialState,
  on(ManageArticleActions.GetArticleAction, (state): ManageArticleStateInterface => (
    {
      ...state,
      isLoading: true,
      data: null,
      error: null
    })
  ),
  on(ManageArticleActions.GetArticleSuccessAction, (state, action): ManageArticleStateInterface => (
    {
      ...state,
      isLoading: false,
      data: action.article
    })
  ),
  on(ManageArticleActions.GetArticleErrorAction, (state, action): ManageArticleStateInterface => (
    {
      ...state,
      isLoading: false,
      error: action.errors
    })
  ),
  on(ManageArticleActions.CreateArticleAction, (state): ManageArticleStateInterface => (
    {
      ...state,
      data: null,
      error: null
    })
  ),
  on(ManageArticleActions.CreateArticleSuccessAction, (state, action): ManageArticleStateInterface => (
    {
      ...state,
      data: action.article
    })
  ),
  on(ManageArticleActions.CreateArticleErrorAction, (state, action): ManageArticleStateInterface => (
    {
      ...state,
      error: action.errors
    })
  ),
  on(ManageArticleActions.EditArticleAction, (state): ManageArticleStateInterface => (
    {
      ...state,
      data: null,
      error: null
    })
  ),
  on(ManageArticleActions.EditArticleSuccessAction, (state, action): ManageArticleStateInterface => (
    {
      ...state,
      data: action.article
    })
  ),
  on(ManageArticleActions.EditArticleErrorAction, (state, action): ManageArticleStateInterface => (
    {
      ...state,
      error: action.errors
    })
  ),
)

export function manageArticleReducers(state: ManageArticleStateInterface, action: Action) {
  return manageArticleReducer(state, action);
}
