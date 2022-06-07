import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';
import { AuthService } from '../shared/auth.service';
import { Appointment } from './../shared/models/Apointment';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
  bookings: Appointment[] = [];

  constructor(private aptService: AppointmentService, public authService: AuthService) {
    this.authService.user$.subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.aptService.getBookingList().subscribe((res) => {
      this.bookings = res.map((e) => ({
        id: e.payload.doc.id,
        ...(e.payload.doc.data() as Appointment),
      }));
    });
  }

  deleteBooking(id) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id);
    }
  }

  logout() {
    this.authService.signoutUser()
      .then(res => {
       // this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      });
  }
}
