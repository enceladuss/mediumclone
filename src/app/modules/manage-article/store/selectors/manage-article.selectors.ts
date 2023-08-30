import {createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../../shared/models/appState.interface";
import {ManageArticleStateInterface} from "../../models/manage-article-state.interface";

export const manageArticleFeatureSelector = (state: AppStateInterface) => state.manageArticle;

export const manageArticleDataSelector = createSelector(
  manageArticleFeatureSelector,
  (manageArticleState: ManageArticleStateInterface) => manageArticleState.fetchedArticle
)

export const isLoadingSelector = createSelector(
  manageArticleFeatureSelector,
  (manageArticleState: ManageArticleStateInterface) => manageArticleState.isLoading
)

export const errorSelector = createSelector(
  manageArticleFeatureSelector,
  (manageArticleState: ManageArticleStateInterface) => manageArticleState.error
)



