import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsFeatureModule, EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers/feed.reducers";
import {FeedService} from "./services/feed.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([EffectsFeatureModule]),
    StoreModule.forFeature('feed', reducers)
  ],
  providers: [
    FeedService
  ]
})
export class CoreModule { }
