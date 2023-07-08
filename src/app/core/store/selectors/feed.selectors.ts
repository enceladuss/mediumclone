import {AppStateInterface} from "../../../shared/models/appState.interface";
import {createSelector} from "@ngrx/store";
import {FeedStateInterface} from "../../models/feedState.interface";

export const feedFeatureSelector = (state: AppStateInterface) => state.feed;

export const feedDataSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
)

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
)

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
)



