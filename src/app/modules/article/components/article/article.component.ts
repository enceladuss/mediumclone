import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleFacadeService} from "../../services/article-facade.service";
import {ActivatedRoute, Router} from "@angular/router";
import {combineLatest, Observable, Subject} from "rxjs";
import {ArticleInterface} from "../../../../shared/models/article.interface";
import {map, takeUntil} from "rxjs/operators";
import {AuthFacadeService} from "../../../auth/services/auth-facade.service";
import {CurrentUserInterface} from "../../../../shared/models/currentUser.interface";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {

  public articleData: ArticleInterface | null;
  public isLoading$: Observable<boolean> = this.articleFacade.isLoading$;
  public isAuthor$: Observable<boolean>;

  private slug: string | null;
  private destroy$ = new Subject<void>();

  constructor(
    private articleFacade: ArticleFacadeService,
    private authFacadeService: AuthFacadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }

  public deleteArticle(): void {
    if (this.slug) {
      this.articleFacade.deleteArticle(this.slug);
    }
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.isAuthor$ = combineLatest([
      this.articleFacade.articleData$,
      this.authFacadeService.currentUser$
    ]).pipe(
      map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
        if (!article || !currentUser) {
          return false;
        } else {
          return article.author.username === currentUser.username;
        }
      })
    )

  }

  private initializeListeners(): void {

    combineLatest([this.articleFacade.articleData$, this.articleFacade.error$])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([articleData, error]) => {
        this.articleData = articleData;
        if (error) {
          this.router.navigate(['/home']);
        }
      });

  }

  private fetchData(): void {
    if (this.slug) {
      this.articleFacade.getArticle(this.slug);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
