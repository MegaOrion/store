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
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'store'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
