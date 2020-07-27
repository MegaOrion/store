import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.model';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private restService: RestService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.restService.getAllProducts().subscribe((res) => {
      this.listProducts = res
    })
  }

  public openForm(product?: Product): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '500px',
      data: {product}
    });

    dialogRef.afterClosed().subscribe(
      (res) => {
        switch (res.action) {
          case 'update': {
            this._snackBar.open('Product has been updated', 'X', {duration: 2000});
            this.listProducts.splice(this.listProducts.findIndex((item) => item.id === res.product.id), 1, res.product);
          } break;
          case 'create': {
            this._snackBar.open('Product has been pushed', 'X', {duration: 2000});
            this.listProducts.push(res.product);
          }
        }
        // this.restService.getAllProducts().subscribe();
        // this._snackBar.open('Closed', 'X', {duration: 2000});
        // console.log(res);
      }
    );
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
