import {createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../../shared/models/appState.interface";
import {ArticleStateInterface} from "../../models/articleState.interface";

export const articleFeatureSelector = (state: AppStateInterface) => state.article;

export const articleDataSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
)

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
)

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
)



