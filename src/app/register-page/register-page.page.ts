import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPage implements OnInit {
  userForm: FormGroup;
  successMsg = '';
  errorMsg = '';

  get email() {
    return this.userForm.get('email');
  }
 
  get password() {
    return this.userForm.get('password');
  }
  get username() {
    return this.userForm.get('username');
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  error_msg = {
    email: [
      {
        type: 'required',
        message: 'Provide email.'
      },
      {
        type: 'pattern',
        message: 'Email is not valid.'
      }
    ],
    password: [
      {
        type: 'required',
        message: 'Password is required.'
      },
      {
        type: 'minlength',
        message: 'Password length should be 8 characters long.'
      }
    ],
    username: [
      {
        type: 'required',
        message: 'Username is required.'
      },
      {
        type: 'string',
        message: 'Username is not valid.'
      }
    ]
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  signUp(value) {
    this.authService.createUser(value)
      .then((response) => {
        this.errorMsg = '';
        this.successMsg = 'New user created.';
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = '';
      });
  }

  goToLogin() {
    this.router.navigate(['/login-page']);
  }

}
