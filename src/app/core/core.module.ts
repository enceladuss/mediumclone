import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {feedReducers} from "./store/reducers/feed.reducers";
import {FeedService} from "./services/feed.service";
import {GetFeedEffects} from "./store/effects/feed.effects";
import {tagsReducers} from "./store/reducers/tags.reducers";
import {TagsEffects} from "./store/effects/tags.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', feedReducers),
    StoreModule.forFeature('tags', tagsReducers),
    EffectsModule.forFeature([GetFeedEffects]),
    EffectsModule.forFeature([TagsEffects])
  ],
  providers: [
    FeedService
  ]
})
export class CoreModule { }
