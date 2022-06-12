import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, user } from '@angular/fire/auth';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-option-page',
  templateUrl: './option-page.page.html',
  styleUrls: ['./option-page.page.scss'],
})
export class OptionPagePage implements OnInit, OnDestroy {
  userForm: FormGroup;
  successMsg = '';
  errorMsg = '';


  userTest: any;

  //creo una subscripcion donde alojare la subscripcion de usuario
  userSubs$: Subscription;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
   

    this.userSubs$ = this.authService.user$.subscribe((usuario: any) => {
    
      this.userTest = usuario;
    });
  }

  ngOnDestroy(): void {
    
    this.userSubs$.unsubscribe();
  }

  logOut() {
    this.authService
      .signoutUser()
      .then((res) => {
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delete(userTest) {
    console.log(userTest);
    if (window.confirm('Do you really want to delete?')) {
      this.authService.deleteUser(userTest).then((res) => {
        this.router.navigateByUrl('/home');
      });
    }
  }

 
}
