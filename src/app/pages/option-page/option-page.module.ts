import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionPagePageRoutingModule } from './option-page-routing.module';

import { OptionPagePage } from './option-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionPagePageRoutingModule
  ],
  declarations: [OptionPagePage]
})
export class OptionPagePageModule {}
