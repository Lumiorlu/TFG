import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerserkMangaPagePageRoutingModule } from './berserk-manga-page-routing.module';

import { BerserkMangaPagePage } from './berserk-manga-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerserkMangaPagePageRoutingModule
  ],
  declarations: [BerserkMangaPagePage]
})
export class BerserkMangaPagePageModule {}
