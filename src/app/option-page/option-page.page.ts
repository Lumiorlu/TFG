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

  // si tu declaras cualquier propiedas aqui luego en el template la puedes usar con interpolación {{userTest}}
  // si tiener propiedades basta con acceder con "." en plan userTest.email por ejemplo. Si no sabes todas sus propiedades
  // puedes usar el pipe json para verlo asi => {{userTest | json}}
  userTest: any;

  //creo una subscripcion donde alojare la subscripcion de usuario
  userSubs$: Subscription;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    /********
     * asi te subscribis a un observable para leer su valor y usarlo como quieras
     * lo unico "raro" es que asigno todo a una variable del tipo subscription porque luego me interesa "desuscribirme"
     * en caso de que cambie de pagina para que se rompa la conexion sino por detras continuaria
     */

    this.userSubs$ = this.authService.user$.subscribe((usuario: any) => {
      // eslint-disable-next-line max-len
      // es importante decir que la funcion handler recive un parametro del tipo any sino el compilador cree que no tiene propiedades y llora
      /*******
       * si hay algun cambio en este observable, esta funcion handler se volvera a ejecutar y esta asignacion
       * se volvera a realizar VALE!!!!??
       */
      this.userTest = usuario;
    });
  }

  ngOnDestroy(): void {
    /********
     * si utilizas el metodo de subscribe tienes que desuscribite justo ahi de la siguiente forma
     */
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
        //this.router.navigateByUrl('/home');
      });
    }
  }

  /*******
   * te voy a mostrar todas las formas de consumir un observable
   */
}
