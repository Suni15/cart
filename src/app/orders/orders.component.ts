import { HttpClient } from '@angular/common/http';
 import { Component, OnInit } from '@angular/core';
 import Order from '../Order';
 import Product from '../Product';
import { UtilserviceService } from '../utilservice.service';
 
 @Component({
   selector: 'app-orders',
   templateUrl: './orders.component.html',
   styleUrls: ['./orders.component.css']
 })
 export class OrdersComponent implements OnInit {
 
   // @Input()
  user:String="kaushik";
  orders:any;
 
 
  totalCost:number=0;
    
  constructor(private util:UtilserviceService) { }
 
  ngOnInit(): void {
      this.getOrders(this.user);          
  }
 
 
  public getOrders(user:any):any{
      let s=this.util.getO(user);
      s.subscribe((data)=>this.orders=data)
  }
  
  addTotalCost(cost:number){
     this.totalCost+=cost
  }
  totalCostZero(){
     this.totalCost=0
  }
  placeorder(){

  }
  public removefromcart(orderId:number,productId:number){
    console.log(orderId,productId)
   let s= this.util.removeItemfromcart(orderId,productId);
   s.subscribe(Response=>{
    console.log(Response);
   })
  }
 
 }
 
