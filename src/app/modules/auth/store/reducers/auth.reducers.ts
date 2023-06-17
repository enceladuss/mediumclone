import {AuthStateInterface} from "../../models/authState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {AuthActions} from "../actions";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
}

const authReducer = createReducer(
  initialState,
  on(AuthActions.RegisterAction, (state): AuthStateInterface => (
    {
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(AuthActions.RegisterSuccessAction, (state, action): AuthStateInterface => (
    {
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(AuthActions.RegisterErrorAction, (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
