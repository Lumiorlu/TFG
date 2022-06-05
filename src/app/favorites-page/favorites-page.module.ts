import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPagePageRoutingModule } from './favorites-page-routing.module';

import { FavoritesPagePage } from './favorites-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPagePageRoutingModule
  ],
  declarations: [FavoritesPagePage]
})
export class FavoritesPagePageModule {}
