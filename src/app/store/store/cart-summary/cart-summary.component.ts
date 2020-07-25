import { CartService } from './../../cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  public itemCount: number = 0;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.get().map((item) => {
      this.itemCount += item.quantity;
    });
  }

}
