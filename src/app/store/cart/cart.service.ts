import { Position } from './../../position.model';
import { Injectable } from '@angular/core';
import { Product } from '../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private positions: Position[] = [];

  constructor(
  ) { }

  public hasProducts(): boolean {
    if (this.positions.length === 0) {
      return true;
    } else {
      return false;
    }
  }

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

  public changeQuantity(position: Position, count): void {
    position.quantity = +count;
  }

  public clear(): void {
    this.positions = [];
  }
}
