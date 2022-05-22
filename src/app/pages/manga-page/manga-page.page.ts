import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-manga-page',
  templateUrl: './manga-page.page.html',
  styleUrls: ['./manga-page.page.scss'],
})
export class MangaPagePage implements OnInit {

<<<<<<< HEAD
  constructor(private menuController: MenuController) { }
=======
  constructor(private menuController:MenuController) { }
>>>>>>> feature/adrian

  ngOnInit() {
  }

  mostrarMenu(){
<<<<<<< HEAD
  this.menuController.open('first');
=======
    this.menuController.open('first');
>>>>>>> feature/adrian
  }

}
