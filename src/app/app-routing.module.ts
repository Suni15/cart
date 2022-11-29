import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CustomerComponent } from './customer/customer.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {path:'customer',component:CustomerComponent},
  {path:'items',component:ItemsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'address',component:AddressComponent},
  {path:'product',component:ProductComponent},
  {path:'itemsOrders',component:ItemsComponent},
  {path:'itemsOrders',component:OrdersComponent},
  {path:'backtocus',component:CustomerComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[CustomerComponent,ItemsComponent,OrdersComponent,AddressComponent,ProductComponent]
