import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FeedFacadeService} from "../../../core/services/feed-facade.service";
import {Observable, Subject} from "rxjs";
import {GetFeedResponseInterface} from "../../../core/models/getFeedResponse.interface";
import {BackendErrorsInterface} from "../../models/backendErrors.interface";
import {ActivatedRoute, Params, Router, RouterModule} from "@angular/router";
import {PostLimitConstant} from "../../../core/constants/postLimit.constant";
import {takeUntil} from "rxjs/operators";
import {PaginationComponent} from "../pagination/pagination.component";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent]
})
export class FeedComponent implements OnInit {

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

  private initializeValues(): void {
    this.feedData$ = this.feedFacadeService.feedData$;
    this.isLoading$ = this.feedFacadeService.isLoading$;
    this.error$ = this.feedFacadeService.error$;
    this.baseUrl = this.router.url.split('?')[0];
  }

  private fetchData(): void {
    this.feedFacadeService.getFeedData(this.apiUrl);
  }

  private initializeListeners(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || 1);
      console.log(this.currentPage);
    }, takeUntil(this.destroy$))
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
