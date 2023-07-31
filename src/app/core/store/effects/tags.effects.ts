import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TagsActions} from "../actions";
import {BackendErrorsInterface} from "../../../shared/models/backendErrors.interface";
import {catchError, map, of, switchMap} from "rxjs";
import {TagsService} from "../../services/tags.service";
import {GetTagsResponseInterface} from "../../models/getTagsResponse.interface";

@Injectable()
export class TagsEffects {
  getTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TagsActions.GetTagsAction),
      switchMap(({url}) => {
          return this.tagsService.getTags(url).pipe(
            map((tagsList: string[]) => {
              return TagsActions.GetTagsSuccessAction({tagsList})
            }),
            catchError((errors: BackendErrorsInterface) => {
              return of(TagsActions.GetTagsErrorAction({errors}))
            })
          )
        }
      )
    ))

  constructor(
    private actions$: Actions,
    private tagsService: TagsService
  ) {
  }
}
