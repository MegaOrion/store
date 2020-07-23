import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/products/products.component';
import { OrdersComponent } from './main/orders/orders.component';
import { EditComponent } from './main/products/edit/edit.component';
import { CreateComponent } from './main/products/create/create.component';
import { ListComponent } from './main/products/list/list.component';



@NgModule({
  declarations: [AuthComponent, MainComponent, ProductsComponent, OrdersComponent, EditComponent, CreateComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  providers: []
})
export class AdminModule { }
