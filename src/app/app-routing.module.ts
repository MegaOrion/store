import { EditComponent } from './admin/main/products/edit/edit.component';
import { CreateComponent } from './admin/main/products/create/create.component';
import { ListComponent } from './admin/main/products/list/list.component';
import { ProductsComponent } from './admin/main/products/products.component';
import { OrdersComponent } from './admin/main/orders/orders.component';
import { MainComponent } from './admin/main/main.component';
import { AuthComponent } from './admin/auth/auth.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { CartComponent } from './store/cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'store'},
  {path: 'store', component: StoreComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin/auth', component: AuthComponent},
  {
    path: 'admin/main', component: MainComponent, children: [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
