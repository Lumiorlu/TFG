import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenomFPT3ReaderPage } from './venom-fp-t3-reader.page';

const routes: Routes = [
  {
    path: '',
    component: VenomFPT3ReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenomFPT3ReaderPageRoutingModule {}
