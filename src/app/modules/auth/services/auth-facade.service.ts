import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../../../shared/models/appState.interface";
import { isSubmittingSelector} from "../store/selectors/auth.selectors";
import {Observable} from "rxjs";
import * as actions from "../store/actions/auth.actions";
import {RegisterRequestInterface} from "../models/registerRequest.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private store: Store<AppStateInterface>) { }

  public isSubmitting$: Observable<boolean> = this.store.select(isSubmittingSelector);

  public register(request: RegisterRequestInterface): void {
    this.store.dispatch(actions.RegisterAction({request}));
  }


}
