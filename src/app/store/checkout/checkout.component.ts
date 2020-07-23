import { CartService } from './../cart/cart.service';
import { RestService } from './../../rest.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public formCheckout: FormGroup;
  public orderSent: boolean = false;
  public submitted: boolean = false;

  constructor(
    private restService: RestService,
    private cartService: CartService,
  ) {    
    this.formCheckout = new FormGroup({
      "name": new FormControl("Bred", Validators.required),
      "adress": new FormControl("Street49", Validators.required),
      "city": new FormControl("London", Validators.required),
      "state": new FormControl("Wels", Validators.required),
      "zip": new FormControl("0967", [
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      "country": new FormControl("USA", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  public sendOrder(form: NgForm): void {
    this.submitted = true;

    let order = {
      "positions": this.cartService.positions,
      "shipped": false,
      "clientInfo": this.formCheckout.value
    };

    this.restService.setOrder(order).subscribe(() => {
      this.orderSent = true;
      this.submitted = false;      
    });
    this.cartService.positions = [];
  }

}
