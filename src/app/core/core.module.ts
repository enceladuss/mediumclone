import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers/feed.reducers";
import {FeedService} from "./services/feed.service";
import {GetFeedEffects} from "./store/effects/feed.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([GetFeedEffects])
  ],
  providers: [
    FeedService
  ]
})
export class CoreModule { }
