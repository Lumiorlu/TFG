import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatmanReaderPage } from './batman-reader.page';

const routes: Routes = [
  {
    path: '',
    component: BatmanReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatmanReaderPageRoutingModule {}
