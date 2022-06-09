import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoPagePageRoutingModule } from './pago-page-mangas-routing.module';

import { PagoPagePage } from './pago-page-mangas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoPagePageRoutingModule
  ],
  declarations: [PagoPagePage]
})
export class PagoPagePageModule {}
