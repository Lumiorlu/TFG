import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaPagePageRoutingModule } from './manga-page-routing.module';

import { MangaPagePage } from './manga-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaPagePageRoutingModule
  ],
  declarations: [MangaPagePage]
})
export class MangaPagePageModule {}
