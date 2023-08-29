import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {ManageArticleActions} from "../store/actions";
import {ArticleInterface} from "../../../shared/models/article.interface";
import {Observable} from "rxjs";
import {
  errorSelector,
  isLoadingSelector,
  manageArticleDataSelector
} from "../store/selectors/manage-article.selectors";
import {AppStateInterface} from "../../../shared/models/appState.interface";
import {BackendErrorsInterface} from "../../../shared/models/backendErrors.interface";

@Injectable({
  providedIn: 'root'
})
export class ManageArticleFacadeService {

  constructor(private store: Store<AppStateInterface>) { }

  public articleData$: Observable<ArticleInterface | null> = this.store.select(manageArticleDataSelector);
  public isLoading$: Observable<boolean> = this.store.select(isLoadingSelector);
  public error$: Observable<BackendErrorsInterface | null> = this.store.select(errorSelector);

  public getArticle(slug: string): void {
    this.store.dispatch(ManageArticleActions.GetArticleAction({slug}))
  }
}
