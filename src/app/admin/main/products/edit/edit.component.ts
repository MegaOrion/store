import { FormGroup } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public product: Product;
  public formEdit: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private restService: RestService,
    private router: Router
  ) {
    this.formEdit = new FormGroup({});
  }

  ngOnInit(): void {
    this.restService.getProduct(this.activatedRoute.snapshot.params['id'])
    .subscribe((res) => this.product = res)
  }

  public editProduct(name, category, descr, price) {
    if (true) {
      let body = new Product(
        name,
        descr,
        category,
        +price,
        this.product.id
      )
      this.restService.updateProduct(body).subscribe(
        () => this.router.navigate(['/admin/main/products'])
      )
    }
  }

  public showProduct() {

  }
}
