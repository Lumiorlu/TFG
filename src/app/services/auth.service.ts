import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.user$ = this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
            console.log('User from firebase: ', user);
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        }),
        tap(user => {
          localStorage.setItem('user', JSON.stringify(user));
        })
      );
  }

  createUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            console.log(res);
            // this.sendVerificationMail();
            this.setUserData(res.user);
            resolve(res);
          },
          err => reject(err));
    });
  }

  signinUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }

  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            localStorage.removeItem('user');
            console.log('Sign out');
            resolve();
          }).catch(() => {
            reject();
          });
      }
    });
  }

  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      roles: {
        editor: false,
        admin: false,
        reader: true
      }
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}