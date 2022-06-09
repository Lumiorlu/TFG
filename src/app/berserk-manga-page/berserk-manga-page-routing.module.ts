import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerserkMangaPagePage } from './berserk-manga-page.page';

const routes: Routes = [
  {
    path: '',
    component: BerserkMangaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerserkMangaPagePageRoutingModule {}
