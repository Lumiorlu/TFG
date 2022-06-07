import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoPage } from './demo.page';

const routes: Routes = [
  {
    path: '',
    component: DemoPage,
  },
  {
    path: 'make-appointment',
    loadChildren: () => import('./make-appointment/make-appointment.module').then(m => m.MakeAppointmentPageModule)
  },
  {
    path: 'edit-appointment/:id',
    loadChildren: () => import('./edit-appointment/edit-appointment.module').then(m => m.EditAppointmentPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoPageRoutingModule { }
