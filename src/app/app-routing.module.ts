import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
      //...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login-page',
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (m) => m.LoginPagePageModule
      ),
      //...canActivate(redirectLoggedInToHome), 
  },
  {
    path: 'choose-page',
    loadChildren: () =>
      import('./choose-page/choose-page.module').then(
        (m) => m.ChoosePagePageModule
      ),
  },
  {
    path: 'manga-page',
    loadChildren: () =>
      import('./manga-page/manga-page.module').then(
        (m) => m.MangaPagePageModule
      ),
  },
  {
    path: 'comic-page',
    loadChildren: () =>
      import('./comic-page/comic-page.module').then(
        (m) => m.ComicPagePageModule
      ),
  },
  {
    path: 'option-page',
    loadChildren: () =>
      import('./option-page/option-page.module').then(
        (m) => m.OptionPagePageModule
      ),
  },
  {
    path: 'register-page',
    loadChildren: () =>
      import('./register-page/register-page.module').then(
        (m) => m.RegisterPagePageModule
      ),
  },
  {
    path: 'favorites-page',
    loadChildren: () =>
      import('./favorites-page/favorites-page.module').then(
        (m) => m.FavoritesPagePageModule
      ),
  },
  {
    path: 'library-page',
    loadChildren: () =>
      import('./library-page/library-page.module').then(
        (m) => m.LibraryPagePageModule
      ),
  },
  
  {
    path: 'pago-page-comics',
    loadChildren: () => import('./pago-page-comics/pago-page-comics.module').then( m => m.PagoPagePageModule)
  },
    
  {
    path: 'pago-page-mangas',
    loadChildren: () => import('./pago-page-mangas/pago-page-mangas.module').then( m => m.PagoPagePageModule)
  },

  {
    path: 'fairytail-manga-page',
    loadChildren: () => import('./fairytail-manga-page/fairytail-manga-page.module').then( m => m.FairytailMangaPagePageModule)
  },
  {
    path: 'berserk-t1-reader',
    loadChildren: () => import('./berserk-t1-reader/berserk-t1-reader.module').then( m => m.BerserkT1ReaderPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
