import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ArticleComponent} from "./components/article/article.component";

const routes: Routes = [
  {
    path: ':slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
