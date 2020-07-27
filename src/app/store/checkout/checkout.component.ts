import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { RestService } from 'src/app/rest.service';
import { Order } from '../../order.model';
import { phoneValid } from './phone.validator';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public formCheckout: FormGroup;
  public submitted: boolean = false;
  constructor(
    private cartService: CartService,
    private restService: RestService
    ) {
    this.formCheckout = new FormGroup({
      "name": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.required),
      "phone": new FormControl("", [
        Validators.required,
        phoneValid
      ]),
      "adress": new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  public sendOrder(): void {
    console.log(this.formCheckout);
    this.restService.postOrder(new Order(
      false,
      this.cartService.get(),
      this.formCheckout.get("name").value,
      this.formCheckout.get("email").value,
      this.formCheckout.get("phone").value,
      this.formCheckout.get("adress").value,
    )).subscribe(() => {
      this.submitted = true;
      this.cartService.clear();
    });
  }

}
