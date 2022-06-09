import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

 user = this.authService.user$;
 constructor(private authService: AuthService) {
  this.authService.user$.subscribe(res => console.log(res));
 }
  
}