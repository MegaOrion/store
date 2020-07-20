import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { CartService } from './cart/cart.service';



@NgModule({
  declarations: [StoreComponent, CartComponent, CheckoutComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([])
  ],
  providers: [CartService]
})
export class StoreModule { }
