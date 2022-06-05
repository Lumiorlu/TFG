import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosePagePageRoutingModule } from './choose-page-routing.module';

import { ChoosePagePage } from './choose-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosePagePageRoutingModule
  ],
  declarations: [ChoosePagePage]
})
export class ChoosePagePageModule {}
