import { Product } from './../../../../product.model';
import { RestService } from './../../../../rest.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public formCreate: FormGroup;
  constructor(
    private restService: RestService,
    private router: Router
  ) {
    this.formCreate = new FormGroup({
      "name": new FormControl("", Validators.required),
      "category": new FormControl("", Validators.required),
      "description": new FormControl("", Validators.required),
      "price": new FormControl("", Validators.required),
    })
  }

  ngOnInit(): void {    
  }

  public saveCreate(): void {
    this.restService.postProduct(new Product(
      this.formCreate.get('name').value,
      this.formCreate.get('description').value,
      this.formCreate.get('category').value,
      this.formCreate.get('price').value,
      Date.now()
    )).subscribe(() => {
      this.router.navigate(['/admin/main'])
    })
  }
}
