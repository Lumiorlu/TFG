import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicPagePage } from './comic-page.page';

const routes: Routes = [
  {
    path: '',
    component: ComicPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicPagePageRoutingModule {}
