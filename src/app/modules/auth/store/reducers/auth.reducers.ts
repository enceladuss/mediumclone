import {AuthStateInterface} from "../../models/authState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {AuthActions} from "../actions";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
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
  on(AuthActions.LoginAction, (state): AuthStateInterface => (
    {
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(AuthActions.LoginSuccessAction, (state, action): AuthStateInterface => (
    {
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(AuthActions.LoginErrorAction, (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(AuthActions.GetCurrentUserAction, (state): AuthStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(AuthActions.GetCurrentUserSuccessAction, (state, action): AuthStateInterface => (
    {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(AuthActions.GetCurrentUserErrorAction, (state): AuthStateInterface => (
    {
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null
    })
  ),
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
