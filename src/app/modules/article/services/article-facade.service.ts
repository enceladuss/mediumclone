import {Injectable} from '@angular/core';
import {articleDataSelector, errorSelector, isLoadingSelector} from '../store/selectors/article.selectors';
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../../../shared/models/appState.interface";
import {ArticleActions} from "../store/actions";
import {BackendErrorsInterface} from "../../../shared/models/backendErrors.interface";
import {Observable} from "rxjs";
import {ArticleInterface} from "../../../shared/models/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticleFacadeService {

  public articleData$: Observable<ArticleInterface | null> = this.store.select(articleDataSelector);
  public isLoading$: Observable<boolean> = this.store.select(isLoadingSelector);
  public error$: Observable<BackendErrorsInterface | null> = this.store.select(errorSelector);

  constructor(private store: Store<AppStateInterface>) {
  }

  public getArticle(slug: string): void {
    this.store.dispatch(ArticleActions.GetArticleAction({slug}));
  }

  public deleteArticle(slug: string): void {
    this.store.dispatch(ArticleActions.DeleteArticleAction({slug}));
  }
}
