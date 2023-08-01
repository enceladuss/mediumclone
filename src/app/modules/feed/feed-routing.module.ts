import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {YourFeedComponent} from "./components/your-feed/your-feed.component";
import {GlobalFeedComponent} from "./components/global-feed/global-feed.component";
import {TagFeedComponent} from "./components/tag-feed/tag-feed.component";

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
  {
    path: 'feed',
    component: YourFeedComponent
  },
  {
    path: 'tags/:slug',
    component: TagFeedComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
