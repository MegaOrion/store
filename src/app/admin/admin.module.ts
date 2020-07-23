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
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [AuthComponent, MainComponent, ProductsComponent, OrdersComponent, EditComponent, CreateComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'admin/auth', component: AuthComponent},
      {
        path: 'admin/main', component: MainComponent,
        canActivate: [AuthGuard],
        children: [
          {path: '', pathMatch: 'full', redirectTo: 'products'},
          {path: 'orders', component: OrdersComponent},
          {
            path: 'products', component: ProductsComponent, children: [
              {path: '', component: ListComponent},
              {path: 'create', component: CreateComponent},
              {path: 'edit/:id', component: EditComponent}
            ]
          }
        ]
      }
    ])
  ]
})
export class AdminModule { }
