import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FeedActions} from "../actions";
import {catchError, map, of, switchMap} from "rxjs";
import {FeedService} from "../../services/feed.service";
import {GetFeedResponseInterface} from "../../models/getFeedResponse.interface";
import {BackendErrorsInterface} from "../../../shared/models/backendErrors.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class GetFeedEffects {

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.GetFeedAction),
      switchMap((params) => {
          return this.feedService.getFeed(params.url, params.page).pipe(
            map((feed: GetFeedResponseInterface) => {
              return FeedActions.GetFeedSuccessAction({feed})
            }),
            catchError((errors: BackendErrorsInterface) => {
              return of(FeedActions.GetFeedErrorAction({errors}))
            })
          )
        }
      )
    ))

  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) {
  }
}
