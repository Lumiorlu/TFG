import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-manga-page',
  templateUrl: './manga-page.page.html',
  styleUrls: ['./manga-page.page.scss'],
})
export class MangaPagePage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
