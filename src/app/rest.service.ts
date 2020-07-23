import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  public postOrder(order: Order): Observable<any> {
    console.log(order)
    return this.http.post<any>("http://localhost:3000/orders", order);
  }
}
