import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YourFeedComponent} from './components/your-feed/your-feed.component';
import {GlobalFeedComponent} from './components/global-feed/global-feed.component';
import {FeedRoutingModule} from "./feed-routing.module";
import {FeedComponent} from "../../shared/components/feed/feed.component";
import {BannerComponent} from "../../shared/components/banner/banner.component";
import {PaginationComponent} from "../../shared/components/pagination/pagination.component";
import {PopularTagsComponent} from "../../shared/components/popular-tags/popular-tags.component";
import {FeedTogglerComponent} from "../../shared/components/feed-toggler/feed-toggler.component";
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';


@NgModule({
  declarations: [
    YourFeedComponent,
    GlobalFeedComponent,
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    FeedComponent,
    BannerComponent,
    PaginationComponent,
    PopularTagsComponent,
    FeedTogglerComponent
  ]
})
export class FeedModule {
}
