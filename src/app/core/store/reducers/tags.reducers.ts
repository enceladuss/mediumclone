import {TagsStateInterface} from "../../models/tagsState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {TagsActions} from '../actions';

const initialState: TagsStateInterface = {
  isLoading: false,
  errors: null,
  tagsList: null
}

const tagsReducer = createReducer(
  initialState,
  on(TagsActions.GetTagsAction, (state): TagsStateInterface => (
    {
      ...state,
      isLoading: true,
      tagsList: null
    })
  ),
  on(TagsActions.GetTagsSuccessAction, (state, action): TagsStateInterface => (
     {
      ...state,
      isLoading: false,
      tagsList: action.tagsList
    })
  ),
  on(TagsActions.GetTagsErrorAction, (state, action): TagsStateInterface => (
    {
      ...state,
      isLoading: false,
      errors: action.errors
    })
  ),
)

export function tagsReducers(state: TagsStateInterface, action: Action) {
  return tagsReducer(state, action);
}
