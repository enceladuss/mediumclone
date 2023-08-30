import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ManageArticleActions} from "../actions";
import {catchError, map, of, switchMap} from "rxjs";
import {Injectable} from "@angular/core";
import {ArticleService} from "../../../../shared/services/article.service";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";
import {Router} from "@angular/router";

@Injectable()
export class ManageArticleEffects {

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ManageArticleActions.GetArticleAction),
      switchMap(({slug}) => {
          return this.articleService.getArticle(slug).pipe(
            map((article) => {
              return ManageArticleActions.GetArticleSuccessAction({article})
            }),
            catchError((errors: BackendErrorsInterface) => {
              return of(ManageArticleActions.GetArticleErrorAction({errors}))
            })
          )
        }
      )
    ))

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ManageArticleActions.CreateArticleAction),
      switchMap(({article}) => {
          return this.articleService.createArticle(article).pipe(
            map((data) => {
              const article = data.article;
              this.router.navigate(['articles/', article.slug]);
              return ManageArticleActions.CreateArticleSuccessAction({article})
            }),
            catchError((errors: BackendErrorsInterface) => {
              return of(ManageArticleActions.CreateArticleErrorAction({errors}))
            })
          )
        }
      )
    ))

  editArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ManageArticleActions.EditArticleAction),
      switchMap(({id, article}) => {
          return this.articleService.editArticle(id, article).pipe(
            map((data) => {
              const article = data.article;
              this.router.navigate(['articles/', article.slug]);
              return ManageArticleActions.EditArticleSuccessAction({article})
            }),
            catchError((errors: BackendErrorsInterface) => {
              return of(ManageArticleActions.EditArticleErrorAction({errors}))
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
