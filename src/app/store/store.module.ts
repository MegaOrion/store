import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from './cart/cart.service';
import { CartSummaryComponent } from './store/cart-summary/cart-summary.component';



@NgModule({
  declarations: [StoreComponent, CartComponent, CheckoutComponent, CartSummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  providers: [CartService]
})
export class StoreModule { }
