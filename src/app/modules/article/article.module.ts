import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleRoutingModule} from "./article-routing.module";
import { ArticleComponent } from './components/article/article.component';
import {StoreModule} from "@ngrx/store";
import {articleReducers} from "./store/reducers/article.reducers";
import {EffectsModule} from "@ngrx/effects";
import {GetArticleEffects} from "./store/effects/article.effects";
import {TagListComponent} from "../../shared/components/tag-list/tag-list.component";


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    TagListComponent,
    StoreModule.forFeature('article', articleReducers),
    EffectsModule.forFeature([GetArticleEffects]),
  ]
})
export class ArticleModule {
}
