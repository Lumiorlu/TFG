import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairytailT1ReaderPage } from './fairytail-t1-reader.page';

const routes: Routes = [
  {
    path: '',
    component: FairytailT1ReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairytailT1ReaderPageRoutingModule {}
