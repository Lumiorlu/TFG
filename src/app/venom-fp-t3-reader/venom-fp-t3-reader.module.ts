import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenomFPT3ReaderPageRoutingModule } from './venom-fp-t3-reader-routing.module';

import { VenomFPT3ReaderPage } from './venom-fp-t3-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenomFPT3ReaderPageRoutingModule
  ],
  declarations: [VenomFPT3ReaderPage]
})
export class VenomFPT3ReaderPageModule {}
