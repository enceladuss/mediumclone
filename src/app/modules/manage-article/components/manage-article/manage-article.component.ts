import { Component, OnInit } from '@angular/core';
import {ManageArticleFacadeService} from "../../services/manage-article-facade.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleInterface} from "../../../../shared/models/article.interface";
import {Observable} from "rxjs";
import {ManageArticleInterface} from "../../../../shared/models/manage-article.interface";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";

@Component({
  selector: 'app-manage-article',
  templateUrl: './manage-article.component.html',
  styleUrls: ['./manage-article.component.scss']
})
export class ManageArticleComponent implements OnInit {

  constructor(
    private manageArticleFacadeService: ManageArticleFacadeService,
    private route: ActivatedRoute,
  ) { }

  public slug: string | null;
  public articleData$: Observable<ArticleInterface | null> = this.manageArticleFacadeService.articleData$;
  public isLoading$: Observable<boolean> = this.manageArticleFacadeService.isLoading$;
  public error$: Observable<BackendErrorsInterface | null> = this.manageArticleFacadeService.error$;

  ngOnInit(): void {
    this.initializeValues();
  }

  public articleSubmitEvent(form: ManageArticleInterface): void {
  // TODO: add listener to retrieve created article id, redirect user to this id, remove async from template
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    if (this.slug) {
      this.manageArticleFacadeService.getArticle(this.slug);
    }
  }

}
