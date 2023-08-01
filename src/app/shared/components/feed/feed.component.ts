import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FeedFacadeService} from "../../../core/services/feed-facade.service";
import {Observable, Subject} from "rxjs";
import {GetFeedResponseInterface} from "../../../core/models/getFeedResponse.interface";
import {BackendErrorsInterface} from "../../models/backendErrors.interface";
import {ActivatedRoute, Params, Router, RouterModule} from "@angular/router";
import {PostLimitConstant} from "../../../core/constants/postLimit.constant";
import {takeUntil} from "rxjs/operators";
import {PaginationComponent} from "../pagination/pagination.component";
import {TagListComponent} from "../tag-list/tag-list.component";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent, TagListComponent]
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {

  @Input('apiUrl') apiUrl: string;

  public feedData$: Observable<GetFeedResponseInterface | null>;
  public isLoading$: Observable<boolean>;
  public error$: Observable<BackendErrorsInterface | null>;

  public postsLimit: number = PostLimitConstant;
  public baseUrl: string;
  public currentPage: number = 0;

  private destroy$ = new Subject<void>();

  constructor(
    private feedFacadeService: FeedFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged = !changes['apiUrl'].firstChange && changes['apiUrl'].previousValue !== changes['apiUrl'].currentValue;
    if (isApiUrlChanged) {
      this.fetchData();
    }
  }

  private initializeValues(): void {
    this.feedData$ = this.feedFacadeService.feedData$;
    this.isLoading$ = this.feedFacadeService.isLoading$;
    this.error$ = this.feedFacadeService.error$;
    this.baseUrl = this.router.url.split('?')[0];
  }

  private fetchData(page?: number): void {
    const pages = page ? page : 0;
    this.feedFacadeService.getFeedData(this.apiUrl, this.getOffsetNumber(pages));
  }

  private initializeListeners(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || 1);
      this.fetchData(this.currentPage);
    }, takeUntil(this.destroy$))
  }

  private getOffsetNumber(page: number): number {
    return page * this.postsLimit;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
