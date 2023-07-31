import {FeedStateInterface} from "../../models/feedState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {FeedActions} from "../actions";

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const feedReducer = createReducer(
  initialState,
  on(FeedActions.GetFeedAction, (state): FeedStateInterface => (
    {
      ...state,
      isLoading: true,
      data: null
    })
  ),
  on(FeedActions.GetFeedSuccessAction, (state, action): FeedStateInterface => (
    {
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(FeedActions.GetFeedErrorAction, (state, action): FeedStateInterface => (
    {
      ...state,
      isLoading: false,
      error: action.errors
    })
  ),
)

export function feedReducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
