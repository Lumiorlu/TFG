import { Component } from '@angular/core';
import { Storage,  ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
}