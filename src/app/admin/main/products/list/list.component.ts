import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private listProducts: Product[];
  public isDelete: boolean = false;
  constructor(
    private router: Router,
    private restService: RestService
  ) {}

  ngOnInit(): void {
    this.restService.getAllProducts().subscribe((res) => {
      this.listProducts = res
    })
  }

  public isDeleteMethod(): void {
    (!this.isDelete) ? this.isDelete = true : this.isDelete = false;
  }

  public removeProduct(id): void {
    let isRemove = confirm('Are You Sure?');
    if (isRemove) {
      this.restService.deleteProduct(id).subscribe();
      this.listProducts = this.listProducts.filter(item => item.id != id);
      this.getListProducts();
    } 
  }

  public routeEditForm(id: number) {
    this.router.navigate(['/admin/main/products/edit', id]);
  }

  public getListProducts() {
    return this.listProducts;
  }
}
