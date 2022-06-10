import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatmanReaderPageRoutingModule } from './batman-reader-routing.module';

import { BatmanReaderPage } from './batman-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatmanReaderPageRoutingModule
  ],
  declarations: [BatmanReaderPage]
})
export class BatmanReaderPageModule {}
