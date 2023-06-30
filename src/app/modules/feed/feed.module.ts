import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import {FeedRoutingModule} from "./feed-routing.module";
import {FeedComponent} from "../../shared/components/feed/feed.component";



@NgModule({
  declarations: [
    YourFeedComponent,
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    FeedComponent,
  ]
})
export class FeedModule { }
