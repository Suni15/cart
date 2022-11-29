import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Category from '../Category';

import Product from '../Product';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 

  

  @Input()
  pro:any;
  place:any;
  productList:any;

   @Output()
   proevent=new EventEmitter<any>();

   
  @Output()
  outcount = new EventEmitter<number>();

  @Output()
  outcount1 = new EventEmitter<Product>();

   @Output()
   
   pageevent=new EventEmitter<String>();
   
  constructor(private util: UtilserviceService) { }
 


  ngOnInit(): void {
    console.log(this.pro)
  }

  cout:number=0;
  value:number=0;
  add(product:Product){
     this.cout= this.util.addcart();
     this.outcount.emit(this.cout);
     this.outcount1.emit(product);
     
     let f=  this.util.adval(this.place);

      
  }
  change(e:any){
    this.proevent.emit(e);
    this.pageevent.emit("customer")
    }

    
  
 

     
}

