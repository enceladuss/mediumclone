import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>import('./modules/feed/feed.module').then(module => module.FeedModule)
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'articles',
    loadChildren: ()=>import('./modules/article/article.module').then(module => module.ArticleModule)
  },
  {
    path: 'manage-article',
    loadChildren: ()=>import('./modules/manage-article/manage-article.module').then(module => module.ManageArticleModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
