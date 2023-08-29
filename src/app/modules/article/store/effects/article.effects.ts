import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ArticleActions} from "../actions";
import {catchError, map, of, switchMap} from "rxjs";
import {Injectable} from "@angular/core";
import {ArticleService} from "../../../../shared/services/article.service";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";
import {Router} from "@angular/router";

@Injectable()
export class GetArticleEffects {

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.GetArticleAction),
      switchMap((params) => {
          return this.articleService.getArticle(params.slug).pipe(
            map((article) => {
              return ArticleActions.GetArticleSuccessAction({article})
            }),
            catchError((errors: BackendErrorsInterface) => {
              return of(ArticleActions.GetArticleErrorAction({errors}))
            })
          )
        }
      )
    ))

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.DeleteArticleAction),
      switchMap((params) => {
          return this.articleService.deleteArticle(params.slug).pipe(
            map(() => {
              this.router.navigate(['/home']);
              return ArticleActions.DeleteArticleSuccessAction()
            }),
            catchError((errors: BackendErrorsInterface) => {
              return of(ArticleActions.DeleteArticleErrorAction({errors}))
            })
          )
        }
      )
    ))

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router
  ) {
  }
}
