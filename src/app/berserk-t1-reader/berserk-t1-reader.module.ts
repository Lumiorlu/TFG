import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerserkT1ReaderPageRoutingModule } from './berserk-t1-reader-routing.module';

import { BerserkT1ReaderPage } from './berserk-t1-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerserkT1ReaderPageRoutingModule
  ],
  declarations: [BerserkT1ReaderPage]
})
export class BerserkT1ReaderPageModule {}
