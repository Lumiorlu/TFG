import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairytailMangaPagePageRoutingModule } from './fairytail-manga-page-routing.module';

import { FairytailMangaPagePage } from './fairytail-manga-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FairytailMangaPagePageRoutingModule
  ],
  declarations: [FairytailMangaPagePage]
})
export class FairytailMangaPagePageModule {}
