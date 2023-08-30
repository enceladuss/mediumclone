import {Component, OnDestroy, OnInit} from '@angular/core';
import {ManageArticleFacadeService} from "../../services/manage-article-facade.service";
import {ActivatedRoute} from "@angular/router";
import {ArticleInterface} from "../../../../shared/models/article.interface";
import {Observable, Subject} from "rxjs";
import {ManageArticleInterface} from "../../../../shared/models/manage-article.interface";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-manage-article',
  templateUrl: './manage-article.component.html',
  styleUrls: ['./manage-article.component.scss']
})
export class ManageArticleComponent implements OnInit, OnDestroy {

  constructor(
    private articleFacade: ManageArticleFacadeService,
    private route: ActivatedRoute
  ) { }

  public slug: string | null;
  public article: ArticleInterface | null;

  public isLoading$: Observable<boolean> = this.articleFacade.isLoading$;
  public error$: Observable<BackendErrorsInterface | null> = this.articleFacade.error$;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  public onArticleSubmitEvent(form: ManageArticleInterface): void {
    if (this.article?.slug) {
      this.articleFacade.editArticle(this.article?.slug, form);
    } else {
      this.articleFacade.createArticle(form);
    }
  }

  private initializeListeners(): void {
    this.articleFacade.fetchedArticle$
      .pipe(takeUntil(this.destroy$))
      .subscribe((fetchedArticle: ArticleInterface | null) => {
        if (fetchedArticle) {
          this.article = fetchedArticle;
        }
      });
  }

  private initializeValues(): void {
    this.articleFacade.clearArticlesData();

    this.slug = this.route.snapshot.paramMap.get('slug');
    if (this.slug) {
      this.articleFacade.getArticle(this.slug);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
