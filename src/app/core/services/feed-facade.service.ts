import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../../shared/models/appState.interface";
import {Observable} from "rxjs";
import {GetFeedResponseInterface} from "../models/getFeedResponse.interface";
import {errorSelector, feedDataSelector, isLoadingSelector} from "../store/selectors/feed.selectors";
import * as actions from "../store/actions/feed.actions";
import {BackendErrorsInterface} from "../../shared/models/backendErrors.interface";

@Injectable({
  providedIn: 'root'
})
export class FeedFacadeService {
  constructor(private store: Store<AppStateInterface>) {}

  public feedData$: Observable<GetFeedResponseInterface | null> = this.store.select(feedDataSelector);
  public isLoading$: Observable<boolean> = this.store.select(isLoadingSelector);
  public error$: Observable<BackendErrorsInterface | null> = this.store.select(errorSelector);

  public getFeedData(url: string): void {
    this.store.dispatch(actions.GetFeedAction({url}))
  }
}
