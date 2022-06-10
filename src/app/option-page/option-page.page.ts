import { Component, OnInit } from '@angular/core';
import { User, user } from '@angular/fire/auth';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-option-page',
  templateUrl: './option-page.page.html',
  styleUrls: ['./option-page.page.scss'],
})
export class OptionPagePage implements OnInit {
  userForm: FormGroup;
  successMsg = '';
  errorMsg = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

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

  delete(user) {
    console.log(user);
    if (window.confirm('Do you really want to delete?')) {
      this.authService.
      deleteUser( user.uid )
      .then((res) => {
        //this.router.navigateByUrl('/home');
      });
    }
  }
}
