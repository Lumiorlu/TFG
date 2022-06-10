import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { deleteUser } from 'firebase/auth';
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
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        /********
         * ESTO LEELO A LO ULTIMO
         *
         * si ya leiste todo ahora vas a entender mejor este Observable...
         * me devuelve el usuario authenticado de FIREBASE
         * peroooo lo intercambio por el de la base de datos ya que tiene las propiedades que me interesan
         * es facil identificarlo porque el usuario de FIREBASE tiene el UID con el cual lo guarde en la BD
         * y ahi esta toda la magia de administracion del usuario ya luego lo puede utilizar en todos
         * lo componentes que quieras porque lo obtienes del local storage o para mi gusto es mejor
         * injectar el servicio en el compoenente que desees y subscribirte a la property $user
         */
        if (user) {
          console.log('User from firebase: ', user);
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
      tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  createUser(value) {
    /*******************************
     * value aquí sigue siendo
     * {username, email, password}
     */
    return new Promise<any>((resolve, reject) => {
      this.afAuth
        .createUserWithEmailAndPassword(value.email, value.password) // ahora esto cobra sentido
        .then(
          (res) => {
            console.log(res.user);
            // this.sendVerificationMail();
            /**
             * res.user es un USUARIO DE FIREBASE tiene su propia estructura
             * lo puedes ver aqui: https://firebase.google.com/docs/reference/js/v8/firebase.User
             * luego puedes ver que se lo paso a setUserData pero ahi dentro solo utilizo algunas
             * propiedades. Si tu quieres que a ese metodo llegue tu username SE LO TIENES QUE ENVIAR
             * y ya sabes donde estas en VALUE
             */
            this.setUserData(res.user, value.username);
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

  signinUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password).then(
        (res) => resolve(res),
        (err) => reject(err)
      );
    });
  }

  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth
          .signOut()
          .then(() => {
            localStorage.removeItem('user');
            console.log('Sign out');
            resolve();
          })
          .catch(() => {
            reject();
          });
      }
    });
  }

  deleteUser(user: User) {
    console.log(user.uid);
    return this.afs.doc(`users/${user.uid}`).delete();
  }

  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  setUserData(user: any, username: string) {
    // fijate que el documento se va a guardar con el UID del usuario de FIREBASE para luego identificarlo
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    /**
     * aqui utilizo el tipo de usuario de FIREBASE porque me interesa usar algunas de sus propiedades
     * como displayName, photoURL pero luego puedes añadir tantas propiedades como desees
     * eso si recuerda añadirlas en la interfaz "User" como hice con username y tambien que las propiedades
     * lleguen a travez de los argumentos de la funcion como hice con username. Si vez que son muchas propiedes
     * que vas a añadir podes usar un objeto. En plan setUserData(user:any, properties:any)
     * y luego puedes llamarla asi this.setUserData(res.user, {username:value.username, photo: value.photo, etc})
     * y ese value es el form no te olvides sino cambiale el nombre
     *
     * tambien puedes ver que creo una propiedad uid con el uid del USER DE FIREBASE ese 'id' me va a servir
     * luego para crear relaciones como en una tabla SQL similar a lo que hice en easy-bank con los movements
     */
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      username, // manera abreviada de hacer username: username (que ahora lo recives como parametro)
      roles: {
        editor: false,
        admin: false,
        reader: true,
      },
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
