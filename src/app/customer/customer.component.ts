import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import Product from '../Product';


import { UtilserviceService } from '../utilservice.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

@Input()
userName:string="";

  ar = new Array<number>();
  cn: number = 0;
  constructor(private util: UtilserviceService) { }
  customerFlag:Boolean=true;

  orderFlag:Boolean=false;
  itemFlag:Boolean=false;


  productList:Product[]= [];
  
  count:number=0;


  tempCost:number=0;

  totalCost:any;
  e:any;
 
  category:any;
  flag:boolean=true;
  totalItemNumber:any;
 
  @Output()
  CartList:Product[]=[];

  @Output()
  outcount = new EventEmitter<number>();
  @Output()
  status=new EventEmitter<any>();

  ngOnInit(): void {
  let s=this.util.validateGrocery();
  s.subscribe((data)=>this.productList.push(data))
  console.log(this.productList)
  
  }
  mycart()
 { 
  //this.status.emit(true) 
  this.itemFlag=true;
  this.orderFlag=true;
  this.customerFlag=false;
  }

  addToCart(product:Product){
          this.CartList.push(product)
        console.log(this.CartList)
  }

 
  }

  