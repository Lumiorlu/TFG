import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPagePageRoutingModule } from './register-page-routing.module';

import { RegisterPage } from './register-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPagePageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPagePageModule {}
