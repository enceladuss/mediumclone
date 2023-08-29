import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ManageArticleComponent} from "./components/manage-article/manage-article.component";

const routes: Routes = [
  {
    path: 'create',
    component: ManageArticleComponent,
  },
  {
    path: 'edit/:slug',
    component: ManageArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageArticleRoutingModule { }
