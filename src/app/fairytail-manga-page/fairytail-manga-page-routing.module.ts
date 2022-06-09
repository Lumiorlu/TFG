import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairytailMangaPagePage } from './fairytail-manga-page.page';

const routes: Routes = [
  {
    path: '',
    component: FairytailMangaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairytailMangaPagePageRoutingModule {}
