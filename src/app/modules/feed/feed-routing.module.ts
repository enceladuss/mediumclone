import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {YourFeedComponent} from "./components/your-feed/your-feed.component";
import {GlobalFeedComponent} from "./components/global-feed/global-feed.component";

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent
  },
  {
    path: 'your-feed',
    component: YourFeedComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
