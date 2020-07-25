import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private orderList: Order[] = [];
  private isShipped: boolean = false;
  constructor(
    private restService: RestService
  ) { }

  ngOnInit(): void {
    this.restService.getAllOrder().subscribe(
      (res) => this.orderList = res
    )
  }

  public getOrders() {
    return this.orderList.filter((item) => item.shipped === this.isShipped)
  }

  public showShipped(): void {    
    (!this.isShipped) ? this.isShipped = true : this.isShipped = false;
    this.getOrders();
  }

  public setShipped(order) {
    order.shipped = true;
    this.restService.shipOrder(order).subscribe(
      () => this.getOrders(),
    )
  }

  public removeOrder(id) {
    const bool = confirm("Are You Sure?");
    if (bool) {
      this.orderList = this.orderList.filter(item => item.id != id);
      this.restService.deleteOrder(id).subscribe(
        () => this.getOrders(),
      )
    }    
  }
}
