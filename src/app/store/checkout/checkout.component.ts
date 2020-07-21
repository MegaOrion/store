import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public formCheckout: FormGroup;
  constructor() {    
    this.formCheckout = new FormGroup({
      "name": new FormControl("", Validators.required),
      "adress": new FormControl("", Validators.required),
      "city": new FormControl("", Validators.required),
      "state": new FormControl("", Validators.required),
      "zip": new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      "country": new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  public sendOrder(): void {
    console.log(this.formCheckout)
  }

}
