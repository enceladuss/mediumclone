import {AuthStateInterface} from "../../models/authState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {AuthActions} from "../actions";

const initialState: AuthStateInterface = {
  isSubmitting: false
}

const authReducer = createReducer(
  initialState,
  on(AuthActions.RegisterAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true
  }))
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
