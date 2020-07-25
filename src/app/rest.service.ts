import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}

  public deleteProduct(id): Observable<Product[]> {
    return this.http.delete<Product[]>(`http://localhost:3000/products/${id}`)
  }

  public deleteOrder(id): Observable<Product[]> {
    return this.http.delete<Product[]>(`http://localhost:3000/orders/${id}`)
  }

  public shipOrder(order): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/orders/${order.id}`, order)
  }

  public updateProduct(product): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/products/${product.id}`, product)
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  public getProduct(id) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  public postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>("http://localhost:3000/orders", order);
  }

  public postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:3000/products", product);
  }

  public getAllOrder(): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:3000/orders");
  }
}
