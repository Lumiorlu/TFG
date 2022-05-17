import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosePagePage } from './choose-page.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosePagePageRoutingModule {}
