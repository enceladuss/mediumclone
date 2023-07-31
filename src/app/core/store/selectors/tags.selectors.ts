import {AppStateInterface} from "../../../shared/models/appState.interface";
import {createSelector} from "@ngrx/store";
import {TagsStateInterface} from "../../models/tagsState.interface";

export const tagsFeatureSelector = (state: AppStateInterface) => state.tags;

export const tagsSelector = createSelector(
  tagsFeatureSelector,
  (tagsState: TagsStateInterface) => tagsState.tagsList
)

export const isLoadingSelector = createSelector(
  tagsFeatureSelector,
  (tagsState: TagsStateInterface) => tagsState.isLoading
)

export const errorSelector = createSelector(
  tagsFeatureSelector,
  (tagsState: TagsStateInterface) => tagsState.errors
)
