import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { StripeService } from '../services/stripe.service';

@Component({
  selector: 'app-pago-page-comics',
  templateUrl: './pago-page-comics.page.html',
  styleUrls: ['./pago-page-comics.page.scss'],
})
export class PagoPagePage{

 @ViewChild('cardInfo') cardInfo: ElementRef;
 mostrarError:string;
 card: any;

 constructor(private ngZone: NgZone, private stripeService: StripeService){ }

 ngAfterViewInit(){
   this.card= elements.create('card');
   this.card.mount(this.cardInfo.nativeElement);
   this.card.addEventListener('change', this.onChange.bind(this));
  
 }

 onChange({error}){
  if(error){
    this.ngZone.run(()=> this.mostrarError=error.message);
  }else{
    this.ngZone.run(()=>this.mostrarError=null);
  }
  
 }

 async onClick(){
   const {token, error} = await stripe.createToken(this.card);
   if(token){
     this.stripeService.charge(100, token.id);
    console.log(token);
   }else{

    this.ngZone.run(()=> this.mostrarError=error.message);

   }
 }

}
