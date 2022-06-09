import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerserkT1ReaderPage } from './berserk-t1-reader.page';

const routes: Routes = [
  {
    path: '',
    component: BerserkT1ReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerserkT1ReaderPageRoutingModule {}
