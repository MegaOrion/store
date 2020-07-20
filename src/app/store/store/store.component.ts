import { CartService } from './../cart.service';
import { RestService } from './../../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  private allProducts: any[];
  public visibleProducts: any[];
  public showedProducts: any[] = [];
  public categories: string[] = [];
  public rows: number = 4;
  public activeItem: number = 1;
  constructor(
    private restService: RestService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.restService.getAllProducts().subscribe(
      (res) => {
        this.allProducts = res;
        this.showedProducts = this.allProducts;
        res.map(item => this.categories.push(item.category));
        this.getBtnPage();
        this.showProducts();
      },
      (err) => console.log(err)
    )    
  }

  public showAllProducts(): void {
    this.showedProducts = this.allProducts;
    this.showProducts();
    this.getBtnPage();
  }

  public showProducts(a?): void {
    !a && (a = 0);
    this.visibleProducts = this.showedProducts.slice(a, a + this.rows);
    this.activeItem = 1;    
  }

  public getCategories() {
      return new Set(this.categories)
  }

  public filterCategory(cat): void {
    this.showedProducts = this.allProducts.filter(item => item.category === cat);
    this.showProducts();
    this.getBtnPage();
  }

  public getCountRows(count: number): void {
    this.rows = +count;
    this.showProducts();
    this.getBtnPage();
  }

  public getBtnPage() {
    let arr: number[] = [];
    for (let i = 1; i <= Math.ceil(this.showedProducts.length / this.rows); i++) {
      arr.push(i);
    }
    return arr;
  }

  public showPage(num) {
    let beginPage = num * this.rows - this.rows;
    this.showProducts(beginPage);
    this.activeItem = num;
  }
}
