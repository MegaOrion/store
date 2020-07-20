import { Injectable } from '@angular/core';
import { Product } from '../../product.model';
import { Position } from '../../position.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private positions: Position[] = [];

  constructor(
  ) { }

  public get(): Position[] {
    return this.positions;
  }

  public add(product: Product) {
    const position: Position = this.positions.find((pos) => pos.product.id === product.id);
    if (position) {
      position.quantity++;
    } else {
      this.positions.push(new Position(product, 1));
    }
  }

  public getTotal() {
    let result = 0;

    this.positions.forEach((item) => {
      result += item.getSubTotal();
    });

    return result;
  }

  public removePosition(id): void {
    this.positions = this.positions.filter((item => item.product.id !== id));
  }
}
