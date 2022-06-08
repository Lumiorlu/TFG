import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoPagePage } from './pago-page.page';

const routes: Routes = [
  {
    path: '',
    component: PagoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoPagePageRoutingModule {}
