import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'choose-page',
    loadChildren: () => import('./pages/choose-page/choose-page.module').then( m => m.ChoosePagePageModule)
  },
  {
    path: 'manga-page',
    loadChildren: () => import('./pages/manga-page/manga-page.module').then( m => m.MangaPagePageModule)
  },
  {
    path: 'comic-page',
    loadChildren: () => import('./pages/comic-page/comic-page.module').then( m => m.ComicPagePageModule)
  },
  {
    path: 'option-page',
    loadChildren: () => import('./pages/option-page/option-page.module').then( m => m.OptionPagePageModule)
  },
  {
    path: 'register-page',
    loadChildren: () => import('./pages/register-page/register-page.module').then( m => m.RegisterPagePageModule)
  },
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
