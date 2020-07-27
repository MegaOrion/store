import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RestService } from 'src/app/rest.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public dialogForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormComponent>,
    private restService: RestService
  ) {
    console.log(this.data);
    console.log(this.dialogRef);
  }

  ngOnInit(): void {
    this.dialogForm = new FormGroup({
      'name': new FormControl(''),
      'description': new FormControl(''),
      'category': new FormControl(''),
      'price': new FormControl('')
    });
    if (this.data.product) {
      this.dialogForm.addControl('id', new FormControl(''));
      this.dialogForm.patchValue(this.data.product);
    }
  }

  public sendProduct() {
    if (this.data.product) {
      this.restService.updateProduct(this.dialogForm.value).subscribe();
      this.close('update', this.dialogForm.value);
    } else {
      this.restService.postProduct(this.dialogForm.value).subscribe((product: Product) => {
        this.close('create', product);
      });
    }
  }

  public close(action: 'create' | 'update' | 'close', product: Product = null) {
    this.dialogRef.close({action, product});
  }
}
