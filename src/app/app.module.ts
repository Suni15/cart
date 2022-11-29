import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { AddressComponent } from './address/address.component';
import { UtilserviceService } from './utilservice.service';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';





@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddressComponent,
    OrdersComponent,
    ProductComponent,
    CustomerComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
