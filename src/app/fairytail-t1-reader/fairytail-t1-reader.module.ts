import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairytailT1ReaderPageRoutingModule } from './fairytail-t1-reader-routing.module';

import { FairytailT1ReaderPage } from './fairytail-t1-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FairytailT1ReaderPageRoutingModule
  ],
  declarations: [FairytailT1ReaderPage]
})
export class FairytailT1ReaderPageModule {}
