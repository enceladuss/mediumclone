import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManageArticleRoutingModule} from "./manage-article-routing.module";
import { ManageArticleComponent } from './components/manage-article/manage-article.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BackendErrorMessagesComponent} from "../../shared/components/backend-error-messages/backend-error-messages.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {manageArticleReducers} from "./store/reducers/manage-article.reducers";
import {ManageArticleEffects} from "./store/effects/manage-article.effects";



@NgModule({
  declarations: [
    ManageArticleComponent,
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    ManageArticleRoutingModule,
    ReactiveFormsModule,
    BackendErrorMessagesComponent,
    StoreModule.forFeature('manageArticle', manageArticleReducers),
    EffectsModule.forFeature([ManageArticleEffects]),
  ]
})
export class ManageArticleModule { }
