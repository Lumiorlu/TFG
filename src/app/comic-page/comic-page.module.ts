import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicPagePageRoutingModule } from './comic-page-routing.module';

import { ComicPagePage } from './comic-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicPagePageRoutingModule
  ],
  declarations: [ComicPagePage]
})
export class ComicPagePageModule {}
